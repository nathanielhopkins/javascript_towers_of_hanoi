class Game {
  constructor(towers){
    this.towers = [[4,3,2,1],[],[]];
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower:", start => {
      let startTower = parseInt(start);
      reader.question("Enter an ending tower:", end => {
        let endTower = parseInt(end);
        callback(startTower, endTower);
      })
    })
  }

  isValidMove(startTower, endTower) {
    let startTowerLast = this.towers[startTower][this.towers[startTower].length - 1];
    let endTowerLast = this.towers[endTower][this.towers[endTower].length - 1];
    if (this.towers[startTower].length != 0 && (this.towers[endTower].length === 0 || startTowerLast < endTowerLast)) {
      return true;
    } else {
      return false;
    }
  }

  move(startTower, endTower) {
    if(this.isValidMove(startTower, endTower)) {
      this.towers[endTower].push(this.towers[startTower].pop());
      return true;
    } else {
      return false;
    }
  }
  
  print() {
    let print = JSON.stringify(this.towers);
    console.log(print);
  }

  isWon() {
    if(this.towers[0].length === 0 && this.towers[1].length === 0) {
      return true;
    } else {
      return false;
    }
  }

  run(completionCallback) {
    this.promptMove(reader, (startTower, endTower) => {
      if (!this.isValidMove(startTower, endTower)) {
        console.log("Invalid move.");
      } else {
        this.move(startTower, endTower);
      }
      if (!this.isWon()) {
        this.run(completionCallback);
      } else {
        console.log("You Won!!")
        completionCallback();
      }
    });
    
  }
}

module.exports = Game;