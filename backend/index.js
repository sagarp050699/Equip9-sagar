const express = require("express");

const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("http://localhost:1010/"));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/user", userRouter);


app.listen(1010, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (e) {
    console.log(e);
  }

  console.log("listening 1010");
});
