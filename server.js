const express = require("express");
const mongoose = require("mongoose");

// Routes
const articles = require("./routes/api/articles");

// Server config
const app = express();
const PORT = process.env.PORT || 9001;

// DB config
const db = require("./config/keys").mongoURI;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("🦔 MongoDB Connected 🦔"))
  .catch(err => console.log(err));

// Routing
app.get("/", (req, res) => res.send("hello!"));

app.use("/api/articles", articles);

// Start Server
app.listen(PORT, () => console.log(`🧟‍ ITS ALIIIVE ON PORT ${PORT} 🧟‍`));
