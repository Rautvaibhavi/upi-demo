import { useState } from "react";
import QrScanner from "./QrScanner";

export default function App() {
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    if (data.startsWith("upi://pay")) {
      window.location.href = data; // 🚀 open UPI apps
    } else {
      alert("Invalid UPI QR");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>Scan UPI QR</h2>

      {!scanning && (
        <button onClick={() => setScanning(true)}>
          Open Camera & Scan QR
        </button>
      )}

      {scanning && <QrScanner onScan={handleScan} />}
    </div>
  );
}
