var selection = [];
// var timer = document.querySelector(#startTime);
var timeInterval = 0;
var secondsLeft = 100;
var timeReduce = 10;
var questionCounter = 0;
var score = 0;
var timerEl = document.getElementById('timer');
var button = document.getElementById('button')
var currentTime = document.querySelector("#currentTime")

// Question/answer bank
var questions = [
{
    question:"Commonly used data types DO NOT include:",
    choices: ["strings", 'booleans', 'alerts', 'numbers'],
    answer:'booleans'
}, {
    question:"The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
}, {
    question:"Arrays in JavaScript can be used to store ____.",
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above'
}, {
    question:"String values must be enclosed within ____ when being assigned to variables",
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer:'quotes'
}, {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['JavaScript', 'terminal/bash', '"for" loops', 'console.log'],
    answer:'console.log'
}
];

function renderQuiz(){
// Sets up question
// temp showing answer with questionslist[index].answer
// condition to check if there are more ?'s'
    var currentQuestion = questions[index]
    h1.innnerText = currentQuestion.question
    choicesEl.innerHTML = ""
}




// Timer
button.addEventListener("click", function() {
    if (timeInterval===0){
        timeInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;
            console.log("clicked")

    if (secondsLeft <=0) {
        clearInterval(timeInterval)
            currentTime.textContent = "Time up!";
            }
        }
     ,1000)
    }
    }
)
