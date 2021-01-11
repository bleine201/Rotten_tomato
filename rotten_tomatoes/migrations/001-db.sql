-- Up
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    admin INTEGER,
    favorite_movies TEXT
);

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    summary TEXT,
    genre INTEGER,
    producer TEXT,
    release INTEGER,
    image TEXT,
    rating INTEGER,
    review TEXT

);

-- Down
DROP TABLE users;
DROP TABLE movies;