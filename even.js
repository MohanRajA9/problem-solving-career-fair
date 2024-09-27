//read the input from user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
})

rl.on('close', () => {
    //handle the input
    const number = parseInt(userInput[0])

    //find the remainder
    const remainder = number % 2;

    //check if the remainder is equal to 0 or not
    if (remainder === 0) {
        //print even if the remainder is equal to 0
        console.log('even')
    } else {
        //else print odd
        console.log('odd')
    }
})