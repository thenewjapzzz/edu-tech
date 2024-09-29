import { User } from '../models/userModel';
import AppDataSource from '../config/database';
import bcrypt from 'bcrypt';

export async function createTeacherUser() {
    const userRepository = AppDataSource.getRepository(User);

    // Cria um novo usuário
    const newUser = new User();
    newUser.name = 'Teacher Name';
    newUser.email = 'teacher@example.com';
    newUser.password_hash = await bcrypt.hash('securepassword', 10); // Hash da senha
    newUser.role = 'teacher';

    // Salva o usuário no banco de dados
    await userRepository.save(newUser);
    console.log('Usuário teacher criado com sucesso!');
}
