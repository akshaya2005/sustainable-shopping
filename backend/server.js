const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// import routes
const productRoutes = require("./routes/products");

// mount route
app.use("/api/products", productRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});