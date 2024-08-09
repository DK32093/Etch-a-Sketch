
const grid = document.querySelector(".grid");

// create initial grid
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

// mouseenter event listener
let boxes = document.querySelectorAll(".box"); //retrieve all of class "box"

let changeBackground = function(e) { // create function to change the background
    e.target.style.background = "blue";
};

boxes.forEach(function(box) { // apply listener with function to each element
    box.addEventListener("mouseenter", changeBackground)
});

