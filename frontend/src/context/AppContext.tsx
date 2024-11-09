// src/context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo a interface para os dados do usuário
interface UserData {
    name?: string;
    email?: string;
    role?: string;
}

// Definindo a interface para o contexto
interface AppContextType {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

// Criando o contexto com valor padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o provedor do contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserData>({});

    return (
        <AppContext.Provider value={{ userData, setUserData }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook para usar o contexto
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
