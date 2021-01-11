CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    admin INTEGER,
    favorite_movies TEXT
);

CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    summary TEXT,
    genre INTEGER,
    producor TEXT,
    release INTEGER,
    image TEXT,
    rating INTEGER,
    review TEXT
);