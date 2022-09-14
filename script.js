// 3. fn to draw on grid
// 4. fn to change colors
// 5. fn to erase drawing
const gridInput = document.getElementById("gridInput");
const gridContainer = document.querySelector(".gridContainer");

function getGridSize() {
  const gridInputValue = parseInt(gridInput.value, 10);
  return gridInputValue;
}

function createGrid() {
  const gridInputValue = getGridSize();

  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${gridInputValue}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridInputValue}, 1fr)`;

  for (let i = 0; i < gridInputValue * gridInputValue; i++) {
    const field = document.createElement("div");
    field.classList.add("field");
    gridContainer.appendChild(field);
  }

  function draw() {
    const allFields = gridContainer.querySelectorAll(".field");
    allFields.forEach((field) => {
      field.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
    });
  }
  draw();
}

gridInput.addEventListener("load", createGrid());
gridInput.addEventListener("change", createGrid);
