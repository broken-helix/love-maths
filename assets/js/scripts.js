Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@broken-helix 
Code-Institute-Solutions
/
love-maths-2.0-sourcecode
Public template
generated from Code-Institute-Org/gitpod-full-template
Code
Issues
Pull requests
1
Actions
Projects
Security
Insights
love-maths-2.0-sourcecode/03-displaying-the-question-and-answer/01-displaying-the-addition-question/assets/js/script.js /
@AJGreaves
AJGreaves Add missing semi-colons for jshint validation.
Latest commit 44c1649 on Jun 11, 2021
 History
 1 contributor
71 lines (48 sloc)  1.57 KB

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}