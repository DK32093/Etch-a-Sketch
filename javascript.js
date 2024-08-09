
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

let changeBackground = function(e) { // create function to change the background
    e.target.style.background = "blue";
};

boxes.forEach(function(box) { // apply listener with function to each element
    box.addEventListener("mouseenter", changeBackground)
});


// get size choice function
function getSizeChoice() {
    let answer = prompt("Please enter the length of one side of the grid (max = 100)");
    if (answer <= 100) {
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
    myNode.innerHTML = "";
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
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) { // apply listener with function to each element
        box.addEventListener("mouseenter", changeBackground)
    });
});