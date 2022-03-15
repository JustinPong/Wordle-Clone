
let height = 6;
let width = 5;

let row = 0;
let col = 0;

let gameOver = false;
let word = "SQUID";

window.onload = function() {
    intialize();
}

function intialize() {
    for(let r = 0; r < height; r++) {
        for(let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "Test";
            document.getElementById("board").appendChild(tile);
        }
    }
}