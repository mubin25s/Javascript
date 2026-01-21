// Adding event listeners to multiple elements
const buttons = document.getElementsByClassName("click-me");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        alert("Button " + (i+1) + " was clicked!");
        this.style.backgroundColor = "lightgreen";