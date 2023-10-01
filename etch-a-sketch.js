const gridsizewidth = 8;
const gridsizeheight = 8;



const etchSketchBoard = document.querySelector(".etch-a-sketchBOARD");
for (let i = 0; i <= gridsizewidth; i++) {
    const gridRow1Pixel = document.createElement("div");
    etchSketchBoard.appendChild(gridRow1Pixel);
    for (let j = 0; j <= gridsizeheight; j++) {
        const gridpixel = document.createElement("div");
        gridRow1Pixel.appendChild(gridpixel);
        
    }
}
