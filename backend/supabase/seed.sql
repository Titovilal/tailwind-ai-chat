INSERT INTO Users (email, name, avatar) VALUES
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

INSERT INTO Messages (content, is_ai) VALUES
('Hello, how are you?', false),
('I am doing well, thank you.', true),
('What are your plans for the weekend?', false),
('I am going hiking with friends.', true),
('That sounds like fun!', false),
('Yes, I am looking forward to it.', true),
('Have you seen the latest movie?', false),
('No, I haven''t had the chance yet.', true),
('We should go watch it together.', false),
('That would be great!', true);
;

INSERT INTO Chats (user_id, created_at) VALUES
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
