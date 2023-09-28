import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let myNumber = 5;

if
(myNumber % 2 == 0 ){console.log('The number is divisible by 2.')} if (

 myNumber % 3 == 0){
    console.log("The number is divisible by 2 and 3.");
} else

{
    console.log("The number is not divisible by both 2 and 3.");
}

process.exit();