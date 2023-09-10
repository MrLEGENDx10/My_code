-- Active: 1694119625501@@127.0.0.1@3306@lco_films
SHOW TABLES;
DESCRIBE film;

ALTER TABLE film  DROP length;
ALTER Table film ADD length SMALLINT NOT NULL ;
ALTER TABLE film MODIFY length int UNSIGNED;

SHOW TABLES;
SELECT DISTINCT district FROM address;

SELECT COUNT(*) FROM address;

SELECT COUNT(DISTINCT district )FROM address;

SELECT * FROM film;

SELECT * FROM film WHERE title LIKE 'A%';

SELECT MAX(rental_duration) FROM film;

SELECT * FROM film WHERE rental_duration=7;

SELECT AVG(rental_duration) FROM film;
SELECT MIN(rental_duration) FROM film;
SELECT SUM(rental_duration) FROM film;
