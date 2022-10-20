DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS purchase;
DROP TABLE IF EXISTS contact;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT,
    category TEXT,
    description TEXT,
    original_price INTEGER,
    sale_price INTEGER,
    on_sale BOOLEAN,
    popular_item BOOLEAN,
    image BYTEA
);

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    user_name TEXT,
    password TEXT,
    confirm_password TEXT
);

CREATE TABLE purchase (
    purchase_id SERIAL PRIMARY KEY,
    user_name TEXT,
    product_name TEXT, 
    order_quantity INTEGER,
    order_total MONEY,
    fees MONEY,
    taxes MONEY,
    grand_total MONEY,
users_id SERIAL,
 FOREIGN KEY(users_id) REFERENCES users(users_id),
product_id SERIAL,
    FOREIGN KEY(product_id) REFERENCES products (product_id)
);


CREATE TABLE contact (
    contact_id SERIAL PRIMARY KEY, 
    names TEXT,
    email VARCHAR,
    description TEXT
);

INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES('test1', 'test', 'test', 1, 1, False, True, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES('test2', 'test', 'test', 1, 1, False, True, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES('test3', 'test', 'test', 1, 1, False, True, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES('test4', 'test', 'test', 1, 1, False, True, null);


INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');


INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 1, 1);
INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 2, 2);
INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 2, 2);


INSERT INTO contact (names, email, description) VALUES('test1', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test2', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test3', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test4', 'test', 'test');