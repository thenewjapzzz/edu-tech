import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
    id: number;
    role: 'teacher' | 'student';
}

declare module 'express-serve-static-core' {
    export interface Request {
        user?: JwtPayload;
    }
}

// Middleware de verificação de token JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).send("A token is required for authenticattion");
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded as JwtPayload;
        next();
    }catch (error) {
        return res.status(401).send("Invalid token");
    }
};

// Midleware para verificar se o usuário é 'teacher'
export const verifyTeacher = (req: Request, res: Response, next: NextFunction) => {
    if(req.user?.role !== "teacher") {
        return res.status(401).json({ message: "Restrict access, only for teacher" });
    }
    next();
};

// Middleware para verificar se o usuário é 'student'
export const verifyStudent = (req: Request, res: Response, next: NextFunction) => {
    if(req.user?.role !== 'student') {
        return res.status(401).json({ messsage: "Restrict access, only for students" })
    }
    next();
}
