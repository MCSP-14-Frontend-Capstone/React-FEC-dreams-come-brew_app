DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS purchase;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS contact;

CREATE TABLE products(
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

CREATE TABLE purchase(
    purchase_id SERIAL PRIMARY KEY,
    user_name TEXT,
    product_name TEXT, 
    order_quantity INTEGER,
    order_total MONEY,
    fees MONEY,
    taxes MONEY,
    grand_total MONEY
);

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    user_name VARCHAR,
    password VARCHAR,
    confirm_password TEXT
);

CREATE TABLE contact(
    contact_id SERIAL PRIMARY KEY, 
    names TEXT,
    email VARCHAR,
    description TEXT
);

INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Jasmine's Roast", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Mulan's Bean", 'coffee', 'Premium coffe cultivated in the best farms in...', 35, 24, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Tam Coffee", 'coffee', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Aurora's Cure",  'coffee', 'Premium coffe cultivated in the best farms in...', 15, 9, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Mirabel Espesso", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Ariel's Coffee", 'coffee', 'Premium coffe cultivated in the best farms in...', 35, 24, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Tiana's  Bean", 'coffee', 'Premium coffe cultivated in the best farms in...', 55, 49, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Cinderella Ride",  'coffee', 'Premium coffe cultivated in the best farms in...', 15, 9, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Snow White Coffee", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Elsa's  Latte", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 19, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Small Planes", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 15, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Feast latte",  'coffee', 'Premium coffe cultivated in the best farms in...', 20, 12, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Alma Coffee", 'coffee', 'Premium coffe cultivated in the best farms in...', 20, 17, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("AM Blend", 'coffee', 'Premium coffe cultivated in the best farms in...', 50, 42, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Folgers", 'coffee', 'Premium coffe cultivated in the best farms in...', 20, 10, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("American Coffee",  'coffee', 'Premium coffe cultivated in the best farms in...', 20, 16, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Colombian Coffee", 'coffee', 'Premium coffe cultivated in the best farms in...', 20, 15, True, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Espresso Italiano", 'coffee', 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Buffalo Blend", 'Premium coffe cultivated in the best farms in...', 25, 19, False, False, null);
INSERT INTO products (name, category, description, original_price, sale_price, on_sale, popular_item, image) VALUES("Louisiane Coffee",  'coffee', 'Premium coffe cultivated in the best farms in...', 20, 15, False, False, null);

INSERT INTO purchase (user_name,product_name,order_quantity,order_total,fees,taxes,grand_total) VALUES('test1', 'test', 1, 2,1,2,1);
INSERT INTO purchase (user_name,product_name,order_quantity,order_total,fees,taxes,grand_total) VALUES('test2', 'test', 1, 2,1,2,1);
INSERT INTO purchase (user_name,product_name,order_quantity,order_total,fees,taxes,grand_total) VALUES('test3', 'test', 1, 2,1,2,1);
INSERT INTO purchase (user_name,product_name,order_quantity,order_total,fees,taxes,grand_total) VALUES('test4', 'test', 1, 2,1,2,1);

INSERT INTO users (user_name,password,confirm_password) VALUES('username1','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username2','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username3','password', 'password');
INSERT INTO users (user_name,password,confirm_password) VALUES('username4','password', 'password');

INSERT INTO contact (names, email, description) VALUES('test1', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test2', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test3', 'test', 'test');
INSERT INTO contact (names, email, description) VALUES('test4', 'test', 'test');