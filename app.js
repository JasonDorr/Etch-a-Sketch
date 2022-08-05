const grid = document.querySelector("#grid");
const defaultColor = "#eee";
const defaultMode = "";
const defaultSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

const getRainbow = () => {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
};

const changeColor = () => {
  return (currentColor = getRainbow());
};

const setupGrid = (size) => {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("mouseenter", (e) => {
      e = gridElement.style.backgroundColor = changeColor();
    });
    grid.appendChild(gridElement);
  }
};

// getRainbow();
setupGrid(currentSize);
