INSERT INTO Account (email, name, avatar) VALUES
('user1@example.com', 'John Doe', 'avatar1.jpg'),
('user2@example.com', 'Jane Smith', 'avatar2.jpg'),
('user3@example.com', 'Alice Johnson', 'avatar3.jpg'),
('user4@example.com', 'Bob Williams', 'avatar4.jpg'),
('user5@example.com', 'Emily Brown', 'avatar5.jpg'),
('user6@example.com', 'Michael Lee', 'avatar6.jpg'),
('user7@example.com', 'Sarah Wilson', 'avatar7.jpg'),
('user8@example.com', 'David Martinez', 'avatar8.jpg'),
('user9@example.com', 'Jennifer Taylor', 'avatar9.jpg'),
('user10@example.com', 'Daniel Anderson', 'avatar10.jpg');

INSERT INTO UserMessage (question) VALUES
('Hello, how are you?'),
('I am doing well, thank you.'),
('What are your plans for the weekend?'),
('I am going hiking with friends.'),
('That sounds like fun!'),
('Yes, I am looking forward to it.'),
('Have you seen the latest movie?'),
('No, I haven''t had the chance yet.'),
('We should go watch it together.'),
('That would be great!');
;

INSERT INTO AIMessage (explanation, code) VALUES
('Hello, how are you?', '<div className="bg-red-500 p-4 rounded"></div>'),
('I am doing well, thank you.', '<div className="bg-green-500 p-4 rounded"></div>'),
('What are your plans for the weekend?', '<div className="bg-blue-500 p-4 rounded"></div>'),
('I am going hiking with friends.', '<div className="bg-yellow-500 p-4 rounded"></div>'),
('That sounds like fun!', '<div className="bg-purple-500 p-4 rounded"></div>'),
('Yes, I am looking forward to it.', '<div className="bg-pink-500 p-4 rounded"></div>'),
('Have you seen the latest movie?', '<div className="bg-gray-500 p-4 rounded"></div>'),
('No, I haven''t had the chance yet.', '<div className="bg-indigo-500 p-4 rounded"></div>'),
('We should go watch it together.', '<div className="bg-teal-500 p-4 rounded"></div>'),
('That would be great!', '<div className="bg-orange-500 p-4 rounded"></div>');

INSERT INTO Chat (account_id, created_at) VALUES
(1, '2024-04-13'),
(2, '2024-04-12'),
(3, '2024-04-11'),
(4, '2024-04-10'),
(5, '2024-04-09'),
(6, '2024-04-08'),
(7, '2024-04-07'),
(8, '2024-04-06'),
(9, '2024-04-05'),
(10, '2024-04-04');
