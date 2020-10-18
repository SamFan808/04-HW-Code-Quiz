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
var button_body = document.querySelector("b");
// variables for the welcome/start
var start = document.querySelector("h5");

// variables for the buttons
var but0 = document.querySelector("a");
var quesShow = document.getElementById("question");
var choice1 = document.getElementById("button-1");
var choice2 = document.getElementById("button-2");
var choice3 = document.getElementById("button-3");
var score = document.getElementById("hiScores");

// variables for the timer
var timer = document.querySelector("time");

// quiz questions
// index 0 will always be the correct answer
var questions = [{
        question:"Is Pluto a planet?",
        choice1:"No",
        choice2:"Yes",
        choice3:"You're silly, he's a dog",
        answer: "1"
    },{
        question:"What color are oranges?",
        choice1: "Blue",
        choice2: "Orange",
        choice3: "None of your business",
        answer: "B"
    },{
        question: "How many doughnuts in a baker's dozen?",
        choice1: "Eleventeen",
        choice2: "Nine",
        choice3: "Thirteen",
        answer: "3"
    },{
        question: "Can penguins fly?",
        choice1: "No",
        choice2:"Yes",
        choice3: "Only with enough frequent flyer miles",
        answer: "1"
    }
]

start.textContent = "Welcome Quiz fans! Click the button below to start the quiz. If you get a wrong answer, you will lose 10 seconds for each wrong answer. Good luck!";
// but1.style.display = "none";
var lastQuestion = questions.length -1;
var runQuestion = 0;
var count = 0;
var score = 0

function questionStart () {
    var q = questions[runQuestion];
    quesShow.textContent = q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
}
// Big onclick function here?
// add styling event to display to none after click event
but0.addEventListener("click", quiz)
choice1.style.display = "none";
choice2.style.display = "none";
choice3.style.display = "none";

function quiz () {
    // hides the start button after clicking
    but0.style.display = "none";
    start.textContent = "";

    questionStart ();
    timer();
    choice1.className="btn btn-danger mx-auto my-3 d-block";
    choice2.className="btn btn-danger mx-auto my-3 d-block";
    choice3.className="btn btn-danger mx-auto my-3 d-block";
    
    choice1.addEventListener("click", checkAnswer);
    choice2.addEventListener("click", checkAnswer);
    choice3.addEventListener("click", checkAnswer);

    function checkAnswer(answer) {
        if (answer === questions[runQuestion].correct) {
            score++
        } else {
            secondsLeft = secondsLeft - 10;
        }
        count = 0;
        if(runQuestion < lastQuestion) {
            runQuestion++;
            questionStart();
        } else {
            clearInterval(timer);
            scoreDisplay();
        }
    }    
    function scoreDisplay () {
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }

    // TIMER ==================================================================================
    var timeEl = document.querySelector("#time");
    var secondsLeft = 60;

    function timer() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
        }
        
        }, 1000);
    }
    function sendMessage() {
        quesShow.textContent = "TIME'S UP!";
    }
    // TIMER ==================================================================================
}
console.log(score);