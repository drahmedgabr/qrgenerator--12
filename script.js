const canvas = document.getElementById("qrCode");
const userInput = document.getElementById("userInput");

function generateCode() {
    var qr = new QRious({
        element: canvas,
        value: userInput.value,
    });
}