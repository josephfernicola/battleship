let horizontal = true;

function addIdToLastSqaureInModalBoard() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  for (let i = 9; i < 100; i += 10) {
    modalSquare[i].setAttribute("id", "lastRow");
  }
}
function addIdToFirstSqaureInModalBoard() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  for (let i = 0; i < 100; i += 10) {
    modalSquare[i].setAttribute("id", "firstRow");
  }
}

addIdToFirstSqaureInModalBoard();
addIdToLastSqaureInModalBoard();

function placeHorizontalCarrierOnModal() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.addEventListener("mouseover", carrierHorizontalHover);
    square.addEventListener("mouseleave", carrierHorizontalLeave);
    square.addEventListener("click", carrierHorizontalClick);
  });
  toggleBetweenCarrierRotation();
}

placeHorizontalCarrierOnModal();

function carrierHorizontalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 5;
    i++
  ) {
    if (modalSquare[i].id == "lastRow") {
      modalSquare[i].style.backgroundColor = "grey";
      return;
    } else if (modalSquare[i]) {
      modalSquare[i].style.backgroundColor = "grey";
    }
  }
}

function carrierHorizontalLeave(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 5;
    i++
  ) {
    if (modalSquare[i]) {
      modalSquare[i].style.backgroundColor = "#678da0";
    }
  }
}

function carrierHorizontalClick(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    newModalArray.indexOf(evt.currentTarget) < 96 &&
    evt.currentTarget.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
      .id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
      .nextElementSibling.id !== "firstRow"
  ) {
    for (
      let i = newModalArray.indexOf(evt.currentTarget);
      i < newModalArray.indexOf(evt.currentTarget) + 5;
      i++
    ) {
      if (modalSquare[i]) {
        modalSquare[i].classList.add("carrier");
      }
    }
    removeHorizontalCarrierEventListeners();
    removeVerticalCarrierEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateCarrierShip);
    placeHorizontalBattleshipOnModal();
    toggleBetweenBattleshipRotation();
  }
}

function removeHorizontalCarrierEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", carrierHorizontalHover);
    square.removeEventListener("mouseleave", carrierHorizontalLeave);
    square.removeEventListener("click", carrierHorizontalClick);
  });
}

function placeHorizontalBattleshipOnModal() {
  const modalHeader = document.querySelector(".modal-header");
  modalHeader.textContent = "Place Your Battleship (4 spots)";
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.addEventListener("mouseover", battleshipHorizontalHover);
    square.addEventListener("mouseleave", battleshipHorizontalLeave);
    square.addEventListener("click", battleshipHorizontalClick);
  });
}
function battleshipHorizontalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 4;
    i++
  ) {
    if (
      modalSquare[i] &&
      modalSquare[i].id == "lastRow" &&
      modalSquare[i].classList.length < 2
    ) {
      modalSquare[i].style.backgroundColor = "grey";
      return;
    }
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
    if (
      modalSquare[i].classList.length > 1 &&
      modalSquare[i + 1].classList.length < 2
    ) {
      modalSquare[i + 1].style.backgroundColor = "#678da0";
      return;
    }
  }
}

function battleshipHorizontalLeave(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 4;
    i++
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "#678da0";
    }
  }
}

function battleshipHorizontalClick(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    newModalArray.indexOf(evt.currentTarget) < 96 &&
    evt.currentTarget.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
      .id !== "firstRow" &&
    evt.currentTarget.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.nextElementSibling.classList.length <
      2 &&
    evt.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
      .classList.length < 2
  ) {
    for (
      let i = newModalArray.indexOf(evt.currentTarget);
      i < newModalArray.indexOf(evt.currentTarget) + 4;
      i++
    ) {
      if (modalSquare[i]) {
        modalSquare[i].classList.add("battleship");
      }
    }
    removeHorizontalBattleshipEventListeners();
    removeVerticalBattleshipEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateBattleship);
    placeHorizontalCruiserOnModal();
    toggleBetweenCruiserRotation();
  }
}

function removeHorizontalBattleshipEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", battleshipHorizontalHover);
    square.removeEventListener("mouseleave", battleshipHorizontalLeave);
    square.removeEventListener("click", battleshipHorizontalClick);
  });
}

function placeHorizontalCruiserOnModal() {
  const modalHeader = document.querySelector(".modal-header");
  modalHeader.textContent = "Place Your Cruiser (3 spots)";
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.addEventListener("mouseover", cruiserHorizontalHover);
    square.addEventListener("mouseleave", cruiserHorizontalLeave);
    square.addEventListener("click", cruiserHorizontalClick);
  });
}

function cruiserHorizontalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 3;
    i++
  ) {
    if (modalSquare[i].id == "lastRow" && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
      return;
    } else if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
    if (
      modalSquare[i].classList.length > 1 &&
      modalSquare[i + 1].classList.length < 2
    ) {
      modalSquare[i + 1].style.backgroundColor = "#678da0";
      return;
    }
  }
}

function cruiserHorizontalLeave(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 3;
    i++
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "#678da0";
    }
  }
}

function cruiserHorizontalClick(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    newModalArray.indexOf(evt.currentTarget) < 96 &&
    evt.currentTarget.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.nextElementSibling.classList.length < 2
  ) {
    for (
      let i = newModalArray.indexOf(evt.currentTarget);
      i < newModalArray.indexOf(evt.currentTarget) + 3;
      i++
    ) {
      if (modalSquare[i]) {
        modalSquare[i].classList.add("cruiser");
      }
    }
    removeHorizontalCruiserEventListeners();
    removeVerticalCruiserEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateCruiser);
    placeHorizontalSubmarineOnModal();
    toggleBetweenSubmarineRotation();
  }
}

function removeHorizontalCruiserEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", cruiserHorizontalHover);
    square.removeEventListener("mouseleave", cruiserHorizontalLeave);
    square.removeEventListener("click", cruiserHorizontalClick);
  });
}

function placeHorizontalSubmarineOnModal() {
  const modalHeader = document.querySelector(".modal-header");
  modalHeader.textContent = "Place Your Submarine (3 spots)";
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.addEventListener("mouseover", submarineHorizontalHover);
    square.addEventListener("mouseleave", submarineHorizontalLeave);
    square.addEventListener("click", submarineHorizontalClick);
  });
}

function submarineHorizontalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 3;
    i++
  ) {
    if (modalSquare[i].id == "lastRow" && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
      return;
    } else if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
    if (
      modalSquare[i].classList.length > 1 &&
      modalSquare[i + 1].classList.length < 2
    ) {
      modalSquare[i + 1].style.backgroundColor = "#678da0";
      return;
    }
  }
}

function submarineHorizontalLeave(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 3;
    i++
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "#678da0";
    }
  }
}

function submarineHorizontalClick(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    newModalArray.indexOf(evt.currentTarget) < 98 &&
    evt.currentTarget.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.nextElementSibling.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.nextElementSibling.classList.length < 2
  ) {
    for (
      let i = newModalArray.indexOf(evt.currentTarget);
      i < newModalArray.indexOf(evt.currentTarget) + 3;
      i++
    ) {
      if (modalSquare[i]) {
        modalSquare[i].classList.add("submarine");
      }
    }
    removeHorizontalSubmarineEventListeners();
    removeVerticalSubmarineEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateSubmarine);
    placeHorizontalDestroyerOnModal();
    toggleBetweenDestroyerRotation();
  }
}

function removeHorizontalSubmarineEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", submarineHorizontalHover);
    square.removeEventListener("mouseleave", submarineHorizontalLeave);
    square.removeEventListener("click", submarineHorizontalClick);
  });
}

function placeHorizontalDestroyerOnModal() {
  const modalHeader = document.querySelector(".modal-header");
  modalHeader.textContent = "Place Your Destroyer (2 spots)";
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.addEventListener("mouseover", destroyerHorizontalHover);
    square.addEventListener("mouseleave", destroyerHorizontalLeave);
    square.addEventListener("click", destroyerHorizontalClick);
  });
}

function destroyerHorizontalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 2;
    i++
  ) {
    if (
      modalSquare[i] &&
      modalSquare[i].id == "lastRow" &&
      modalSquare[i].classList.length < 2
    ) {
      modalSquare[i].style.backgroundColor = "grey";
      return;
    } else if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
    if (
      modalSquare[i].classList.length > 1 &&
      modalSquare[i + 1].classList.length < 2
    ) {
      modalSquare[i + 1].style.backgroundColor = "#678da0";
      return;
    }
  }
}

function destroyerHorizontalLeave(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  for (
    let i = newModalArray.indexOf(evt.currentTarget);
    i < newModalArray.indexOf(evt.currentTarget) + 3;
    i++
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "#678da0";
    }
  }
}

