import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./BibliotecaPage.css";
import ModalMatematica from "../../components/ModalMatematica/ModalMatematica";

const BibliotecaPage = () => {

    const [modalMatematica, setModalMatematica] = useState(false)
  const materias = [
    {
      nome: "Matemática",
      descricao: "Explore conceitos matemáticos fundamentais, desde álgebra até cálculo.",
    },
    {
      nome: "Física",
      descricao: "Estude as leis do universo, energia, movimento e muito mais.",
    },
    {
      nome: "Química",
      descricao: "Aprenda sobre reações químicas, átomos e a tabela periódica.",
    },
    {
      nome: "Biologia",
      descricao: "Descubra o mundo dos seres vivos e suas interações.",
    },
    {
      nome: "História",
      descricao: "Revise os principais eventos e períodos históricos da humanidade.",
    },
    {
      nome: "Geografia",
      descricao: "Estude o planeta, suas características e divisões políticas.",
    },
    {
      nome: "Português",
      descricao: "Aprimore seu conhecimento da língua portuguesa e sua gramática.",
    },
  ];

  // Defina uma paleta de cores para os cards
  const cores = [
    "#FFCDD2",
    "#F8BBD0",
    "#E1BEE7",
    "#D1C4E9",
    "#C5CAE9",
    "#BBDEFB",
    "#B3E5FC",
  ];

  const handleCardClick = (materiaNome) => {
    if (materiaNome === "Matemática") {
      setModalMatematica(true);
    }
  };

  return (
    <div className="biblioteca-screen">
      <div>
        <Sidebar />
      </div>
      <div className="biblioteca-content">
        <h2 className="h2-biblioteca-content">Material de Aula</h2>
        <div className="materias-container">
          {materias.map((materia, index) => (
            <div
              key={materia.nome}
              className="card-materia"
              onClick={() => handleCardClick(materia.nome)}
              style={{ backgroundColor: cores[index % cores.length] }} 
            >
              <h3>{materia.nome}</h3>
              <p>{materia.descricao}</p>
            </div>
          ))}
        </div>
      </div>
      {modalMatematica && <ModalMatematica onClose={() => setModalMatematica(false)} />}
    </div>
  );
};

export default BibliotecaPage;
