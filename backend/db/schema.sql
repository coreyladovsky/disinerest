
DROP DATABASE IF EXISTS disinterest;
CREATE DATABASE disinterest;

\c disinterest;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  age INT,
  first_name VARCHAR,
  last_name VARCHAR,
  image_url VARCHAR,
  location VARCHAR,
  gender VARCHAR,
  password_digest VARCHAR
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  description VARCHAR,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  title VARCHAR NOT NULL,
  link_url VARCHAR NOT NULL,
  image_url VARCHAR NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  original_poster_id INT REFERENCES users(id) ON DELETE SET NULL,
  board_id INT REFERENCES boards(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
