function addIdToLastSqaureInComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  for (let i = 9; i < 100; i += 10) {
    computerSquare[i].setAttribute("id", "lastComputerRow");
  }
}
function addIdToFirstSqaureInComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  for (let i = 0; i < 100; i += 10) {
    computerSquare[i].setAttribute("id", "firstComputerRow");
  }
}

addIdToFirstSqaureInComputerBoard();
addIdToLastSqaureInComputerBoard();

let newComputerArray = [];
let horizontalNumber;
let vertical;

function randomlyPutHorizontalCarrierOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");

  for (let i = 0; i < 100; i++) {
    newComputerArray.push(i);
  }

  do {
    horizontalNumber = getRandomNumber(0, 95);
  } while ( //make sure it does not overlap other ships, or wrap around board
    computerSquare[horizontalNumber].nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .nextElementSibling.id == "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .nextElementSibling.nextElementSibling.id == "firstComputerRow"
  );
  for (
    let i = newComputerArray.indexOf(horizontalNumber);
    i < newComputerArray.indexOf(horizontalNumber) + 5;
    i++
  ) {
    computerSquare[i].classList.add("computerCarrier");
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyPutVerticalCarrierOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  vertical = getRandomNumber(0, 59);
  for (let i = vertical; i < vertical + 50; i += 10) {
    computerSquare[i].classList.add("computerCarrier");
  }
}

function chooseBetweenHorizontalAndVerticalCarrierLayout() {
  let verticalOrHorizontal = getRandomNumber(1, 2);
  if (verticalOrHorizontal == 1) {
    randomlyPutHorizontalCarrierOnComputerBoard();
  } else {
    randomlyPutVerticalCarrierOnComputerBoard();
  }
}

chooseBetweenHorizontalAndVerticalCarrierLayout();
chooseBetweenHorizontalAndVerticalBattleshipLayout();
chooseBetweenHorizontalAndVerticalCruiserLayout();
chooseBetweenHorizontalAndVerticalSubmarineLayout();
chooseBetweenHorizontalAndVerticalDestroyerLayout();

function randomlyPutHorizontalBattleshipOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");

  for (let i = 0; i < 100; i++) {
    newComputerArray.push(i);
  }

  do {
    //keep generating random number until it doesn't wrap around board
    horizontalNumber = getRandomNumber(0, 96);
  } while (
    computerSquare[horizontalNumber].nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .nextElementSibling.id == "firstComputerRow" ||
    computerSquare[horizontalNumber].classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .nextElementSibling.classList.length > 1
  );
  for (
    let i = newComputerArray.indexOf(horizontalNumber);
    i < newComputerArray.indexOf(horizontalNumber) + 4;
    i++
  ) {
    computerSquare[i].classList.add("computerBattleship");
  }
}

function randomlyPutVerticalBattleshipOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  do {
    vertical = getRandomNumber(0, 69);
  } while (
    computerSquare[vertical].classList.length > 1 ||
    computerSquare[vertical + 10].classList.length > 1 ||
    computerSquare[vertical + 20].classList.length > 1 ||
    computerSquare[vertical + 30].classList.length > 1
  );
  for (let i = vertical; i < vertical + 40; i += 10) {
    computerSquare[i].classList.add("computerBattleship");
  }
}

function chooseBetweenHorizontalAndVerticalBattleshipLayout() {
  let verticalOrHorizontal = getRandomNumber(1, 2);
  if (verticalOrHorizontal == 1) {
    randomlyPutHorizontalBattleshipOnComputerBoard();
  } else {
    randomlyPutVerticalBattleshipOnComputerBoard();
  }
}

function randomlyPutHorizontalCruiserOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");

  for (let i = 0; i < 100; i++) {
    newComputerArray.push(i);
  }

  do {
    //keep generating random number until it doesn't wrap around board
    horizontalNumber = getRandomNumber(0, 96);
  } while (
    computerSquare[horizontalNumber].nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .classList.length > 1
  );
  for (
    let i = newComputerArray.indexOf(horizontalNumber);
    i < newComputerArray.indexOf(horizontalNumber) + 3;
    i++
  ) {
    computerSquare[i].classList.add("computerCruiser");
  }
}

function randomlyPutVerticalCruiserOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  do {
    vertical = getRandomNumber(0, 69);
  } while (
    computerSquare[vertical].classList.length > 1 ||
    computerSquare[vertical + 10].classList.length > 1 ||
    computerSquare[vertical + 20].classList.length > 1
  );
  for (let i = vertical; i < vertical + 30; i += 10) {
    computerSquare[i].classList.add("computerCruiser");
  }
}

function chooseBetweenHorizontalAndVerticalCruiserLayout() {
  let verticalOrHorizontal = getRandomNumber(1, 2);
  if (verticalOrHorizontal == 1) {
    randomlyPutHorizontalCruiserOnComputerBoard();
  } else {
    randomlyPutVerticalCruiserOnComputerBoard();
  }
}

function randomlyPutHorizontalSubmarineOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");

  for (let i = 0; i < 100; i++) {
    newComputerArray.push(i);
  }

  do {
    //keep generating random number until it doesn't wrap around board
    horizontalNumber = getRandomNumber(0, 96);
  } while (
    computerSquare[horizontalNumber].nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.nextElementSibling
      .classList.length > 1
  );
  for (
    let i = newComputerArray.indexOf(horizontalNumber);
    i < newComputerArray.indexOf(horizontalNumber) + 3;
    i++
  ) {
    computerSquare[i].classList.add("computerSubmarine");
  }
}

function randomlyPutVerticalSubmarineOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  do {
    vertical = getRandomNumber(0, 69);
  } while (
    computerSquare[vertical].classList.length > 1 ||
    computerSquare[vertical + 10].classList.length > 1 ||
    computerSquare[vertical + 20].classList.length > 1
  );
  for (let i = vertical; i < vertical + 30; i += 10) {
    computerSquare[i].classList.add("computerSubmarine");
  }
}

function chooseBetweenHorizontalAndVerticalSubmarineLayout() {
  let verticalOrHorizontal = getRandomNumber(1, 2);
  if (verticalOrHorizontal == 1) {
    randomlyPutHorizontalSubmarineOnComputerBoard();
  } else {
    randomlyPutVerticalSubmarineOnComputerBoard();
  }
}

function randomlyPutHorizontalDestroyerOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");

  for (let i = 0; i < 100; i++) {
    newComputerArray.push(i);
  }

  do {
    //keep generating random number until it doesn't wrap around board
    horizontalNumber = getRandomNumber(0, 96);
  } while (
    computerSquare[horizontalNumber].nextElementSibling.id ==
      "firstComputerRow" ||
    computerSquare[horizontalNumber].classList.length > 1 ||
    computerSquare[horizontalNumber].nextElementSibling.classList.length > 1
  );
  console.log("destroyer", horizontalNumber);
  for (
    let i = newComputerArray.indexOf(horizontalNumber);
    i < newComputerArray.indexOf(horizontalNumber) + 2;
    i++
  ) {
    computerSquare[i].classList.add("computerDestroyer");
  }
}

function randomlyPutVerticalDestroyerOnComputerBoard() {
  const computerSquare = document.querySelectorAll(".computerSquare");
  do {
    vertical = getRandomNumber(0, 69);
  } while (
    computerSquare[vertical].classList.length > 1 ||
    computerSquare[vertical + 10].classList.length > 1
  );
  for (let i = vertical; i < vertical + 20; i += 10) {
    computerSquare[i].classList.add("computerDestroyer");
  }
}

function chooseBetweenHorizontalAndVerticalDestroyerLayout() {
  let verticalOrHorizontal = getRandomNumber(1, 2);
  if (verticalOrHorizontal == 1) {
    randomlyPutHorizontalDestroyerOnComputerBoard();
  } else {
    randomlyPutVerticalDestroyerOnComputerBoard();
  }
}
