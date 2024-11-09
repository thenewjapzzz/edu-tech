import React from "react";
import "./ModalMatematica2.css"; // Estilo para ModalMatematica2

const ModalMatematica2 = ({ onClose }) => {
  const topicosMatematica2 = [
    "Funções Quadráticas",
    "Exponenciais",
    "Logaritmos",
    "Limites e Continuidade",
    "Derivadas",
    "Integrais",
    "Equações Diferenciais",
    "Séries e Sequências",
    "Geometria Analítica",
    "Teorema de Pitágoras",
  ];

  return (
    <div className="modal-matematica2-overlay">
      <div className="modal-matematica2-content">
        <button onClick={onClose} className="modal-matematica2-close-button">x</button>
        <h2 className="modal-matematica2-title">Matemática 2 - Conteúdos</h2>
        <ul className="modal-matematica2-topicos-list">
          {topicosMatematica2.map((topico, index) => (
            <li key={index} className="modal-matematica2-topico">
              <span className="modal-matematica2-aula">{`Aula ${index + 1}`}: </span>
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMatematica2;
