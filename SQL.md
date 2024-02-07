CREATE DATABASE record_company;
USE record_company;
CREATE TABLE  test (
 test_column INT 
 );
ALTER TABLE test
ADD another_column VARCHAR(255);
DROP TABLE test;
CREATE TABLE bands (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE albums (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
release_year INT,
band_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (band_id) REFERENCES bands(id)
);


INSERT  INTO bands (name)
VALUES ('Rockstar'), ('Jab we met'), ('ZNMD');

SELECT * FROM bands;

