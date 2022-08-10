const grid = document.querySelector("#grid");
const defaultColor = "#000";
const defaultMode = "";
const defaultSize = 16;

const blackBtn = document.querySelector("#black");
const grayBtn = document.querySelector("#gray-scale");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerText = `${slider.value} x ${slider.value}`;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

const getRainbow = () => {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
};

const changeToBlack = () => {
  const gridElement = document.querySelectorAll(".grid-element");
  gridElement.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      e = element.style.backgroundColor = defaultColor;
    });
  });
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

const clearGrid = () => {
  const gridElement = document.querySelectorAll(".grid-element");
  gridElement.forEach((element) => {
    element.style.backgroundColor = "#dadada";
  });
};

blackBtn.addEventListener("click", (e) => {
  clearGrid();
  return changeToBlack();
});

grayBtn.addEventListener("click", (e) => {
  clearGrid();
  return changeToGreyScale();
});

rainbowBtn.addEventListener("click", (e) => {
  clearGrid();
  return changeToRainbow();
});

clearBtn.addEventListener("click", (e) => {
  clearGrid();
});

slider.addEventListener("input", (e) => {
  output.innerText = `${slider.value} x ${slider.value}`;
  const gridElement = document.querySelectorAll(".grid-element");
  gridElement.forEach((element) => {
    element.remove();
  });
  setupGrid(slider.value);
});

setupGrid(slider.value);
changeToBlack();
