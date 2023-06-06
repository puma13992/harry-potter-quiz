# Harry Potter Quiz

This site is intended to play a multiple choice game with questions about Harry Potter.

![Harry Potter Quiz](assets/images/readme/mock-up-screens.JPG)

## Features

### Existing features

- __Start screen__
  - This section shows an introduction to the game, an instruction icon which opens an instruction modal by clicking and an audio icon.
  - The user can toggle the audio on or off.
  - The user have to type his/her name into the input field to go further.
  - If the input field is empty or the name has less than 3 characters, an error message is shown.

![Start Screen](assets/images/readme/start-screen.JPG)
![Start Screen Error Message](assets/images/readme/start-screen-error.JPG)

- __Instruction screen__
  - The user can click on the icon to open the instruction modal.
  - The instruction icon appears on the start and level screen.

![Instruction Screen](assets/images/readme/instruction-screen.JPG)

- __Level screen__
  - The user can choose four different levels: Easy, medium, hard or professional.
  - Each level has a different number of questions.
  - The username appears on the top of the section.
  - Also the instruction and audio icon appear.

![Level Screen](assets/images/readme/level-screen.JPG)

- __Question screen__
  - The question screen shows one question at the time. 
  - Only after clicking on one answer option, the next question button appears.
  - If the answer is correct, the button turns green and the Hogwarts logo appears at the bottom of the section.
  - If the answer is incorrect, the button turns red, the correct answer button turns green and a broken magic wand appears at the bottom of the section.
  - The player will have 30 seconds to answer any question regardless of difficulty level.
  - Time will reset back to 30 seconds upon loading the next question.
  - Time will visibly turn red when the time left is 10 seconds or less.
  - If no answer is chosen and no time left, the correct answer turns green but the image for an incorrect answer appears.
  - The username appears on the top of the section.
  - Also the audio icon appears and a timer.

![Question Screen](assets/images/readme/question-screen.JPG)
![Question Screen Correct Answer](assets/images/readme/question-screen-correct.JPG)
![Question Screen Incorrect Answer](assets/images/readme/question-screen-incorrect.JPG)
![Question Screen No Answer](assets/images/readme/question-screen-no-answer.JPG)
![Question Screen Timer](assets/images/readme/question-screen-timer.JPG)

- __End screen__
  - The end screen contains the final score and shows a message and an image.
  - The message and image depend on the final score.
  - There are four messages and images in total.
  - The username appears on the top of the section.
  - Also the audio icon and a try again button appear.

![End Screen](assets/images/readme/end-section.JPG)

- __Footer section__
  - The footer appears on each section.
  - The footer contains a copyright.

![Footer section](assets/images/readme/footer.jpg)

### Features Left to Implement

- There are no features left to implement.

## Technologies used

### Languages used

- HTML5: Provides the content and structure for the website.
- CSS: Provides the styling for the website.
- JavaScript: Provides the functionality of the website.

### Frameworks - Libraries - Programs Used

- [Bootstrap v5.3.0-alpha3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - Bootstrap to use prebuilt grid system and components, like buttons, carousels and nav bars.
- [Git](https://git-scm.com/)
  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [Github](https://github.com/)
  - GitHub is used to store the project's code after being pushed from Git.
- [Am I Responsive](http://ami.responsivedesign.is/) 
    - Am I responsive was used to create the multi-device mock-up you can see at the start of this README.md file.
- [Favicon.io](https://favicon.io/)
    - Favicon.io for making the site favicon
- [Chrome dev tools](https://developer.chrome.com/docs/devtools/)
    - Chrome dev tools were used for debugging of the code and check site for responsiveness.
- [WC3 Validator](https://validator.w3.org/), [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) and [JShint](https://jshint.com/) were all used to validate the website.