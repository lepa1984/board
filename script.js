const board = document.querySelector("#board");
const colors = [
    "#10CEC3",
    "#74B31E",
    "#FF005E",
    "#F2D51F",
    "#FF840D",
    "#EEEEEE",
    "#3A8FB6",
    "#C44083",
];
const SQUARES_NUMBER = 1500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        setColor(square);
    });
    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });
    board.append(square);
}
function setColor(params) {
    const color = getRandomColor();
    params.style.background = color;
    params.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `;
}
function removeColor(params) {
    params.style.background = "#1d1d1d";
    params.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
