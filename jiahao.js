var main = function (input) {
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
​
  // If the guess is within 1 of either dice or if user rolls snake eyes, update output value
  if (
    isGuessWithinOne(input, diceRoll1) ||
    isGuessWithinOne(input, diceRoll2) ||
    isSnakeEyes(diceRoll1, diceRoll2)
  ) {
    return `You win! The rolls were ${diceRoll1} and ${diceRoll2}.`;
  }
​
  return `You lose! The rolls were ${diceRoll1} and ${diceRoll2}.`;
};
​
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  // Remove the decimal with the floor operation to get integer from 0 to 5 inclusive, add 1 to get [1, 6]
  return Math.floor(Math.random() * 6) + 1;
};
​
var isGuessWithinOne = function (guess, roll) {
  // return a boolean value, whether the guess is within one of the roll
  return Math.abs(guess - roll) <= 1;
};
​
var isSnakeEyes = function (roll1, roll2) {
  // return a boolean value, whether both roll1 and roll2 are 1
  return roll1 == 1 && roll2 == 1;
};