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