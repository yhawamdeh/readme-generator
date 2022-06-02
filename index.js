// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    
    return inquirer.prompt ([
        { 
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation intrcutions.'
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, (err) => {
        if (err) throw err;
        console.log('Successfully generated/wrote over README.md in the dist folder');
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(value => {
        const data = generateMarkdown(value);
        writeToFile('README.md', data);
  })
}

// Function call to initialize app
init();
