//Importing shapes.js into test.js to test setColor method.
const Shapes = require('../lib/shapes.js');

//using test function to set a parameter of "blue" to setColor and making sure it comes out good for class Triangle.
test('checking to see if setColor is correct for triangle.', () => {
  const shapes = new Shapes();
  shapes.triangle.setColor("blue");
  expect(shapes.triangle.render()).toEqual('<polygon points="150, 1 290, 182 20, 182" fill="blue" />');
});
//using test function to set a parameter of "green" to setColor and making sure it comes out good for class Circle.
test('checking to see if setColor is correct for circle.', () => {
    const shapes = new Shapes();
    shapes.circle.setColor("green");
    expect(shapes.circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
//using test function to set a parameter of "red" to setColor and making sure it comes out good for class Square.
  test('checking to see if setColor is correct for triangle.', () => {
    const shapes = new Shapes();
    shapes.square.setColor("red");
    expect(shapes.square.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="red" />');
  });