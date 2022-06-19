// Roll definition
const numDice = document.getElementById("dice-num-input");
const modifier = document.getElementById("modifier");
const rollType = getRollType();

// Dice buttons
const d100 = document.getElementById("btn-d100");
const d20 = document.getElementById("btn-d20");
const d12 = document.getElementById("btn-d12");
const d10 = document.getElementById("btn-d10");
const d8 = document.getElementById("btn-d8");
const d6 = document.getElementById("btn-d6");
const d4 = document.getElementById("btn-d4");

// Custom dice
const customDiceFaces = document.getElementById("btn-custom");
const customDie = document.getElementById("num-faces");

// Logs
const currentRoll = document.getElementById("current-roll");
const currentResult = document.getElementById("current-result");
const currentTotalResul = document.getElementById("total-result");
const rollLog = document.getElementById("roll-text-log");

/* 
    Returns if we're working with a normal roll (0, default), 
    rolling with advantage (1) or rolling with disadvantage (2)
*/
function getRollType() {
  var rollType = 0;
  const normalRoll = document.getElementById("normal-roll");
  const advantage = document.getElementById("adv-roll");
  const disadvantage = document.getElementById("disadv-roll");
  if (disadvantage.checked) {
    rollType = 2;
  } else if (advantage.checked) {
    rollType = 1;
  } else if (normalRoll.checked) {
    rollType = 0;
  }
  return rollType;
}
