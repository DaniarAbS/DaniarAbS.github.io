
const score = JSON.parse(localStorage.getItem('score')) || 
{
 wins: 0,
 losses: 0,
 ties: 0
}

// need to show score when player started a game or uploaded a page
updateScoreElement ();

//didn't need, this is just example
/*
if (!score) {
 score = {
   wins: 0,
   losses: 0,
   ties: 0
 };
};
*/

// main function
function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';
let countPlayer = 0;
let countComputer = 0;

if (playerMove === 'scissors') {
 if (computerMove === 'rock') {
   result = 'You lose.';
 } else if (computerMove === 'paper') {
   result = 'You win.';
 } else if (computerMove === 'scissors') {
   result = 'Tie.';
 }

} else if (playerMove === 'paper') {
 if (computerMove === 'rock') {
   result = 'You win.';
 } else if (computerMove === 'paper') {
   result = 'Tie.';
 } else if (computerMove === 'scissors') {
   result = 'You lose.';
 }
 
} else if (playerMove === 'rock') {
 if (computerMove === 'rock') {
   result = 'Tie.';
 } else if (computerMove === 'paper') {
   result = 'You lose.';
 } else if (computerMove === 'scissors') {
   result = 'You win.';
 }
}

if (result === 'You win.') {
   score.wins += 1;
}else if (result === 'You lose.') {
   score.losses += 1;
}else if (result === 'Tie.') {
   score.ties += 1;
}

// Need to saving a total score in local storage like string
localStorage.setItem('score', JSON.stringify(score));

//Giving a result of game like: You lose!
document.querySelector('.gameResult')
   .innerHTML = result;

let playerMoveImg;
let computerMoveImg;
   
document.querySelector('.moves')
   .innerHTML = `You
               <img src="images/${playerMove}-emoji.png" class="move-icon">
               <img src="images/${computerMove}-emoji.png" class="move-icon">
               Computer`;

// need to immediately update a score after starting a game by clicking button
updateScoreElement ();

//need to delete, for making a popup

// alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);

}
    
function displayImage(src, width, height){
var rock = document.createElement("img");
rock.src = src;
img.width = width;
img.height = height;
document.body.appendChild(img);
}

//for showing a total score
function updateScoreElement () {
document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

// random act that pick computer while game
function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
 computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
 computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
 computerMove = 'scissors';
}

return computerMove;
}




const imageInput = document.getElementById('imageInput');
const userImage = document.getElementById('userImage');

// Function to handle image change
function handleImageChange() {
    const selectedImage = imageInput.files[0];

    if (selectedImage) {
        const imageUrl = URL.createObjectURL(selectedImage);
        userImage.src = imageUrl;
    }
}

// Function to handle click on user image (to trigger file input)
userImage.addEventListener('click', function() {
    imageInput.click();
});
