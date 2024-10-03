import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
    id: number;
    role: 'teacher' | 'student';
}

declare module 'express-serve-static-core' {
    export interface Request {
        user?: CustomJwtPayload;
    }
}

// Middleware de verificação de token JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403).send("A token is required for authentication");
        return;
    }

    const token = authHeader.split(' ')[1]; // Extrai o token do cabeçalho

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded as CustomJwtPayload; // Passa a requisição se o token for válido
        next();
    } catch (error) {
        res.status(401).send("Invalid token");
    }
};

// Middleware para verificar se o usuário é 'teacher'
export const verifyTeacher = (req: Request, res: Response, next: NextFunction): void => {
    if (req.user?.role !== "teacher") {
        res.status(401).json({ message: "Restricted access, only for teachers" });
        return;
    }
    next();
};

// Middleware para verificar se o usuário é 'student'
export const verifyStudent = (req: Request, res: Response, next: NextFunction): void => {
    if (req.user?.role !== 'student') {
        res.status(401).json({ message: "Restricted access, only for students" });
        return;
    }
    next();
};
