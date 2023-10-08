# Logo-Maker
Video link to application is use:
https://drive.google.com/file/d/1zKBSRjMvfBNUkJ6cV67UGbJ12uRfxm1c/view

# Project Description
This Project is designed to generate a simple logo for my projects, based on user input. Challenges that I faced are trying to eport the correct data over from shapes.js and the testing functions of shapes.test.js.

When you open the project, open the terminal in VS code. placed "node index.js" into the terminal and hit enter. It will present you with these questiosn:
 Please choose Three characters for your Logo.
 Please choose a text color for your logo(you may use a RGB number).
 What shape would you like your logo to be?
 Please choose a background color for your logo(you may use a RGB number).

After answering these questions based on your answers it will create a 'logo.svg'. This file if opened in the browser will be displayed based on your input.

# Javascript File
Started with no starter code. Started with index.js file and created prompts to ask the user the questions. once they are asked send the data to the writeFile function. Started on shapes.js file and created classes for all shapes, exported shapes data to index.js. once shapes.js was completed I then moved back to index.js and used the imported data from shapes.js and used it to make the SVGContent to make the 'logo.svg'. once the logo is created and running appropriately, created test file for shapes. ensured that whatever color was picked the test passed to make sure the function of setColor is working correctly. Also inserted comments to breakdown the document further to make it easier to read.

# Github
Pushed out Javascript, and README when finishing any coding edits, as to ensure I could go back at anytime to earlier designs if need be.

Project is located at this URL: https://github.com/Rounderr21/Logo-Maker

Screenshot of the Project:
![alt text](./lib/images/Screenshot%20(114).png)
![alt text](./lib/images/Screenshot%20(115).png)
