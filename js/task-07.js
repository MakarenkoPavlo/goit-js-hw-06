const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const changeFontSize = () => {
    const fontSize = fontSizeControl.value;
    textSpan.style.fontSize = fontSize + 'px';
};
fontSizeControl.addEventListener('input', changeFontSize);