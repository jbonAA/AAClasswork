PRAGMA foreign_keys = ON;


DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE question_follows(
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  body TEXT,
  parent_id INTEGER,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
  FOREIGN KEY(parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes(
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);


INSERT INTO
  users
VALUES
  (1, 'Billy', 'Bob'),
  (2, 'Paul', 'Green'),
  (3, 'Bill', 'Red')
;

INSERT INTO
  questions
VALUES
  (1, 'Good Food', 'Where should I eat?', 1),
  (2, 'Have Pen', 'Do you have my pen?', 1),
  (3, 'Is Cold', 'Is it cold today?', 1)
;

INSERT INTO
  question_follows
VALUES
  (1,
  (SELECT id
  FROM users
  WHERE last_name = 'Bob'),
  (SELECT id
  FROM questions
  WHERE questions.title = 'Good Food')),
  (2,
  (SELECT id
  FROM users
  WHERE last_name = 'Red'),
  (SELECT id
  FROM questions
  WHERE questions.title = 'Have Pen')),
  (3,
  (SELECT id
  FROM users
  WHERE last_name = 'Green'),
  (SELECT id
  FROM questions
  WHERE questions.title = 'Is Cold'))
;

INSERT INTO
  replies
VALUES
  (1,
  (SELECT id
  FROM users
  WHERE last_name = 'Bob'),
  (SELECT id
  FROM questions
  WHERE questions.title = 'Good Food'),
  'Around the corner',
  NULL),

  (2,
  (SELECT id
  FROM users
  WHERE last_name = 'Red'),
  (SELECT id
  FROM questions
  WHERE questions.title = 'Good Food'),
  'No I don''t',
  1);


INSERT INTO 
  question_likes
VALUES
  (1, 2),
  (3, 2),
  (2, 3)
;

