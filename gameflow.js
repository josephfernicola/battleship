let carrierComputerHits = [];
let battleshipComputerHits = [];
let cruiserComputerHits = [];
let submarineComputerHits = [];
let destroyerComputerHits = [];

//dont let user hit the same place on computer board
//once you click somewhere on board, remove that event listener

function attackComputer() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  computerSquare.forEach((square) => {
    square.addEventListener("click", () => {
      if (square.classList.length > 1) {
        square.style.backgroundColor = "red";
        attackThePlayerBoard();
      } else {
        square.style.backgroundColor = "green";
        attackThePlayerBoard();
      }
      if (square.className.includes("Carrier")) {
        carrierComputerHits.push("hit");
      }
      if (square.className.includes("Battleship")) {
        battleshipComputerHits.push("hit");
      }
      if (square.className.includes("Submarine")) {
        submarineComputerHits.push("hit");
      }
      if (square.className.includes("Destroyer")) {
        destroyerComputerHits.push("hit");
      }
    });
  });
}

attackComputer();

let newAttackOnUser;
let previousAttacksOnUser = []; //storing all attacks the computer has made
let newPlayerArray = [];

function attackThePlayerBoard() {
  const playerSquare = document.querySelectorAll(".playerSquare");
  //generating a random attck on player board if it has not been hit before
  do {
    newAttackOnUser = getRandomNumber(0, 99);
  } while (previousAttacksOnUser.includes(newAttackOnUser));
  previousAttacksOnUser.push(newAttackOnUser);

  for (let i = 0; i < 100; i++) {
    newPlayerArray.push(i);
  }

  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].classList.length < 2
  ) {
    //misses are grey
    playerSquare[
      newPlayerArray.indexOf(newAttackOnUser)
    ].style.backgroundColor = "green";
  } else {
    //hits are pink
    playerSquare[
      newPlayerArray.indexOf(newAttackOnUser)
    ].style.backgroundColor = "red";
  }
}
