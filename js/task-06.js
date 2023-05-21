const inputEl = document.querySelector('#validation-input');

const validateInput = () => {
    const inputValue = inputEl.value;
    const requiredLength = inputEl.getAttribute('data-length');

    if (inputValue.length === parseInt(requiredLength)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', validateInput);
