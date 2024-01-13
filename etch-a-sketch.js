const gridsizewidth = 8;
const gridsizeheight = 8;
const squares = []

function highcolorlight(e){
    e.target.style.background = '#ADD8E6';
}




const etchSketchBoard = document.querySelector(".etch-a-sketchBOARD");
for (let i = 0; i <= gridsizewidth-1; i++) {
    const gridRow = document.createElement("div");
    etchSketchBoard.appendChild(gridRow);
    for (let j = 0; j <= gridsizeheight-1; j++) {
        const gridpixel = document.createElement("div");
        gridRow.appendChild(gridpixel);
        gridpixel.addEventListener("mouseover", highcolorlight)

        
    }
}

console.log(squares)

//di.style.color