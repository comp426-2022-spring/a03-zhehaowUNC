/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
    return Math.floor(Math.random()*2) == 1? 'heads' : 'tails'
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  var count = 0
  if (typeof flips == "string"){
    count = parseInt(flips)
  }
  count = flips
  var i = 0
  var arr = []
  while (i<count){
    arr.push(coinFlip())
    i++
  }
  return arr

}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var numofTail = 0
  var numofHead = 0
  array.forEach(item => item === "heads" ? numofHead ++:numofTail++);
  if (numofHead === 0){
  return {tails: numofTail}
  }
  else if(numofTail === 0){
    return {heads: numofHead}
  }
  else{
    return {heads: numofHead, tails:numofTail}
  }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var res = coinFlip()
  return {call: call, flip: res, result: res === call? 'win':'lose' }

}

/** Export 
 * 
 * Export all of your named functions
*/

//flipACoin,coinFlip,countFlips,coinFlips


