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