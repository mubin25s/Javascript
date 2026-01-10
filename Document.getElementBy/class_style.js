// Change styles for multiple elements
const boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "lightblue";
    boxes[i].style.border = "1px solid blue";
    boxes[i].style.padding = "10px";
}
