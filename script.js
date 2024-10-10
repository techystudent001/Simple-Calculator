let calculationResult = '';

function clearResult() {
    calculationResult = '';
    document.getElementById('result').value = '';
}

function backspace() {
    calculationResult = calculationResult.slice(0, -1);
    document.getElementById('result').value = calculationResult;
}

function solve(value) {
    calculationResult += value;
    document.getElementById('result').value = calculationResult;
}

function calculate() {
    let calculation = eval(calculationResult);
    document.getElementById('result').value = calculation;
    calculationResult=' ';
}