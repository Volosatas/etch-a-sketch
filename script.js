// 3. fn to draw on grid
// 4. fn to change colors
// 5. fn to erase drawing
const gridInput = document.getElementById("gridInput");
const gridContainer = document.querySelector(".gridContainer");
const colorPicker = document.getElementById("colorPicker");

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
    let color = "black";
    colorPicker.addEventListener("input", () => {
      color = colorPicker.value;
    });

    const allFields = gridContainer.querySelectorAll(".field");
    allFields.forEach((field) => {
      field.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `${color}`;
      });
    });
  }
  draw();
}
function reset() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

gridInput.addEventListener("load", createGrid());
gridInput.addEventListener("change", reset);
gridInput.addEventListener("change", createGrid);
