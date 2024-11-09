import React from "react";
import './Matematica1.css';

const Aula5Inequacoes = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Inequações</h1>
      <p className="aula-introducao">
        Inequações são expressões que envolvem relações de desigualdade. As
        desigualdades podem ser representadas de diversas formas, como maior que
        (&gt;), menor que (&lt;), maior ou igual a (&ge;) e menor ou igual a (&le;).
      </p>

      <section className="aula-secao tipos-desigualdade">
        <h3 className="secao-titulo">1. Tipos de desigualdade</h3>
        <ul className="secao-lista">
          <li><strong>Maior que (&gt;):</strong> x &gt; 3</li>
          <li><strong>Menor que (&lt;):</strong> x &lt; 5</li>
          <li><strong>Maior ou igual a (&ge;):</strong> x &ge; 2</li>
          <li><strong>Menor ou igual a (&le;):</strong> x &le; 7</li>
        </ul>
      </section>

      <section className="aula-secao resolucao-inequacoes">
        <h3 className="secao-titulo">2. Resolução de inequações</h3>
        <p className="secao-descricao">
          Para resolver uma inequação, o processo é semelhante à resolução de
          equações lineares, com a diferença de que devemos ter atenção ao
          multiplicar ou dividir ambos os lados por um número negativo, pois a
          desigualdade se inverte.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> 2x + 3 &gt; 7 → 2x &gt; 4 → x &gt; 2</li>
          <li><strong>Exemplo:</strong> -3x &lt; 9 → x &gt; -3</li>
        </ul>
      </section>
    </div>
  );
};

export default Aula5Inequacoes;
