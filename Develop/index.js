const fs = require('fs');
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown.js')


// arrow function for array of questions for user
const promptQuestions = () => {
    return inquirer.prompt([
        {
            //Title of repo
            type: "input",
            message: "What is the title of your repo?(Required)",
            name: "title",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("What is the title of your repo?");
                    return false;
                }
            }
        },
        // Brief repo description
        {
            type: "input",
            message: " Provide brief repo description",
            name: "description"
        },
        //Repo installation
        {
            type: "input",
            message: "What are the steps required to install your project? (Required) ",
            name: "installation",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("What are the steps required to install your project?");
                    return false;
                }
            }
        },
        //Usage
        {
            type: "input",
            message: "Provide the link to the repo (Required)",
            name: "usage",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Provide the Link to the Repo");
                    return false;
                }
            }            
        },
        //Technologies 
        {
            type: "checkbox",
            name: "technologies",
            message: "Which Technologies were incorprated in this repo? (Required)",
            choices: ["Node", "HTML", "CSS", "NMP"],
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Which of the following are included in this repo?");
                    return false;
                }
            }
        },
        //Licensing questions
        {
            type: "checkbox",
            name: "licenses",
            message: "What is the license of your Repo",
            choices: ["MIT", "Apache 2.0", "JavaScript", "GPL", "None"],
        },
        //   Questions - GitHub Username
        {
            type: "input",
            name: "userName",
            message: "What is your GitHub username? (Required)",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("What is your GitHub username?");
                    return false;
                }
            }
        },
        //     User GitHub email
        {
            message: "What is your email Address?",
            name: "userEmail",
        },
    ])
};

promptQuestions()
    .then(readmeQuestions => {
        const mdPage = generateMarkdown(readmeQuestions);

        fs.writeFile('./dist/readme.md', mdPage, err => {
            if (err) throw new Error(err);
            console.log("Page created! Check out readme in Dist directory to see it!")
        });
    });
