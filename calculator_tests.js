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
QUnit.test("find inverse test", function (assert) {
    addDigit('4')
    inverse(current_input);
    assert.equal(document.getElementById("screen").value, "0.20", "Passed - Expected 0.20");
    current_input = "0";
});

QUnit.test("Calculate squareRoot test", function (assert) {
    addDigit('4');
    squareRoot(current_input);
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
    current_input = "0";
});
QUnit.test("Solve square test", function (assert) {
    addDigit('2');
    square(current_input);
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
     current_input = "0";
});
