-- Usersテーブルにテストデータを挿入
INSERT INTO Users (UserName, Password, Email, ProfileText, ProfilePicture) VALUES 
('user1', 'password1', 'user1@example.com', 'Hello, I am user1', 'user1pic.jpg'),
('user2', 'password2', 'user2@example.com', 'Hello, I am user2', 'user2pic.jpg'),
('user3', 'password3', 'user3@example.com', 'Hello, I am user3', 'user3pic.jpg');

-- Tweetsテーブルにテストデータを挿入
INSERT INTO Tweets (UserID, Content) VALUES 
(1, 'This is the first tweet by user1'),
(2, 'This is a tweet by user2'),
(3, 'Hello Twitter! This is user3');

-- Retweetsテーブルにテストデータを挿入
INSERT INTO Retweets (UserID, OriginalTweetID) VALUES 
(2, 1),
(3, 1);

-- Likesテーブルにテストデータを挿入
INSERT INTO Likes (UserID, TweetID) VALUES 
(1, 2),
(1, 3),
(2, 3),
(3, 2);

-- Followsテーブルにテストデータを挿入
INSERT INTO Follows (FollowerID, FollowingID) VALUES 
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(3, 1);

-- DirectMessagesテーブルにテストデータを挿入
INSERT INTO DirectMessages (SenderID, ReceiverID, Content) VALUES 
(1, 2, 'Hello, how are you?'),
(2, 1, 'I am fine, thanks!'),
(3, 1, 'Hi, nice to meet you!'),
(1, 3, 'Nice to meet you too!');
