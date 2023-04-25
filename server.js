const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('connected to employee_db database')
);

function checklist() {
    inquirer.prompt({
        type: 'checkbox',
        message: 'Choose an option below',
        name: 'selection',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }).then((response) => {
        let option = response.selection;
        console.log(option);
        if (option == "View all departments") {
            console.log('View all departments')
            db.query('SELECT id, name FROM department', function (err, results) {
                console.table(results);
            })
            checklist();


        } else if (option == "View all roles") {
            console.log('View all roles')
            // job title, role id, the department that role belongs to, and the salary for that role
            db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id', function (err, results) {
                console.table(results);
            })
            checklist();

        } else if (option == "View all employees") {
            console.log('View all employees')
            // employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
            db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary FROM employee JOIN role ON employee.manager_id = role.id JOIN department ON role.department_id = department.id', function (err, results) {
                console.table(results);
            })
            checklist();

        } else if (option == "Add a department") {
            console.log('Add a department')
            addDep();

        } else if (option == "Add a role") {
            console.log('Add a role')
            addRole();


        } else if (option == "Add an employee") {
            console.log('Add an employee')
            addEmployee();


        } else if (option == "Update an employee role") {
            console.log('Update an employee role')
            update();


        } else if (option == "Exit") {
            console.log(`Have a nice day`);
            process.exit(0);
        }

    })
};

checklist();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function addDep() {
    try {
        const department = await inquirer.prompt({
            type: 'input',
            message: 'Name of new department?',
            name: 'newDep',
        });
        if (department.newDep) {
            db.query('INSERT INTO department (name)' + "VALUES (?)", department.newDep, (err, result) => {
                if (err) {
                    console.log(err)
                };
                console.log("Successfully added to db")
            }
            )
        };
        checklist();
    } catch (err) {
        console.log(err);
    }
};

async function addRole() {
    const role = await inquirer.prompt([
        {
            type: 'input',
            message: 'Role title?',
            name: 'roleTitle',
        },
        {
            type: 'input',
            message: 'Role salary?',
            name: 'roleSalary',
        },
        {
            type: 'input',
            message: 'Under what department (type: department id) does this role fall into?',
            name: 'roleDep',
        }
    ]);

    db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role.roleTitle, role.roleSalary, role.roleDep], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully added to db");
        }
        checklist();
    });
};

async function addEmployee() {
    const employee = await inquirer.prompt([
        {
            type: 'input',
            message: 'first name of employee?',
            name: 'first',
        },
        {
            type: 'input',
            message: 'last name of employee?',
            name: 'last',
        },
        {
            type: 'input',
            message: 'What is the department of the employee? (dep #)',
            name: 'dep',
        },
        {
            type: 'input',
            message: 'Employee manager ID?',
            name: 'mId',
        },
    ]);

        db.query(
            'INSERT INTO employee (first_name, last_name, dep, manager_id) VALUES (?,?,?,?)',
            [employee.first, employee.last, employee.dep, employee.mId],
            (err, result) => {
                if (err) {
                    console.log(err);
                };
                console.log('Successfully added to db');
                console.log(employee);
                checklist();
            }
        );
}

async function update() {
    const employ = await inquirer.prompt([{
        type: 'input',
        message: 'Employee you want to upate(type id number)?',
        name: 'empId',
    },
    {
        type: 'input',
        message: 'Employee new role id?',
        name: 'newRole',
    },
    ]);

    if (employ.empId && employ.newRole) {
        db.query(
            'UPDATE employee SET dep = ? WHERE id = ?',
            [employ.newRole, employ.empId],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully updated db");
                    console.log(employ);
                    checklist();
                }
            }
        );
    }
};