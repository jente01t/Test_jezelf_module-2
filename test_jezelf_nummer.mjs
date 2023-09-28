import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer;
nummer = parseFloat(await userInput.question('Geef een nummer in'));

if
(nummer < 0
){
    console.log('Het nummer is lager dan 0');
} else if 

(nummer % 2 == 0

){
    console.log('Het nummer is even');
} else 

{
    console.log('Het nummer is oneven');
}

process.exit();