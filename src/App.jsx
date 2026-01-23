import React from "react";
import { generatePaymentPayload } from "./api";

function App() {
  const upiId = "vaibhaviraut031@oksbi";
  const amt = 10; // INR

  const redirectThankyouAfter30s = () => {
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 30000);
  };

  // ================= PHONEPE =================
  const openPhonePe = () => {
    const result = generatePaymentPayload(upiId, Math.round(amt * 100));
    const dataa = result.base64;

    const deepLink = `phonepe://native?data=${encodeURIComponent(
      dataa
    )}&id=p2ppayment`;

    if (
      window.AndroidApp &&
      typeof window.AndroidApp.openActivity === "function"
    ) {
      window.AndroidApp.openActivity(deepLink);
    } else {
      window.location.href = deepLink;
    }

    redirectThankyouAfter30s();
  };

  // ================= GPAY =================
  const openGPay = () => {
    const txnNote = "JATXN" + Date.now();

    const gpayLink =
      `upi://pay?` +
      `pa=${encodeURIComponent(upiId)}` +
      `&pn=${encodeURIComponent("UPI Payment")}` +
      `&am=${amt}` +
      `&cu=INR` +
      `&tn=${encodeURIComponent(txnNote)}`;

    // Try opening GPay directly
    window.location.href = gpayLink;

    redirectThankyouAfter30s();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pay using UPI</h2>

      <button onClick={openPhonePe} style={{ marginRight: 10 }}>
        Pay with PhonePe
      </button>

      <button onClick={openGPay}>
        Pay with Google Pay
      </button>
    </div>
  );
}

export default App;

//phone pay chat open code
// import React from "react";
// import { generatePaymentPayload } from "./api";

// function App() {
//   const upiId = "vaibhaviraut031@oksbi";
//   const amt = 10;

//   const redirectThankyouAfter30s = () => {
//     setTimeout(() => {
//       window.location.href = "/thank-you";
//     }, 30000);
//   };

//   const openPhonePeChat = () => {
//     const result = generatePaymentPayload(upiId, Math.round(amt * 100));
//     const dataa = result.base64;

//     const deepLink = `phonepe://native?data=${encodeURIComponent(
//       dataa
//     )}&id=p2ppayment`;

//     // Android WebView (same logic you used)
//     if (
//       typeof window !== "undefined" &&
//       window.AndroidApp &&
//       typeof window.AndroidApp.openActivity === "function"
//     ) {
//       window.AndroidApp.openActivity(deepLink);
//     } else {
//       window.location.href = deepLink;
//     }

//     redirectThankyouAfter30s();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>PhonePe UPI Payment</h2>

//       <button onClick={openPhonePeChat}>
//         Pay via PhonePe
//       </button>
//     </div>
//   );
// }

// export default App;

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
//     const upiLink = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;
//     window.location.href = upiLink;
//   };
 
//   return (
//     <div style={{ textAlign: "center", padding: 40 }}>
//       <h1>Open GPay UPI Chat</h1>
//       <button
//         onClick={openGPayInterface}
//         style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//       >
//         Pay 
//       </button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [chatOpen, setChatOpen] = useState(false);
//   const upiId = "yespay.bizsbiz91192@yesbankltd"; // fixed UPI ID
//   const payeeName = "Your Name"; // optional

//   const handleOpenChat = () => {
//     setChatOpen(true);
//   };

//   const handlePay = () => {
//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR`;
//     window.location.href = upiLink; // Opens GPay
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>Chat + UPI Payment Demo</h1>

//       {!chatOpen ? (
//         <button
//           onClick={handleOpenChat}
//           style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//         >
//           Open Chat
//         </button>
//       ) : (
//         <div>
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "20px",
//               width: "400px",
//               margin: "20px auto",
//               borderRadius: "10px",
//               minHeight: "200px",
//             }}
//           >
//             <p><strong>Chat started...</strong></p>
//             <p>Hey! Click the button below to pay via GPay.</p>
//           </div>
//           <button
//             onClick={handlePay}
//             style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//           >
//             Pay with GPay
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
