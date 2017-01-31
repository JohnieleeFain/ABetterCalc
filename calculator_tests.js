// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    clearCurrent();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

//Test for calculating the factorial of a current input
QUnit.test( "Calculate the factorial test", function( assert ) {
    clearCurrent();
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
});

//Test for calculating the trig identity of a current input
QUnit.test( "Calculate the trig identity test", function( assert ) {
    clearCurrent();
    addDigit('3');
    addDigit('0');
    switcher();
    trig("sin");
    assert.equal(document.getElementById("screen").value, "0.49999999999999994", "Passed - Expected .5");
});
