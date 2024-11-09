import React from "react";
import "./ModalMatematica4.css"; // Estilo para ModalMatematica4

const ModalMatematica4 = ({ onClose }) => {
  const topicosMatematica4 = [
    "Teoria das Probabilidades",
    "Distribuições Discretas",
    "Distribuições Contínuas",
    "Inferência Estatística",
    "Teste de Hipóteses",
    "Regressão Linear",
    "Análise de Variância",
    "Métodos de Monte Carlo",
    "Teoria de Estimação",
    "Processos Estocásticos",
  ];

  return (
    <div className="modal-matematica4-overlay">
      <div className="modal-matematica4-content">
        <button onClick={onClose} className="modal-matematica4-close-button">x</button>
        <h2 className="modal-matematica4-title">Matemática 4 - Conteúdos</h2>
        <ul className="modal-matematica4-topicos-list">
          {topicosMatematica4.map((topico, index) => (
            <li key={index} className="modal-matematica4-topico">
              <span className="modal-matematica4-aula">{`Aula ${index + 1}`}: </span>
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMatematica4;
