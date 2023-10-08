//class Triangle used for exporting color and demensions for svg file
class Triangle {
  constructor(fillColor) {
    this.fillColor = fillColor;
  }
//function used to put the color into the svg content
  setColor(fillColor) {
    this.fillColor = fillColor;
  }
  //function to put the demensions into the svg content
    render() {
      // Generate the SVG code for the triangle with the current color.
      return `<polygon points="150, 1 290, 182 20, 182" fill="${this.fillColor}" />`
    }
  }
  //class Circle used for exporting color and demensions for svg file
class Circle{
  constructor(fillColor) {
    this.fillColor = fillColor;
  }
//function used to put the color into the svg content
  setColor(fillColor) {
    this.fillColor = fillColor;
  }
  //function to put the demensions into the svg content
  render() {
    // Generate the SVG code for the triangle with the current color.
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
  }
}
//class Square used for exporting color and demensions for svg file
class Square{
  constructor(fillColor) {
    this.fillColor = fillColor;
  }
  //function used to put the color into the svg content
  setColor(fillColor) {
    this.fillColor = fillColor;
  }
  //function to put the demensions into the svg content
render() {
    // Generate the SVG code for the triangle with the current color.
    return `<rect x="75" y="35" width="150" height="150" fill="${this.fillColor}" />`
  }
}

//created Shapes function to get all shapes into one catergory to export.
function Shapes() {
  // Create instances of each shape and call their render() methods.
  const triangle = new Triangle("red");
  const circle = new Circle("blue");
  const square = new Square("green");

  // Return the SVG codes as an object.
  return { triangle, circle, square};
}
//exports the shapes function and data.
module.exports = Shapes;