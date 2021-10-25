/*
Description
Today we're building a simplified version of the popular Minesweeper game. 
All user interaction should be done through the prompt, so you'll be focusing 
on the logic.

Instructions
- Create a board with 10 spaces in it
- Add a mine to one of these spaces
- Ask the user to enter an index for the board
- They will keep entering indices until they either hit a mine and lose, 
or clear all the empty spaces and win
- When the game ends, let them know the outcome, including how many spaces 
they managed to clear before losing/winning

Challenge
Allow the user to pick a difficulty at the start of the game
For example, they can choose between "easy", "normal" and "hard"
Depending on the difficulty, add more or fewer mines to the board

Note
The instructions are purposefully open-ended. You get to choose what you 
think the best way is to create the board. Just aim to get the app to work 
as described.

Tips
- Building a game requires you to keep track of information in a data 
structure, usually named state
- Think about how can you repeatedly ask users for input until a condition 
is met?

Challenge
If you have time, a good idea is to evaluate your options. For example, try 
to think about different ways you could represent a board, and explore whether 
they make it easier to manage it all.
*/
let board = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];
const askIndex = `Please enter an index from 1 to ${board.length}`;
let givenIndex;
let numberOfMines = 1;
let safeLandings = 0;
let safeSpaces = (board.length - numberOfMines);
const loser = "You lost."
const winner = "You win. Well done, you spent a lot of time alone without internet."
let endOfGame = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let mine = getRandomInt(1, 10);
board[mine] = "M";
console.log(board);

while(safeSpaces != safeLandings && !endOfGame){
    givenIndex = prompt(askIndex);
    if(givenIndex == null){
        endOfGame = true;
        alert(loser);
    }
    else if (givenIndex > 0 && givenIndex < board.length){
        if(board[givenIndex-1] === 'M'){
            endOfGame = true;
            alert(loser);
        }
        else{
            board[givenIndex-1] = 'X';
            safeLandings++;
            console.log("Safe landings: " + safeLandings);
        }        
    }
    console.log(board);
}
if (safeSpaces === safeLandings){
    endOfGame = true;
    alert(winner);
}
const gameOutcome = `You cleared ${safeLandings} spaces succesfully.` 
alert(gameOutcome);