CREATE TABLE Account (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255)
);

CREATE TABLE UserMessage (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL
);

CREATE TABLE AIMessage (
  id SERIAL PRIMARY KEY,
  explanation TEXT NOT NULL,
  code TEXT NOT NULL
);

CREATE TABLE Chat (
  id SERIAL PRIMARY KEY,
  account_id INT NOT NULL, 
  FOREIGN KEY (account_id) REFERENCES Account(id), 
  created_at DATE NOT NULL
);

CREATE TYPE status_type AS ENUM('like', 'dislike', 'reviewed');

CREATE TABLE QA (
  id SERIAL PRIMARY KEY,
  chat_id INT NOT NULL,  
  FOREIGN KEY (chat_id) REFERENCES Chat(id),  
  question_id INT NOT NULL,  
  FOREIGN KEY (question_id) REFERENCES UserMessage(id), 
  answer_id INT NOT NULL,  
  FOREIGN KEY (answer_id) REFERENCES AIMessage(id),  
  created_at DATE NOT NULL,
  status status_type NOT NULL,
  groundtruth TEXT
);
