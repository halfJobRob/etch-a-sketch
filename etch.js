const num = 16;

// This function will now return the created row element
const createRow = function() {
    const gridContainer = document.querySelector("#grid-container");
    const row = document.createElement("div"); // Changed to 'div' here, as 'div.row' is a CSS selector
    row.classList.add("row"); // Add the class "row" to the div
    gridContainer.appendChild(row);
    return row; // Return the newly created row, makes row accessible outside function
}

// This function now accepts the specific row to add the square to
const createSquare = function(row) {
    const sqDiv = document.createElement("div"); // Changed to 'div' here
    sqDiv.classList.add("square"); // Add the class "square" to the div
    row.appendChild(sqDiv);
    //return square;
}

// Your loop structure (with a minor adjustment for clarity and efficiency)
for (let i = 0; i < num; i++) {
    const currentRow = createRow(); // Store the row created in this iteration
    for (let j = 0; j < num; j++) {
        createSquare(currentRow); // Pass the current row to createSquare
    }
}

/*
document.getElementsByClassName("square").onmouseover = mouseOver();

const mouseOver = function() {
    document.getElementsByClassName("square").style.color = "black";
}*/

/*
const createRows = function() {

    const gridContainer = document.querySelector("#grid-container"); //outer grid container

    const row = document.createElement("div.row"); // row divs
    row.classList.add("row"); // Add the class "row" to the div
    row.textContent = "row";
    gridContainer.appendChild(row);
    return row;
}

const createSquare = function() {
    
    const square = document.querySelector("div.row"); // tell js we're making in the row div
    const sqDiv = document.createElement("div.square"); // create an element div row & squares
    square.textContent = "sQ";
    row.appendChild(sqDiv); // append div to page
  }

for (i=0; i < num; i++) {
    createRows();
    
    for (j=0; j < num; j++) {
        createSquare();
    }

}
*/