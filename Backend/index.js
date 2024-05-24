import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://bookie-frontend-iota.vercel.app/", // allow your frontend origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

// connect to mongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
});
mongoose.connection.on('error', err => {
  throw 'failed connect to MongoDB';
});

// defining routes
app.use("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
