import { Request, Response } from "express";
import { AuthService } from "../services/AuthService"; // Nome da classe corrigido

class AuthController {
    async loginUser(req: Request, res: Response) {
        try {
            // Obtém o email e a senha do corpo da requisição
            const { email, password } = req.body; // Alterado para 'password', você normalmente não envia o hash diretamente

            const authServiceInstance = new AuthService(); // Nome da classe corrigido
            const { token, user } = await authServiceInstance.login(email, password); // Envia a senha e não o hash

            // Responde com sucesso
            return res.json({
                message: "Successfully logged in", // Correção na mensagem
                token,
                user: {
                    id: user.user_id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: "Error" });
        }
    }
}

export default new AuthController(); // Exportando instância correta
