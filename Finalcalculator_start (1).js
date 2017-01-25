
//Global variables
var current_input = "0";
var memory = "0";
var operator = 0;
var start_mode = "Radian";

// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
// Adds a digit to the current input
function addDigit(dig) {
    
    if ((eval(currentInput) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
// Adds a decimal to the current input
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
// Clears memory.
function allClear() {
    current_input = "0";
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
    memory = current_input; //store value
    current_input = "0";
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
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
// Change the sign of the current input
function changeSign() {
    current_input = (current_input * -1);
    displayCurrentInput();
}
// Clear the current input back to 0
function clearCurrent() {
    current_input = "0";
    displayCurrentInput();
    console.log("calc is cleared");
}
// Change the current input to a percentage
function percentage() {
    current_input = (current_input / 100);
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial() {
    var result = 1;
<<<<<<< HEAD
    for (i = current_input; i > 0 ; i--) {
=======
    for (i = currentInput; i > 0; i--) {
>>>>>>> Origin/master
        result = result * i;
        console.log(result);
    }
    current_input = result;
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    current_input = current_input*current_input
    current_input = Math.sqrt(Math.pow((current_input),2));
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    current_input = 1/current_input;
    displayCurrentInput();
}
// Calculate the trig identity of a given input
function trig(sign) {
<<<<<<< HEAD
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
=======
    if(startMode == "Degree") {
        currentInput = currentInput * (Math.PI/180)
    }
    if(sign == "sin") {
        currentInput = Math.sin(currentInput);
    }
    else if(sign == "cos") {
        currentInput = Math.cos(currentInput);
    }
    else if(sign == "tan") {
        currentInput = Math.tan(currentInput);
>>>>>>> Origin/master
    }
    displayCurrentInput();
    
}
//Switch Calculator mode
function switcher() {
<<<<<<< HEAD
    if(start_mode == "Radian") {
        start_mode = "Degree";
        console.log("changed to degree");
    }
    else if(start_mode == "Degree"){
        start_mode = "Radian";
=======
    if(startMode == "Radian") {
        startMode = "Degree";
        console.log("changed to degree");
    }
    else if(startMode == "Degree") {
        startMode = "Radian";
>>>>>>> Origin/master
        console.log("changed to radian");
    }
}