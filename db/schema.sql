CREATE DATABASE eatdaburger2;

USE eatdaburger2;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)

);