const qr = require('qrcode');
const display = document.getElementById('qrDisplay')

const buyerQRCode = document.querySelector('.buyerQR')

  buyerQRCode.addEventListener('submit', (e)=>{
    e.preventDefault();
    const password = buyerQRCode.password.value;
    const text = "transfer completed"
    if(password === ''){
        alert('password required')
    } else {
        generateQRCode(text)
    }
})

const generateQRCode = (text) => {
    qr.toCanvas(display, text, {
        width : 250,
        height: 250
    });
  };


  function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = qrCodeMessage;
    const amount = qrCodeMessage.split(" ")
    document.getElementById('payFor').innerHTML = "Pay " + amount[1] + "?"
    console.log(amount[2]);
}

function onScanError(errorMessage) {
  console.log(errorMessage)
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 60, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
