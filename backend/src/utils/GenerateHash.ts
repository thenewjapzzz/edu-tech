import bcrypt from 'bcrypt';

// Função para gerar um hash de senha
const generateHash = async (password: string): Promise<string> => {
    const saltRounds = 10; // Número de rounds para o sal
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
};

// Exemplo de uso
const run = async () => {
    const plainPassword = '123'; // Senha em texto claro
    const hashedPassword = await generateHash(plainPassword);
    console.log('Senha em texto claro:', plainPassword);
    console.log('Senha hash:', hashedPassword);
};

// Executa a função
run();
