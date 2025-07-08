const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve invoicer.html on /invoicer
app.get("/invoicer", (req, res) => {
  res.sendFile(path.join(__dirname, "invoice.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}/invoicer`);
});
