const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const taskRoutes = require("./routes/task.routes");

const app = express();
const PORT = 8082;
const DB_URI =process.env.MONGO_URI;

if (!DB_URI) {
  console.error("Error: MONGO_URI is not defined!");
  process.exit(1); // Stop the app if no MongoDB URL is found
}

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});