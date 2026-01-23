// export const createOrder = () => {
//   return {
//     orderId: "ORD12345",
//     amount: 40,
//     product: "Wireless Headphones"
//   }
// }

export function generatePaymentPayload(vpaValue, amount) {
  const uniqueNote = "JATXN" + Date.now();

  const payload = {
    contact: {
      cbsName: "",
      nickName: "",
      vpa: vpaValue,
      type: "VPA",
    },
    p2pPaymentCheckoutParams: {
      note: uniqueNote,
      isByDefaultKnownContact: true,
      enableSpeechToText: false,
      allowAmountEdit: false,
      showQrCodeOption: false,
      disableViewHistory: true,
      shouldShowUnsavedContactBanner: false,
      isRecurring: false,
      checkoutType: "DEFAULT",
      transactionContext: "p2p",
      initialAmount: amount, // paise
      disableNotesEdit: true,
      showKeyboard: true,
      currency: "INR",
      shouldShowMaskedNumber: true,
    },
  };

  const jsonString = JSON.stringify(payload);
  const base64String = btoa(
    unescape(encodeURIComponent(jsonString))
  );

  return {
    json: payload,
    base64: base64String,
  };
}
