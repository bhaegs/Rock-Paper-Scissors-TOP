// Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Global Variables
    const selRock = document.querySelector('#rock');
    const selPaper = document.querySelector('#paper');
    const selScissors = document.querySelector('#scissors');
    
    let = playerScore = 0;
    let = computerScore = 0;

    let computerChoice = computerPlay();
    let playerChoice = "";
    let playerWins = document.querySelector('#pWins');
    let computerWins = document.querySelector('#cWins');
    let result = document.querySelector('#res');
    let endGame = document.querySelector('#endGame');
    const replay = document.querySelector('#replay');

    document.querySelector('#res').textContent = 'Choose Rock, Paper, or Scissors';

function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return 'rock';
    } else if (play === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(playerSel, computerSel) {
    let playerChoice = playerSel.toLowerCase();
    let computerChoice = computerSel;

    if ((playerChoice === 'rock' && computerChoice === 'scissors')
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        computerWins.textContent = `${playerScore += 1}`;
        document.querySelector("#res").textContent = `You win! ${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        document.querySelector("#res").textContent = `It's a draw!`;
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')
    || (computerChoice === 'paper' && playerChoice === 'rock')
    || (computerChoice === 'scissors' && playerChoice === 'paper')) {
        playerWins.textContent = `${computerScore += 1}`;
        document.querySelector("#res").textContent = `You lose! ${computerChoice.slice(0, 1).toUpperCase()}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice}.`;
    } else if ((playerChoice !== 'rock', 'paper', 'scissors')) {
        document.querySelector("#res").textContent = `Choose rock, paper, or scissors, you idiot.`;
    }
};

function hideDisplay(){
    replay.style.visibility = "hidden";
};
  document.querySelector('#replay').disabled = true;
  endGame.textContent = "Game on!";
  endGame.style.color ="green";


function game(){
    playRound(playerSel, computerSel)

        if(playerScore >= 5){
            document.querySelector('#res').textContent = `You won! Here's the score: ${playerScore} to ${computerScore}.`
            document.querySelector('#res').style.color = 'green'
            gameOver();
        }
        else if(computerScore >= 5){
            document.querySelector('#res').textContent = `You Lose. Here's the score: ${computerScore} to ${playerScore}.` 
            document.querySelector('#res').style.color = 'red'
            gameOver();
        }       
};

selRock.addEventListener('click', ()=>{
    playerSel = "rock"
    computerSel = computerPlay()
    game()
});
selPaper.addEventListener('click', ()=>{
    playerSel = "paper"
    computerSel = computerPlay()
    game()
});
selScissors.addEventListener('click', ()=>{
    playerSel = "scissors"
    computerSel = computerPlay()
    game()
});

function showDisplay(){
    replay.style.visibility = "visible";
};

function gameOver(){
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    endGame.textContent = "Game Over";
    endGame.style.color = 'red';
    document.querySelector('#replay').disabled = false;
    replay.textContent = "Restart";
    showDisplay()
};

replay.addEventListener('click', ()=>{
    playAgain();
});

function playAgain(){
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    endGame.textContent = "Game on!";
    endGame.style.color = "green";
    document.querySelector('#res').textContent = "Select Rock, Paper or Scissors to play";
    playerScore = 0; 
    computerScore = 0;
    computerWins.textContent = computerScore;
    playerWins.textContent = playerScore;
    hideDisplay()
};
