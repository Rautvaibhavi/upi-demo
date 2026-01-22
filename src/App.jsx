import React from 'react'
import './App.css'
import QrScanner from './QrScanner'

function App() {

  const payNow = () => {

    const upiId = "dhruvavaiya@oksbi";   // change to real UPI ID
    const name = "My Demo Store";
    const amount = "4";
    const orderId = "ORD12345";

    const upiLink =
      `upi://pay?pa=${upiId}` +
      `&pn=${encodeURIComponent(name)}` +
      `&am=${amount}` +
      `&cu=INR` +
      `&tr=${orderId}` +
      `&tn=Order%20Payment` +
      `&url=${encodeURIComponent("https://example.com/invoice/" + orderId)}` +
      `&mode=00`;

    window.location.href = upiLink;
  };

  return (
    <div className="container">
      <h1>🛒 UPI Deep Link Demo</h1>

      <div className="card">
        <h2>Wireless Headphones</h2>
        <p>Price: ₹4</p>
        <p>Order ID: ORD12345</p>

        <button onClick={payNow}>
          Pay with UPI
        </button>
      </div>

      <QrScanner />
    </div>
  )
}

export default App


// import { useRef, useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import QrScanner from "./QrScanner";

// export default function App() {
//   const qrRef = useRef(null);
//   const [scan, setScan] = useState(false);

//   const upiLink =
//     "upi://pay?pa=vaibhaviraut031@oksbi&pn=Vaibhavi%20Raut&am=100&cu=INR&tn=Demo";

//   // 📱 Open UPI app after scan
//   const handleScan = (data) => {
//     if (data.startsWith("upi://pay")) {
//       window.location.href = data;
//     }
//   };

//   // 📤 Share QR IMAGE (GPay / PhonePe / Paytm)
//   const shareQrImage = async () => {
//     const canvas = document.querySelector("canvas");
//     const blob = await new Promise((res) =>
//       canvas.toBlob(res, "image/png")
//     );

//     const file = new File([blob], "upi-qr.png", { type: "image/png" });

//     if (navigator.canShare && navigator.canShare({ files: [file] })) {
//       await navigator.share({
//         title: "UPI Payment",
//         text: "Scan this QR to pay",
//         files: [file],
//       });
//     } else {
//       alert("Sharing not supported");
//     }
//   };

//   // 🟢 WhatsApp Share (text + link)
//   const shareWhatsApp = () => {
//     const text = `Pay using UPI\n${upiLink}`;
//     window.open(
//       `https://wa.me/?text=${encodeURIComponent(text)}`,
//       "_blank"
//     );
//   };

//   return (
//     <div style={{ textAlign: "center", padding: 40 }}>
//       <h2>UPI Payment</h2>

//       {/* 🔹 QR Code */}
//       <div ref={qrRef}>
//         <QRCodeCanvas value={upiLink} size={250} />
//       </div>

//       <br />

//       {/* 🔹 Share Buttons */}
//       <button onClick={shareWhatsApp} style={btn}>
//         Share on WhatsApp
//       </button>

//       <button onClick={shareQrImage} style={btn}>
//         Share QR (GPay / UPI App)
//       </button>

//       <br /><br />

//       {/* 🔹 Scan Same QR */}
//       {!scan && (
//         <button onClick={() => setScan(true)} style={btn}>
//           Open Camera & Scan QR
//         </button>
//       )}

//       {scan && <QrScanner onScan={handleScan} />}
//     </div>
//   );
// }

// const btn = {
//   padding: "12px 18px",
//   margin: "6px",
//   fontSize: "15px",
//   cursor: "pointer",
// };
