function computerPlay() {
    const picks = ['rock', 'paper', 'scissor']
    return picks[Math.floor(Math.random() * 3)]
}

const playerSelection = () => prompt("Pick an option [Rock, Paper, Scissor]").toString().toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return results = {
            winner: 'draw',
            winnerPick: playerSelection,
            loosePick: computerSelection
        }
    } else 
        switch (true) {
            case playerSelection === 'rock' && computerSelection === 'paper':
            case playerSelection === 'paper' && computerSelection === 'scissor':
            case playerSelection ==='scissor' && computerSelection === 'rock':
                return results = {
                    winner: 'The computer',
                    winnerPick: computerSelection,
                    loosePick: playerSelection
                }; 
            default:
                return results = {
                    winner: 'You',
                    winnerPick: playerSelection,
                    loosePick: computerSelection
                }; 
    }
}

function showRoundResult(results) {
    if (results.winner != 'draw') {
       return console.log(`${results.winner} won the round, ${results.winnerPick} beats ${results.loosePick}`);       
        
    } else {

       return console.log(`It's a draw, you both picked ${results.winnerPick}, ${results.loosePick}`);
    }
}

function showGameResults(rounds){
    if (rounds.filter(word => word === 'The computer').length == rounds.filter(word => word === 'You').length) {
        console.log(`The game ended in a draw, you both have ${rounds.filter(word => word === 'The computer').length} points.`)
    } else if (rounds.filter(word => word === 'The computer').length > rounds.filter(word => word === 'You').length) {
        console.log(`The computer won the game, with ${rounds.filter(word => word === 'The computer').length} points.`)
    } else {
        console.log(`You won the game, with ${rounds.filter(word => word === 'You').length} points.`)
    }
}

function game() {
    rounds = []
    for (let i = 0; i < 5; i++){
        results = playRound(playerSelection(), computerPlay())
        showRoundResult(results)
        rounds.push(results.winner)
    }
    return showGameResults(rounds)
}

game()