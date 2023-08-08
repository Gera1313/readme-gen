// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        label: "title", 
    }, 
    {
        type: "input",
        message: "Please briefly describe your project: ",
        label: "description",
    },
    {
        type: "input",
        message: "What files and/or dependecies will you install?",
        label: "installation",
    },
    {
        type: "input",
        message: "How will this project be used?", 
        label: "usage",
    },
    {
        type: "input",
        message: "What is the license for this project?",
        label: "License",
        choices: ['MIT', "none"],
    },
    {
        type: "input",
        message: "How to contribute to this project?", 
        label: "Contributions"
    },
    {
        type: "input",
        message: "Please provide examples on how to run tests (if any): ",
        label: "tests",
    },
    {
        type: "input",
        message: "Please enter your email address: ",
        label: "Questions",
    },
    {
        type: "input",
        message: "Please enter your GitHub profile link: ",
        label: "Questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate, (err) =>
    err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Your README file is generating!")
        writeToFile("./README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();