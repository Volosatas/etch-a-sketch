const gridInput = document.getElementById("gridInput");
const gridContainer = document.querySelector(".gridContainer");
const colorPicker = document.getElementById("colorPicker");
const buttonClear = document.getElementById("buttonClear");
const eraserButton = document.getElementById("buttonEraser");

let color = "black";

function getGridSize() {
  const gridInputValue = parseInt(gridInput.value, 10);
  return gridInputValue;
}

function createGridAndDraw() {
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

function toggleEraser() {
  if (eraserButton.value === "OFF") {
    color = "white";
    eraserButton.classList.remove("btn-outline-warning");
    eraserButton.classList.add("btn-warning");
    eraserButton.value = "ON";
  } else {
    color = colorPicker.value;
    eraserButton.classList.remove("btn-warning");
    eraserButton.classList.add("btn-outline-warning");
    eraserButton.value = "OFF";
  }
}
function reset() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  color = colorPicker.value;
  eraserButton.value = "ON";

  toggleEraser();
  createGridAndDraw();
}

window.addEventListener("load", createGridAndDraw());
gridInput.addEventListener("change", reset);
gridInput.addEventListener("change", createGridAndDraw);
eraserButton.addEventListener("click", toggleEraser);
buttonClear.addEventListener("click", reset);
