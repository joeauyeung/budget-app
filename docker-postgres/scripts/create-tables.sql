CREATE TABLE categories (
    cat_id VARCHAR PRIMARY KEY,
    cat_name VARCHAR
);

CREATE TABLE transactions (
    id VARCHAR PRIMARY KEY,
    date TIMESTAMP,
    amount INT NOT NULL,
    notes VARCHAR,
    cat_id VARCHAR,
    CONSTRAINT fk_category
        FOREIGN KEY(cat_id)
            REFERENCES categories(cat_id)
);