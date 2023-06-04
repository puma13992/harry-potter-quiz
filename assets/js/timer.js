/*jshint esversion: 6 */

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