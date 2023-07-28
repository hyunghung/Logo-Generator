const inquirer = require("inquirer"); //For the inquirer --> Used to prompt the user questions easily 
const fs = require("fs"); //For the file system
const { Triangle, Circle, Square } = require("./lib/shapes.js"); // Importing the shapes 

// Questions being prompted to the user 
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter in a 3 letter text: "
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter in a color of the text: "
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape: ",
        choices: ["circle" , "triangle", "square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter in a color of the shape: "
    },
    
]

// Function to create the SVG content
function createSVGContent(text, textColor, shape, shapeColor) {
    const shapeInstance = createShapeInstance(shape); //Calls on the function to create the shape 
    shapeInstance.setColor(shapeColor); // Setting the color 
    return shapeInstance.render(text, textColor); // Renders the text and color together within the shape 
  }
  
  // Function to create the shape instance based on user input
function createShapeInstance(shape) {
    switch (shape) { // switch is the same as if else statement --> Cases are the possible choices that the user can pick, else if they pick nothing
        // It will default to "invalid shape chosen"
        case "circle":
        return new Circle();
        case "triangle":
        return new Triangle();
        case "square":
            return new Square();
        default:
            throw new Error("Invalid shape chosen.");
    }
}

//After the logo has been made, it will make a logo.svg name
function createSVGFile(svgContent) {
    fs.writeFileSync('logo.svg', svgContent); // Makes a logo.svg file once completed 
}

  
// Main function that will run everything once called 
async function main() {
    try {
        // Prompt the user for input
        const answers = await inquirer.prompt(questions);
        // stores the user inputs into answers 
        const { text, textColor, shape, shapeColor } = answers;
        const svgContent = createSVGContent(text, textColor, shape, shapeColor); // Applying that to the function 
        createSVGFile(svgContent); // making the file 
  
        console.log("Generated logo.svg"); // If made correctly it will log "Generated logo.svg"
        }   catch (error) { // else it will catch an error 
        console.error("Error:", error);
        }
}
  
main();


  // //Use shapes from "basic shapes" from Mozilla website --> Assuming that you dont use shape.js this works 
// const shapes = {
//     circle: `
//       <circle cx="150" cy="100" r="50" fill="{shapeColor}" />
//     `,
//     triangle: `
//       <polygon points="150,10 250,190 50,190" fill="{shapeColor}" />
//     `,
//     square: `
//       <rect x="100" y="50" width="100" height="100" fill="{shapeColor}" />
//     `,
//   };
  
//   function createSVGContent(text, textColor, shape, shapeColor) {
//     const shapeCode = shapes[shape] || ""; // Get the corresponding shape code from the shapes object
//   // XML format for the SVG
//     return `
//       <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> // Pixel size
//         ${shapeCode.replace(/{shapeColor}/g, shapeColor)} // the shape code above + color of the shape from user input 
//         <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
//           ${text}
//         </text>
//       </svg>
//     `;
//   }
