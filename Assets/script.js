// pesudo code

// Base html page 
// View high scores link
    // restart quiz button?

// a START button with instructions
//      gonna need a button
//      event listener, listens for click, sets off the function
//      Math.random question selector from an object/array with questions: and correct answers, and false answers, will need a for loop to cycle through the object/array
            // QUIZ QUESTIONS - Each question has (3) answers, if (1) is correct, which adds to the score, else, time is subtracted from the total time
                // (2) random functions 
                    // 1. Random selection of quiz question
                    // 2. Random selection of answer placement on page (3) positions
                // Quiz questions randomly selected, then ramdom  selector decides what order to display the answers

//      TIMER starts
//          gonna need a timer that counts down from a set time (2:00 minutes? or 120+ seconds)

//       A WILD QUESTION APPEARS!
//          some div field gets txt content updated
//          something is keeping score, counter thing, maybe keep the counter near the timer
//          wrong answers, time is subtracted from the clock and continues to next question
//          game ends when either timer runs out, or all the questions have been answered

// GAME OVER - score, and save initials in a high score page
        // Input field to record name and score that was stored in a variable      
        // local storage for names and scores

// HIGH SCORES - possibly a new page, otherwise it's a function that replaces the html on the page with a local storage list of high scores and user input names and scores
    // Clear high scores link
// onclick - starts quiz, starts the timer,

// Define a bunch of variables
var body = document.body;
var card_body = document.querySelector("p");
// variables for the welcome/start
var start = document.querySelector("h5");

// variables for the buttons
var but0 = document.querySelector("a");
var but1 = document.querySelector("b");
var but2 = document.querySelector("b1");
var but3 = document.querySelector("b2");

// variables for the score keeper
var scores = document.getElementById("hiScores");

// variables for the timer
var timer = document.querySelector("time");

// quiz questions
// index 0 will always be the correct answer
var questions = [{
        ques:"Is Pluto a planet?",
        answer:["No", "Yes", "You're silly, he's a dog"]
    },{
        ques:"What color are oranges?",
     answer:["Orange","Blue","None of your business"]
    },{
        ques: "How many doughnuts in a baker's dozen?",
        answer: ["13", "9", "Eleventeen"],
    },{
        ques: "Can penguins fly?",
        answer: ["No", "Yes","Only with enough frequent flyer miles"]
    }
]

start.textContent = "Welcome Quiz fans! Click the button below to start the quiz. If you get a wrong answer, you will lose 10 seconds for each wrong answer. Good luck!";

// Big onclick function here?
// add styling event to display to none after click event
but0.addEventListener("click", quiz)

function quiz () {
    // hides the start button after clicking
    but0.style.display = "none";
    start.textContent = "";
    // creates the three quiz answer buttons

    var qlastIndex = questions.length -1;
    var qcurrentIndex = 0;

    function quesDisplay () {
        
        var butArr = [but1, but2, but3]
        var randomIndex = Math.floor(Math.random() * questions.length);
        var randomButton = Math.floor(Math.random() * 3);
        
        console.log(randomButton);

        // do {
        // but1.appendChild(butArr[randomButton]);
        // randomButton++
        // }
        // while (randomButton < 3);

        // places a random question/answer object in each button
        card_body.textContent = questions[randomIndex].ques;
        for (var i = 0; i < 3; i++) {
            butArr[i].textContent = questions[randomIndex].answer[i];
        }
        
        but1.className="btn btn-danger mx-auto my-3 d-block";
        but2.className="btn btn-danger mx-auto my-3 d-block";
        but3.className="btn btn-danger mx-auto my-3 d-block";
        
        qcurrentIndex++
    }

    qcurrentIndex = 0;
    quesDisplay ();
    


}