const p = document.getElementById('accept')

function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = qrCodeMessage;
    const amount = qrCodeMessage.split(" ")
    p.innerHTML = "Accept " + amount[2] + "?";
    console.log(amount[2]);
}

function onScanError(errorMessage) {
  //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 60, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);