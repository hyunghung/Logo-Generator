// Defaults for the shapes
class Shape {
    constructor() {
      this.color = "black"; // Default color if not explicitly set
    }
    setColor(color) {
      this.color = color;
    }
  }
// Triangle 
class Triangle extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
      </svg>`;
    }
  }
// Circle
class Circle extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.color}" />
      </svg>`;
    }
  }
// Square   
class Square extends Shape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="100" y="50" width="100" height="100" fill="${this.color}" />
      </svg>`;
    }
  }
  //Exports everything 
  module.exports = { Triangle, Circle, Square };