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

/**
 * Input of username using by pressing enter key
 * Code used from the Sunshine Guessing project
 * https://github.com/aleksandracodes/CI_PP2_SunshineGuessing/blob/main/assets/js/game.js 
 */
document.getElementById("user").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkUsername();
  }
});

/**
 * Set up game level event listener
 * and based on user's selection display relevant game level and settings
 * after a small delay
 */
let getLevel = "";

easyBtn.addEventListener("click", function() {
  buttonSound();
  getLevel = "easy";
  setTimeout(function () {
    runQuiz("easy");
  }, 500);
});

mediumBtn.addEventListener("click",  function() {
  buttonSound();
  getLevel = "medium";
  setTimeout(function () {
    runQuiz("medium");
  }, 500);
});

hardBtn.addEventListener("click", function() {
  buttonSound();
  getLevel = "hard";
  setTimeout(function () {
    runQuiz("hard");
  }, 500);
});

proBtn.addEventListener("click", function() {
  buttonSound();
  getLevel = "pro";
  setTimeout(function () {
    runQuiz("pro");
  }, 500);
});

// Variables for questions
let shuffledQuestions = 0;
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let maxQuestions; 

/**
 * Function to run the game and display chosen game level 
 */
function runQuiz(level) {
  mainSection.style.display = "none";
  difficultySection.style.display = "none";
  quizSection.style.display = "block";
  endSection.style.display = "none";
  showQuestion(0, shuffledQuestions);

  if (level === "easy") {
    maxQuestions = shuffledQuestions.slice(0, 4);
  } else if (level === "medium") {
    maxQuestions = shuffledQuestions.slice(0, 9);
  } else if (level === "hard") {
    maxQuestions = shuffledQuestions.slice(0, 14);
  } else if (level === "pro") {
    maxQuestions = shuffledQuestions.slice(0, 19);
  }
}

// Variables for playing the game
let questionIndex = 0;
let answerClicked = false;
let answer1 = document.getElementById("answer1-btn");
let answer2 = document.getElementById("answer2-btn");
let answer3 = document.getElementById("answer3-btn");
let answer4 = document.getElementById("answer4-btn");

/**
 * Function to reset background colors of the buttons 
 * after clicked on an answer
 */
function resetButtonColors() {
  answer1.style.backgroundColor = "";
  answer2.style.backgroundColor = "";
  answer3.style.backgroundColor = "";
  answer4.style.backgroundColor = "";
}

/**
 * Show questions, hide next question button
 * until answer is clicked and reset timer and
 * button background colors after each clicked answer
 */
function showQuestion(questionIndex) {

  // Timer
  gameTimer.innerHTML = 30;
  gameTimer.style.color = "#fff";
  startTimer();

  // Reset button colors
  resetButtonColors();

  // Call questions and choices from array
  let currentQuestion = questions[questionIndex].question;
  let choices = questions[questionIndex].choices;

  // Hide next question button until answer is clicked
  nextQuestionButton.style.display = "none";

  // Display question
  let questionElement = document.getElementById("current-question");

  for (let i = 0; i < currentQuestion.length; i++) {
    questionElement.innerHTML = "<h2>" + currentQuestion + "</h2>"; 
  }

  // Dispaly answer choices
  for (let i = 0; i < choices.length; i++) {
    answer1.innerText = choices[0];
    answer2.innerText = choices[1];
    answer3.innerText = choices[2];
    answer4.innerText = choices[3];
  } 
}

/*
 * Show next question after clicking on next question button
 */
let nextQuestionButton = document.getElementById("next-question-btn");

nextQuestionButton.addEventListener("click", function() {

  //Play button sound
  buttonSound();

  //Small delay to show the next question 
  setTimeout(function () {
    
    // Reset pointer events from the answer buttons
    answer1.style.pointerEvents = "auto";
    answer2.style.pointerEvents = "auto";
    answer3.style.pointerEvents = "auto";
    answer4.style.pointerEvents = "auto";

    // Show next question or finish quiz if there are no more questions left
    if (questionIndex < maxQuestions.length) {
      resetButtonColors();
      showQuestion(++questionIndex);

    } else {
      mainSection.style.display = "none";
      difficultySection.style.display = "none";
      quizSection.style.display = "none";
      showEndSection();
    }
  }, 500);
});

// Set up event listener for answer options
answer1.addEventListener("click", function() {
  checkAnswer(0);
});
  
answer2.addEventListener("click", function() {
  checkAnswer(1);
});
  
answer3.addEventListener("click", function() {
  checkAnswer(2);
});
  
answer4.addEventListener("click", function() {
  checkAnswer(3);
});

/**
 * Check answers and disable answer buttons after 
 * click on an answer
 */
function checkAnswer(selectedAnswer) {
  let correctAnswer = shuffledQuestions[questionIndex].answer;

  // Disable answer buttons if one answer is clicked
  answer1.style.pointerEvents = "none";
  answer2.style.pointerEvents = "none";
  answer3.style.pointerEvents = "none";
  answer4.style.pointerEvents = "none";
    
  if (selectedAnswer === correctAnswer) {
    // Answer is correct
    document.getElementById("answer" + (selectedAnswer + 1) + "-btn").style.backgroundColor = "green";
    answerClicked = true;
    stopTimer();
    correctSound();
    incrementScore();
    finalScore();
    nextQuestionButton.style.display = "initial";

  } else {
    // Answer is wrong
    document.getElementById("answer" + (selectedAnswer + 1) + "-btn").style.backgroundColor = "red";
    stopTimer();
    incorrectSound();
    incrementWrongScore();

    // Correct answer gets green background
    document.getElementById("answer" + (correctAnswer + 1) + "-btn").style.backgroundColor = "green";
    answerClicked = true;
    nextQuestionButton.style.display = "initial";
  }
}

