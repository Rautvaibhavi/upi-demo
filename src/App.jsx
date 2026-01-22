import React, { useState } from "react";

const GPayPayment = () => {
  const upiId = "8849689402@ptsbi";
  const name = "RAUT VAIBHAVIBEN ANILBHAI";
  const [amount, setAmount] = useState("100"); // Default amount ₹100

  // Link 1: Opens the Chat/History view (No amount)
  const chatLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

  // Link 2: Opens the Pay screen (With specific amount)
  const payLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=WebsitePayment`;

  const openApp = (link) => {
    window.location.href = link;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Payment Options</h2>
        <p style={styles.subtitle}>{name}</p>

        {/* Amount Input Field */}
        <div style={styles.inputContainer}>
          <label style={styles.label}>Enter Amount (₹)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.buttonGroup}>
          {/* Button 1: Pre-filled Amount */}
          <button 
            onClick={() => openApp(payLink)} 
            style={styles.payButton}
          >
            Pay ₹{amount} Now
          </button>

          <div style={styles.divider}>OR</div>

          {/* Button 2: Just Chat/History */}
          <button 
            onClick={() => openApp(chatLink)} 
            style={styles.chatButton}
          >
            Open GPay Chat
          </button>
        </div>

        <div style={styles.qrSection}>
          <p style={styles.infoText}>Scan to pay ₹{amount}</p>
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(payLink)}`} 
            alt="QR Code" 
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", padding: "20px", fontFamily: "Arial" },
  card: { border: "1px solid #ddd", padding: "25px", borderRadius: "12px", width: "320px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
  title: { fontSize: "18px", margin: "0 0 10px 0" },
  subtitle: { fontSize: "14px", color: "#666", marginBottom: "20px" },
  inputContainer: { marginBottom: "20px", textAlign: "left" },
  label: { fontSize: "12px", color: "#888", display: "block", marginBottom: "5px" },
  input: { width: "100%", padding: "10px", boxSizing: "border-box", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" },
  buttonGroup: { display: "flex", flexDirection: "column", gap: "10px" },
  payButton: { backgroundColor: "#1a73e8", color: "white", border: "none", padding: "12px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" },
  chatButton: { backgroundColor: "#f1f3f4", color: "#3c4043", border: "none", padding: "10px", borderRadius: "6px", cursor: "pointer" },
  divider: { margin: "10px 0", fontSize: "12px", color: "#aaa" },
  qrSection: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "20px" },
  infoText: { fontSize: "12px", color: "#888", marginBottom: "10px" }
};

export default GPayPayment;

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
