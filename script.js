const canvas = document.getElementById("qrCode");
const userInput = document.getElementById("userInput");
const qrText = document.getElementById("qrText");


function generateCode() {
    if (userInput.value == "") {
        alert("Please enter text to convert");
    } else {
        var qr = new QRious({
            element: canvas,
            value: userInput.value,
            size: 200,
            foreground: "purple",
        });
        canvas.style.display = "inline-block";
        qrText.innerText = userInput.value;
        userInput.value = "";
        canvas.scrollIntoView();
    }
   
}