const sayHello = name => console.log('Hi ' + name);

sayHello();

const sayHello = (greet, name) => console.log(`${greet} ${name}`);


const sayHello = () => {
	console.log('Hi!');
};

const sayHello = (name) => `Hi ${name}!`; 


const checkInput = (cb, ...strings) => {
	let hasEmptyText = false;
	for (const text of strings) {
		if (!text){
			hasEmptyText = true;
			break;
		}
	}
	if (!hasEmptyText) {
		cb(); //callback function
	}
};

checkInput (
	() => {
		console.log('All not empty!'); //call back function
	},
	//arguments
	'Hello',
	'12',
	'adsfa',
	''
};
const sayHello = (greet, name = 'Chris') => console.log(`${greet} ${name}`);
