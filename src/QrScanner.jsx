import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function QrScanner() {

  const upiLink =
    `upi://pay?pa=dhruvavaiya@oksbi` +
    `&pn=My%20Demo%20Store` +
    `&am=499` +
    `&cu=INR` +
    `&tr=ORD12345` +
    `&tn=Order%20Payment` +
    `&mode=00`;

  return (
    <div className="qr-box">
      <h3>📷 Scan to Pay</h3>
      <QRCodeCanvas value={upiLink} size={200} />
    </div>
  )
}

export default QrScanner
