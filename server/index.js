import express from "express";
const app = express();

//port
const port = 8000;

//rout || get
app.get("/", (req, res) => {
  res.send("server is runnngGGGGG");
});

//listen app on 8000
app.listen(port, () => {
  console.log("server is runnig");
});
