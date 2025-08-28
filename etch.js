let num = 9;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  getUserInput();
});

const rnb = document.querySelector('#rainbow');
rnb.addEventListener("click", () => {
  hoverRainow();
});

const black = document.querySelector('#black');
black.addEventListener('click', () => {
  hoverBlack();
})

const white = document.querySelector('#white');
white.addEventListener("click", () => {
  hoverWhite();
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  clearScreen();
})

const getUserInput = function() {
  let input = prompt("Choose Grid Size 1-100");
  let parsedInput = parseInt(input);

  num = Math.round(parsedInput); // use Math.round to return whole int

    if (num < 1 || num > 100 || isNaN(num)) {
      getUserInput();
  }
    else {
      console.log(num);
      createGrid();
    }
};

const gridContainer = document.querySelector("#grid-container");

// This function will now return the created row element
const createRow = function() {
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
}

// function to create the grid
const createGrid = function() {

    gridContainer.innerHTML = ''; // clear the grid needed to create new grid w/userInput

    // loop to create rows, loop squares within the rows
    for (let i = 0; i < num; i++) {
        const currentRow = createRow(); // Store the row created in this iteration
        for (let j = 0; j < num; j++) {
            createSquare(currentRow); // Pass the current row to createSquare
    }
  }
};

const hoverBlack = function() {
  // Add an event listener to the ENTIRE grid container
  gridContainer.addEventListener('mouseenter', function(event) {
    if (event.target.classList.contains('square')) { // Check if the thing we're hovering over is a square
      event.target.style.backgroundColor = '#333333';
    }
  }, true); // The 'true' makes this work for all child elements
}

createGrid();
hoverBlack();

const createRainbow = function() {
  const randomNumber = Math.floor(Math.random() * 7);
  if (randomNumber === 0) {
    return "#ff0000"; // red
  } else if (randomNumber === 1) {
    return "#ffff00"; // yellow
  } else if (randomNumber === 2) {
    return "#ffc0cb"; // pink
  } else if (randomNumber === 3) {
    return "#00ff00"; // green
  } else if (randomNumber === 4) {
    return "#800080"; // purple
  } else if (randomNumber === 5) {
    return "#ffa500"; // orange
  } else {
    return "#0000ff"; // blue
  }
}

const hoverRainow = function () {
  gridContainer.addEventListener('mouseenter', function(event) {
    if (event.target.classList.contains('square')) {
      event.target.style.backgroundColor = createRainbow();
    }
  },true)
}

const hoverWhite = function() {
  gridContainer.addEventListener('mouseenter', function(event) {
    if (event.target.classList.contains('square')) {
      event.target.style.backgroundColor = '#ffffff';
    }
  }, true)
}

const clearScreen = function() {
      createGrid();
      hoverBlack();
}