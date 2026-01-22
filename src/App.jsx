import { useState } from "react";
import { createUpi } from "./api";
import "./App.css";

export default function App() {
  const [qr, setQr] = useState(null);
  const [upiLink, setUpiLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const payNow = async () => {
    setLoading(true);

    try {
      const data = await createUpi(100);

      if (data.success) {
        setQr(data.qr);
        setUpiLink(data.upiLink);

        // 📱 Auto open UPI apps on mobile
        if (/Android|iPhone/i.test(navigator.userAgent)) {
          window.location.href = data.upiLink;
        }
      }
    } catch (err) {
      alert("Payment error");
      console.error(err);
    }

    setLoading(false);
  };

  const sharePayment = async () => {
    if (navigator.share && upiLink) {
      await navigator.share({
        title: "UPI Payment",
        text: "Pay using UPI",
        url: upiLink
      });
    } else {
      alert("Share not supported on this device");
    }
  };

  const shareWhatsApp = () => {
    const text = "Scan this QR to pay via UPI";
    const url = qr; // QR image URL

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      "_blank"
    );
  };

  const openGPay = () => {
    window.location.href = upiLink;
  };

  const shareQrImage = async () => {
    const response = await fetch(qr);
    const blob = await response.blob();

    const file = new File([blob], "upi-qr.png", { type: blob.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "UPI QR Code",
        files: [file],
      });
    } else {
      alert("Sharing not supported on this device");
    }
  };


  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment Demo</h2>

      <button onClick={payNow} disabled={loading} style={btn}>
        {loading ? "Processing..." : "Pay ₹100 via UPI"}
      </button>

      {qr && (
        <>
          <p>Scan QR (Desktop)</p>
          <img src={qr} alt="UPI QR" width="250" />
        </>
      )}

      {upiLink && (
        <div>
          <button onClick={sharePayment} style={btn}>
            Share Payment Link
          </button>
          <button onClick={shareWhatsApp} style={btn}>
            Share QR on WhatsApp
          </button>

          <button onClick={openGPay}>Pay with GPay</button>
          <button onClick={openGPay}>Pay with PhonePe</button>
          <button onClick={openGPay}>Pay with Paytm</button>
          <button onClick={shareQrImage}>
            Share QR (Choose App)
          </button>
        </div>
      )}
    </div>
  );
}

const btn = {
  padding: "12px 20px",
  fontSize: "16px",
  margin: "10px",
  cursor: "pointer"
};
