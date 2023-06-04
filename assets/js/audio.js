/*jshint esversion: 6 */

/**
 * All audio code used from the Astronomy quiz project
 * https://github.com/MikeR94/CI-Project-Portfolio-2/blob/main/assets/js/audio.js 
 * and adapted with small parts of own code
 */

// Set up audio variables 
let isPlaying = false;
let soundOff = document.getElementsByClassName("sound-off");
let soundOn = document.getElementsByClassName("sound-on");
const buttonAudio = new Audio("assets/sounds/woosh-magic.mp3");
const correctAudio = new Audio("assets/sounds/magic-tinkle.mp3");
const incorrectAudio = new Audio("assets/sounds/broken-glas.mp3");
const sound = new Audio("assets/sounds/harry-potter-theme.mp3");
sound.loop = true;

/**
 * Function to have the option for sound on or not
 */
function toggleAudio() {
    if (isPlaying) {
      toggleAudioOff();
    } else {
      toggleAudioOn();
    }
  }