import AuthController from "../controllers/AuthController";
import router from "./defaultRoutes";

router.post('/', async (req, res) => { 
    try {
        await AuthController.loginUser(req, res);
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        res.status(500).send('Erro ao logar usuário.');
    }
});


export default router;
