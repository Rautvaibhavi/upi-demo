import { useEffect, useState } from "react";
import { createUpi } from "./api";

export default function App() {
  const [upiLink, setUpiLink] = useState(null);
  const [qr, setQr] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const startPayment = async () => {
    setLoading(true);
    const data = await createUpi(100);

    if (data.success) {
      setUpiLink(data.upiLink);
      setQr(data.qr);

      // 📱 auto-open UPI app on mobile
      if (mobile) {
        window.location.href = data.upiLink;
      }
    }
    setLoading(false);
  };

  const openUpi = () => {
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment</h2>

      <button onClick={startPayment} disabled={loading}>
        {loading ? "Processing..." : "Pay ₹100"}
      </button>

      {/* 📱 MOBILE UI */}
      {mobile && upiLink && (
        <>
          <h3>Select UPI App</h3>

          <button onClick={openUpi}>Pay with Google Pay</button>
          <button onClick={openUpi}>Pay with PhonePe</button>
          <button onClick={openUpi}>Pay with Paytm</button>
        </>
      )}

      {/* 💻 DESKTOP UI */}
      {!mobile && qr && (
        <>
          <h3>Scan QR using any UPI App</h3>
          <img src={qr} alt="UPI QR" width="250" />
          <p>Open GPay / PhonePe on your phone to scan</p>
        </>
      )}
    </div>
  );
}