function destroyerHorizontalClick(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    newModalArray.indexOf(evt.currentTarget) < 99 &&
    evt.currentTarget.nextElementSibling.id !== "firstRow" &&
    evt.currentTarget.classList.length < 2 &&
    evt.currentTarget.nextElementSibling.classList.length < 2
  ) {
    evt.currentTarget.classList.add("destroyer");
    evt.currentTarget.nextElementSibling.classList.add("destroyer");

    removeModal();
    let playerBoard = document.querySelector(".player-board");
    removeVerticalDestroyerEventListeners();
    removeHorizontalDestroyerEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateDestroyer);

    modalSquare.forEach((square) => {
      //to disable the cursor:pointer over the user's squares
      square.classList.remove("modalSquare");
      square.classList.add("playerSquare");
      playerBoard.appendChild(square);
    });
  }
}

function removeHorizontalDestroyerEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", destroyerHorizontalHover);
    square.removeEventListener("mouseleave", destroyerHorizontalLeave);
    square.removeEventListener("click", destroyerHorizontalClick);
  });
}

function removeModal() {
  const modalPopup = document.querySelector(".modal-popup");
  modalPopup.style.opacity = "0";
  modalPopup.style.visibility = "hidden";
}

function toggleBetweenCarrierRotation() {
  const rotateButton = document.querySelector(".rotate-button");
  rotateButton.addEventListener("click", rotateCarrierShip);
}

function rotateCarrierShip() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  if (horizontal) {
    removeHorizontalCarrierEventListeners();
    horizontal = false;
    modalSquare.forEach((square) => {
      square.addEventListener("mouseover", carrierVerticalHover);
      square.addEventListener("mouseleave", carrierVerticalLeave);
      square.addEventListener("click", carrierVerticalClick);
    });
  } else {
    horizontal = true;
    removeVerticalCarrierEventListeners();
    placeHorizontalCarrierOnModal();
  }
}

function carrierVerticalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);

  if (evt) {
    evt.currentTarget.style.backgroundColor = "grey";
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 50;
      i += 10
    ) {
      if (modalSquare[i]) {
        modalSquare[i].style.backgroundColor = "grey";
      }
    }
  }
}
function removeVerticalCarrierEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", carrierVerticalHover);
    square.removeEventListener("mouseleave", carrierVerticalLeave);
    square.removeEventListener("click", carrierVerticalClick);
  });
}

function carrierVerticalLeave(evt) {
  if (evt) {
    const modalSquare = document.querySelectorAll(".modalSquare");
    const newModalArray = Array.prototype.slice.call(modalSquare);
    evt.currentTarget.style.backgroundColor = "#678da0";
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 50;
      i += 10
    ) {
      if (modalSquare[i]) {
        modalSquare[i].style.backgroundColor = "#678da0";
      }
    }
  }
}

function carrierVerticalClick(evt) {
  horizontal = true;
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    //this prevents any placement of ship off the board
    newModalArray.indexOf(evt.currentTarget) + 10 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 20 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 30 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 40 < 100
  ) {
    evt.currentTarget.classList.add("carrier");
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 50;
      i += 10
    ) {
      modalSquare[i].classList.add("carrier");
    }
    removeVerticalCarrierEventListeners();
    removeHorizontalCarrierEventListeners();
    placeHorizontalBattleshipOnModal();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateCarrierShip);
    toggleBetweenBattleshipRotation();
  }
}

function toggleBetweenBattleshipRotation() {
  const rotateButton = document.querySelector(".rotate-button");
  rotateButton.addEventListener("click", rotateBattleship);
}

function removeVerticalBattleshipEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", battleshipVerticalHover);
    square.removeEventListener("mouseleave", battleshipVerticalLeave);
    square.removeEventListener("click", battleshipVerticalClick);
  });
}

function rotateBattleship() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  if (horizontal) {
    removeHorizontalBattleshipEventListeners();
    horizontal = false;
    modalSquare.forEach((square) => {
      square.addEventListener("mouseover", battleshipVerticalHover);
      square.addEventListener("mouseleave", battleshipVerticalLeave);
      square.addEventListener("click", battleshipVerticalClick);
    });
  } else {
    horizontal = true;
    removeVerticalBattleshipEventListeners();
    placeHorizontalBattleshipOnModal();
  }
}

function battleshipVerticalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);

  if (evt && evt.currentTarget.classList.length < 2) {
    evt.currentTarget.style.backgroundColor = "grey";
  }
  for (
    let i = newModalArray.indexOf(evt.currentTarget) + 10;
    i < newModalArray.indexOf(evt.currentTarget) + 40;
    i += 10
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
  }
}

function battleshipVerticalLeave(evt) {
  if (evt) {
    const modalSquare = document.querySelectorAll(".modalSquare");
    const newModalArray = Array.prototype.slice.call(modalSquare);
    if (evt.currentTarget.classList.length < 2) {
      evt.currentTarget.style.backgroundColor = "#678da0";
    }
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 40;
      i += 10
    ) {
      if (modalSquare[i] && modalSquare[i].classList.length < 2) {
        modalSquare[i].style.backgroundColor = "#678da0";
      }
    }
  }
}

