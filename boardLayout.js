function createComputerBoard() {
  const computerBoard = document.querySelector(".computer-board");

  for (let i = 0; i < 100; i++) {
    const compSquare = document.createElement("div");
    compSquare.classList.add("computerSquare");
    computerBoard.appendChild(compSquare);
  }
}

createComputerBoard();

function makeModalGameboard() {
  const modalBoard = document.querySelector(".modal-board");
  for (let i = 0; i < 100; i++) {
    const modalSquare = document.createElement("div");
    modalSquare.classList.add("modalSquare");
    modalBoard.appendChild(modalSquare);
  }
}
makeModalGameboard();
