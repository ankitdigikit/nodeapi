const functions = require("firebase-functions");
// const express = require("express");

// // Start webApp
// const webApp = express();

// // WebApp settings
// webApp.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// webApp.use(express.json());

// // Home Roles
// webApp.get("/", (req, res) => {
//   res.send("Hello World. !");
// });
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// exports.webApp = functions.https.onRequest(webApp);

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// App settings
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Home Roles
app.get("/", (req, res) => {
  res.send("Hello World. !");
});

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
exports.app = functions.https.onRequest(app);
