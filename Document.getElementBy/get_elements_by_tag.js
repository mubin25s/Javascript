// Demonstrating getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(`Found ${paragraphs.length} paragraph elements.`);

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontStyle = "italic";
    paragraphs[i].textContent += " (Modified by Tag Name)";
}

// Accessing the first <div> tag
const firstDiv = document.getElementsByTagName("div")[0];
if (firstDiv) {
    firstDiv.style.border = "2px solid darkblue";
}
