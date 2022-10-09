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

// highScores.addEventListener("click", function({
    

// })

    
    
    // hide all body text and load local storage

function shuffle(questionArray){
    questionArray.sort(() => Math.random() - 0.5);
}

startQuizBtn.addEventListener("click",function() {
    
    shuffle(questionArray);
    titleBoxEl.style.display = "none";
    for (let i = 0; i < questionArray.length; i++) {
        questionArray[i]= document.querySelector(questionArray[i]).style.display = "block";
    }
    // questionArray[i] = document.querySelector(questionArray[i]).style.display = "block";


    // start array
  
});

// for (let i = 60; i--) {
//     setInterval(i = 60, i--);
// } else {
//     clearInterval(timeLeft);
// }
// function timerStart () {
//     setInterval(function(){
//    timeLeft -= 1;
//    timerEl.textContent = timeLeft;
//     },1000)
  
// }




// function to hide original text and show question 1



// create buttons for answers and link them to js using if statement