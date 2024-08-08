
const grid = document.querySelector(".grid");

// create grid
for (i = 1; i <= 16; i++) {
    let column = document.createElement("div");
    grid.appendChild(column);
    column.setAttribute("class", "col");
    for (c = 1; c <= 16; c++) {
        let newDiv = document.createElement("div");
        column.appendChild(newDiv);
        newDiv.setAttribute("class", "box");
    }
}