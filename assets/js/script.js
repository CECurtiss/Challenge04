var timerEl = document.querySelector("#timer");
var titleBoxEl = document.querySelector(".titlebox");
var startQuizBtn = document.querySelector("#startquizbtn");
var highScoresBtn = document.querySelector("#highscores");
var highScoresList = document.querySelector('.highscorelist');
var returnToGameBtn = document.querySelector('#returntogamebtn');
var highScoreEnter = document.querySelector(".highscoreenter");

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

highScoresBtn.addEventListener("click", function() {
    titleBoxEl.style.display = "none";
    highScoresList.style.display = "block";
    highScoreEnter.style.display = "block";
    returnToGameBtn.style.display = "block";
    returnToGameBtn.addEventListener("click",function(){
        titleBoxEl.style.display = "block";
        highScoresList.style.display = "none";
        highScoreEnter.style.display = "none";
        returnToGameBtn.style.display = "none";
    });

});



function shuffle(questionArray){
        questionArray.sort(() => Math.random() - 0.5);
    }
    
    startQuizBtn.addEventListener("click",function() {
        timer = setInterval(timerStart,1000);
        timerStart();
        shuffle(questionArray);
        titleBoxEl.style.display = "none";
        highScoresBtn.style.display = "none";
        
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
    localStorage.setItem("playerinitials", JSON.stringify(playerInitials));
    localStorage.setItem("playerscore", JSON.stringify(timeLeft));
    highScoresBtn.style.display = "block";
})

function postHighScores(){
    var recentScore = JSON.parse(localStorage.getItem("playerinitials","playerscore"));
    document.getElementByClass("highscoreenter").innerHTML = recentScore.playerinitals;
    document.getElementByClass("highscoreenter").innerHTML = recentScore.playerscore;
}
