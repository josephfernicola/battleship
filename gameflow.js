let carrierComputerHits = [];
let battleshipComputerHits = [];
let cruiserComputerHits = [];
let submarineComputerHits = [];
let destroyerComputerHits = [];

let carrierUserHits = [];
let battleshipUserHits = [];
let cruiserUserHits = [];
let submarineUserHits = [];
let destroyerUserHits = [];

function attackComputer() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  computerSquare.forEach((square) => {
    square.addEventListener(
      "click",
      () => {
        if (square.classList.length > 1) {
          square.style.backgroundColor = "rgb(226, 93, 93)";
          attackThePlayerBoard();
        } else {
          square.style.backgroundColor = "rgb(73, 170, 73)";
          attackThePlayerBoard();
        }
        if (square.className.includes("Carrier")) {
          carrierComputerHits.push("hit");
          declareWinner();
        }
        if (square.className.includes("Battleship")) {
          battleshipComputerHits.push("hit");
          declareWinner();
        }
        if (square.className.includes("Cruiser")) {
          cruiserComputerHits.push("hit");
          declareWinner();
        }
        if (square.className.includes("Submarine")) {
          submarineComputerHits.push("hit");
          declareWinner();
        }
        if (square.className.includes("Destroyer")) {
          destroyerComputerHits.push("hit");
          declareWinner();
        }
      },
      { once: true }
    );
  });
}

attackComputer();

let newAttackOnUser;
let previousAttacksOnUser = []; //storing all attacks the computer has made
let newPlayerArray = [];

function attackThePlayerBoard() {
  const playerSquare = document.querySelectorAll(".playerSquare");
  //generating a random attck on player board if it has not been hit yet
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
    //misses are green
    playerSquare[
      newPlayerArray.indexOf(newAttackOnUser)
    ].style.backgroundColor = "rgb(73, 170, 73)";
  } else {
    //hits are red
    playerSquare[
      newPlayerArray.indexOf(newAttackOnUser)
    ].style.backgroundColor = "rgb(226, 93, 93)";
  }
  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].className.includes(
      "carrier"
    )
  ) {
    carrierUserHits.push("hit");
    declareWinner();
  }
  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].className.includes(
      "battleship"
    )
  ) {
    battleshipUserHits.push("hit");
    declareWinner();
  }
  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].className.includes(
      "cruiser"
    )
  ) {
    cruiserUserHits.push("hit");
    declareWinner();
  }
  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].className.includes(
      "submarine"
    )
  ) {
    submarineUserHits.push("hit");
    declareWinner();
  }
  if (
    playerSquare[newPlayerArray.indexOf(newAttackOnUser)].className.includes(
      "destroyer"
    )
  ) {
    destroyerUserHits.push("hit");
    declareWinner();
  }
}

function declareWinner() {
  if (
    carrierComputerHits.length == 5 &&
    battleshipComputerHits.length == 4 &&
    cruiserComputerHits.length == 3 &&
    submarineComputerHits.length == 3 &&
    destroyerComputerHits.length == 2
  ) {
    getWinnerModalPopup();
  } else if (
    carrierUserHits.length == 5 &&
    battleshipUserHits.length == 4 &&
    cruiserUserHits.length == 3 &&
    submarineUserHits.length == 3 &&
    destroyerUserHits.length == 2
  ) {
    getWinnerModalPopup();
  }
}
function getWinnerModalPopup() {
  const winnerModalPopup = document.createElement("div");
  winnerModalPopup.classList.add("winnerModalPopup");
  const winnerModalPopupContainer = document.createElement("div");
  winnerModalPopupContainer.classList.add("winnerModalPopupContainer");

  const winnerModalHeader = document.createElement("h1");
  winnerModalHeader.classList.add("winnerModalHeader");
  winnerModalHeader.textContent = "You Won";

  const refresh = document.createElement("button");
  refresh.classList.add("refresh");
  refresh.textContent = "Play Again";
  refresh.addEventListener("click", () => {
    window.location.href = window.location.href;
  });

  document.body.appendChild(winnerModalPopup);
  winnerModalPopup.appendChild(winnerModalPopupContainer);
  winnerModalPopupContainer.appendChild(winnerModalHeader);
  winnerModalPopupContainer.appendChild(refresh);
}
