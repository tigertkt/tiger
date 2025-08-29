 function openPlan(plan, price) {
  document.getElementById("payModal").style.display = "flex";
  document.getElementById("planText").innerHTML =
    "🔑 <b>" + plan + "</b> Plan — ₹" + price;

  // Example UPI ID (replace with your real UPI ID)
  let upiID = "alexkite@jio"; 
  let upiLink =
    "upi://pay?pa=" + upiID +
    "&pn=Tiger%20Extension" +
    "&am=" + price +
    "&cu=INR";

  // Show UPI string
  document.getElementById("upiString").innerText = upiLink;

  // Clear old QR
  document.getElementById("qrWrap").innerHTML = "";

  // Generate new QR
  new QRCode(document.getElementById("qrWrap"), {
    text: upiLink,
    width: 180,
    height: 180
  });
}

function closeModal() {
  document.getElementById("payModal").style.display = "none";
}

document.getElementById("year").textContent = new Date().getFullYear();