const inquirer = require('inquirer')
const fs = require('fs')

inquirer 
.prompt ( [ 
    {
        type: "input",
        name: "username",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "What is your location?"
    },
    {
        type: "input",
        name: "bio",
        message: "What is your bio?"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "What is your LinkedIn?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub?"
    },
] )

.then((response) => {
    console.log(response)
});

// console.log(fs);