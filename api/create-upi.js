export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const amount = req.method === "POST"
    ? req.body?.amount || 1
    : req.query.amount || 1;

  // 🔒 Hidden UPI ID
  const upiId = "vaibhaviraut031@oksbi";
  const name = "Vaibhavi Raut";
  const note = "Website Payment";

  const params = new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount,
    cu: "INR",
    tn: note
  });

  const upiLink = `upi://pay?${params.toString()}`;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiLink)}`;

  res.status(200).json({
    success: true,
    upiLink,
    qr
  });
}
