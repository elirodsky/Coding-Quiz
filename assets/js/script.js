var startButton = document.querySelector(".start-button"); //creates a variable for the start quiz button

var timerCount = document.getElementById("time-count"); //creates a variable for the timer count

startButton.setAttribute("style", "color: white; background: purple; "); //styled the start quiz button 

var startScreen = document.getElementById("start-screen"); //creates variable that selects the content class

var gameEl = document.getElementById("game"); //creates variable that identifies the questions & answers of quiz

startButton.addEventListener("click", startGame); //creates event when start quiz button is clicked

var index = 0 //index for what questions you are on related to array

var time = 70; //creates variable of time value for timer

var timerCounter; //for timer 


    //questions, answers, and correct answers
var data = [
    {
        question: "Commonly Used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers" 
        ],
        correctResponse: "alerts"
    },
    {
        question: "Commonly Used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers" 
        ],
        correctResponse: "alerts"
    },
    {},
    {}
];

function timer () {
    time = time - 1 
    timerCount.textContent = time; 

    if (time <= 0) {//stop timer
        time = 0;
        clearInterval(timerCounter);
        gameOver()
    } 
}
//for(var i = 0; i < 10; i++)//i++ -> i = i + 1
function startGame (event) {
   timerCounter = setInterval(timer, 1000); //1000 will  run it every 1 second 
   startScreen.classList.add("hide");
   gameEl.classList.remove("hide");
   gameEngine(0);
}

function gameEngine(currentQuestion) { //dom manipulation
   showQuestion(currentQuestion)
    showAnswers(currentQuestion)
}
function showQuestion(index) {
    //goals: create the el, get the text, put the el on the page (DOM)
    if (document.getElementById("questionEl")){
        document.getElementById("questionEl").remove()
    }
    var questionEl = document.createElement('h1');
    questionEl.textContent = data[index].question;
    questionEl.id = "questionEl"
    document.getElementById("question").append(questionEl)
}
function showAnswers(index) {
    //goals: create the el, get the text, put the el on the page (DOM)
    if (document.getElementById("answersEl")){
        document.getElementById("answersEl").remove()
    }
    var answersEl = document.createElement('ol');
    for (var i = 0; i < data[index].answers.length; i++) {
       var answerLI = document.createElement('li')
       answerLI.textContent = data[index].answers[i]
       answersEl.append(answerLI)
       //eventListener to response to the click
       answerLI.addEventListener("click", function (event){
           checkAnswer(event, index)
       })  
    }
    answersEl.id = "answersEL";
    document.getElementById("answers").append(answersEl)
}

function checkAnswer(event, index) { 
    var response = event.target.textContent;
    if (response === data[index].correctResponse) {
        //add to a score
        //go to next question (if not last question)  Else go to gamveOver
        index++
        gameEngine(index)
    } else {
        //adjust timer
        //go to next question (if not last question) Else go to gamveOver
        index = index + 1
        gameEngine(index)
    }

}

function gameOver() {//hide everything then have user type initials after time stopped

}