INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 150000, 2),
("Account Manager", 160000, 3),
("Accountant", 120000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 200000, 4);

SELECT * FROM role;

INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, 1),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, 3),
("Kevin", "Tupil", 2, 3),
("Kunal", "Singh", 3, 5),
("Malia", "Brown", 3, 5),
("Sarah", "Thomas", 4, 7),
("Tom", "Allen", 4, 7); 

SELECT * FROM employee;


