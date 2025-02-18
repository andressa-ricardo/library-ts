import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
