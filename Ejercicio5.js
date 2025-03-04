function rollDice (faces) {
    return Math.floor(Math.random() * (faces) + 1);
}

let randomRoll = rollDice(8);
console.log(randomRoll);