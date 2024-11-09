import React from "react";
import './Matematica1.css';

const Aula2ExpressoesAlgebricas = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Expressões Algébricas</h1>
      <p className="aula-introducao">
        Expressões algébricas são equações que contêm números, variáveis e
        operadores matemáticos. Elas são amplamente usadas para representar
        situações matemáticas e modelar problemas. A principal característica de
        uma expressão algébrica é que ela envolve uma ou mais incógnitas
        (geralmente representadas por letras como "x", "y" ou "a").
      </p>

      <section className="aula-secao termos">
        <h3 className="secao-titulo">1. Termos de uma expressão algébrica</h3>
        <p className="secao-descricao">
          Uma expressão algébrica pode ser composta por números, variáveis e
          coeficientes. O número multiplicado por uma variável é chamado de
          coeficiente. Por exemplo, em "3x + 2", "3x" é um termo e "3" é o
          coeficiente da variável "x".
        </p>
      </section>

      <section className="aula-secao exemplos">
        <h3 className="secao-titulo">2. Exemplos de expressões algébricas</h3>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 2x + 5</li>
          <li><strong>Exemplo 2:</strong> 3a - 4b + 7</li>
          <li><strong>Exemplo 3:</strong> 5x² + 3x - 4</li>
        </ul>
      </section>

      <section className="aula-secao simplificacao">
        <h3 className="secao-titulo">3. Simplificação de expressões</h3>
        <p className="secao-descricao">
          A simplificação de expressões envolve combinar termos semelhantes.
          Termos semelhantes são aqueles que têm a mesma variável e o mesmo
          expoente. Por exemplo, "2x + 3x" pode ser simplificado para "5x".
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> 4x + 5x = 9x</li>
        </ul>
      </section>
    </div>
  );
};

export default Aula2ExpressoesAlgebricas;