function battleshipVerticalClick(evt) {
  horizontal = true;
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    //this prevents any placement of ship off the board
    newModalArray.indexOf(evt.currentTarget) + 10 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 20 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 30 < 100 &&
    evt.currentTarget.classList.length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 10].classList
      .length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 20].classList
      .length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 30].classList
      .length < 2
  ) {
    evt.currentTarget.classList.add("battleship");
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 40;
      i += 10
    ) {
      modalSquare[i].classList.add("battleship");
    }

    removeVerticalBattleshipEventListeners();
    removeHorizontalBattleshipEventListeners();
    placeHorizontalCruiserOnModal();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateBattleship);
    toggleBetweenCruiserRotation();
  }
}

function toggleBetweenCruiserRotation() {
  const rotateButton = document.querySelector(".rotate-button");
  rotateButton.addEventListener("click", rotateCruiser);
}

function removeVerticalCruiserEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", cruiserVerticalHover);
    square.removeEventListener("mouseleave", cruiserVerticalLeave);
    square.removeEventListener("click", cruiserVerticalClick);
  });
}

function rotateCruiser() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  if (horizontal) {
    removeHorizontalCruiserEventListeners();
    horizontal = false;
    modalSquare.forEach((square) => {
      square.addEventListener("mouseover", cruiserVerticalHover);
      square.addEventListener("mouseleave", cruiserVerticalLeave);
      square.addEventListener("click", cruiserVerticalClick);
    });
  } else {
    horizontal = true;
    removeVerticalCruiserEventListeners();
    placeHorizontalCruiserOnModal();
  }
}

function cruiserVerticalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);

  if (evt && evt.currentTarget.classList.length < 2) {
    evt.currentTarget.style.backgroundColor = "grey";
  }
  for (
    let i = newModalArray.indexOf(evt.currentTarget) + 10;
    i < newModalArray.indexOf(evt.currentTarget) + 30;
    i += 10
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
  }
}

function cruiserVerticalLeave(evt) {
  if (evt) {
    const modalSquare = document.querySelectorAll(".modalSquare");
    const newModalArray = Array.prototype.slice.call(modalSquare);
    if (evt.currentTarget.classList.length < 2) {
      evt.currentTarget.style.backgroundColor = "#678da0";
    }
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 30;
      i += 10
    ) {
      if (modalSquare[i] && modalSquare[i].classList.length < 2) {
        modalSquare[i].style.backgroundColor = "#678da0";
      }
    }
  }
}

function cruiserVerticalClick(evt) {
  horizontal = true;
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    //this prevents any placement of ship off the board
    newModalArray.indexOf(evt.currentTarget) + 10 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 20 < 100 &&
    evt.currentTarget.classList.length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 10].classList
      .length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 20].classList
      .length < 2
  ) {
    evt.currentTarget.classList.add("cruiser");
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 30;
      i += 10
    ) {
      modalSquare[i].classList.add("cruiser");
    }

    removeVerticalCruiserEventListeners();
    removeHorizontalCruiserEventListeners();
    placeHorizontalSubmarineOnModal();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateCruiser);
    toggleBetweenSubmarineRotation();
  }
}

function toggleBetweenSubmarineRotation() {
  const rotateButton = document.querySelector(".rotate-button");
  rotateButton.addEventListener("click", rotateSubmarine);
}

function removeVerticalSubmarineEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", submarineVerticalHover);
    square.removeEventListener("mouseleave", submarineVerticalLeave);
    square.removeEventListener("click", submarineVerticalClick);
  });
}

function rotateSubmarine() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  if (horizontal) {
    removeHorizontalSubmarineEventListeners();
    horizontal = false;
    modalSquare.forEach((square) => {
      square.addEventListener("mouseover", submarineVerticalHover);
      square.addEventListener("mouseleave", submarineVerticalLeave);
      square.addEventListener("click", submarineVerticalClick);
    });
  } else {
    horizontal = true;
    removeVerticalSubmarineEventListeners();
    placeHorizontalSubmarineOnModal();
  }
}

function submarineVerticalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);

  if (evt && evt.currentTarget.classList.length < 2) {
    evt.currentTarget.style.backgroundColor = "grey";
  }
  for (
    let i = newModalArray.indexOf(evt.currentTarget) + 10;
    i < newModalArray.indexOf(evt.currentTarget) + 30;
    i += 10
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
  }
}

