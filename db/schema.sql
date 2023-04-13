DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR (30) NOT NULL

);

CREATE TABLE role (
id INT,
title VARCHAR (30),
salary DECIMAL NOT NULL,
department_id INT NOT NULL

); 

CREATE TABLE employee (
    id INT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);
