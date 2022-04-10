const easSelector = document.querySelector(".etch-a-sketch");

let pixelEdgeCount = document.getElementById('canvas-size').value; // Number of etch-a-sketch pixels per edge
let easPixelEdgeLength = String(50/pixelEdgeCount + 'vh'); // heigth/width of each pixel converted to css style

// Creates grid based on pixel edge count
for (i = pixelEdgeCount**2; i>0; i--) {
    easSelector.innerHTML += '<div class="eas-pixel"></div>';
};



const easPixels = document.querySelectorAll(".eas-pixel"); // Query selector for all created pixels

// Adds correct base formatting for all pixels
easPixels.forEach(pixel => {
    pixel.style.height = easPixelEdgeLength;
    pixel.style.width = easPixelEdgeLength;
    pixel.style.border = 'solid 1px';
});

// Selector variable for reset button
const resetEAS = document.querySelector(".reset-button")

// Add event listeners that can influence every pixel
easPixels.forEach(pixel => {
    // adds class on mouseover (per pixel)
    pixel.addEventListener('mouseover', () => {
        if(document.getElementById('rainbow').checked){
        pixel.style.backgroundColor = 'rgb(' + randomRGB() + ')';}
        if(document.getElementById('black').checked){
            pixel.style.backgroundColor = 'rgb(48,48,48)';}
        if(document.getElementById('eraser').checked){
            pixel.style.backgroundColor = 'rgb(255,255,255)';}

    });
    // resets all pixels when 'reset' button is clicked
    resetEAS.addEventListener('click', () => {
        pixel.style.backgroundColor = 'rgb(255,255,255)';
    }); 
});

const randomRGB = function(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let rgb = String(red + ", " + green + ", " + blue)
    return rgb;
};