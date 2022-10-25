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
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Mulans Bean', '2', 'Premium coffe cultivated in the best farms in...', 35, 24, False, False, 'https://target.scene7.com/is/image/Target/GUEST_89e5fa7a-e3f7-4a3e-ac8f-dfae8aab0d26?wid=800&hei=800&qlt=80&fmt=pjpeg', 50, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Tam Coffee', '3', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, 'https://target.scene7.com/is/image/Target/GUEST_674588db-6522-4b1b-8b80-9b518e2ac3db?wid=800&hei=800&qlt=80&fmt=pjpeg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Auroras Cure', '4', 'Premium coffe cultivated in the best farms in...', 15, 9, True, False, 'https://target.scene7.com/is/image/Target/GUEST_e6c981e7-d504-4b8a-8c76-877d2eaf17e1?wid=800&hei=800&qlt=80&fmt=pjpeg', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Mirabel Espesso', '5', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://target.scene7.com/is/image/Target/GUEST_4f402918-f7e3-4d9e-8166-f3b6f918787a?wid=800&hei=800&qlt=80&fmt=pjpeg', 144, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Ariels Coffee', '6', 'Premium coffe cultivated in the best farms in...', 35, 24, True, False, 'https://images.unsplash.com/photo-1584736286279-5d85d32ba79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 90, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Tianas  Bean', '7', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, 'https://images.unsplash.com/photo-1592250819999-c00fed586048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Cinderella Ride', '8', 'Premium coffe cultivated in the best farms in...', 15, 9, False, False, 'https://images.unsplash.com/photo-1642437271884-fe1d3393eef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Snow White Coffee', '9', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, 'https://images.unsplash.com/photo-1611854778863-0c4d1bae5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 99, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Elsas  Latte', '10', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, 'https://images.unsplash.com/photo-1612213807634-ab190d1255e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxjb2ZmZWUlMjBiYWdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 110, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Small Planes', '11', 'Premium coffe cultivated in the best farms in...', 25, 15, False, False, 'https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660236778/solidus/mkqkebu7rjor7kkc67jj.png', 115, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Feast latte', '12','Premium coffe cultivated in the best farms in...', 20, 12, False, False, 'https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660256122/solidus/oz8dktlpdj3xbahhkdlz.png', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Alma Coffee', '13','Premium coffe cultivated in the best farms in...', 20, 17, False, False, 'https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660250858/solidus/rqj2vy4wuxvsyxgoguvn.png', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('AM Blend', '14','Premium coffe cultivated in the best farms in...', 50, 42, False, False, 'https://cdn.shopify.com/s/files/1/0069/6467/4613/products/EspressoCoffeeSampler_416x416.jpg?v=1629175455', 120, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Folgers', '15', 'Premium coffe cultivated in the best farms in...', 20, 10, False, False, 'https://cdn.shopify.com/s/files/1/0063/6154/6850/products/folgers-cappuccino-pp-french-vanilla_large_ee38d3b1-8ac6-4dc2-b6b7-bda2ee152b8b_480x.jpg?v=1643817713', 110, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('American Coffee', '16', 'Premium coffe cultivated in the best farms in...', 20, 16, False, False, 'https://cdn.shopify.com/s/files/1/0063/6154/6850/products/Coffee.USA.Classic.American.Coffee.Medium.Roast_600x.jpg?v=1650900264', 125, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Colombian Coffee', '17','Premium coffe cultivated in the best farms in...', 20, 15, True, False, 'https://cdn.shopify.com/s/files/1/0063/6154/6850/products/folgers-100-percent-colombian-coffee-frac-pack-grounds_35062f54-6b80-4b33-b5a5-47eb94f3f7d2_600x.jpg?v=1605269364', 130, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Espresso Italiano', '18', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://cdn.shopify.com/s/files/1/0063/6154/6850/products/EspressoItaliano_1_034f26f2-411c-4147-b9b1-87e6608d1afc_600x.jpg?v=1646173664', 135, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Buffalo Blend', '19','Premium coffe cultivated in the best farms in...', 25, 19, False, False, 'https://cdn.shopify.com/s/files/1/0063/6154/6850/products/NACSAMPLEBUFFALOBLEND_6e065301-2a3c-46b0-99f9-371ccd386a6c_600x.png?v=1646173915', 60, 1);
INSERT INTO products (name, target, description, original_price, sale_price, on_sale, popular_item, image, qty, cartQty) VALUES('Louisiane Coffee', '20', 'Premium coffe cultivated in the best farms in...', 20, 15, False, False, '//cdn.shopify.com/s/files/1/0056/4562/products/Lousiane_12oz_Coffee_web1.jpg?v=1599249490', 90, 1);


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