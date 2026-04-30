export default function handler(req, res) {
  // URL se parameters lena
  const { username, bankhandle, amount } = req.query;

  // UPI ID banana: username@bankhandle
  const upiId = `${username}@${bankhandle}`;

  // Amount validate karna
  let price = parseInt(amount);
  if (isNaN(price) || price <= 0) {
    price = 99;
  }

  // Payment page redirect
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Payment ₹${price}</title>
  <script>
    const upiUrl = "upi://pay?pa=${upiId}&pn=Payment&am=${price}&cu=INR&tn=Premium%20Access";
    window.location.href = upiUrl;
  </script>
</head>
<body>
  <p>Redirecting to ₹${price} payment for ${upiId}...</p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
