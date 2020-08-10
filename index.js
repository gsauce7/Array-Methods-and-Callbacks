import { fifaData } from './fifa.js';
/* console.log(fifaData); */

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/* How to do it with filter  */
/*
const final2014 = fifaData.filter((game) => {
    return game.Year === 2014 && game.Stage === "Final";
});
console.log(final2014[0]["Home Team Name"]);
console.log(final2014[0]['Away Team Name']);
console.log(final2014[0]['Home Team Goals']);
console.log(final2014[0]['Away Team Goals']);
console.log(final2014[0]['Win conditions']);
*/

/* How to do it with .forEach */
/*(a) */
function queryA(obj){
    obj.forEach(el => {

        if(el.Year === 2014 && el.Stage === 'Final'){
            console.log(el['Home Team Name']);
        }
    });
}
queryA(fifaData);

/* (b) */
function queryB(obj){
    obj.forEach(el => {

        if(el.Year === 2014 && el.Stage === 'Final'){
            console.log(el['Away Team Name']);
        }
    });
}
queryB(fifaData);

/* (c) */
function queryC(obj){
    obj.forEach(el => {

        if(el.Year === 2014 && el.Stage === 'Final'){
            console.log(el['Home Team Goals']);
        }
    });
}
queryC(fifaData);

/* (d) */

function queryD(obj){
    obj.forEach(el => {

        if(el.Year === 2014 && el.Stage === 'Final'){
            console.log(el['Away Team Goals']);
        }
    });
}
queryD(fifaData);

/* (e) */
function queryE(obj){
    obj.forEach(el => {

        if(el.Year === 2014 && el.Stage === 'Final'){
            console.log(el['Win conditions']);
        }
    });
}
queryE(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data) {
    let onlyFinalsData = [];
    data.forEach(el => {
         if(el.Stage === 'Final'){
           onlyFinalsData.push(el);
        }
    });
    return onlyFinalsData;
};

console.log(getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, callback) {
    let finalsData = callback(data);
    let years = [];
    finalsData.forEach(el => {
    
    years.push(el.Year)

    })
    return years;
};

console.log(getYears(fifaData, getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    let winners = callBack.map(game => {
        
        if(game["Home Team Goals"] > game["Away Team Goals"]){
            return game["Home Team Name"] 
        } else {
            return game["Away Team Name"]
        }})
        return winners
    }; 
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
	let winners = callback1;
	let years = callback2;
	for(let i=0; i<years.length; i++){
	console.log( `In ${years[i]}, ${winners[i]} won the world cup!`);
	}
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(fifaData, getFinals));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const avgHomeGoals = data.reduce((goals, match) => goals + match['Home Team Goals'], 0) / data.length;
    const avgAwayGoals = data.reduce((goals, match) => goals + match['Away Team Goals'], 0) / data.length;
    return `Average Home Team Goals: ${avgHomeGoals.toFixed(2)} - Average Away Team Goals: ${avgAwayGoals.toFixed(2)}`;
   
};



console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
