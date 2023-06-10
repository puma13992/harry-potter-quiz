/**
 * Timer code used from the Astronomy quiz project
 * https://github.com/MikeR94/CI-Project-Portfolio-2/blob/main/assets/js/timer.js 
 * and adapted with small parts of own code
 */

// Variables
const gameTimer = document.getElementById("timer");
let timeLeft;
let timer;

/**
 * Used to start the time for the player and counts down every 1 second. Works in conjunction with countdown()
 * and takes in the timeLeft parameter to set the time
 */
function startTimer() {
    timeLeft = 30;
    timer = setInterval(function () {
      countdown();
      gameTimer.innerHTML = timeLeft;
      if (timeLeft < 11) {
          gameTimer.style.color = "red";
        } else {
          gameTimer.style.color = "#fff";
        }
    }, 1000);
  }

  /**
 * Function to countdown the timeLeft and check if the timeLeft is 0. If no time left then the timer stops and
 * all answer buttons are disabled so the player can't select an answer. It also loops through the answerButtons
 * and displays the correct answer to the player if the time is up.
 */
function countdown() {
    let correctAnswer = shuffledQuestions[questionIndex].answer;
    let answerButtons = document.getElementsByClassName("choices");
    
    if (timeLeft === 0) {
      stopTimer();
      nextQuestionButton.style.display = "initial";
      answer1.style.pointerEvents = "none";
      answer2.style.pointerEvents = "none";
      answer3.style.pointerEvents = "none";
      answer4.style.pointerEvents = "none";
      incrementWrongScore();  
      } else {
        timeLeft -= 1;
      }
    
    for (let i = 0; i < answerButtons.length; i++) {
      if (answerButtons[i].value === correctAnswer && timeLeft === 0) {
        document.getElementById("answer" + (correctAnswer + 1) + "-btn").style.backgroundColor = "green";
      } else if (answerButtons[i] !== correctAnswer && timeLeft === 0) {
        document.getElementById("answer" + (correctAnswer + 1) + "-btn").style.backgroundColor = "green";
      }
    }
  }

/**
 * Fucntion to stop the timer
 */
function stopTimer() {
    clearInterval(timer);
  }