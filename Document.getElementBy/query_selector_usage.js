// Demonstrating querySelector and querySelectorAll
// These are modern alternatives to getElementById and getElementsByClassName

// Select the first element that matches the CSS selector
const header = document.querySelector("#main-header");
if (header) {
    header.style.color = "purple";
}

// Select all elements matching the CSS selector
const activeItems = document.querySelectorAll(".item.active");
activeItems.forEach((item, index) => {
    item.textContent = `Active Item ${index + 1}`;
    item.style.fontWeight = "bold";
});

// Selecting by attribute
const dataElements = document.querySelectorAll("[data-custom]");
console.log(`Found ${dataElements.length} elements with data-custom attribute.`);
