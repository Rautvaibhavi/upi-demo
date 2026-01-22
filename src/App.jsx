import { useState } from "react";
import QRCode from "qrcode.react";
import QrScanner from "./QrScanner";

export default function App() {
  const [scan, setScan] = useState(false);

  // 🔑 Your UPI details
  const upiLink =
    "upi://pay?pa=vaibhaviraut031@oksbi&pn=Vaibhavi%20Raut&am=100&cu=INR&tn=Demo%20Payment";

  const handleScan = (data) => {
    if (data.startsWith("upi://pay")) {
      window.location.href = data; // 🚀 Opens GPay
    } else {
      alert("Invalid QR");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment Demo</h2>

      {/* 🔹 Generate QR */}
      <p>Scan this QR using camera</p>
      <QRCode value={upiLink} size={250} />

      <br /><br />

      {/* 🔹 Camera Access */}
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
  padding: "12px 20px",
  fontSize: "16px",
  cursor: "pointer",
};
