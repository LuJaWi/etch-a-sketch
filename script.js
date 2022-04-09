const easSelector = document.querySelector(".etch-a-sketch");



console.log(easSelector);



let childPixelDiv = 'div'

let gridEdgeLength = 4;
let easPixelEdgeLength = String(1024/gridEdgeLength + 'px');

console.log(easPixelEdgeLength);



for (i = gridEdgeLength**2; i>0; i--) {
    easSelector.innerHTML += "<div class='eas-pixel'>test</div>"
}

const easPixels = document.querySelectorAll(".eas-pixel");

easPixels.forEach(pixel => {
    pixel.style.height = easPixelEdgeLength;
    pixel.style.width = easPixelEdgeLength;
});