import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let serie = await userInput.question('Wat is je favoriete TV-serie?');

let locatie = 0;

switch(serie){
    case 'The Simpsons':
        locatie = 'Springfield';
        console.log(serie + ' vindt plaats in ' + locatie + '.');
        break;
    case 'Thuis':
        locatie = 'Ternat';
        console.log(serie + ' vindt plaats in ' + locatie + '.');
        break;
    default: 
        console.log('Sorry, ik weet niet waar ' + serie + ' zich afspeelt');
}



process.exit();