import React from "react";
import "./ModalMatematica3.css"; // Estilo para ModalMatematica3

const ModalMatematica3 = ({ onClose }) => {
  const topicosMatematica3 = [
    "Sistemas de Equações Não Lineares",
    "Cálculo Vetorial",
    "Espaços Vetoriais",
    "Transformações Lineares",
    "Matrices",
    "Determinantes",
    "Autovalores e Autovetores",
    "Teorema de Gauss",
    "Espaços Métricos",
    "Equações de Laplace",
  ];

  return (
    <div className="modal-matematica3-overlay">
      <div className="modal-matematica3-content">
        <button onClick={onClose} className="modal-matematica3-close-button">x</button>
        <h2 className="modal-matematica3-title">Matemática 3 - Conteúdos</h2>
        <ul className="modal-matematica3-topicos-list">
          {topicosMatematica3.map((topico, index) => (
            <li key={index} className="modal-matematica3-topico">
              <span className="modal-matematica3-aula">{`Aula ${index + 1}`}: </span>
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMatematica3;
