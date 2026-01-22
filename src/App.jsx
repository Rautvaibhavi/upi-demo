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

  const openGPayInterface = () => {
    const upiId = "8849689402@ptsbi"; // The ID from your image
    const name = "RAUT VAIBHAVIBEN ANILBHAI";

    // This link tells the phone: "Open a UPI app for this specific person"
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>Open GPay UPI Chat</h1>
      <button
        onClick={openGPayInterface}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Pay via GPay
      </button>
    </div>
  );
}

export default App;
