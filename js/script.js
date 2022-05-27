window.onload = generateGrid;

let GRID_LENGTH = 16;

let boxContainer = document.querySelector(".container");

function generateGrid() {
    removePreviousGrid();
    for (let i = 0; i < GRID_LENGTH; i++){
        let row = document.createElement("div");
        row.className = "containerRow";
        for (let j = 0; j < GRID_LENGTH; j++){
            row.appendChild(generateBox());
        }
        boxContainer.appendChild(row);
    }
}

function removePreviousGrid() {
    while(boxContainer.firstChild)
        boxContainer.removeChild(boxContainer.firstChild);
}

function generateBox() {
    let box = document.createElement("div");
    box.className = "box";
    box.addEventListener("mouseover", () => box.classList.add("boxActive"));
    return box;
}

function newGrid() {   
    let x;
    do {
        x = prompt("What size grid do you want? (1 - 100)") * 1;
    } while (!Number.isInteger(x) || x < 1 || x > 100)
    GRID_LENGTH = x;
    generateGrid();
}

function clearSketch() {
    generateGrid();
}