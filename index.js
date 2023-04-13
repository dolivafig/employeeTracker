const inquirer = require ('inquirer');
const fs = require('fs');

function checklist (){
    inquirer.prompt({
        type: 'checkbox',
        message: 'Choose an option to view',
        name: 'selection',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }).then((response) => {
        let option = response.selection;
        if (option == "View all departments"){
            console.log('View all departments')
            checklist();

        } else if(option == "View all roles"){
            console.log('View all roles')
            checklist();
        } else if(option == "View all employees"){
            console.log('intern')
            checklist();

        } else if(option == "View all employees"){
            console.log('intern')
            checklist();

        } else if (option == "Add a role"){
            console.log('Add a role')
            checklist();

        } else if (option == "Add an employee"){
            console.log('Add an employee')
            checklist();

        } else if (option == "Update an employee role"){
            console.log('Update an employee role')
            checklist();

        } else {
            return option;
        } }

        )};
        
        checklist();
//     function qManager() {
//     inquirer.prompt(mgrQ).then((response) => {
//         const mgr = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
//         test.push(mgr.getTemplate());
//         checklist();
//         return test;
//     })
// }