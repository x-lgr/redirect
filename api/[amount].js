export default function handler(req, res) {
  // Get amount from URL - [amount].js automatically captures it
  const { amount } = req.query;
  
  // Convert to number
  let price = parseInt(amount);
  if (isNaN(price) || price <= 0) {
    price = 99;
  }
  
  // Create HTML with instant redirect
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Payment ₹${price}</title>
  <script>
    window.location.href = "upi://pay?pa=Rambansal@fam&pn=Payment&am=${price}&cu=INR&tn=Premium%20Access";
  </script>
</head>
<body>
  <p>Redirecting to ₹${price} payment...</p>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
