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