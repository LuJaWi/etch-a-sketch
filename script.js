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

// Function for creating random RGBA values for rainbow mode
const randomRGBA = function(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let alpha = Math.random();
    let rgba = String(red + ", " + green + ", " + blue + ", " + alpha)
    return rgba;
};

// Takes an RGB value and returns a value 10% darker
const darken = function(element) {

    elementStyle = window.getComputedStyle(element,"");
    // gets rgba value for background-color
    elementBackgroundColor = elementStyle.getPropertyValue("background-color");
    let red = parseFloat(elementBackgroundColor.split('(')[1])
    let green = parseFloat(elementBackgroundColor.split(',')[1])
    let blue = parseFloat(elementBackgroundColor.split(',')[2])
    let alpha = parseFloat(elementBackgroundColor.split(',')[3])

    console.log(red+", "+blue+", "+green+", "+alpha);

    if (alpha>0.9) {
        return ("rgba("+red+", "+green+", "+blue+", "+alpha+")")
    } else {
        alpha += 0.1
        return ("rgba("+red+", "+green+", "+blue+", "+alpha+")")
    }
}

const changeGridSizeButton = document.querySelector(".grid-size-button")

changeGridSizeButton.addEventListener('click', () => {changeGridSize()});

// Function that prompts for a new grid size and then creates a new grid
function changeGridSize() {
    let newGridSize = prompt("Please enter new grid size:");
    // Make sure input is a whole number
    if (newGridSize%1 != 0) {
        return alert("Enter a whole number or this grid is gonna look weird");
    // Handling for larger inputs
    } else if (newGridSize > 100) {
        return alert("That's gonna take too long to load, try something lower than 100")
    } else if (newGridSize>50){
        alert("This will take a sec, hang tight")
    }

    // Clear old grid
    easSelector.innerHTML = "";
    // Calculate pixel length
    let newPixelLength = String(50/newGridSize + 'vh');
    // create new pixels
    for (i = newGridSize**2;i > 0; i--){
        easSelector.innerHTML += '<div class = "eas-pixel" style="height:' + newPixelLength + '; width: ' + newPixelLength + '"></div>'
    }
    // re-initializing event listeners
    initializeEventListeners();
};

// Creating a function for initializing event listeners.
// Old event listeners do new function on newly created elements
// This function must be called everytime new pixels are made for event listeners to function
function initializeEventListeners() {
    const easPixels = document.querySelectorAll(".eas-pixel"); // Query selector for all created pixels
    easPixels.forEach(pixel => {
    // adds class on mouseover (per pixel)
    pixel.addEventListener('mouseover', () => {
        // Rainbow mode
        if(document.getElementById('rainbow').checked){
        pixel.style.backgroundColor = 'rgba(' + randomRGBA() + ')';}
        // Black Mode
        if(document.getElementById('black').checked){
            pixel.style.backgroundColor = 'rgba(48,48,48,0.99)';}
        // Shader Mode
        if(document.getElementById('shader').checked){
            pixel.style.backgroundColor = darken(pixel);
        }
        // Hover Mode

        // Eraser Mode
        if(document.getElementById('eraser').checked){
            pixel.style.backgroundColor = 'rgb(255,255,255, 0)';}

    });
    // resets all pixels when 'reset' button is clicked
    resetEAS.addEventListener('click', () => {
        pixel.style.backgroundColor = 'rgba(0,0,0,0.0)';
    }); 
});
}

// Initializing event listeners at page load.
initializeEventListeners();