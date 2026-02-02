// Basic usage: Get elements and count them
const elements = document.getElementsByClassName("intro");

console.log("Number of elements with class 'intro': " + elements.length);

// access the first one directly
if(elements.length > 0) {
    elements[0].textContent = "Hello World! (Updated)";
}
