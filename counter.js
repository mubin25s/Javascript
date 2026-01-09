(function setupEnvironment() {
    document.body.innerHTML = '';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f4f4f4';

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.background = 'white';
    container.style.padding = '40px';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';

    const h1 = document.createElement('h1');
    h1.textContent = 'Counter';
    container.appendChild(h1);

    const display = document.createElement('h2');
    display.id = 'counter-display';
    display.textContent = '0';
    display.style.fontSize = '3em';
    display.style.margin = '20px 0';
    container.appendChild(display);

    const btnContainer = document.createElement('div');
    
    const decBtn = document.createElement('button');
    decBtn.id = 'decrease';
    decBtn.textContent = '- Decrease';
    decBtn.style.padding = '10px 20px';
    decBtn.style.margin = '0 5px';
    decBtn.style.background = '#e74c3c';
    decBtn.style.color = 'white';
    decBtn.style.border = 'none';
    decBtn.style.borderRadius = '5px';
    decBtn.style.cursor = 'pointer';
    btnContainer.appendChild(decBtn);

    const incBtn = document.createElement('button');
    incBtn.id = 'increase';
    incBtn.textContent = '+ Increase';
    incBtn.style.padding = '10px 20px';
    incBtn.style.margin = '0 5px';
    incBtn.style.background = '#2ecc71';
    incBtn.style.color = 'white';
    incBtn.style.border = 'none';
    incBtn.style.borderRadius = '5px';
    incBtn.style.cursor = 'pointer';
    btnContainer.appendChild(incBtn);

    container.appendChild(btnContainer);
    document.body.appendChild(container);

    console.log("Counter UI Setup Complete.");
})();

var display = document.getElementById('counter-display');
var decreaseBtn = document.getElementById('decrease');
var increaseBtn = document.getElementById('increase');

function updateDisplay() {
    
}

function decreaseCounter() {
    // 1. Get current value
    // 2. Decrease by 1
    // 3. Update display
}

function increaseCounter() {
    // 1. Get current value
    // 2. Increase by 1
    // 3. Update display
}

// Add Event Listeners here:

