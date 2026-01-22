import { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [upiLink, setUpiLink] = useState("");
  const [qr, setQr] = useState("");

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

    const upiId = "vaibhaviraut031@oksbi";
    const name = "Vaibhavi Raut";
    const amount = "100";
    const note = "Website Payment";

    const params = new URLSearchParams({
      pa: upiId,
      pn: name,
      am: amount,
      cu: "INR",
      tn: note
    });

    const link = `upi://pay?${params.toString()}`;
    setUpiLink(link);

    setQr(
      `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
        link
      )}`
    );
  }, []);

  const payNow = () => {
    if (!isMobile) {
      alert("Please scan QR using your phone");
      return;
    }
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>UPI Payment</h2>

      <button onClick={payNow}>
        Pay ₹100 (GPay / PhonePe)
      </button>

      {!isMobile && qr && (
        <>
          <h3>Scan QR using UPI App</h3>
          <img src={qr} alt="UPI QR" width="250" />
        </>
      )}
    </div>
  );
}
