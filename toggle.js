const toggleButton = document.getElementById('toggleButton');
const stylesheet = document.getElementById('stylesheet');

let isSecond = false;

function toggleCSS() {
    if (isSecond) {
        stylesheet.href = 'style1.css';
        isSecond = false;
    } else {
        stylesheet.href = 'style2.css';
        isSecond = true;
    }
    // var buttonStyle = "";
    localStorage.setItem('buttonStyle', isSecond ? 'style2' : 'style1');
}

toggleButton.addEventListener('click', toggleCSS);

const savedStyle = localStorage.getItem('buttonStyle');
if (savedStyle === 'style2') {
    stylesheet.href = 'style2.css';
    isSecond = true;
}
