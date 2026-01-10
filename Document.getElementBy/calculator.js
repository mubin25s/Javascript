(function setupEnvironment() {
    document.body.innerHTML = '';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.marginTop = '50px';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#2c3e50';

    const container = document.createElement('div');
    container.style.background = 'white';
    container.style.padding = '30px';
    container.style.borderRadius = '10px';
    container.style.width = '300px';

    const h2 = document.createElement('h2');
    h2.textContent = 'Simple Calculator';
    h2.style.textAlign = 'center';
    container.appendChild(h2);

    const result = document.createElement('div');
    result.id = 'result';
    result.textContent = '0';
    result.style.background = '#ecf0f1';
    result.style.padding = '15px';
    result.style.marginBottom = '20px';
    result.style.textAlign = 'right';
    result.style.fontSize = '2em';
    result.style.borderRadius = '5px';
    container.appendChild(result);

    const inputs = document.createElement('div');
    inputs.style.display = 'flex';
    inputs.style.gap = '10px';
    inputs.style.marginBottom = '20px';

    const input1 = document.createElement('input');
    input1.id = 'num1';
    input1.type = 'number';
    input1.placeholder = 'Num 1';
    input1.style.width = '100%';
    input1.style.padding = '10px';
    inputs.appendChild(input1);

    const input2 = document.createElement('input');
    input2.id = 'num2';
    input2.type = 'number';
    input2.placeholder = 'Num 2';
    input2.style.width = '100%';
    input2.style.padding = '10px';
    inputs.appendChild(input2);

    container.appendChild(inputs);

    const buttons = document.createElement('div');
    buttons.style.display = 'grid';
    buttons.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    buttons.style.gap = '10px';

    ['+', '-', '*', '/'].forEach(symbol => {
        const btn = document.createElement('button');
        btn.textContent = symbol;
        btn.className = 'calc-btn';
        btn.dataset.op = symbol;
        btn.style.padding = '15px';
        btn.style.fontSize = '1.2em';
        btn.style.cursor = 'pointer';
        buttons.appendChild(btn);
    });
    container.appendChild(buttons);

    document.body.appendChild(container);
    console.log("Calculator UI Setup.");
})();

var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var resultDisplay = document.getElementById('result');
var buttons = document.querySelectorAll('.calc-btn');

function calculate(n1, n2, operator) {
    // Implement calculation logic
    // Return the result
}

// Add specific event listeners or loop through buttons
buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var op = btn.dataset.op;
        // 1. Get values from inputs
        // 2. Call calculate(val1, val2, op)
        // 3. Update resultDisplay
    });
});
