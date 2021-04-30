let Game = require('./game.js')
let game = new Game()

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let playAgain = () => {
  reader.question("Would you like to play again? (yes or no)", replay => {
    if(replay === 'yes') {
      let newGame = new Game();
      newGame.run(playAgain);
    } else {
      console.log("Thanks for playing!")
      reader.close();
    }
  })
}

game.run(playAgain);