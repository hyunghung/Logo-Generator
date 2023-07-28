// Defaults for the shapes Default black background 
class Shape {
    constructor() {
      this.textColor = "Pink"; // Default color if not explicitly set
      this.text = "UGH"; // Default color if not explicitly set
    }
    setColor(color) {
      this.color = color;
    }
  }
// Triangle 
class Triangle extends Shape {
    render(text, textColor) {
      text = text || this.text; // Use default text if text is not provided
      textColor = textColor || this.textColor; // Default color if not explicitly set
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
        <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="55">
        ${text}
      </text>
      </svg>`;
    }
  }
// Circle
class Circle extends Shape {
    render(text, textColor) {
      text = text || this.text; // Use default text if text is not provided
      textColor = textColor || this.textColor; // Default color if not explicitly set
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">
        ${text}
      </text>
      </svg>`;
    }
  }
// Square   
class Square extends Shape {
    render(text, textColor) {
      text = text || this.text; // Use default text if text is not provided
      textColor = textColor || this.textColor; // Default color if not explicitly set
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="75" y="45" width="150" height="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">
        ${text}
      </text>
      </svg>`;
    }
  }
  //Exports everything 
  module.exports = { Triangle, Circle, Square };