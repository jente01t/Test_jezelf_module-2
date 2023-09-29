import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let inputDay = await userInput.question('Welke dag van de week is het vandaag?');
let outputDay = 0;

switch(inputDay){
    case 'zaterdag':
        outputDay = 'weekenddag';
    case 'zondag':
        outputDay = 'weekenddag';
        break;
    default:
        outputDay = 'weekdag';
}

console.log(inputDay + ' is een ' + outputDay + '');

process.exit();