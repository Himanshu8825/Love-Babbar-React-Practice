import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/user";

const app = express();
//! Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const mongoDb = process.env.MONGO_URI;

//! Connecting to MongoDB
mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//! Use user routes
app.use("/user", userRoute);

//! Middleware for JSON parsing
app.use(bodyParser.json());
app.use(express.json());

//! Handling GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//! Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
