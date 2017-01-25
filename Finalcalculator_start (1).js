/* TODO: 1. Add these new functions: percentage, inverse, factorial, square and square root
2. Bootstrap it to make it pretty! 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
4. Fix divide by 0 errors! 5. Add the ability to clear the current input, but not memory.
6. Challenge: Add trig functions (in radian AND degree mode) 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
8. Super Challenge: Add ( and ) buttons that work! 9. Super Duper Challenge: Add exponents (negatives too!)
*/


/**
* These are the Global variables
*/

var currentInput = "0";
var memory = "0";
var operator = 0;
var startMode = "Radian";

/**
Helper function for displaying the current input
@param {function} displayCurrentInput Displays the number inputted
@param {string} 'screen'   id of element to display the number
*/
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
/** 
Adds a digit to the current input
@param {function} addDigit Adds a digit in the calc
@return {number} Returns the result
*/ 
function addDigit(dig) {
    
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}
/**
 *Adds a decimal to the current input 
 *@param {function} addDecimal ads a decimal to number
 *@returns {number} Returns the result
*/
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
// Clears memory.
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    console.log("memory is cleared");
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
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
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
        if (currentInput == Infinity) {
            currentInput = "ERROR: Divide by zero";
        }
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 *  Changes the sign of the current input
 *  @author Jorie Allen 
 * @param {function} changeSign changes the sign
 * @returns {number}  Reurns and displays the result                  
 */
function changeSign() {
    currentInput = (currentInput * -1);
    displayCurrentInput();
}
/**
 */
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
    console.log("calc is cleared");
}
/**
 * Change the current input to a percentage
 * @author Jorie Allan
 * @param {function} percantage  Makes the number into a percantage
 * @returns {number} Returns and siplays the result
*/
function percentage() {
    currentInput = (currentInput / 100);
    displayCurrentInput();
}
/**
 * Calculate the factorial of the current input
 * @param {function} factorial 
*/
function factorial() {
    var result = 1;
    for (i = currentInput; i > 0 ; i--) {
        result = result * i;
        console.log(result);
    }
    currentInput = result;
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    currentInput = currentInput*currentInput
    currentInput = Math.sqrt(Math.pow((currentInput),2));
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}
/**
 * Calculate the inverse of the current input
 * @author Andrea Martinez
 * @param {function}inverse Changes number to its inverse
 * @returns {number} Returns and displays the result
 */
function inverse() {
    currentInput = 1/currentInput;
    displayCurrentInput();
}
/**
 *Calculate the trig identity of a given input
 * @author Johnie lee Fain
 *@param {function} trig Calulates the trig  idnetity of a number
 *@returns {number} Returns and silapys thge result

*/
function trig(sign) {
    if(startMode == "Degree"){
        currentInput = currentInput * (Math.PI/180)
    }
    if(sign == "sin"){
        currentInput = Math.sin(currentInput);
    }
    else if(sign == "cos"){
        currentInput = Math.cos(currentInput);
    }
    else if(sign == "tan"){
        currentInput = Math.tan(currentInput);
    }
    displayCurrentInput();
    
}
//Switch Calculator mode
function switcher() {
    if(startMode == "Radian"){
        startMode = "Degree";
        console.log("changed to degree");
    }
    else if(startMode == "Degree"){
        startMode = "Radian";
        console.log("changed to radian");
    }
}