let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");

let compScore = document.querySelector(".computer-score");
let playerScore = document.querySelector(".player-score");
let showWinner = document.querySelector(".announcement");

let score1 = 0;
let score2 = 0;

// compScore.value = score1;
// playerScore.value = score2;
let player = "";
let computer = "";

function computerTurn() {
  let arrayForComputer = ["scissors", "rock", "paper"];
  computer = arrayForComputer[Math.floor(Math.random() * 3)];
}
scissors.addEventListener("click", () => {
  player = "scissors";
  computerTurn();
  checkWinner();
});

rock.addEventListener("click", () => {
  player = "rock";
  computerTurn();
  checkWinner();
});

paper.addEventListener("click", () => {
  player = "paper";
  computerTurn();
  checkWinner();
});

function disableTools() {
  scissors.removeEventListener("mousedown");
  paper.removeEventListener("mousedown");
  rock.removeEventListener("mousedown");
}

let song1 = new Audio("music/puru.mp3");
let song2 = new Audio("music/nyan.mp3");

function finalResult() {
  if (score1 === 5) {
    song1.play();
    compScore.textContent = "COMPUTER WON!";
    playerScore.textContent = "YOU LOST!";
    disableTools();
  } else if (score2 === 5) {
    song2.play();
    compScore.textContent = "COMPUTER LOST!";
    playerScore.textContent = "YOU WON!";
    disableTools();
  }
}

function checkWinner() {
  if (player === computer) {
    score1;
    score2;
    showWinner.textContent = "It's a tie";
  } else if (player == "scissors" && computer == "rock") {
    score1++;
    rock.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Rock beats scissors";
    setTimeout(() => {
      rock.style.border = "4px solid transparent";
    }, 1000);
  } else if (player == "scissors" && computer == "paper") {
    score2++;
    scissors.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Scissors beat paper";
    setTimeout(() => {
      scissors.style.border = "4px solid transparent";
    }, 1000);
  } else if (player == "paper" && computer == "rock") {
    score2++;
    paper.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Paper beats rock";
    setTimeout(() => {
      paper.style.border = "4px solid transparent";
    }, 1000);
  } else if (player == "paper" && computer == "scissors") {
    score1++;
    scissors.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Scissors beat paper";
    setTimeout(() => {
      scissors.style.border = "4px solid transparent";
    }, 1000);
  } else if (player == "rock" && computer == "scissors") {
    score2++;
    rock.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Rock beats scissors";
    setTimeout(() => {
      rock.style.border = "4px solid transparent";
    }, 1000);
  } else if (player == "rock" && computer == "paper") {
    score1++;
    paper.style.border = "4px solid #B9FF54";
    showWinner.textContent = "Paper beats rock";
    setTimeout(() => {
      paper.style.border = "4px solid transparent";
    }, 1000);
  }
  document.querySelector(".new-game").addEventListener("click", () => {
    song1.pause();
    song2.pause();
    startNewGame();
  });
  finalResult();
  compScore.textContent = `Computer score: ${score1}`;
  playerScore.textContent = `Player score: ${score2}`;
}

function startNewGame() {
  if (
    compScore.textContent == "COMPUTER WON!" ||
    compScore.textContent == "COMPUTER LOST!"
  ) {
    score1 = 0;
    score2 = 0;
    compScore.textContent = `Computer score: ${score1}`;
    playerScore.textContent = `Player score: ${score2}`;
  }
}
