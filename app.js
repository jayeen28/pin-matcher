function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + '';
    if (pinText.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    document.getElementById('generate-pin-input').value = getPin();
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const keyTyped = event.target.innerText;
    const keyInput = document.getElementById('key-input');
    if (isNaN(keyTyped)) {
        if (keyTyped == 'C') {
            keyInput.value = '';
        }
    }
    else {
        const previousKeyInput = keyInput.value;
        const newKeyInput = previousKeyInput + keyTyped;
        if (newKeyInput.length > 4) {
            return;
        }
        keyInput.value = newKeyInput;
    }
});
function verifyPin() {
    const pin = document.getElementById('generate-pin-input').value;
    const typed = document.getElementById('key-input').value;
    if (pin == typed) {
        document.getElementById('success-notify').classList.remove('d-none');
        document.getElementById('error-notify').classList.add('d-none');
    }
    else {
        document.getElementById('error-notify').classList.remove('d-none');
        document.getElementById('success-notify').classList.add('d-none');
    }
}