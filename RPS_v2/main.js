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



   document.getElementById("rock").onclick = function() {playRound('rock', computerPlay())};
   document.getElementById("paper").onclick = function() {playRound('paper', computerPlay())};
   document.getElementById("scissors").onclick = function() {playRound('scissors', computerPlay())};


    let = playerScore = 0;
    let = computerScore = 0;
    let = tie = 0;

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
        return `You win! ${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        tie++;
        return `It's a draw!`;
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')
    || (computerChoice === 'paper' && playerChoice === 'rock')
    || (computerChoice === 'scissors' && playerChoice === 'paper')) {
        computerScore++;
        return  `You lose! ${computerChoice.slice(0, 1).toUpperCase()}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice}.`;
    } else if ((playerChoice !== 'rock', 'paper', 'scissors')) {
        return `Type rock, paper, or scissors, you idiot.`;
    }
};

function game() {
        playerSel = prompt(`Enter rock, paper, or scissors. 5 rounds. Best player wins.`);
        computerSel = computerPlay();
        const result = playRound(playerSel, computerSel);
        console.log(result);
        
    if (playerScore >= 3) {
        console.log(`You won the game! Score: Player - ${playerScore}, Computer - ${computerScore}, Ties - ${tie}`);
    } else if (computerScore >= 3) {
        console.log(`You lost the game! Score: Player - ${playerScore}, Computer - ${computerScore}, Ties - ${tie}`);
    } else {
        console.log(`It's a tie! Score: Player - ${playerScore}, Computer - ${computerScore}, Ties - ${tie}`)
    };
    
};


