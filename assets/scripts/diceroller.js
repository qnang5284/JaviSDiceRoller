function getUserInput() {
  return { 
    numDice: numDie.value, 
    dieFaces: customDieFaces.value, 
    rollType: rollType.value
  };
}

function rollD100() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 100, userInput.rollType);
  return result;
}
d100.addEventListener('click', rollD100);

function rollD20() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 20, userInput.rollType);
  return result;
}
d20.addEventListener('click', rollD20);

function rollD12() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 12, userInput.rollType);
  return result;
}
d12.addEventListener('click', rollD12);

function rollD10() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 10, userInput.rollType);
  return result;
}
d10.addEventListener('click', rollD10);

function rollD8() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 8, userInput.rollType);
  return result;
}
d8.addEventListener('click', rollD8);

function rollD6() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 6, userInput.rollType);
  return result;
}
d6.addEventListener('click', rollD6);

function rollD4() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, 4, userInput.rollType);
  return result;
}
d4.addEventListener('click', rollD4);

function rolrollCustomDice() {
  const userInput = getUserInput();
  const result = makeRoll(userInput.numDice, userInput.numFaces, userInput.rollType);
  return result;
}
customDie.addEventListener('click', rollCustomDice);

/**
 * Returns a random number.
 * @param {*} numFaces
 * @returns random number between 1 and numFaces
 */
function randomNumber(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1;
}

/**
 * Returns an array of numDie elements with an integer 
 * from 1 to numFaces in each element. It will have 2 
 * elements if the roll is made with advantage or 
 * disadvantage. It will return null if it gets a roll 
 * other than normal with numfaces != 20 or if rollType
 * is different than 0, 1 or 2.
 * 
 * @param {*} numDie number of dice.
 * @param {*} numFaces number of faces of each die.
 * @param {*} rollType 0 if it's a normal roll (default),
 *          otherwise it is asumed advantage/disadvantage.
 * @returns and array of integers or null
 */
function makeRoll(numDie, numFaces, rollType = 0) {
  let result;
  if (rollType>=0 && rollType<=2) {
    if (rollType === 0) {
        for (let i = 0; i < numDie; i++) {
        result[i] = randomNumber(numFaces);
        }
    } else {
        // Advantage / disadvantage
        if (numFaces == 20) {
        result[0] = randomNumber(numFaces);
        result[1] = randomNumber(numFaces);
        } else {
        result = null;
        }
    }
  } else {
    result = null;
  }

  return result;
}
