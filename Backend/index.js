import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://bookie-client.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
