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
    image TEXT,
    qty INTEGER,
    cartQty INTEGER
);

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    user_email TEXT,
    user_name TEXT,
    password TEXT
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

INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Jasmines Roast','1', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg', 45, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Mulans Bean', '2', 'Premium coffe cultivated in the best farms in...', 35, 24, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Pike-Place.jpg', 50, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Tam Coffee', '3', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Fall-Blend.jpg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Auroras Cure', '4', 'Premium coffe cultivated in the best farms in...', 15, 9, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Peppermint-Mocha.jpg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Mirabel Espesso', '5', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Vanilla-Bean.jpg', 144, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Ariels Coffee', '6', 'Premium coffe cultivated in the best farms in...', 35, 24, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Never-Settle.jpg', 90, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Tianas  Bean', '7', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Onxy-Blend.jpg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Cinderella Ride', '8', 'Premium coffe cultivated in the best farms in...', 15, 9, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Costa-Rica.jpg', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Snow White Coffee', '9', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Battlecreek.jpg', 99, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Elsas  Latte', '10', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Brooklyn-Partners.jpg', 110, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Small Planes', '11', 'Premium coffe cultivated in the best farms in...', 25, 15, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Small-Planes.jpg', 115, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Feast latte', '12','Premium coffe cultivated in the best farms in...', 20, 12, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Feast.jpg', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Alma Coffee', '13','Premium coffe cultivated in the best farms in...', 20, 17, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Alma.jpg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('AM Blend', '14','Premium coffe cultivated in the best farms in...', 50, 42, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Coffee-AM.jpg', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Folgers', '15', 'Premium coffe cultivated in the best farms in...', 20, 10, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/French-Vanilla.jpg', 110, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('American Coffee', '16', 'Premium coffe cultivated in the best farms in...', 20, 16, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Coffee-USA.jpg', 125, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Colombian Coffee', '17','Premium coffe cultivated in the best farms in...', 20, 15, True, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Folgers-Colombian.jpg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Espresso Italiano', '18', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Italiano.jpg', 135, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Buffalo Blend', '19','Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Buffalo.jpg', 60, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Louisiane Coffee', '20', 'Premium coffe cultivated in the best farms in...', 20, 15, False, False, 'https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Louisiane.jpg', 90, 1);


INSERT INTO users (user_email,user_name,password) VALUES('user@gmail.com','username1','password');
INSERT INTO users (user_email,user_name,password) VALUES('user@gmail.com','username2','password');
INSERT INTO users (user_email,user_name,password) VALUES('user@gmail.com','test','password');
INSERT INTO users (user_email,user_name,password) VALUES('bob@gmail.com','bob','12345');


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