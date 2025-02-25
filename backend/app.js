require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.EXPRESS_PORT;
const apiRouter = require("./routes/apiRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "https://findit-hek.netlify.app",
  })
);

app.use("/levels", apiRouter);

app.listen(PORT, () => console.log("🏃 Server running on " + PORT));
