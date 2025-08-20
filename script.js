function copyUPI() {
    const upi = document.getElementById("upi-id").innerText;
    navigator.clipboard.writeText(upi).then(() => {
        alert("UPI ID copied: " + upi);
    });
}
