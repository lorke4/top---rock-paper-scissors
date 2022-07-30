const rules = {
    rock: "paper",
    scissor: "rock",
    paper: "scissor"
}

function computerPlay() {
    const picks = ['rock', 'paper', 'scissor']
    return picks[Math.floor(Math.random() * 3)]
}

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
    if (rounds.filter(word => word === 'The computer').length == rounds.filter(word => word === 'You').length) {
        console.log(`The game ended in a draw, you both have ${rounds.filter(word => word === 'The computer').length} points.`)
    } else if (rounds.filter(word => word === 'The computer').length > rounds.filter(word => word === 'You').length) {
        console.log(`The computer won the game, with ${rounds.filter(word => word === 'The computer').length} points.`)
    } else {
        console.log(`You won the game, with ${rounds.filter(word => word === 'You').length} points.`)
    }
}

function displayScore(results) {
    const playerScores = document.querySelector('.score-left');
    let playerWins = parseInt(playerScores.innerText);
    playerWins += results.filter(word => word === 'The player').length;
    if(playerWins) {
        playerScores.innerText = playerWins.toString();
    }


    const computerScores = document.querySelector('.score-right')
    let computerWins = parseInt(computerScores.innerText);
    computerWins += results.filter(word => word === 'The computer').length
    if(computerWins) {
        computerScores.innerText = computerWins.toString();
    }
}

function game() {
    rounds = []
    results = playRound(this.innerText.toLowerCase(), computerPlay())
    showRoundResult(results)
    rounds.push(results.winner)
    displayScore(rounds)
    return rounds
    // return showGameResults(rounds)
}


// Dom 

function gameControll(){
    const buttons = document.querySelectorAll('button')
    buttons.forEach(e => e.addEventListener('click', game));
}

gameControll()