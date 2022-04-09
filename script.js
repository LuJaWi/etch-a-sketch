const easSelector = document.querySelector(".etch-a-sketch");



console.log(easSelector);



let childPixelDiv = 'div'

let pixelEdgeCount = 5; // Number of etch-a-sketch pixels per edge
let easPixelEdgeLength = String(50/pixelEdgeCount + 'vh'); // heigth/width of each pixel converted to css style

console.log(easPixelEdgeLength);



for (i = pixelEdgeCount**2; i>0; i--) {
    easSelector.innerHTML += "<div class='eas-pixel'>test</div>"
}

const easPixels = document.querySelectorAll(".eas-pixel");

easPixels.forEach(pixel => {
    pixel.style.height = easPixelEdgeLength;
    pixel.style.width = easPixelEdgeLength;
    pixel.style.border = 'solid 1px'
});