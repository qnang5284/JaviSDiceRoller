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
