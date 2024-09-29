import 'reflect-metadata';
import express from 'express';
import AppDataSource from './config/database';
import router from './router/userRoutes';

const app = express();
app.use(express.json());

const PORT = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        // Defina suas rotas aqui
        app.get('/', (req, res) => {
            res.send('Servidor rodando!');
        });

        app.use('/auth', router);

        // Iniciando o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

        // Chama a função para criar o usuário após a inicialização do banco de dados
        import('./utils/createTeacherUser').then(module => {
            module.createTeacherUser().catch(error => console.log('Erro ao criar usuário: ', error));
        });
    })
    .catch((error) => console.log('Erro ao conectar ao banco de dados: ', error));
