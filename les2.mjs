import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
let naam = await userInput.question('Wat is je naam?');
let les = parseFloat(await userInput.question('Hoeveelste les is het?'));

console.log('Hallo ' + naam + ' in de ' + les + ' de les.')
*/ 

let getal1 = parseFloat(await userInput.question('Wat is je eerste getal?'));
let getal2 = parseFloat(await userInput.question('Wat is je tweede gatl?'));

let som = getal1 + getal2 * 8 / 7 + 56 - 89;

// som += getal1 is gelijk aan som = som + getal1
// som++ is gelijk aan som + 1
// som-- is gelijk aan som -1

console.log('Je getallen zijn ' + getal1 + ' en ' + getal2 + '.');
console.log('De som van je getallen zijn: ' + som);



process.exit();