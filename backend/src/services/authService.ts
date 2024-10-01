import { DataSource } from "typeorm";
import { User } from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Certifique-se de importar sua instância DataSource corretamente
import AppDataSource from "../config/database"; // ajuste o caminho conforme necessário

export class AuthService {
  // Use o DataSource como uma propriedade
  private userRepository = AppDataSource.getRepository(User);

  async login(
    email: string,
    password: string
  ): Promise<{ token: string; user: User }> {
    // Verifica se o usuário existe
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new Error("Credentials invalid");
    }

    // Gera o token
    const token = jwt.sign(
      { userId: user.user_id, email: user.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    return { token, user };
  }
}
