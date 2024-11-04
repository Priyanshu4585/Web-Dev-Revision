SQL CRUD operations - create , read , update , delete.

<!-- create table -->

CREATE TABLE table_name(
    column1 datatype,
    column2 datatype,
    column3 datatype
)

<!-- insert into table -->

<!-- if inserting specific values -->

INSERT INTO table_name (column1,column2,column3,column4)
VALUES (value1,value2,value3,value4)

<!-- if fillig all the vavlues need not mention the columns -->

INSERT INTO table_name
VALUES (value1,value2,value3,value4)

<!-- to read from table -->

<!-- select everything -->

SELECT * FROM table_name

<!-- select specifc columns -->

SELECT column1, column2 FROM table_name;

<!-- select using specific id or condition -->

SELECT * FROM table_name
WHERE id=1

<!-- update table -->
UPDATE table_name
SET column = value
WHERE Conditoion;

<!-- alter table to add or remove columns or rows -->

ALTER TABLE table_name
ADD column datatype

<!-- delete items  from table -->
DELETE FROM table_name
WHERE condition;


<!-- SQL realationship  creating a table that joins two tables -->

CREATE TABLE orders(
    id int NOT NULL,
    order_number int,
    customer_id int,
    product_id int,
    PRIMARY KEY(id),
    FOREIGN KEY (custimer_id) REFERENCE customers(id),
    FOREIGN KEY (product_id) REFERENCE products(id)
)


<!-- how to perform innerjoin -->
SELECT orders.order_number , products.name , customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id
INNER JOIN products ON orders.product_id = products.id
