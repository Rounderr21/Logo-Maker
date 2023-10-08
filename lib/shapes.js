
class Triangle {
  constructor(fillColor) {
    this.fillColor = fillColor;
  }

  setColor(fillColor) {
    this.fillColor = fillColor;
  }
    render() {
      // Generate the SVG code for the triangle with the current color.
      return `<polygon points="150, 1 290, 182 20, 182" fill="${this.fillColor}" />`
    }
  }
  
class Circle{
  constructor(fillColor) {
    this.fillColor = fillColor;
  }

  setColor(fillColor) {
    this.fillColor = fillColor;
  }
  render() {
    // Generate the SVG code for the triangle with the current color.
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
  }
}
class Square{
  constructor(fillColor) {
    this.fillColor = fillColor;
  }

  setColor(fillColor) {
    this.fillColor = fillColor;
  }
render() {
    // Generate the SVG code for the triangle with the current color.
    return `<rect x="75" y="35" width="150" height="150" fill="${this.fillColor}" />`
  }
}

function Shapes() {
  // Create instances of each shape and call their render() methods.
  const triangle = new Triangle("red");
  const circle = new Circle("blue");
  const square = new Square("green");

  // Get the SVG code for each shape.
  const triangleSVG = triangle.render();
  const circleSVG = circle.render();
  const squareSVG = square.render();

  // Return the SVG codes as an object.
  return { triangle, circle, square};
}

module.exports = Shapes;