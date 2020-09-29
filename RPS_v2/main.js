
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

    const selRock = document.querySelector('#rock');
    const selPaper = document.querySelector('#paper');
    const selScissors = document.querySelector('#scissors');

   document.getElementById('rock').onclick = function() {playRound('rock', computerPlay())};
   document.getElementById('paper').onclick = function() {playRound('paper', computerPlay())};
   document.getElementById('scissors').onclick = function() {playRound('scissors', computerPlay())};


    let = playerScore = 0;
    let = computerScore = 0;
    let = tie = 0;

    let computerChoice = computerPlay();
    let playerChoice = "";
    let playerWins = document.querySelector('#pWins');
    let drawGame = document.querySelector('#tie')
    let computerWins = document.querySelector('.cWins');
    let result = document.querySelector('#res');
    let endGame = document.querySelector('.endGame');
    const replay = document.querySelector('#replay');


function hideDisplay(){
    replay.style.visibility = "hidden";
};

function showDisplay(){
    replay.style.visibility = "visible";
};

    document.querySelector('#replay').disabled = true;
    endGame.textContent = "Game on!";
    endGame.style.color ="green";

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
        playerScore++;
        document.querySelector("#res").textContent = `You win! ${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        tie++;
        return `It's a draw!`;
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')
    || (computerChoice === 'paper' && playerChoice === 'rock')
    || (computerChoice === 'scissors' && playerChoice === 'paper')) {
        computerScore++;
        document.querySelector("#res").textContent = `You lose! ${computerChoice.slice(0, 1).toUpperCase()}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice}.`;
    } else if ((playerChoice !== 'rock', 'paper', 'scissors')) {
        document.querySelector("#res").textContent = `Choose rock, paper, or scissors, you idiot.`;
    }
};

    document.querySelector('#replay').disabled = true;
    endGame.textContent = "Game on!";
    endGame.style.color ="green";

function game(){
    playRound(playerSelection, computerSelection)

        if(playerScore >= 5){
            document.querySelector('#res').textContent = `You won! Here's the score: ${playerScore} to ${computerScore}.`
            document.querySelector('#res').style.color = 'green'
            gameOver();
        }
        else if(computerScore >= 5){
            document.querySelector('#res').textContent = `Ooops! You Lose. Computer beat you by 
            ${computerScore} to ${playerScore} point(s).` 
            document.querySelector('#res').style.color = 'red'
            gameOver();
        }

        else if(tieGame >= 5){
            document.querySelector('#res').textContent = `You tied! Here's the score: You got ${playerScore}, 
            The Computer got ${computerScore} and there were ${tieGame} tie games.`;
            document.querySelector('#res').style.color = 'orange'
            gameOver();
        }
       
}

function gameOver(){
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    endGame.textContent = "Game Over!";
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
    document.querySelector('#instructions').textContent = "Select Rock, Paper or Scissors to play";
    playerScore = 0; 
    computerScore = 0;
    tieGame = 0;
    computerWins.textContent = computerScore;
    playerWins.textContent = playerScore;
    drawGame.textContent = tieGame;
    hideDisplay()
};
