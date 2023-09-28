import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let taal = await userInput.question('Welke taal spreek je?');
 
if(taal == 'NL') {
    console.log('Goedendag.');
} else if(taal == 'FR') {
    console.log('Bonjour.');
} else if(taal == 'EN') {
    console.log('Hello.');
} else {
    console.log('De gegeven taal is niet geldig.')
}

process.exit();