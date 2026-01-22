export async function createUpi(amount) {
  const res = await fetch("/api/create-upi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount })
  });

  return await res.json();
}
