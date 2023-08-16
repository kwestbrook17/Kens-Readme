// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your project installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license',
        choices: ['MIT License',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'BSD 3-Clause License',
            'Mozilla Public License 2.0',
            'GNU Affero General Public License v3.0',
            'The Unlicense',
            'No License was used for this project']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter your contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your test guidelines:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
