(function setupEnvironment() {
    document.body.innerHTML = '';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.marginTop = '50px';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f4f4f4';

    const style = document.createElement('style');
    style.innerHTML = `
        .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); width: 300px; text-align: center; }
        input { padding: 10px; width: 70%; margin-right: 5px; }
        button#enter { padding: 10px; cursor: pointer; background: #2ecc71; border: none; color: white; border-radius: 5px; }
        button#enter:hover { background: #27ae60; }
        ul { list-style: none; padding: 0; text-align: left; margin-top: 20px; }
        li { background: #eee; margin: 5px 0; padding: 10px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        li:hover { background: #ddd; }
        .done { text-decoration: line-through; color: gray; }
        .delete-btn { background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; margin-left: 10px; }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'container';

    const h1 = document.createElement('h1');
    h1.textContent = 'Shopping List';
    container.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Get it done today!';
    container.appendChild(p);

    const divInput = document.createElement('div');
    const input = document.createElement('input');
    input.id = 'userinput';
    input.placeholder = 'Enter item';
    divInput.appendChild(input);

    const btn = document.createElement('button');
    btn.id = 'enter';
    btn.textContent = 'Enter';
    divInput.appendChild(btn);
    container.appendChild(divInput);

    const ul = document.createElement('ul');
    ul.id = 'ul';
    container.appendChild(ul);

    document.body.appendChild(container);

    console.log("Environment Setup Complete. Implementing Logic...");
})();

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
}
