/** simulates a six sided dice roll
 * @return {Number} A number between 1 and 6 */
const getRandomDiceRoll = () => {
  return Math.ceil(Math.random() * 6);
}

/** Gets a random number in range (0, maxValue]
 * @param {Number} maxValue The maximum possible value noninclusive
 * @return {Number} a number in range (0, maxValue] */
const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
}

module.exports = {
  getRandomDiceRoll,
  getRandomNumber,
}