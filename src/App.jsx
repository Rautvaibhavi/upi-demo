import React, { useState } from "react";

function App() {
  const [upiId, setUpiId] = useState("");

  const handlePay = () => {
    if (!upiId) {
      alert("Please enter a UPI ID");
      return;
    }

    const name = "Payee Name"; // optional
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

    // Open GPay or any UPI app
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>UPI Chat Payment Demo</h1>
      <input
        type="text"
        placeholder="Enter UPI ID"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        style={{ padding: "10px", width: "250px", fontSize: "16px" }}
      />
      <br /><br />
      <button
        onClick={handlePay}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Pay
      </button>
      <p style={{ marginTop: "20px", color: "gray" }}>
        Clicking Pay will open GPay (or any UPI app) with this UPI ID.
      </p>
    </div>
  );
}

export default App;
