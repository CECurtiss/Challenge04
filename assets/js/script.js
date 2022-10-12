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
var scoreDisplay = document.querySelector("#scoredisplay");

var toggleCorrect = document.querySelector("#correct");
var toggleIncorrect = document.querySelector("#incorrect");
var currentQuestion = 0;
var playerScore = document.querySelector("#playerscore");
var timer;
var submitScoreBtn = document.querySelector('#submitscorebtn');


function retrieveHighScore() {
    var playerInitials = localStorage.getItem("playerinitials");
    var playerscore = localStorage.getItem("playerscore");    
}

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
            playerScore.textContent= timeLeft;
            clearInterval(timer);
            console.log(timeLeft);
            scoreDisplay.style.display = "block";
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
        if (timeLeft > 10){
            timeLeft -= 10;}
            else {timeLeft =0}
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
            timerEl.textContent = "";
         }
    }
    

submitScoreBtn.addEventListener("click", function(){
    var playerInitials = document.querySelector('#initials').value;
    localStorage.setItem("playerinitials", playerInitials);
    localStorage.setItem("playerscore", timeLeft);
})


