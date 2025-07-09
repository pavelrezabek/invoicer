const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve invoice.html on /invoicer
app.get("/invoicer", (req, res) => {
  res.sendFile(path.join(__dirname, "invoice.html"));
});

// Serve invoice1.html on /invoicer1
app.get("/invoicer1", (req, res) => {
  res.sendFile(path.join(__dirname, "invoice1.html"));
});

// Serve invoice1.html on /invoicer2
app.get("/invoicer2", (req, res) => {
  res.sendFile(path.join(__dirname, "invoice2.html"));
});



// Start server
app.listen(port, () => {
  console.log(`Server běží na:`);
  console.log(`http://localhost:${port}/invoicer`);
  console.log(`http://localhost:${port}/invoicer1`);
});
