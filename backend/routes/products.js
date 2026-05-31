const express = require("express");
const router = express.Router();

// temporary mock data
const products = [
  { id: 1, name: "Running Shoe", price: "$80" },
  { id: 2, name: "T-Shirt", price: "$20" },
  { id: 3, name: "Jacket", price: "$120" },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;