// Variables for score and score images
let score = 0;
let scoreElement = document.getElementById("score");
let correctImage = 'assets/images/hogwarts-logo.png';
let wrongImage = 'assets/images/broken-magic-wand.jpg';

/**
 * Current score of correct answers
 * are shown with images and increment by 1
 */
function incrementScore() {
  score++;
  scoreElement.innerHTML += "<img src='" + correctImage + "' class='p-2'>";
}

/**
 * Current score of correct and incorrect answers
 * are shown with images and increment by 1
 */
function incrementWrongScore() {
  score++;
  scoreElement.innerHTML += "<img src='" + wrongImage + "' class='p-2'>";
}

// Variables for final score
let scoreMessage = document.getElementById("score-message");
let scoreImage = document.getElementById("score-image");
const imageRon = 'assets/images/ron-weasley-sketch.png';
const imageHarry = 'assets/images/harry-potter-sketch.png';
const imageHermione = 'assets/images/hermione-granger-sketch.png';
const imageDumbledore = 'assets/images/albus-dumbledore-sketch.png';

/**
 * Function to get the final score and
 * to show message and image
 * at the end section based on total correct score and level
 * Code for the function used from the Love Maths project
 */
function finalScore() {
  let endScore = parseInt(document.getElementById("score-correct").innerText);
  document.getElementById("score-correct").innerText = ++endScore;

  // Level easy
  if (getLevel === "easy") {
    if (endScore > 3) {
      scoreMessage.innerText = "You are a true magic genius! Be ready for your owl from Hogwarts.";
      scoreImage.innerHTML = "<img src='" + imageDumbledore + "' class='img-fluid p-2'>";  
    } else if (endScore === 3) {
      scoreMessage.innerText = "You're on a good way!";
      scoreImage.innerHTML = "<img src='" + imageHermione + "' class='img-fluid p-2'>";
    } else if (endScore === 2) {
      scoreMessage.innerText = "Not bad, but it could be better...";
      scoreImage.innerHTML = "<img src='" + imageHarry + "' class='img-fluid p-2'>";
    } else if (endScore <= 1) {
      scoreMessage.innerText = "Mnnnaa, maybe you'll try again?";
      scoreImage.innerHTML = "<img src='" + imageRon + "' class='img-fluid p-2'>";
    } 
  }

  // Level medium
  if (getLevel === "medium") {
    if (endScore > 8) {
      scoreMessage.innerText = "You are a true magic genius! Be ready for your owl from Hogwarts.";
      scoreImage.innerHTML = "<img src='" + imageDumbledore + "' class='img-fluid p-2'>";  
    } else if (endScore === 6 || endScore === 7 || endScore === 8) {
      scoreMessage.innerText = "You're on a good way!";
      scoreImage.innerHTML = "<img src='" + imageHermione + "' class='img-fluid p-2'>";
    } else if (endScore === 3 && endScore <= 5) {
      scoreMessage.innerText = "Not bad, but it could be better...";
      scoreImage.innerHTML = "<img src='" + imageHarry + "' class='img-fluid p-2'>";
    } else if (endScore <= 2) {
      scoreMessage.innerText = "Mnnnaa, maybe you'll try again?";
      scoreImage.innerHTML = "<img src='" + imageRon + "' class='img-fluid p-2'>";
    }
  }

  // Level hard
  if (getLevel === "hard") {
    if (endScore > 13) {
      scoreMessage.innerText = "You are a true magic genius! Be ready for your owl from Hogwarts.";
      scoreImage.innerHTML = "<img src='" + imageDumbledore + "' class='img-fluid p-2'>";  
    } else if (endScore === 9 && endScore <= 13) {
      scoreMessage.innerText = "You're on a good way!";
      scoreImage.innerHTML = "<img src='" + imageHermione + "' class='img-fluid p-2'>";
    } else if (endScore === 4 && endScore <= 8) {
      scoreMessage.innerText = "Not bad, but it could be better...";
      scoreImage.innerHTML = "<img src='" + imageHarry + "' class='img-fluid p-2'>";
    } else if (endScore <= 3) {
      scoreMessage.innerText = "Mnnnaa, maybe you'll try again?";
      scoreImage.innerHTML = "<img src='" + imageRon + "' class='img-fluid p-2'>";
    }
  }

  // Level pro
  if (getLevel === "pro") {
    if (endScore >= 18) {
      scoreMessage.innerText = "You are a true magic genius! Be ready for your owl from Hogwarts.";
      scoreImage.innerHTML = "<img src='" + imageDumbledore + "' class='img-fluid p-2'>";  
    } else if (endScore === 12 && endScore <= 17) {
      scoreMessage.innerText = "You're on a good way!";
      scoreImage.innerHTML = "<img src='" + imageHermione + "' class='img-fluid p-2'>";
    } else if (endScore === 5 && endScore <= 11) {
      scoreMessage.innerText = "Not bad, but it could be better...";
      scoreImage.innerHTML = "<img src='" + imageHarry + "' class='img-fluid p-2'>";
    } else if (endScore <= 4) {
      scoreMessage.innerText = "Mnnnaa, maybe you'll try again?";
      scoreImage.innerHTML = "<img src='" + imageRon + "' class='img-fluid p-2'>";
    }
  }
}

/**
 * Show the end section with the final score 
 * and number of questions
 */
function showEndSection() {
  mainSection.style.display = "none";
  difficultySection.style.display = "none";
  quizSection.style.display = "none";
  endSection.style.display = "block";

  // Show number of questions
  let numberQuestionsElement = document.getElementById("number-questions");
  let numberQuestions = maxQuestions.length+1;
  numberQuestionsElement.textContent = numberQuestions.toString();
}