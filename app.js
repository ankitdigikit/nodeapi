const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use("/api/products", productRoutes);

// How to we start listening to the server
app.listen(4000);
