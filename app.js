const rules = {
    rock: "paper",
    scissor: "rock",
    paper: "scissor"
}

function computerPlay() {
    const picks = ['rock', 'paper', 'scissor']
    return picks[Math.floor(Math.random() * 3)]
}

const rounds = []

// const playerSelection = () => prompt("Pick an option [Rock, Paper, Scissor]").toString().toLowerCase();

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return {
            winner: 'draw',
            winnerPick: playerSelection,
            loosePick: computerSelection
        }
    } else if(rules[computerSelection] === playerSelection){
        return {
            winner: "The player",
            winnerPick: playerSelection,
            loosePick: computerSelection
        } 
    } else {
        return {
            winner: "The computer",
            winnerPick: computerSelection,
            loosePick: playerSelection
        }
    }
}

function showRoundResult(results) {
    const p1 = document.querySelector('p')
    if (results.winner != 'draw') {
       return p1.innerText = (`${results.winner} won the round, ${results.winnerPick} beats ${results.loosePick}`);       
        
    } else {
       return p1.innerText = (`It's a draw, you both picked ${results.winnerPick}.`);
    }
}

function announceGameResults(rounds) {
    const scoreBoard = document.querySelector('.scoreboard')
    const resultsDiv = document.createElement('div');
    const resultsText = document.createElement('p');
    resultsDiv.appendChild(resultsText)
    scoreBoard.appendChild(resultsDiv)
    if (rounds.filter(word => word === 'The computer').length > rounds.filter(word => word === 'The player').length) {
       return resultsText.innerText = "The computer won the game."
    } else {
       return resultsText.innerText = "You won the game."
    }
}

function stopGame() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(e => e.removeEventListener('click', gamePlay));
}

function checkGameOver(rounds){
    if((rounds.filter(word => word === 'The computer').length) >= 5 || (rounds.filter(word => word === 'The player').length) >= 5){
        announceGameResults(rounds);
        stopGame()
    }
}

function displayScore(results) {
    const playerScores = document.querySelector('.score-left');
    const playerWins = results.filter(word => word === 'The player').length
    if(playerWins) {
        playerScores.innerText = playerWins.toString();
    }


    const computerScores = document.querySelector('.score-right')
    const computerWins = results.filter(word => word === 'The computer').length
    if(computerWins) {
        computerScores.innerText = computerWins.toString();
    }
}

function gamePlay() {
    results = playRound(this.innerText.toLowerCase(), computerPlay())
    showRoundResult(results)
    rounds.push(results.winner)
    displayScore(rounds)
    checkGameOver(rounds)
}


// Dom 

function gameControll(){
    const buttons = document.querySelectorAll('button')
    buttons.forEach(e => e.addEventListener('click', gamePlay));
}

gameControll();
