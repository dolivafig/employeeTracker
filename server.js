const express = require('express');
const mysql = require('mysql2');
// const sequelize = require('./config/connection');
const inquirer = require ('inquirer');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },console.log('connected to employee_db database')
);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));});

    function checklist (){
    inquirer.prompt({
        type: 'checkbox',
        message: 'Choose an option below',
        name: 'selection',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }).then((response) => {
        let option = response.selection;
        console.log(option);
        if (option === "View all departments"){
            console.log('View all departments')
            db.query('SELECT * FROM department', function (err, results) {
            if(err){
                console.log(err)
            }
            console.log(results);
        }); 
        checklist();

        } else if(option === "View all roles"){
            console.log('View all roles')
            db.query('SELECT title FROM role', function (err, results) {
                if(err){
                    console.log(err)
                }
            console.log(results);
        });
            checklist();

        } else if(option === "View all employees"){
            console.log('intern')
            checklist();

        } else if(option === "View all employees"){
            console.log('intern')
            checklist();

        } else if (option === "Add a role"){
            console.log('Add a role')
            checklist();

        } else if (option === "Add an employee"){
            console.log('Add an employee')
            checklist();

        } else if (option === "Update an employee role"){
            console.log('Update an employee role')
            checklist();

        } else if(option === "Exit"){
            return option;
        } 
        } )};

        checklist();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
