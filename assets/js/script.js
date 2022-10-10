var timerEl = document.querySelector("#timer");
var titleBoxEl = document.querySelector(".titlebox");
var startQuizBtn = document.querySelector("#startquizbtn");
var highScores = document.querySelector("#highscores");

var questionOne = document.querySelector(".questionone");
var questionTwo = document.querySelector(".questiontwo");
var questionThree = document.querySelector(".questionthree");
var questionFour = document.querySelector(".questionfour");
var questionFive = document.querySelector(".questionfive");
var questionSix = document.querySelector(".questionsix");
var questionSeven = document.querySelector(".questionseven");
var questionEight = document.querySelector(".questioneight");

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight];
var questionList = document.querySelector(".questionList");
var timeLeft = 75;


var toggleCorrect = document.querySelector("#correct");
var toggleIncorrect = document.querySelector("#incorrect");
var currentQuestion = 0;
var playerScore = document.querySelector("#playerscore");
// highScores.addEventListener("click", function({
     // })
    
       // hide all body text and load local storage
var timer;
    function shuffle(questionArray){
        questionArray.sort(() => Math.random() - 0.5);
    }
    
    startQuizBtn.addEventListener("click",function() {
        timer = setInterval(timerStart,1000);
        timerStart();
        shuffle(questionArray);
        titleBoxEl.style.display = "none";
        
        var correctAnswer = document.querySelectorAll('.correct');
        var incorrectAnswer = document.querySelectorAll('.incorrect');
    function showQuestion() { 
        if (currentQuestion < questionArray.length) {
            questionArray[currentQuestion].style.display = "block";
        } else { 
            clearInterval(timer);
            console.log("game over");
            // insert high scores display
        }}
    function hideQuestion() { questionArray[currentQuestion].style.display = "none";}

    showQuestion();

for ( var i=0; i< correctAnswer.length; i++){
    correctAnswer[i].addEventListener("click", function(){
        toggleIncorrect.style.display = "none";
        toggleCorrect.style.display = "block";
            hideQuestion();
            currentQuestion ++;
            showQuestion();
   
})}
    for ( var i=0; i< incorrectAnswer.length; i++)  {
    incorrectAnswer[i].addEventListener("click", function(){
        toggleIncorrect.style.display = "block";
        toggleCorrect.style.display = "none";
        timeLeft -= 10;
        hideQuestion();
        currentQuestion ++;
        showQuestion();     
})}
    })


function timerStart () {
       timeLeft -= 1;
       timerEl.textContent = timeLeft;
        if (timeLeft <= 0){
            clearInterval(timer);
         }
    }
    




