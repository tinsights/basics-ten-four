var main = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var didPlayerRollSnakeEyes = randomDiceNumber1 && randomDiceNumber2 == 1;
  var myOutputValue = "you lose";
​
  // User wins if guess is within 1 of either dice or if the user rolls snake eyes.
  if (
    Math.abs(randomDiceNumber1 - input) <= 1 ||
    Math.abs(randomDiceNumber2 - input) <= 1 ||
    didPlayerRollSnakeEyes
  ) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};
​
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};