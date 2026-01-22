// import { useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import QrScanner from "./QrScanner";

// export default function App() {
//   const [scan, setScan] = useState(false);

//   const upiLink =
//     "upi://pay?pa=vaibhaviraut031@oksbi&pn=Vaibhavi%20Raut&am=100&cu=INR&tn=Demo";

//   const handleScan = (data) => {
//     if (data.startsWith("upi://pay")) {
//       window.location.href = data;
//     } else {
//       alert("Invalid QR");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: 40 }}>
//       <h2>UPI Payment Demo</h2>

//       <p>Scan this QR</p>
//       <QRCodeCanvas value={upiLink} size={250} />

//       <br /><br />

//       {!scan && (
//         <button onClick={() => setScan(true)}>
//           Open Camera & Scan QR
//         </button>
//       )}

//       {scan && <QrScanner onScan={handleScan} />}
//     </div>
//   );
// }

import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QrScanner from "./QrScanner";

export default function App() {
  const qrRef = useRef(null);
  const [scan, setScan] = useState(false);

  const upiLink =
    "upi://pay?pa=vaibhaviraut031@oksbi&pn=Vaibhavi%20Raut&am=100&cu=INR&tn=Demo";

  // 📱 Open UPI app after scan
  const handleScan = (data) => {
    if (data.startsWith("upi://pay")) {
      window.location.href = data;
    }
  };

  // 📤 Share QR IMAGE (GPay / PhonePe / Paytm)
  const shareQrImage = async () => {
    const canvas = qrRef.current.querySelector("canvas");
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );

    const file = new File([blob], "upi-qr.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "UPI Payment",
        text: "Scan this QR to pay",
        files: [file],
      });
    } else {
      alert("Sharing not supported on this device");
    }
  };

  // 🟢 WhatsApp Share (text + link)
  const shareWhatsApp = () => {
    const text = `Pay using UPI\n${upiLink}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment</h2>

      {/* 🔹 QR Code */}
      <div ref={qrRef}>
        <QRCodeCanvas value={upiLink} size={250} />
      </div>

      <br />

      {/* 🔹 Share Buttons */}
      <button onClick={shareWhatsApp} style={btn}>
        Share on WhatsApp
      </button>

      <button onClick={shareQrImage} style={btn}>
        Share QR (GPay / UPI App)
      </button>

      <br /><br />

      {/* 🔹 Scan Same QR */}
      {!scan && (
        <button onClick={() => setScan(true)} style={btn}>
          Open Camera & Scan QR
        </button>
      )}

      {scan && <QrScanner onScan={handleScan} />}
    </div>
  );
}

const btn = {
  padding: "12px 18px",
  margin: "6px",
  fontSize: "15px",
  cursor: "pointer",
};
