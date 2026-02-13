// Loop through all elements with a class and change text
const listItems = document.getElementsByClassName("fruit");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Fruit #" + (i + 1);
}
