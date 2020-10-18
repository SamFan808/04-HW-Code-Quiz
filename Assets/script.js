// Homework 4 Code Quiz
// Defining global variables
var body = document.body;
var start = document.querySelector("h5");
var but0 = document.querySelector("a");
var quesShow = document.getElementById("question");
var choice1 = document.getElementById("button-1");
var choice2 = document.getElementById("button-2");
var choice3 = document.getElementById("button-3");
var scores = document.getElementById("score");
var timer = document.querySelector("time");

// quiz questions
// index 0 will always be the correct answer
var questions = [{
        question:"Who is credited with creating the first production electric bass guitar",
        choice1:"Leo Fender",
        choice2:"Ned Steinberger",
        choice3:"Orville Gibson",
        correct: "1"
    },{
        question:"How many strings does a standard bass guitar have?",
        choice1: "Six",
        choice2: "Four",
        choice3: "Enough to get the job done",
        correct: "2"
    },{
        question:"Which one of these people does not play bass as their main instrument?",
        choice1: "Kip Winger",
        choice2: "Les Claypool",
        choice3: "Pete Townsend",
        correct: "3"
    },{
        question:"The sound that many associated with the birth of acid house music was made with which bass synthesizer?",
        choice1: "Roland TB-303",
        choice2: "Moog Minimoog",
        choice3: "FutureRetro 777",
        correct: "1"
    },{
        question:"What famous drum machine is most often associated with Hip-Hop?",
        choice1: "Roland TR-909",
        choice2: "Roland CR-78",
        choice3: "Roland TR-808",
        correct: "3"
    },{
        question:"How many dedicated oscillators does a Moog Minimoog have?",
        choice1: "Three",
        choice2: "Two",
        choice3: "Six",
        correct: "1"
    },{
        question:"The Yamaha DX-7 uses which type of synthesis to generate it's signature sound?",
        choice1: "Subtractive Synthesis",
        choice2: "Frequency Modulation",
        choice3: "Granular Sampling",
        correct: "2"
    },{
        question:"How many channels does a single MIDI cable support?",
        choice1: "16",
        choice2: "64",
        choice3: "128",
        correct: "1"
    },{
        question:"The first commercial synthesizer released by the company Elektron, the SidStation was based on a synthesis chip from which home computer brand?",
        choice1: "IBM",
        choice2: "Apple",
        choice3: "Commodore",
        correct: "3"
    },{
        question:"How many keys are on a full sized piano keyboard?",
        choice1: "76",
        choice2: "88",
        choice3: "64",
        correct: "2"
    },{
        question:"What effect is used to create the 'pumping' effect in French Style House music?",
        choice1: "Side-chain compression",
        choice2: "Stack overload",
        choice3: "Analog delay",
        correct: "1"
    },
]

var lastQuestion = questions.length -1;
var runQuestion = 0;
var count = 0;
var score = 0;

start.textContent = "Welcome Quiz fans! Click the button below to start the quiz. If you get a wrong answer, you will lose 10 seconds for each wrong answer. Good luck!";

function questionStart () {
    var q = questions[runQuestion];
    quesShow.textContent = q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
}
// activates the start quiz button
but0.addEventListener("click", quiz)
// hides the answer buttons
choice1.style.display = "none";
choice2.style.display = "none";
choice3.style.display = "none";
// initiates  quiz

var timeEl = document.querySelector("#time");
var secondsLeft = 60;

function quiz () {
    but0.style.display = "none";
    start.textContent = "";
    choice1.className="btn btn-danger mx-auto my-3 d-block";
    choice2.className="btn btn-danger mx-auto my-3 d-block";
    choice3.className="btn btn-danger mx-auto my-3 d-block";

    questionStart ();
    timer ();
    // TIMER =================================================================================
    function timer () {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        scoreDisplay();
        sendMessage();
        }
        
        }, 1000);
    }
    function sendMessage() {
        quesShow.textContent = "TIME'S UP!";
        }
// TIMER ==================================================================================
}
// Compares user choice with correct answer
function checkAnswer(answer) {
    if( answer == questions[runQuestion].correct) {
        score++;
        console.log("Hey!");
        
    } else {
        secondsLeft = secondsLeft - 10;
        console.log("Ho!");
    }
    count = 0;
    if(runQuestion < lastQuestion) {
        runQuestion++;
        questionStart();
        
    } else {
        secondsLeft <= 0;
        clearInterval(timer);
        scoreDisplay();
        sendMessage();
    }
    scores.textContent = score + " points";
}    
function scoreDisplay () {
    choice1.className="";
    choice2.className="";
    choice3.className="";
    console.log("It worked?");
}
