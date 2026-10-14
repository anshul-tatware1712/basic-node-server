import express from "express";
import { products } from "./config.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
