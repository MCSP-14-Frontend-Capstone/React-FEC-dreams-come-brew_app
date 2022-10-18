DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS purchase;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS contact;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name TEXT,
    category TEXT,
    description TEXT,
    original_price INTEGER,
    sale_price INTEGER,
    on_sale BOOLEAN,
    popular_item BOOLEAN,
    image BYTEA
);

CREATE TABLE purchase(
id SERIAL,
user_name TEXT,
product_name TEXT, 
order_quantity INTEGER,
order_total MONEY,
fees MONEY,
taxes MONEY,
grand_total MONEY
);

CREATE TABLE users(
    id SERIAL,
    user_name VARCHAR,
    password VARCHAR,
    confirm_password TEXT
);

CREATE TABLE contact(
    id SERIAL, 
    names TEXT,
    email VARCHAR,
    description TEXT
);