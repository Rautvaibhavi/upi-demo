import React from "react";

const GPayPayment = () => {
  // Configuration
  const upiId = "8849689402@ptsbi";
  const name = "RAUT VAIBHAVIBEN ANILBHAI";
  
  // The UPI Link (Without amount to force the 'Chat/Profile' view)
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;
  
  // QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  const handleMobileClick = () => {
    window.location.href = upiLink;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Scan to Pay via GPay</h2>
        <p style={styles.subtitle}>{name}</p>
        
        {/* The QR Code Image */}
        <div style={styles.qrContainer}>
          <img 
            src={qrCodeUrl} 
            alt="Scan to Chat on GPay" 
            style={styles.qrImage}
          />
        </div>

        <p style={styles.infoText}>
          Scan this using any UPI App or click the button below on mobile.
        </p>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          <button 
            onClick={handleMobileClick} 
            style={styles.primaryButton}
          >
            Open Google Pay
          </button>
          
          <a 
            href={qrCodeUrl} 
            download="payment-qr.png" 
            style={styles.secondaryButton}
            target="_blank" 
            rel="noreferrer"
          >
            Save QR Image
          </a>
        </div>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f7f6",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "350px",
    width: "100%",
  },
  title: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  qrContainer: {
    border: "1px solid #eee",
    padding: "10px",
    borderRadius: "12px",
    display: "inline-block",
    marginBottom: "20px",
  },
  qrImage: {
    display: "block",
  },
  infoText: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  primaryButton: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  secondaryButton: {
    textDecoration: "none",
    color: "#1a73e8",
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "5px",
  }
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
