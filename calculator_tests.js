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
    clearCurrent();
    addDigit('4')
    inverse();
    assert.equal(document.getElementById("screen").value, "0.25", "Passed - Expected 0.25");
});
QUnit.test("Calculate squareRoot test", function (assert) {
    clearCurrent();
    addDigit('4');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
});
QUnit.test("Solve square test", function (assert) {
    clearCurrent();
    addDigit('2');
    square();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
});


 QUnit.test("Calculate the factorial test", function (assert) {
    clearCurrent();
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
 });
