// import React from "react";

// function App() {
//   const openUPIChat = () => {
//     const upiId = "vaibhaviraut031@oksbi"; // your UPI ID
//     const name = "Vaibhavi Raut";

//     // Deep link WITHOUT amount
//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
//       name
//     )}&cu=INR`;

//     window.location.href = upiLink; // opens the app
//   };

//   const openGPayInterface = () => {
//     const upiId = "8849689402@ptsbi"; // The ID from your image
//     const name = "RAUT VAIBHAVIBEN ANILBHAI";

//     // This link tells the phone: "Open a UPI app for this specific person"
//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

//     window.location.href = upiLink;
//   };

//   return (
//     <div style={{ textAlign: "center", padding: 40 }}>
//       <h1>Open GPay UPI Chat</h1>
//       <button
//         onClick={openGPayInterface}
//         style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//       >
//         Pay via GPay
//       </button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const upiId = "yespay.bizsbiz91192@yesbankltd"; // fixed UPI ID
  const payeeName = "Your Name"; // optional

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handlePay = () => {
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR`;
    window.location.href = upiLink; // Opens GPay
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Chat + UPI Payment Demo</h1>

      {!chatOpen ? (
        <button
          onClick={handleOpenChat}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Open Chat
        </button>
      ) : (
        <div>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "400px",
              margin: "20px auto",
              borderRadius: "10px",
              minHeight: "200px",
            }}
          >
            <p><strong>Chat started...</strong></p>
            <p>Hey! Click the button below to pay via GPay.</p>
          </div>
          <button
            onClick={handlePay}
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            Pay with GPay
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
