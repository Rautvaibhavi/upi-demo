import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QrScanner from "./QrScanner";

export default function App() {
  const [scan, setScan] = useState(false);

  const upiLink =
    "upi://pay?pa=vaibhaviraut031@oksbi&pn=Vaibhavi%20Raut&am=100&cu=INR&tn=Demo";

  const handleScan = (data) => {
    if (data.startsWith("upi://pay")) {
      window.location.href = data;
    } else {
      alert("Invalid QR");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment Demo</h2>

      <p>Scan this QR</p>
      <QRCodeCanvas value={upiLink} size={250} />

      <br /><br />

      {!scan && (
        <button onClick={() => setScan(true)}>
          Open Camera & Scan QR
        </button>
      )}

      {scan && <QrScanner onScan={handleScan} />}
    </div>
  );
}
