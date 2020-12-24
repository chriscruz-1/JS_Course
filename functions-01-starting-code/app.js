const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
let gameIsRunning = false;

const getPlayerChoice = () =>  {
	const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, ``).toUpperCase();
	if(
		selection !== ROCK && 
		selection !== PAPER &&
		selection !== SCISSORS 
	) {
		alert(`Invalid choice! We chose ${DEFAULT} for you!`);
		return DEFAULT;
	}
	return selection;
}

const getComputerChoice = () => {
	const randomValue = Math.random();
	if(randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
}

const getWinner = (player = DEFAULT, computer) => {
	player === computer 
		? RESULT_DRAW
	: (computer === SCISSORS && player === ROCK ||
	 computer === ROCK && player === PAPER ||
	 computer === PAPER && player === SCISSORS
	) 
	? RESULT_PLAYER_WIN
	: RESULT_COMPUTER_WINS;
}

/* const getWinner(player, computer) {
	if(player === computer) {
		return RESULT_DRAW;
	} else if (
		computer === SCISSORS && player === ROCK ||
		computer === ROCK && player === PAPER ||
		computer === PAPER && player === SCISSORS
	) {
		return RESULT_PLAYER_WIN;
	} else {
		return RESULT_COMPUTER_WINS;
	}
} */

startGameBtn.addEventListener('click', () => {
	if(gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');	
	const playerSelection = getPlayerChoice();
	const computerSelection = getComputerChoice();
	const winner = getWinner();
	let message = `You picked ${playerSelection || DEFAULT} and computer 
	picked ${computerSelection}. Therefore, you `;
	winner === RESULT_PLAYER_WIN ? message + 'won.' 
	: winner === RESULT_COMPUTER_WINS ? message + 'lost.' 
	: message + 'had a draw.';

	alert(message);
	gameIsRunning = false;
});

const showResult = (messageText, result) => {
	alert(`${messageText}: ${}`);
};

const combine = function(resultHandler, operation, ...numbers) {
	let sum = 0;
	for (const num in numbers) {
		if (operation === 'ADD') {
			sum += num;
		} else {
			sum -= num;
		}
	}
	resultHandler(sum); //This is a function passed in
};

combine(showResult.bind(this, 'The result after adding is: '), 'ADD', 1, 10, 15, 20);

combine(showResult.bind(this, 'The result after subtracting is: '), 'SUBTRACT', 1, 10, 15, 20);
