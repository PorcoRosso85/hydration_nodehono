CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    contact_info VARCHAR(100),
    profile_info TEXT
);

CREATE TABLE user_hierarchy (
    hierarchy_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    upline_id INT,
    downline_id INT,
    level INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE sales_records (
    sales_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    sale_date DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE customer_info (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100),
    purchase_history TEXT
);

CREATE TABLE commission_calculation (
    commission_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_sales DECIMAL(10, 2),
    commission_amount DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE product_inventory (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    stock_quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES product_inventory(product_id)
);

CREATE TABLE communication_records (
    communication_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);

CREATE TABLE training_materials (
    material_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    provided_date DATETIME
);

CREATE TABLE reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    report_type VARCHAR(50),
    generated_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE marketing_activities (
    activity_id INT AUTO_INCREMENT PRIMARY KEY,
    campaign_name VARCHAR(100),
    start_date DATETIME,
    end_date DATETIME,
    effectiveness TEXT
);

CREATE TABLE security_settings (
    setting_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    security_level INT,
    last_updated DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);