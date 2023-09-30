const inquirer = require('inquirer');

const questions = [
    'Please choose Three character for your Logo.',
    'Please choose a text color for your logo.(you may use a RGB number)',
    'What shape would you like your logo to be?',
    'Please choose a background color for your logo.(you may use a RGB number)',
]


inquirer
    .prompt([
        {
            type: 'list',
            message: questions[0],
            name: 'characters',

        },
        {
            type: 'input',
            message: questions[1],
            name: 'color',
        },
        {
            type: 'list',
            message: questions[2],
            name: 'shape',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'color',
        },
    ]).then((response) =>
    {
    console.log(response);
    });

    //once all questions are answered it muse create a 'logo.svg'
    //output text should be "Generated logo.svg" this shoule be printed to the command line
    //when we open the logo.svg we are shown a logo that matches the description of the what we have recived.