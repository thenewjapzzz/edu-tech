import React from "react";
import './Matematica1.css';

const Aula3Fatoracao = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Fatoração</h1>
      <p className="aula-introducao">
        Fatoração é o processo de expressar uma expressão algébrica como o
        produto de seus fatores. A fatoração é útil para simplificar expressões
        e resolver equações. Existem várias técnicas de fatoração, como a
        fatoração por agrupamento, fatoração de trinomios quadrados perfeitos
        e a fatoração de expressões do tipo diferença de quadrados.
      </p>

      <section className="aula-secao trinômio-quadrado-perfeito">
        <h3 className="secao-titulo">1. Fatoração de um trinômio quadrado perfeito</h3>
        <p className="secao-descricao">
          Um trinômio quadrado perfeito é uma expressão do tipo: a² + 2ab + b².
          Para fatorar, basta escrever a expressão como (a + b)².
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> x² + 6x + 9 = (x + 3)²</li>
        </ul>
      </section>

      <section className="aula-secao diferenca-quadrados">
        <h3 className="secao-titulo">2. Diferença de quadrados</h3>
        <p className="secao-descricao">
          A diferença de quadrados é uma expressão do tipo a² - b², que pode
          ser fatorada como (a - b)(a + b).
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> x² - 9 = (x - 3)(x + 3)</li>
        </ul>
      </section>

      <section className="aula-secao agrupamento">
        <h3 className="secao-titulo">3. Fatoração por agrupamento</h3>
        <p className="secao-descricao">
          Para fatorar uma expressão por agrupamento, agrupamos os termos de
          maneira a identificar fatores comuns.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> x² + 5x + 6 = (x + 2)(x + 3)</li>
        </ul>
      </section>
    </div>
  );
};

export default Aula3Fatoracao;
