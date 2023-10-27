CREATE TABLE todo_db(
    task_id SERIAL PRIMARY KEY,
    task VARCHAR(30) NOT NULL, 
    category VARCHAR(30) NOT NULL, 
    created_at TIMESTAMPTZ NULL,
  	expires_at TIMESTAMPTZ
);