import React, { useState } from "react";
import "./ModalMatematica.css"; // Defina o estilo do modal aqui

// Importando os modais específicos para cada conteúdo de Matemática
import ModalMatematica1 from "./ModalMatematica1/ModalMatematica1";
import ModalMatematica2 from "./ModalMatematica2/ModalMatematica2";
import ModalMatematica3 from "./ModalMatematica3/ModalMatematica3";
import ModalMatematica4 from "./ModalMatematica4/ModalMatematica4";
import ModalMatematica5 from "./ModalMatematica5/ModalMatematica5";

const ModalMatematica = ({ onClose }: { onClose: () => void }) => {
  const [ModalComponent, setModalComponent] = useState<React.ComponentType<{ onClose: () => void } | undefined> | null>(null);

  const conteudos = [
    { titulo: "Matemática 1", descricao: "Conceitos básicos de álgebra e aritmética.", modalComponent: ModalMatematica1 },
    { titulo: "Matemática 2", descricao: "Introdução à geometria e figuras geométricas.", modalComponent: ModalMatematica2 },
    { titulo: "Matemática 3", descricao: "Funções e gráficos fundamentais.", modalComponent: ModalMatematica3 },
    { titulo: "Matemática 4", descricao: "Estudo das progressões aritméticas e geométricas.", modalComponent: ModalMatematica4 },
    { titulo: "Matemática 5", descricao: "Noções iniciais de cálculo diferencial e integral.", modalComponent: ModalMatematica5 },
  ];

  const openModal = (modalComponent: React.ComponentType<{ onClose: () => void }>) => {
    setModalComponent(() => modalComponent);
  };

  const closeModal = () => {
    setModalComponent(null); // Fecha o modal
  };

  return (
    <div className="modal-matematica-overlay">
      <div className="modal-matematica-content">
        <button onClick={onClose} className="modal-matematica-close-button">x</button>
        <h2 className="modal-matematica-title">Conteúdos de Matemática</h2>
        <div className="modal-matematica-conteudos-container">
          {conteudos.map((conteudo, index) => (
            <div
              key={index}
              className="modal-matematica-conteudo-card"
              onClick={() => openModal(conteudo.modalComponent)} // Abre o modal correspondente
            >
              <h3 className="modal-matematica-conteudo-title">{conteudo.titulo}</h3>
              <p className="modal-matematica-conteudo-descricao">{conteudo.descricao}</p>
            </div>
          ))}
        </div>

        {/* Renderiza o modal condicionalmente */}
        {ModalComponent && (
          <div className="modal-overlay">
            <ModalComponent onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalMatematica;
