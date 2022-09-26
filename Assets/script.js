var timeInterval = 0;
var secondsLeft = 100;
var timeReduce = 10;
var questionCounter = 0;
var score = 0;
// var button = document.getElementById('button')
var currentTime = document.querySelector("#currentTime")
var createUl = document.createElement("ul");

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
    currentQuestion = 0;
    question.innerHTML = questions[currentQuestion].question;

}

renderQuiz()



// Timer
button.addEventListener("click", function() {
    if (timeInterval === 0){
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
