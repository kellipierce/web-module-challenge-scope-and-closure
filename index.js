// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1 - inside an outer function
 *    counter2 - variable in global
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 - returns function that refers to a variable only present inside the scope where function is defined
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    counter1 is preferable most of the time, while counter2 would be beneficial if the count variable is needed elsewhere
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    let score = Math.floor(Math.random() *3);
    return score;

}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, innings){

  let homeScore = 0
  let awayScore = 0

  for (let i = 0; i < innings; i++) {

    homeScore += callback()
    awayScore += callback()

  }
  return {

    Home: homeScore,
    Away: awayScore

  }
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(numOfPoints, numOfInnings) {

  let homeScore = 0;
  let awayScore = 0;

    for (var i = 1; i <= numOfInnings; i++) {
    let inning = i;
    if (inning === 1) {
    
    homeScore += Math.round(Math.random(numOfPoints));
    awayScore += Math.round(Math.random(numOfPoints));

    console.log(`${inning}st inning: ${homeScore} - ${awayScore}`);

    } else if (inning === 2) {

      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));

      console.log(`${inning}nd inning: ${homeScore} - ${awayScore}`);

    } else if (inning === 3) {

      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));

      console.log(`${inning}rd inning: ${homeScore} - ${awayScore}`);


    } else if (inning > 3 && inning !== numOfInnings) {

      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));

      console.log(`${inning}th inning: ${homeScore} - ${awayScore}`);

    } else if (inning === numOfInnings) {

      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));

      console.log(`${inning}th inning: ${homeScore} - ${awayScore}`);
      console.log(`Final Score: ${homeScore} - ${awayScore}`);


    }
  }
}

scoreboard(inning(0, 2), 9);


