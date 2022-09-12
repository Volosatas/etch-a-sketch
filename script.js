// 3. fn to draw on grid
// 4. fn to change colors
// 5. fn to erase drawing
const gridInput = document.getElementById("gridInput");

function getGridSize() {
  const gridInputValue = parseInt(gridInput.value, 10);
  return gridInputValue;
}

function createGrid() {
  const gridInputValue = getGridSize();
  const gridContainer = document.querySelector(".gridContainer");
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${gridInputValue}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridInputValue}, 1fr)`;

  for (let i = 0; i < gridInputValue * gridInputValue; i++) {
    const field = document.createElement("div");
    gridContainer.appendChild(field);
  }
}
gridInput.addEventListener("load", createGrid());
gridInput.addEventListener("change", createGrid);
