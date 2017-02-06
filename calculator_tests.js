// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    clearCurrent();
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
//Test adding the inverse of the current input
QUnit.test("find inverse test", function (assert) {
    clearCurrent();
    addDigit('4')
    inverse();
    assert.equal(document.getElementById("screen").value, "0.25", "Passed - Expected 0.25");
});
//Test to calculate the squareRoot of the current input
QUnit.test("Calculate squareRoot test", function (assert) {
    clearCurrent();
    addDigit('4');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
});
//Test to find the square of the current input
QUnit.test("Solve square test", function (assert) {
    clearCurrent();
    addDigit('2');
    square();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
});
// Test for calculating the factorial of a current input
QUnit.test( "Calculate the factorial test", function( assert ) {
    clearCurrent();
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
 });
//Test for calculating the trig identity of a current input
QUnit.test( "Calculate the trig identity test", function( assert ) {
    //Degree Mode
    clearCurrent();
    addDigit('3');
    addDigit('0');
    switcher();
    trig("sin");
    assert.equal(document.getElementById("screen").value, "0.49999999999999994", "Passed - Expected 0.5");
    clearCurrent();
    addDigit('3');
    addDigit('0');
    trig("cos");
    assert.equal(document.getElementById("screen").value, "0.8660254037844387", "Passed - Expected 0.8660254037844387");
    clearCurrent();
    addDigit('3');
    addDigit('0');
    trig("tan");
    assert.equal(document.getElementById("screen").value, "0.5773502691896257", "Passed - Expected 0.5773502691896257");
    //Radian Mode
    clearCurrent();
    addDigit('3');
    addDigit('0');
    switcher();
    trig("sin");
    assert.equal(document.getElementById("screen").value, "-0.9880316240928618", "Passed - Expected -0.9880316240928618");
    clearCurrent();
    addDigit('3');
    addDigit('0');
    trig("cos");
    assert.equal(document.getElementById("screen").value, "0.15425144988758405", "Passed - Expected 0.15425144988758405");
    clearCurrent();
    addDigit('3');
    addDigit('0');
    trig("tan");
    assert.equal(document.getElementById("screen").value, "-6.405331196646276", "Passed - Expected -6.405331196646276");
});

