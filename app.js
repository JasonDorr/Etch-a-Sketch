const grid = document.querySelector("#grid");
const defaultColor = "#444";
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

const getGrayScale = () => {
  return;
};

const changeToRainbow = () => {
  const gridElement = document.querySelectorAll(".grid-element");
  gridElement.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      e = element.style.backgroundColor = getRainbow();
    });
  });
};
const changeToGreyScale = () => {
  const gridElement = document.querySelectorAll(".grid-element");
  gridElement.forEach((element) => {
    let i = 0;
    element.addEventListener("mouseenter", (e) => {
      if (i < 9) {
        i++;
      }
      e = element.style.backgroundColor = `rgba(0, 0, 0, .${i})`;
    });
  });
};

const setupGrid = (size = defaultSize) => {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    grid.appendChild(gridElement);
  }
};

// getRainbow();
setupGrid(currentSize);
