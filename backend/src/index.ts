import "reflect-metadata";
import express from "express";
import AppDataSource from "./config/database";
import router from "./router/UserRoutes";
import cors from 'cors';
import lessonPlanRouter from "./router/LessonPlanRoutes";

const app = express();
app.use(express.json());

app.use(cors())

const PORT = 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    app.use('/', router, lessonPlanRouter);

    // Iniciando o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar ao banco de dados: ", error));