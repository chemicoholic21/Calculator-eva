// Select all <button> elements on the page
const buttons = document.querySelectorAll('button');

// Select the element with the class 'screen'
const screenDisplay = document.querySelector('.screen');

// Initialize an empty array to store the calculation
let calculation = [];

// Declare a variable to store the accumulative calculation
let accumulativeCalculation;

// Log the buttons to the console for debugging purposes
console.log(buttons);

// Define a function called calculate that takes a button element as a parameter
function calculate(button) {
    // Get the text content of the clicked button
    const value = button.textContent;

    // Check if the button clicked is "CLEAR"
    if (value === "CLEAR") {
        // Clear the calculation array and reset the screen display
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === "=") {
        // If the button clicked is "=", evaluate the accumulative calculation
        console.log(accumulativeCalculation);
        screenDisplay.textContent = eval(accumulativeCalculation);
    } else {
        // If the button clicked is a number or operator, add it to the calculation array
        calculation.push(value);
        // Join the elements of the calculation array into a string to form the accumulative calculation
        accumulativeCalculation = calculation.join('');
        // Update the screen display with the accumulative calculation
        screenDisplay.textContent = accumulativeCalculation;
    }
}

// Attach a click event listener to each button element
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));

