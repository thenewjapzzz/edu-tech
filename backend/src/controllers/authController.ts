import { Request, Response } from "express";
import { authService } from "../services/authService";
class authController {
    async loginUser(req: Request, res: Response) {
        try {
            const { email, password_hash } = req.body;
            const authServiceInstace = new authService();
            const { token, user } = await authServiceInstace.login(email, password_hash);

            return res.json({
                message: "Succesfully login",
                token,
                user: {
                    id: user.role,
                    name: user.name,
                    email: user.email,
                },
            });
        }catch(error) {
            if(error instanceof Error) {
                return res.status(400).json({  message: error.message })
            }
            return res.status(400).json({ message: "Error" })
        }
    }
}