// src/components/ModalMatematica1.jsx
import React from "react";
import { Link } from "react-router-dom"; // Importando Link para navegação
import "./ModalMatematica1.css";

const ModalMatematica1 = ({ onClose }) => {
  const topicosMatematica1 = [
    { nome: "Operações Básicas", aula: "operacoesbasicas" },
    { nome: "Expressões Algébricas", aula: "expressoesalgebricas" },
    { nome: "Fatoração", aula: "fatoracao" },
    { nome: "Equações Lineares", aula: "equacoeslineares" },
    { nome: "Inequações", aula: "inequacoes" },
    { nome: "Polinômios", aula: "polinomios" },
    { nome: "Radicais", aula: "radicais" },
    { nome: "Sistemas Lineares", aula: "sistemaslineares" },
    { nome: "Funções Afins", aula: "funcoesafins" },
    { nome: "Progressões Aritméticas", aula: "progressoesaritmeticas" },
  ];

  return (
    <div className="modal-matematica1-overlay">
      <div className="modal-matematica1-content">
        <button onClick={onClose} className="modal-matematica1-close-button">x</button>
        <h2 className="modal-matematica1-title">Matemática 1 - Conteúdos</h2>
        <ul className="modal-matematica1-topicos-list">
          {topicosMatematica1.map((topico, index) => (
            <li key={index} className="modal-matematica1-topico">
              <span className="modal-matematica1-aula">{`Aula ${index + 1}: `}</span>
              <Link to={`/biblioteca/aula/${topico.aula}`} className="link-to-matematica1">
                {topico.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMatematica1;
