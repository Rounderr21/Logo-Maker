const inquirer = require('inquirer');
const fs = require('fs');
const convert = require('color-convert');
const shapes = require('./lib/shapes');

const questions = [
    'Please choose Three characters for your Logo.',
    'Please choose a text color for your logo(you may use a RGB number).',
    'What shape would you like your logo to be?',
    'Please choose a background color for your logo(you may use a RGB number).',
]

function writeToFile(fileName, data) {

    //comma here is used to make sure that shapes data is seperate and placed in the right places
    //const hello = shapes(data);

    const SVGContent = 
    `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ///////////////SHAPE THAT IS BEING USED IS GOING TO GO HERE///this spot will have to be generated in the shapes js
  as it need to change based on what type of 
  <${data.shape} cx="150" cy="100" r="80" fill="${data.backcolor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtcolor}">${data.characters}</text>

</svg>`;

    fs.writeFile(fileName, SVGContent, (error) => {
        if (error) {
          console.log('Error has occurred!');
        } else {
          console.log("Generated logo.svg");
        }
      });
}

//validates if the user has exactly three characters.
const validateCharacters = (input) => {
    if (input.length === 3) {
        return true;
    } else {
        return 'Please enter a value with exactly three characters.';
    }
};

const validateColor = (input) => {
    try {
        // Try to convert the input to RGB color using color-convert
        const rgbColor = convert.keyword.rgb(input);

        if (rgbColor) {
            return true; // Input is a valid color
        } else {
            return 'Please enter a valid color.';
        }
    } catch (error) {
        return 'Please enter a valid color.';
    }
    
};


inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'characters',
            validate: validateCharacters

        },
        {
            type: 'input',
            message: questions[1],
            name: 'txtcolor',
            validate: validateColor
        },
        {
            type: 'list',
            name: 'shape',
            message: questions[2],
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: questions[3],
            name: 'backcolor',
            validate: validateColor
        },
    ]).then((response) =>
    {
        console.log(response);

        //this sends the indo from the responses and sends it to the document to write//
        writeToFile('logo.svg', response);
    });