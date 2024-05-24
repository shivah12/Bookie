import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://bookie-frontend-iota.vercel.app", // allow your frontend origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Add this for better connection handling
});
mongoose.connection.on('error', err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1); // Exit process with failure
});

// Handle preflight requests
app.options('*', cors(corsOptions));

// Defining routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
