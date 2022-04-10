const easSelector = document.querySelector(".etch-a-sketch");

let pixelEdgeCount = 20; // Number of etch-a-sketch pixels per edge
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

const resetEAS = document.querySelector(".reset-button")

// Add event listener that adds a class on mouse over
easPixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add("grayfill");
    });
    resetEAS.addEventListener('click', () => {
        pixel.classList.remove("grayfill");
    }); 
});

