INSERT INTO department (id, name)
VALUES 
(01, "Sales"),
(02, "Engineering"),
(03, "Finance"),
(04, "Legal");

SELECT * FROM department;

INSERT INTO employee( id, first_name, last_name, role_id, manager_id)
VALUES
(01, "John", "Doe", 1, NULL),
(02, "Mike", "Chan", 2, 1),
(03, "Ashley", "Rodriguez", 3, NULL),
(04, "Kevin", "Tupil", 2, 3),
(05, "Kunal", "Singh", 3, NULL),
(06, "Malia", "Brown", 3, 5),
(07, "Sarah", "Thomas", 4, NULL),
(08, "Tom", "Allen", 4, 7);

SELECT * FROM employee;

INSERT INTO role (id, title, salary, department_id)
VALUES 
(01, "Sales Lead", 100000, 1),
(02, "Salesperson", 80000, 1),
(03, "Lead Engineer", 150000, 2),
(04, "Software Engineer", 150000, 2),
(05, "Account Manager", 160000, 3),
(06, "Accountant", 120000, 3),
(07, "Legal Team Lead", 250000, 4),
(08, "Lawyer", 200000, 4);

SELECT * FROM role;

