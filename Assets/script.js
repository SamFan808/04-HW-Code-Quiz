// pesudo code

// Base html page 
// View high scores link
    // restart quiz button?

// a START button with instructions
//      gonna need a button
//      event listener, listens for click
//      Math.random question selector from an object/array with questions: and answers, will probably need an .each loop method to cycle through the object/array
// TIMER starts
//      gonna need a timer that countsdown from a set time (2:00 minutes? or 120 s+%econds)
// A WILD QUESTION APPEARS!
//      some div field gets txt content updated
//      some kind of input field - bootstrap
//          if/else comparator validation to correct answer
// correct answers, continues to next question
//      something is keeping score, counter thing, maybe keep the counter near the timer
// wrong answers, time is subtracted from the clock and continues to next question
// game ends when either timer runs out, or all the questions have been answered
// GAME OVER - score, and save initials in a high score page
//      local storage for names and scores
// HIGH SCORES - possibly a new page, otherwise it's a function that replaces the html on the page with a local storage list of high scores and user input names and scores
    // Clear high scores link
// onclick - starts quiz, starts the timer,

// Define a bunch of variables
var body = document.body;

var start = document.querySelector(".quizBody");
var but1 = document.createElement("button");
var but2 = document.createElement("button");
var but3 = document.createElement("button");

but1.className="btn btn-danger";
but1.textContent = "Danger";

start.textContent = "Welcome Quiz fans! Click the button below to start the quiz. If you get a wrong answer, you will lose 10 seconds for each wrong answer. Good luck!";

body.appendChild(but1);
