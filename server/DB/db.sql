DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS purchase;
DROP TABLE IF EXISTS contact;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    target TEXT,
    name TEXT,
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

INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Jasmines Roast','1', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Mulans Bean', '2', 'Premium coffe cultivated in the best farms in...', 35, 24, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Tam Coffee', '3', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Auroras Cure', '4', 'Premium coffe cultivated in the best farms in...', 15, 9, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Mirabel Espesso', '5', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Ariels Coffee', '6', 'Premium coffe cultivated in the best farms in...', 35, 24, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Tianas  Bean', '7', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Cinderella Ride', '8', 'Premium coffe cultivated in the best farms in...', 15, 9, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Snow White Coffee', '9', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Elsas  Latte', '10', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Small Planes', '11', 'Premium coffe cultivated in the best farms in...', 25, 15, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Feast latte', '12','Premium coffe cultivated in the best farms in...', 20, 12, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Alma Coffee', '13','Premium coffe cultivated in the best farms in...', 20, 17, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('AM Blend', '14','Premium coffe cultivated in the best farms in...', 50, 42, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Folgers', '15', 'Premium coffe cultivated in the best farms in...', 20, 10, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('American Coffee', '16', 'Premium coffe cultivated in the best farms in...', 20, 16, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Colombian Coffee', '17','Premium coffe cultivated in the best farms in...', 20, 15, True, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Espresso Italiano', '18', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Buffalo Blend', '19','Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image) VALUES('Louisiane Coffee', '20', 'Premium coffe cultivated in the best farms in...', 20, 15, False, False, null);


INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username2','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username3','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username4','password', 'password');


INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 1, 1);
INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 2, 2);
INSERT INTO purchase (user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES('test1', 'test', 1, 2, 1, 2, 1, 2, 2);


INSERT INTO contact (names, email, description) VALUES('test1', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test2', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test3', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test4', 'test', 'test');

-- test query
-- Select users.users_id, product_name, users.user_name FROM purchase JOIN users ON purchase.users_id = users.users_id;


-- test query
-- Select users.users_id, product_name, users.user_name FROM purchase JOIN users ON purchase.users_id = users.users_id WHERE users.users_id = 1;