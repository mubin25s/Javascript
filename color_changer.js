(function setupEnvironment() {
    document.body.innerHTML = '';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.fontFamily = 'sans-serif';

    const box = document.createElement('div');
    box.style.textAlign = 'center';
    box.style.background = 'white';
    box.style.padding = '40px';
    box.style.borderRadius = '15px';
    box.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';

    const h1 = document.createElement('h1');
    h1.textContent = 'Color Flipper';
    box.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = 'Background Color: <span id="color-code">#FFFFFF</span>';
    box.appendChild(p);

    const btn = document.createElement('button');
    btn.id = 'btn';
    btn.textContent = 'Change Color';
    btn.style.padding = '12px 24px';
    btn.style.fontSize = '1.1em';
    btn.style.cursor = 'pointer';
    btn.style.background = 'black';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.marginTop = '20px';
    box.appendChild(btn);

    document.body.appendChild(box);
})();

var btn = document.getElementById('btn');
var colorCode = document.getElementById('color-code');

function getRandomColor() {
    // Return a random hex color (e.g. #A2B3C4)
    // Hint: "0123456789ABCDEF"
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', function() {
    // 1. Get a random color
    // 2. Set document.body.style.backgroundColor
    // 3. Update the text textContent of colorCode
});
