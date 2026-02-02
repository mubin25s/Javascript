// Demonstrating dynamic element creation and appending
const container = document.getElementById("container") || document.body;

// Create a new element
const newDiv = document.createElement("div");

// Set properties
newDiv.id = "dynamic-element";
newDiv.className = "alert alert-info";
newDiv.textContent = "This element was created dynamically using document.createElement()";
newDiv.style.padding = "15px";
newDiv.style.margin = "10px 0";
newDiv.style.backgroundColor = "#e1f5fe";
newDiv.style.border = "1px solid #b3e5fc";
newDiv.style.borderRadius = "4px";

// Append to the DOM
container.appendChild(newDiv);

// Adding a button to the new div
const closeBtn = document.createElement("button");
closeBtn.textContent = "Remove Me";
closeBtn.style.marginLeft = "10px";
closeBtn.onclick = function() {
    newDiv.remove();
};

newDiv.appendChild(closeBtn);
