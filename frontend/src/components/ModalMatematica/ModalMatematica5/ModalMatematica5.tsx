import React from "react";
import "./ModalMatematica5.css"; // Estilo para ModalMatematica5

const ModalMatematica5 = ({ onClose }) => {
  const topicosMatematica5 = [
    "Análise Real",
    "Análise Complexa",
    "Teoria de Funcões",
    "Sistemas Dinâmicos",
    "Geometria Diferencial",
    "Teoria das Cordas",
    "Física Matemática",
    "Topologia",
    "Álgebra Abstrata",
    "Teoria das Categorias",
  ];

  return (
    <div className="modal-matematica5-overlay">
      <div className="modal-matematica5-content">
        <button onClick={onClose} className="modal-matematica5-close-button">x</button>
        <h2 className="modal-matematica5-title">Matemática 5 - Conteúdos</h2>
        <ul className="modal-matematica5-topicos-list">
          {topicosMatematica5.map((topico, index) => (
            <li key={index} className="modal-matematica5-topico">
              <span className="modal-matematica5-aula">{`Aula ${index + 1}`}: </span>
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMatematica5;
