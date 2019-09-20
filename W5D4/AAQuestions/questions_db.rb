require 'sqlite3'
require 'singleton'

class QuestionsDBConnection < SQLite3::Database 
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Questions 
  attr_accessor :id, :title, :body, :user_id

  def self.all
    data = QuestionsDBConnection.instance.execute("SELECT * FROM questions")
    data.map { |datum| Questions.new(datum) }
  end

  def self.find_by_id(id)
    rows = (QuestionsDBConnection.instance.execute("SELECT * FROM questions WHERE questions.id = id"))
    Questions.new(rows.first)
  end

  def self.find_by_author(user_id)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT * FROM questions WHERE questions.user_id = ?
    SQL
    rows.map { |datum| Questions.new(datum) }
  end

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

  def self.most_liked(n)
    QuestionLike.most_liked_questions(n)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @user_id = options['user_id']
  end

  def create
    raise '#{self} already in database' if self.id
    QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @user_id)
      INSERT INTO
        questions (title, body, user_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise '#{self} not in database' unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @user_id, @id)
      UPDATE
        questions
      SET
        title = ?, body = ?, user_id = ?
      WHERE
        id = ?    
    SQL
  end

  def author
    row = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
  end

  def replies
    Reply.find_by_question_id(self.id)
  end

  def followers 
    QuestionFollow.followers_for_question_id(self.id)
  end

  def likers
    QuestionLike.likers_for_question_id(self.id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(self.id)
  end

  def save
    if id.nil?
      create
    else
      update
    end
  end

end

class User 
  attr_accessor :id, :first_name, :last_name
  def self.find_by_name(first_name, last_name)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, first_name, last_name)
      SELECT
        *
      FROM
        users
      WHERE
        first_name = ?
        AND last_name = ?
    SQL
    rows.map { |datum| User.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
  end

  def authored_questions
    Questions.find_by_author_id(self.id)
  end

  def authored_replies
    Reply.find_by_user_id(self.id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(self.id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(self.id)
  end

  def average_karma
    count = 0
    allq = QuestionLike.num_questions(self.id)
    liked_questions.each do |question|
      count += question.num_likes
    end
    count / allq
  end

end


class Reply
  attr_accessor :id, :user_id, :question_id, :body, :parent_id
  
  def self.find_by_user_id(user_id)
    rows = (QuestionsDBConnection.instance.execute("SELECT * FROM replies WHERE user_id = ?"))
    rows.map { |datum| Reply.new(datum) }
  end

  def self.find_by_question_id(question_id)
    rows = (QuestionsDBConnection.instance.execute("SELECT * FROM replies WHERE question_id = ?"))
    rows.map { |datum| Reply.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
    @body = options['body']
    @parent_id = options['parent_id']
  end

  def author
    row = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
  end

  def question
    row = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
  end

  def parent_reply
    row = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
        AND parent_id IS NULL
    SQL
  end

  def child_replies
    row = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
        AND parent_id IS NOT NULL
    SQL
  end   
end

class QuestionFollow

  def self.followers_for_question_id(question_id)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN
        question_follows ON question_follows.user_id = users.id
      WHERE
        question_follows.question_id = ?
    SQL
    rows.map { |datum| User.new(datum) }
  end

  def self.followed_questions_for_user_id(user_id)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      JOIN
        question_follows ON question_follows.question_id = questions.id
      WHERE
        question_follows.user_id = ?
    SQL
    rows.map { |datum| Questions.new(datum) }
  end

  def self.most_followed_questions(n)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, n)
      SELECT
        *
      FROM
        question_follows
      GROUP BY
        question_id
      ORDER BY
        COUNT(question_id)
      LIMIT ?
    SQL
  end

end

class QuestionLike
  def self.likers_for_question_id(question_id)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN
        question_likes ON question_likes.user_id = users.id
      WHERE
        question_likes.question_id = ?
    SQL

    rows.map { |datum| User.new(datum) }
  end

  def self.num_likes_for_question_id(question_id)
    count = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        COUNT(question_id)
      FROM
        question_likes
      WHERE
        question_id = ?
    SQL
    count.first.values.first
  end

  def self.liked_questions_for_user_id(user_id)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
    SELECT
      *
    FROM
      questions
    JOIN
      question_likes ON question_likes.question_id = questions.id
    WHERE
      questions.user_id = ?
  SQL
  rows.map { |datum| Questions.new(datum) }
  end

  def self.most_liked_questions(n)
    rows = QuestionsDBConnection.instance.execute(<<-SQL, n)
      SELECT
        *
      FROM
        questions
      JOIN
        question_likes ON question_likes.question_id = questions.id
      GROUP BY
        question_likes.question_id
      LIMIT ?
    SQL
    rows.map { |datum| Questions.new(datum) }
  end

  def self.num_questions(user_id)
    count = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        COUNT(id)
      FROM
        questions
      WHERE
        user_id = ?
    SQL
    count.first.values.first
  end



end