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
    // Initialize SVGContent as an empty string.
    let SVGContent = '';
  
    // This is the data that is exported from the shapes.js
    let { triangle, circle, square } = shapes(data);
    //setting the parameter of set color to the color the user inputs
    triangle.setColor(data.backcolor);
    circle.setColor(data.backcolor);
    square.setColor(data.backcolor);

    // Check the value of data.shape and include the corresponding shape in SVGContent.
    switch (data.shape) {
      case 'triangle':

        SVGContent = `
          <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          ${triangle.render(data)}

          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtcolor}">${data.characters}</text>

          </svg>`;
        break;
  
      case 'circle':

        SVGContent = `
          <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          ${circle.render(data)}

          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtcolor}">${data.characters}</text>

          </svg>`;
        break;
  
      case 'square':

        SVGContent = `
          <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

          ${square.render(data)}

          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtcolor}">${data.characters}</text>

          </svg>`;
        break;
  
      default:
        // Handle the case when data.shape is not recognized.
        console.log('Invalid shape specified in data.');
        return;
    }
  
    // Write the SVGContent to the specified file.
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
        //this sends the indo from the responses and sends it to the document to write//
        writeToFile('logo.svg', response);
    });