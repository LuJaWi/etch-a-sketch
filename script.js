const easSelector = document.querySelector(".etch-a-sketch");

let pixelEdgeCount = 10; // Starting number of etch-a-sketch pixels per edge on page load
let easPixelEdgeLength = String(50/pixelEdgeCount + 'vh'); // heigth/width of each pixel converted to css style

// Creates grid based on pixel edge count
for (i = pixelEdgeCount**2; i>0; i--) {
    // Pixels are created with in-line style
    easSelector.innerHTML += '<div class="eas-pixel" style="width: '+ easPixelEdgeLength +'; width: ' + easPixelEdgeLength + '"></div>';
};

// Selector variable for reset button
const resetEAS = document.querySelector(".reset-button")

// Add event listeners that can influence every pixel

// Function for creating random RGB values for rainbow mode
const randomRGB = function(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let rgb = String(red + ", " + green + ", " + blue)
    return rgb;
};

const changeGridSizeButton = document.querySelector(".grid-size-button")

changeGridSizeButton.addEventListener('click', () => {changeGridSize()});

// Function that prompts for a new grid size and then creates a new grid
function changeGridSize() {
    let newGridSize = prompt("Please enter new grid size:");
    // Clear old grid
    easSelector.innerHTML = "";
    // Calculate pixel length
    let newPixelLength = String(50/newGridSize + 'vh');
    // create new pixels
    for (i = newGridSize**2;i > 0; i--){
        easSelector.innerHTML += '<div class = "eas-pixel" style="height:' + newPixelLength + '; width: ' + newPixelLength + '"></div>'
    }
    // re-initializing event listeners
    initializeEventListener();
};

// Creating a function for initializing event listeners.
// Old event listeners do new function on newly created elements
// This function must be called everytime new pixels are made for event listeners to function
function initializeEventListener() {
    const easPixels = document.querySelectorAll(".eas-pixel"); // Query selector for all created pixels
    easPixels.forEach(pixel => {
    // adds class on mouseover (per pixel)
    pixel.addEventListener('mouseover', () => {
        // Rainbow mode
        if(document.getElementById('rainbow').checked){
        pixel.style.backgroundColor = 'rgb(' + randomRGB() + ')';}
        // Black Mode
        if(document.getElementById('black').checked){
            pixel.style.backgroundColor = 'rgb(48,48,48)';}
        // Eraser Mode
        if(document.getElementById('eraser').checked){
            pixel.style.backgroundColor = 'rgb(255,255,255)';}

    });
    // resets all pixels when 'reset' button is clicked
    resetEAS.addEventListener('click', () => {
        pixel.style.backgroundColor = 'rgb(255,255,255)';
    }); 
});
}

// Initializing event listeners at page load.
initializeEventListener();