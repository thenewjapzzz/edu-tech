import { Router } from 'express';
import { verifyToken, verifyTeacher, verifyStudent } from '../middlewares/authMiddleware';
import AuthController from '../controllers/AuthController';

const router = Router();

// Rota de login
router.post('/', async (req, res) => { 
    try {
        await AuthController.loginUser(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Rota para professores
router.get('/teacher', verifyToken, verifyTeacher, (req, res) => {
    res.send("Access granted to teachers.");
});

// Rota para alunos
router.get('/student', verifyToken, verifyStudent, (req, res) => {
    res.send("Access granted to students.");
});

export default router;
