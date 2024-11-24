import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); //express application 생성
const logger = morgan("dev");

const home = (req,res) => {
  console.log("I will respond.");
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);

app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on prot http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//morgan - logger 용 미드웨어 ( 여러 모드가 있음 ex) dev )
