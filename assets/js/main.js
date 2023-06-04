/*jshint esversion: 6 */

/** Add an event listener to the document 
 * and run the start section with username log-in
 */ 
document.addEventListener('DOMContentLoaded', function () {
    runStartSection();
  });

// Set up of game variables 
const mainSection = document.getElementById("start-section");
const errorMessage = document.getElementById("error-message");
const difficultySection = document.getElementById("difficulty-section");
const quizSection = document.getElementById("quiz-section");
const endSection = document.getElementById("end-section");

// Set up level button variables
let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
let proBtn = document.getElementById("pro-btn");

/**
 * Show the start section with username log-in and instruction icon
 */
function runStartSection() {
  errorMessage.style.display = "none";
  difficultySection.style.display = "none";
  quizSection.style.display = "none";
  endSection.style.display = "none";  
}

/**
 * Show modal with instructions
 * using Bootstrap library
 */ 
let myModal = document.getElementById('instruction-modal');
let myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});

//Event listener for the start button
document.getElementById("start-btn").addEventListener("click", function() {
  buttonSound();
  checkUsername();
});

/**
 * Verification of the username input
 * Code used from the Sunshine Guessing project
 * https://github.com/aleksandracodes/CI_PP2_SunshineGuessing/blob/main/assets/js/game.js 
 * and complemented and adapted with parts of own code
 */
function checkUsername() {
  let username = document.getElementById("user").value.trim();

  if (username.length >= 3 && username.length <= 15) {
    mainSection.style.display = "none";
    difficultySection.style.display = "block";
    quizSection.style.display = "none";
    endSection.style.display = "none";
    document.getElementById("username").innerText = "Hey " + username + "!";

    // Username in quiz section
    document.getElementById("username2").innerText = "Hey " + username + "!";

    // Username in end section
    document.getElementById("username3").innerText = username;

  } else {
    errorMessage.style.display = "block";
    difficultySection.style.display = "none";
    quizSection.style.display = "none";
    endSection.style.display = "none";  
    document.getElementById("user").focus();    
  }
}

checkUsername();