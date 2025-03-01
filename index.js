const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");


const taskRoutes = require("./routes/task.routes");

const app = express();
const PORT = 8082;
const DB_URI = "mongodb+srv://rahuldev6258:Ufm16SaPQtJbj5gb@merntaskmanager.1h7iq.mongodb.net/";

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