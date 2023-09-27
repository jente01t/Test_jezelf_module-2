import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Wat is je eerste getal?'));
let getal2 = parseFloat(await userInput.question('Wat is je tweede getal?'));

if(getal1 > getal2) {
    console.log(getal1 + ' is het grootste getal.');
}
else {
    console.log(getal2 + ' is het grootste getal.');
}

process.exit();