import { getRepository } from "typeorm"
import { User } from "../models/userModel"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class authService {
   async login(email: string, password_hash: string): Promise<{ token: string, user: User }> {
      const userRepository = getRepository(User);

      // Verifica se o usuário existe
      const user = await userRepository.findOne({
         where: { email }
      });
      if(!user) {
         throw new Error("User not found");
      }

      // Verifica se a senha está correta
      const isPasswordValid = await bcrypt.compare(password_hash, user.password_hash);
      if(!isPasswordValid) {
         throw new Error("Credentials invalid");
      }

      // Gera o token
      const token = jwt.sign({ useId: user.user_id, email: user.email }, process.env.JWT_SECRET as string, {
         expiresIn: '1h',
      });

      return { token, user } 
   }
}
