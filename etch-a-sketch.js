//create first board
const first_gridsize = 0;

    const etchSketchBoard = document.querySelector(".etch-a-sketchBOARD");
    for (let i = 0; i <= first_gridsize; i++) {
        const gridRow = document.createElement("div");
        etchSketchBoard.appendChild(gridRow);
        for (let j = 0; j <= first_gridsize; j++) {
            const gridpixel = document.createElement("div");
            gridRow.appendChild(gridpixel);
            gridpixel.addEventListener("mouseover", highcolorlight)

            
        }
    }

//function to call when pixels are highlighted by cursor; changes pixel color
function highcolorlight(e){
    e.target.style.background = '#ADD8E6';
}

//clear board
function resetboard(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//
function createboard(form){
    const etchSketchBoard = document.querySelector(".etch-a-sketchBOARD");

    //reset board
    resetboard(etchSketchBoard)

    //create board with user inputted size
    const gridsize = form.inputbox.value - 1;

    if (gridsize > 100){
        console.log("too big")
    }
    for (let i = 0; i <= gridsize; i++) {
        const gridRow = document.createElement("div");
        etchSketchBoard.appendChild(gridRow);
        for (let j = 0; j <= gridsize; j++) {
            const gridpixel = document.createElement("div");
            gridRow.appendChild(gridpixel);
            gridpixel.addEventListener("mouseover", highcolorlight)

            
        }
    }
}