function submarineVerticalLeave(evt) {
  if (evt) {
    const modalSquare = document.querySelectorAll(".modalSquare");
    const newModalArray = Array.prototype.slice.call(modalSquare);
    if (evt.currentTarget.classList.length < 2) {
      evt.currentTarget.style.backgroundColor = "#678da0";
    }
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 30;
      i += 10
    ) {
      if (modalSquare[i] && modalSquare[i].classList.length < 2) {
        modalSquare[i].style.backgroundColor = "#678da0";
      }
    }
  }
}

function submarineVerticalClick(evt) {
  horizontal = true;
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    //this prevents any placement of ship off the board
    newModalArray.indexOf(evt.currentTarget) + 10 < 100 &&
    newModalArray.indexOf(evt.currentTarget) + 20 < 100 &&
    evt.currentTarget.classList.length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 10].classList
      .length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 20].classList
      .length < 2
  ) {
    evt.currentTarget.classList.add("submarine");
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 30;
      i += 10
    ) {
      modalSquare[i].classList.add("submarine");
    }

    removeVerticalSubmarineEventListeners();
    removeHorizontalSubmarineEventListeners();
    placeHorizontalDestroyerOnModal();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateSubmarine);
    toggleBetweenDestroyerRotation();
  }
}

function toggleBetweenDestroyerRotation() {
  const rotateButton = document.querySelector(".rotate-button");
  rotateButton.addEventListener("click", rotateDestroyer);
}

function removeVerticalDestroyerEventListeners() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  modalSquare.forEach((square) => {
    square.removeEventListener("mouseover", destroyerVerticalHover);
    square.removeEventListener("mouseleave", destroyerVerticalLeave);
    square.removeEventListener("click", destroyerVerticalClick);
  });
}

function rotateDestroyer() {
  const modalSquare = document.querySelectorAll(".modalSquare");
  if (horizontal) {
    removeHorizontalDestroyerEventListeners();
    horizontal = false;
    modalSquare.forEach((square) => {
      square.addEventListener("mouseover", destroyerVerticalHover);
      square.addEventListener("mouseleave", destroyerVerticalLeave);
      square.addEventListener("click", destroyerVerticalClick);
    });
  } else {
    horizontal = true;
    removeVerticalDestroyerEventListeners();
    placeHorizontalDestroyerOnModal();
  }
}

function destroyerVerticalHover(evt) {
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);

  if (evt && evt.currentTarget.classList.length < 2) {
    evt.currentTarget.style.backgroundColor = "grey";
  }
  for (
    let i = newModalArray.indexOf(evt.currentTarget) + 10;
    i < newModalArray.indexOf(evt.currentTarget) + 20;
    i += 10
  ) {
    if (modalSquare[i] && modalSquare[i].classList.length < 2) {
      modalSquare[i].style.backgroundColor = "grey";
    }
  }
}

function destroyerVerticalLeave(evt) {
  if (evt) {
    const modalSquare = document.querySelectorAll(".modalSquare");
    const newModalArray = Array.prototype.slice.call(modalSquare);
    if (evt.currentTarget.classList.length < 2) {
      evt.currentTarget.style.backgroundColor = "#678da0";
    }
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 20;
      i += 10
    ) {
      if (modalSquare[i] && modalSquare[i].classList.length < 2) {
        modalSquare[i].style.backgroundColor = "#678da0";
      }
    }
  }
}

function destroyerVerticalClick(evt) {
  horizontal = true;
  const modalSquare = document.querySelectorAll(".modalSquare");
  const newModalArray = Array.prototype.slice.call(modalSquare);
  if (
    //this prevents any placement of ship off the board
    newModalArray.indexOf(evt.currentTarget) + 10 < 100 &&
    evt.currentTarget.classList.length < 2 &&
    modalSquare[newModalArray.indexOf(evt.currentTarget) + 10].classList
      .length < 2
  ) {
    evt.currentTarget.classList.add("destroyer");
    for (
      let i = newModalArray.indexOf(evt.currentTarget) + 10;
      i < newModalArray.indexOf(evt.currentTarget) + 20;
      i += 10
    ) {
      modalSquare[i].classList.add("destroyer");
    }
    removeModal();
    let playerBoard = document.querySelector(".player-board");
    removeVerticalDestroyerEventListeners();
    removeHorizontalDestroyerEventListeners();
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.removeEventListener("click", rotateDestroyer);

    modalSquare.forEach((square) => {
      //to disable the cursor:pointer over the user's squares
      square.classList.remove("modalSquare");
      square.classList.add("playerSquare");
      playerBoard.appendChild(square);
    });
  }
}
