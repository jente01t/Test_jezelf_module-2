import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let num1 = parseFloat(await userInput.question('Wat is je eerste getal?'));
let num2 = parseFloat(await userInput.question('Wat is je tweede getal?'));

if ((num1 > 0) && (num2 > 0)) {
        console.log('Beide getallen zijn positief.');
    }
if (num1 > 0) {
    if (num2 < 0) {
        console.log('Het eerste getal is positief en het tweede getal is negatief.');
    }
}if (num1 < 0) {
    if (num2 > 0) {
    console.log('Het eerste getal is negatief en het tweede getal is positief.');
    }
}if (num1 < 0 ){
    if (num2 <0 ) {
        console.log('Beide getallen zijn negatief.');
    }
}if ((num1 == 0) || (num2 == 0)){
    console.log('Eén van de getallen is nul.');
}
process.exit();

/* 
kon beter geschreven worden door bvb:
if ((num1 > 0) && (num2 > 0)) {
        console.log('Beide getallen zijn positief.');
    }
}
*/
