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

var timeLeft = 60;

var correctAnswer = document.querySelector('.correct');
var incorrectAnswer = document.querySelector('.incorrect');

// highScores.addEventListener("click", function({
    

// })

    
    
    // hide all body text and load local storage

function shuffle(questionArray){
    questionArray.sort(() => Math.random() - 0.5);
}

startQuizBtn.addEventListener("click",function() {
    timerStart();
    shuffle(questionArray);
    titleBoxEl.style.display = "none";

    function showQuestionOne() { questionArray[0].style.display = "block";}
    function hideQuestion() { questionArray[0].style.display = "none";}

    showQuestionOne();

    correctAnswer.addEventListener("click", function(){
})
    //  questionArray[1].style.display = "none";
    //  if (correctAnswer) {
    //     questionArray[1].style.display = "none";
    //     // display correct
    //  } else {
    //     questionArray[1].style.display = "none";
    //     // take time off clock
    //     // display incorrect
    //  }




    // for (let j = 0; j < questionArray.length; j++) {
    //     questionArray[j]
    // }
    // questionArray[j] = document.querySelector(questionArray[j]).style.display = "block";
  
});

function timerStart () {
    setInterval(function(){
        timeLeft -= 1;
        timerEl.textContent = timeLeft;
    },1000)
    
}


// for (let i = 60; i--) {
//     setInterval(i = 60, i--);
// } else {
//     clearInterval(timeLeft);
// }


// function to hide original text and show question 1



// create buttons for answers and link them to js using if statement