
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
let boxes = document.querySelectorAll(".box"); // retrieve all of class "box"

let randomColor = function() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")"
}

let changeBackground = function(e) { // create function to change the background
    e.target.style.background = randomColor();
    let op = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"));
    if (op < 1) {
        op = op + 0.1;
        e.target.style.opacity = op;
    };
};

boxes.forEach(function(box) { // apply listener with function to each element
    box.addEventListener("mouseenter", changeBackground)
});


// get size choice function
function getSizeChoice() {
    let answer = prompt("Please enter the length of one side of the grid (max = 100)");
    if (answer <= 100 && answer > 0) {
        return answer;
    } else {
        return getSizeChoice();
    }
}

// button press event listener for new grid
let btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    let size = getSizeChoice();
    let myNode = document.querySelector(".grid");
    myNode.innerHTML = ""; // empty the grid div
    for (i = 1; i <= size; i++) {
        let column = document.createElement("div");
        grid.appendChild(column);
        column.setAttribute("class", "col");
        for (c = 1; c <= size; c++) {
            let newDiv = document.createElement("div");
            column.appendChild(newDiv);
            newDiv.setAttribute("class", "box");
        }
    }
    // re-initialize the mouseenter event listener with new divs
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.addEventListener("mouseenter", changeBackground)
    });
});