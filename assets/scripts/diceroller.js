function getUserInput() {
  const dice = parseInt(numDice.value);
  const nDice = isNaN(dice) ? 1 : dice;
  const modi = parseInt(modifier.value);
  const mod = isNaN(modi) ? 0 : modi;
  
  return { 
    numDice: nDice, 
    dieFaces: parseInt(customDieFaces.value),
    modifier: mod
  };
}


/**
 * Rolls D100
 */
function rollD100() {
  customRoll(100);
}
d100Button.addEventListener('click', rollD100);

/**
 * Rolls D20
 */
function rollD20() {
  customRoll(20);
}
d20Button.addEventListener('click', rollD20);

/**
 * Rolls D12
 */
function rollD12() {
  customRoll(12);
}
d12Button.addEventListener('click', rollD12);

/**
 * Rolls D10
 */
function rollD10() {
  customRoll(10);
}
d10Button.addEventListener('click', rollD10);

/**
 * Rolls D8
 */
function rollD8() {
  customRoll(8);
}
d8Button.addEventListener('click', rollD8);

/**
 * Rolls D6
 */
function rollD6() {
  customRoll(6);
}
d6Button.addEventListener('click', rollD6);

/**
 * Rolls D4
 */
function rollD4() {
  customRoll(4);
}
d4Button.addEventListener('click', rollD4);

function rollCustomDice() {
  customRoll();
}
customDieButton.addEventListener('click', rollCustomDice);

/**
 * Basic roll, then prints results.
 * @param {*} dieFaces when it's !== 0, it will replace the user's entry
 */
function customRoll(dieFaces = 0) {
  let userInput = getUserInput();
  if (dieFaces !== 0) {
    userInput.dieFaces = dieFaces;
  }
  if (!isNaN(userInput.dieFaces)) {
    const result = makeRoll(userInput.numDice, userInput.dieFaces, userInput.modifier);
    writeResult(userInput, result);
  }
}

/**
 * Shows result
 * @param {*} result array of integers
 */
function writeResult (userInput, result) {
  let rollDesc = "Rolling " + userInput.numDice + "D" + userInput.dieFaces;
  if (userInput.modifier > 0) {
    rollDesc += " + " + userInput.modifier;
  } else if (userInput.modifier < 0) {
    rollDesc += " - " + userInput.modifier*-1;
  }
  currentRoll.textContent = rollDesc;
  for (const res of result) {
    console.log(res);
  }
}

/**
 * Returns an array of numDie elements with an integer 
 * from 1 to numFaces in each element. It will have 2 
 * elements if the roll is made with advantage or 
 * disadvantage. It will return null if it gets a roll 
 * other than normal with numfaces != 20 or if rollType
 * is different than 0, 1 or 2.
 * 
 * @param {*} numDice number of dice.
 * @param {*} numFaces number of faces of each die.
 * @param {*} modifier to add to the total roll
 * @param {*} rollType 0 if it's a normal roll (default),
 *          otherwise it is asumed advantage/disadvantage.
 * @returns and array of integers or null
 */
 function makeRoll(numDice, numFaces, modifier = 0, rollType = 0) {
  let result = [];
  if (rollType>=0 && rollType<=2) {
    if (rollType === 0) {
        for (let i = 0; i < numDice; i++) {
        result[i] = randomNumber(numFaces) + modifier;
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

/**
 * Returns a random number.
 * @param {*} numFaces
 * @returns random number between 1 and numFaces
 */
 function randomNumber(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1;
}
