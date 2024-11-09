import React from "react";
import './Matematica1.css';

const Aula4EquacoesLineares = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Equações Lineares</h1>
      <p className="aula-introducao">
        Uma equação linear é uma equação de primeiro grau, ou seja, seu maior
        expoente é 1. A equação linear é geralmente expressa na forma "ax + b =
        0", onde "a" e "b" são constantes, e "x" é a variável a ser
        determinada.
      </p>

      <section className="aula-secao forma-geral">
        <h3 className="secao-titulo">1. Forma geral de uma equação linear</h3>
        <p className="secao-descricao">
          A forma geral de uma equação linear é ax + b = 0, onde:
        </p>
        <ul className="secao-lista">
          <li>a é o coeficiente da variável x.</li>
          <li>b é a constante.</li>
        </ul>
      </section>

      <section className="aula-secao resolucao">
        <h3 className="secao-titulo">2. Resolução de uma equação linear</h3>
        <p className="secao-descricao">
          Para resolver uma equação linear, basta isolar a variável "x".
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> 2x + 3 = 11 → 2x = 8 → x = 4</li>
        </ul>
      </section>

      <section className="aula-secao exemplos-adicionais">
        <h3 className="secao-titulo">3. Mais exemplos de equações lineares</h3>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 3x - 7 = 8 → x = 5</li>
          <li><strong>Exemplo 2:</strong> 4x + 2 = 10 → x = 2</li>
        </ul>
      </section>
    </div>
  );
};

export default Aula4EquacoesLineares;
