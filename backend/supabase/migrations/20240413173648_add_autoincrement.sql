CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255)
);

CREATE TABLE Messages (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  is_ai BOOLEAN NOT NULL
);

CREATE TABLE Chats (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES Users(id), 
  created_at DATE NOT NULL
);

CREATE TYPE status_type AS ENUM('like', 'dislike', 'reviewed');

CREATE TABLE QA (
  id SERIAL PRIMARY KEY,
  chat_id INT NOT NULL,  
  FOREIGN KEY (chat_id) REFERENCES Chats(id),  
  question_id INT NOT NULL,  
  FOREIGN KEY (question_id) REFERENCES Messages(id), 
  answer_id INT NOT NULL,  
  FOREIGN KEY (answer_id) REFERENCES Messages(id),  
  created_at DATE NOT NULL,
  status status_type NOT NULL,
  groundtruth TEXT
);
