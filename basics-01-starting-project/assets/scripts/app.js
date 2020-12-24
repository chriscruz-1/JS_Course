const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInput() {
	return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}
function writeToLog(
	operationId,
	prevResult,
	opNum,
	newResult
)	{

	const logEntry = {
		operation: operationId,
		prevResult: prevResult,
		number: opNum,
		result: newResult 
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation);
	console.log(logEntries);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserInput(); 
	const initialResult = currentResult;
	let mathOperator;
	if(calculationType==='ADD') {
		currentResult += enteredNumber;	
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult -= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult = currentResult / enteredNumber;
		mathOperator = '/';
	}
	createAndWriteOutput(mathOperator, initialResult , enteredNumber);
	writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
}

function add() {
	calculateResult('ADD');
}

function subtract() {
	calculateResult('SUBTRACT');
}

function multiply() {
	calculateResult('MULTIPLY');
}

function divide() {
	calculateResult('DIVIDE');
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);