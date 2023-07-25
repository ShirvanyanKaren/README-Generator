// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    { 
        type: "input",
        message: "What is your Project Title?",
        name: "title",
    },
    { 
        type: "input",
        message: "Please write a description:",
        name: "description",
    },
    { 
        type: "input",
        message: "Please enter installation instructions:",
        name: "installation",
    },
    { 
        type: "input",
        message: "Please enter usage information:",
        name: "usage",
    },
    { 
        type: "input",
        message: "Please enter contributions guidelines:",
        name: "contributions",
    },
    { 
        type: "list",
        message: "Please choose a license:",
        choices: ["MIT", "Apache", "GPL", "BSD", "LGPL", "ODbl", "Perl", "SIL", "PDDL","WTFPL", "zLib"],
        name: "license",
    },
    { 
        type: "input",
        message: "Please enter your github usernamo:",
        name: "github",
    },
    { 
        type: "input",
        message: "Please enter your email:",
        name: "email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, response){
    const title = response.title;
    const description = response.description;
    const installation = response.installation;
    const usage = response.usage;
    const contributions = response.contributions;
    const license = response.license;
    const email = response.email;
    const github = response.github;
    const badges = {
        "MIT": `https://img.shields.io/badge/license-MIT-yellow.svg`,
        "GPL": `https://img.shields.io/badge/license-GPL-blue.svg`,
        "ODbl": `https://img.shields.io/badge/License-ODbL-brightgreen.svg`,
        "PDDL": `https://img.shields.io/badge/License-PDDL-brightgreen.svg`,
        "Apache": `https://img.shields.io/badge/license-Apache-blue.svg`,
        "Perl": `https://img.shields.io/badge/License-Perl-0298c3.svg`,
        "SIL": `https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg`,
        "BSD": `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`,
        "LGPL": `https://img.shields.io/badge/license-LGPL-blue.svg`,
        "WTFPL": `https://img.shields.io/badge/License-WTFPL-brightgreen.svg`,
        "zLib": `https://img.shields.io/badge/License-Zlib-lightgrey.svg`,

      }

    const README = 
    `# Title
${title}

![badge](${badges[license]})

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions) 

## Installation

${installation}

## Usage 
        
${usage}
        
## Contributions 
        
${contributions}
        
## License 
        
${license}

## Questions 

Check out my other projects on my [my Github](https://github.com/${github})
For any additional questions or concerns, please email me at ${email}`







    fs.writeFile(`${title}-README.md`, README, (err) => {
        if (err) throw err;
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (
        questions
    )
    // .then((response) => {

        
    // })
    .then ((response) => {
        console.log(response);
        writeToFile("read.me", response)
       
    })
}



// Function call to initialize app
init();
