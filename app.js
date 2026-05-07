require("./config/db");

const express = require("express");
const cors = require("cors");

const authRoutes =
  require("./routes/authRoutes");

const prescriptionRoutes =
  require("./routes/prescriptionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/prescriptions",
  prescriptionRoutes
);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});