const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP Method -" + req.method + ", URL -" + req.url);
  next();
});

app.use("/users", userRouter);

app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.iht4iyt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server Started");
    });
  })
  .catch((error) => {
    console.log(error);
  });
