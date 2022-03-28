const easSelector = document.querySelector(".etch-a-sketch");
console.log(easSelector)


let childPixelDiv = 'div'

gridEdge = 5

for (i = gridEdge**2; i>0; i--) {
    easSelector.innerHTML += "<div class='eas-pixel'>test</div>"
}
