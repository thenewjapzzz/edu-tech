import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente para proteger rotas
const ProtectedRoute: React.FC<{ children: JSX.Element, role: 'teacher' | 'student' }> = ({ children, role }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (!token) {
        // Se não estiver autenticado, redireciona para a página de login
        return <Navigate to="/" replace />;
    }

    // Verifica se o usuário tem o papel correto
    if (userRole !== role) {
        // Se o papel não corresponder, redireciona para a página de login
        return <Navigate to="/" replace />;
    }

    // Se o usuário estiver autenticado e tiver papel correto, renderiza os filhos
    return children; 
};

export default ProtectedRoute;
