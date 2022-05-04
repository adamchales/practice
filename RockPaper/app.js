//array for the computer's choices; determined by line 15
const options = ["rock", "paper", "scissors"];

//buttons for each player choice and to reset the game
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('sciss');
const resetButton = document.getElementById('reset');

let compScore = 0;
let pScore = 0;

//basic game logic
const round = (playerSelection) => {
    let compPlay = options[Math.floor(Math.random()*options.length)];

    if (playerSelection === 'rock' && compPlay === 'scissors'){
        pScore++;
        document.getElementById('game').innerHTML=`You win the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`

    }
    if (playerSelection === 'paper' && compPlay === 'rock'){
        pScore++;
        document.getElementById('game').innerHTML=`You win the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`

    }
    if (playerSelection === 'scissors' && compPlay === 'paper'){
        pScore++;
        document.getElementById('game').innerHTML=`You win the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`

    }
    if (playerSelection === 'rock' && compPlay === 'rock'){
        document.getElementById('game').innerHTML=`Tie!`
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if (playerSelection === 'paper' && compPlay === 'paper'){
        document.getElementById('game').innerHTML=`Tie`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if (playerSelection === 'scissors' && compPlay === 'scissors'){
        document.getElementById('game').innerHTML=`Tie`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if (playerSelection === 'rock' && compPlay === 'paper'){
        compScore++;
        document.getElementById('game').innerHTML=`You lose the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if (playerSelection === 'paper' && compPlay === 'scissors'){
        compScore++;
        document.getElementById('game').innerHTML=`You lose the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if (playerSelection === 'scissors' && compPlay === 'rock'){
        compScore++;
        document.getElementById('game').innerHTML=`You lose the round!`;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    } 
    if(compScore === 5 && pScore < 5){
        alert('You Lose the Game!')
        pScore = 0;
        compScore = 0;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
    }
    if(pScore === 5 && compScore < 5){
        alert('You Win the Game!')
        pScore = 0;
        compScore = 0;
        document.getElementById('game').innerHTML=``;
        document.getElementById('score').innerHTML=`You: ${pScore}, Computer: ${compScore}`
}}

//functionality for the buttons
rockButton.addEventListener('click', () => round('rock'));
paperButton.addEventListener('click', () => round('paper'));
scissorsButton.addEventListener('click', ()=> round('scissors'))
resetButton.addEventListener('click', () =>{
    pScore = 0;
    compScore = 0;
    document.getElementById('score').innerHTML=`You:${pScore} Computer:${compScore}`
})

    


    