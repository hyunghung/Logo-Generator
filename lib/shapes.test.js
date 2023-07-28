const {Triangle} = require('./shapes');
describe('Triangle Class Tests', () => {
    test('render method with custom color', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,18 244,182 56,182" fill="blue" />
        <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" fill="Pink" font-size="55">
        UGH
      </text>
      </svg>`
      );
    });
  });

  const {Square} = require('./shapes');
  describe('Square Class Tests', () => {
    test('render method with custom color', () => {
      const shape = new Square();
      shape.setColor('pink');
      expect(shape.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="75" y="45" width="150" height="100" fill="pink" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="Pink" font-size="60">
        UGH
      </text>
      </svg>`
      );
    });
  });

  
  const {Circle} = require('./shapes');
  describe('Square Class Tests', () => {
    test('render method with custom color', () => {
      const shape = new Circle();
      shape.setColor('orange');
      expect(shape.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="orange" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="Pink" font-size="60">
        UGH
      </text>
      </svg>`
      );
    });
  });
