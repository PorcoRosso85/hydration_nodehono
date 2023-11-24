-- Usersテーブルを削除
DROP TABLE IF EXISTS Users;

-- Tweetsテーブルを削除
DROP TABLE IF EXISTS Tweets;

-- Retweetsテーブルを削除
DROP TABLE IF EXISTS Retweets;

-- Likesテーブルを削除
DROP TABLE IF EXISTS Likes;

-- Followsテーブルを削除
DROP TABLE IF EXISTS Follows;

-- DirectMessagesテーブルを削除
DROP TABLE IF EXISTS DirectMessages;


-- Usersテーブル
CREATE TABLE Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL,
    Email TEXT,
    ProfileText TEXT,
    ProfilePicture TEXT
);

-- Tweetsテーブル
CREATE TABLE Tweets (
    TweetID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER,
    Content TEXT NOT NULL,
    PostDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Retweetsテーブル
CREATE TABLE Retweets (
    RetweetID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER,
    OriginalTweetID INTEGER,
    RetweetDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (OriginalTweetID) REFERENCES Tweets(TweetID)
);

-- Likesテーブル
CREATE TABLE Likes (
    LikeID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER,
    TweetID INTEGER,
    LikeDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (TweetID) REFERENCES Tweets(TweetID)
);

-- Followsテーブル
CREATE TABLE Follows (
    FollowID INTEGER PRIMARY KEY AUTOINCREMENT,
    FollowerID INTEGER,
    FollowingID INTEGER,
    FOREIGN KEY (FollowerID) REFERENCES Users(UserID),
    FOREIGN KEY (FollowingID) REFERENCES Users(UserID)
);

-- DirectMessagesテーブル
CREATE TABLE DirectMessages (
    MessageID INTEGER PRIMARY KEY AUTOINCREMENT,
    SenderID INTEGER,
    ReceiverID INTEGER,
    Content TEXT NOT NULL,
    SendDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);