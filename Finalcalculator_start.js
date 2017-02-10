
/**
* These are the Global variables
*/
var current_input = "0";
var memory = "0";
var operator = 0;
var start_mode = "Radian";

/**
 * Helper function for displaying the current input
 * @param {string} 'screen'  id of element to display the number
 * @throws
*/
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
/**
 * Adds a digit to the current input
 * @param {boolean} addDigit Adds a digit in the calc
 * @return {number} Returns the result
 * @throws
*/
function addDigit(dig) {

    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
/**
 * Adds a decimal to the current input
 * @param {boolean} addDecimal adds a decimal to number
 * @returns {number} Returns the result
 * @throws
*/
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears the current input
 * @param {number}allClear Clears all memory
 * @returns {number} Retursn and display the results
 * @throws
 */
function allClear() {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    console.log("memory is cleared");
}
/**
 * Stores the last operatr used for the input
 * @param {boolean}storeoperator Stores the last operator pushed for multiply, divide, add, or subtract.
 * @returns {number} returns and displays the reslut of the input
 * @throws
 */
function storeOperator(op) {
    if (op.indexOf("") > -1) {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = current_input; //store value
    current_input = "0";
    displayCurrentInput();
}
/**
 * Calculate using operator, the memory and what is current
 * @param {boolean} calculate Finds the memory of what is inputted
 * @retunrs {string} Returns the result
 * @throws
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2) {
        current_input = eval(memory) / eval(current_input);
        if (current_input == Infinity) {
            current_input = "ERROR: Divide by zero";
        }
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the current input
 * @author Jorie Allen
 * @param {number} changeSign changes the sign
 * @returns {number}  Reurns and displays the result
 * @throws
 */
function changeSign() {
    current_input = (current_input * -1);
    displayCurrentInput();
}
/**
 * This functions clears the inputted numbers
 * @author Johnie lee Fain & Jorie Allen
 * @param {number}clearCurrent Clears the current input
 * @return {number} Returns and siplay the results
 * @throws
 */
function clearCurrent() {
    current_input = "0";
    displayCurrentInput();
    console.log("calc is cleared");
}
/**
 * Change the current input to a percentage
 * @author Jorie Allan
 * @param {number} percantage  Makes the number into a percantage
 * @returns {number} Returns and siplays the result
 * @throws
*/
function percentage() {
    current_input = (current_input / 100);
    displayCurrentInput();
}
/**
 * Calculate the factorial of the current input
 * @author Johnie lee Fain
 * @param {number} factorial of the number
 * @returns {number} Returnsd and displays the results
 * @throws
*/
function factorial() {
    var result = 1;
    for (i = current_input; i > 0 ; i--) {
        result = result * i;
        console.log(result);
    }
    current_input = result;
    displayCurrentInput();
}
/**
 * Calculate the square of the current input
 * @author Andrea Martinez
 * @param {number}sqaure Finds the square of the number inputted.
 * @throws
*/
function square() {
    current_input = current_input*current_input
    current_input = Math.sqrt(Math.pow((current_input),2));
    displayCurrentInput();
}
/**
 * @author Andrea Martinez
 * @param {number} sqaureRoot Calculates the square root of the input
 * @throws
 */
function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}
/**
 * Calculate the inverse of the current input
 * @author Andrea Martinez
 * @param {number}inverse Changes number to its inverse
 * @returns {number} Returns and displays the result
 * @throws
 */
function inverse() {
    current_input = 1/current_input;
    displayCurrentInput();
}
/**
 * Calculate the trig identity of a given input
 * @author Johnie lee Fain
 * @param {boolean} trig Calulates the trig  idnetity of a number
 * @returns {number} Returns and displays thge result
 * @throws

*/
function trig(sign) {
    if(start_mode == "Degree"){
        current_input = current_input * (Math.PI/180)
    }
    if(sign == "sin"){
        current_input = Math.sin(current_input);
    }
    else if(sign == "cos"){
        current_input = Math.cos(current_input);
    }
    else if(sign == "tan"){
        current_input = Math.tan(current_input);
    }
    displayCurrentInput();

}
/**
 * Switches the mode of the calculator
 * @author Johnie lee Fain & Andrea Martinez
 * @param {boolean}switcher Switch to degree and Radian
 * @return {number} Returns the result
 * @throws
 */
function switcher() {
    if(start_mode == "Radian") {
        start_mode = "Degree";
        console.log("changed to degree");
    }
    else if(start_mode == "Degree"){
        start_mode = "Radian";
        console.log("changed to radian");
    }
}
