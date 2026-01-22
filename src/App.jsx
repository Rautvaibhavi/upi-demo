import React from "react";

function App() {
  const openUPIChat = () => {
    const upiId = "vaibhaviraut031@oksbi"; // your UPI ID
    const name = "Vaibhavi Raut";

    // Deep link WITHOUT amount
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      name
    )}&cu=INR`;

    window.location.href = upiLink; // opens the app
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>Open GPay UPI Chat</h1>
      <button
        onClick={openUPIChat}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Pay via GPay
      </button>
    </div>
  );
}

export default App;
