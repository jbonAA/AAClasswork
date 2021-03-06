class Response < ApplicationRecord

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_id,
    class_name: :AnswerChoice


end