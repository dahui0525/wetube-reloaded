import express from "express";

const PORT = 4000;

const app = express(); //express application 생성

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  console.log("handle Home!!!!");
  return res.send("I love middlewares");
};

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server listening on prot http://localhost:${PORT}`);

app.listen(PORT, handleListening);
