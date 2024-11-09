import React from "react";
import './Matematica1.css'

const Aula1OperacoesBasicas = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Operações Básicas</h1>
      <p className="aula-introducao">
        As operações básicas são os fundamentos da matemática e envolvem as
        ações de adição, subtração, multiplicação e divisão. Essas operações
        servem como base para resolver problemas mais complexos e são usadas
        em diversos contextos no nosso dia a dia.
      </p>
      
      <section className="aula-secao adicao">
        <h3 className="secao-titulo">1. Adição (+)</h3>
        <p className="secao-descricao">
          A adição é a operação que envolve somar dois ou mais números. Quando
          somamos dois números, estamos encontrando o valor total da combinação
          desses números.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 5 + 3 = 8</li>
          <li><strong>Exemplo 2:</strong> 12 + 7 = 19</li>
        </ul>
      </section>
      
      <section className="aula-secao subtracao">
        <h3 className="secao-titulo">2. Subtração (-)</h3>
        <p className="secao-descricao">
          A subtração é a operação que envolve a remoção de uma quantidade de
          outra. Ao subtrairmos, estamos descobrindo a diferença entre dois
          números.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 8 - 5 = 3</li>
          <li><strong>Exemplo 2:</strong> 15 - 7 = 8</li>
        </ul>
      </section>
      
      <section className="aula-secao multiplicacao">
        <h3 className="secao-titulo">3. Multiplicação (×)</h3>
        <p className="secao-descricao">
          A multiplicação é uma forma rápida de somar o mesmo número várias
          vezes. Multiplicar é adicionar uma quantidade repetidamente.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 4 × 3 = 12</li>
          <li><strong>Exemplo 2:</strong> 7 × 6 = 42</li>
        </ul>
      </section>
      
      <section className="aula-secao divisao">
        <h3 className="secao-titulo">4. Divisão (÷)</h3>
        <p className="secao-descricao">
          A divisão é a operação inversa da multiplicação. Ela consiste em
          dividir um número em partes iguais. A divisão é representada por dois
          números: o dividendo e o divisor.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 12 ÷ 4 = 3</li>
          <li><strong>Exemplo 2:</strong> 20 ÷ 5 = 4</li>
        </ul>
      </section>
    </div>
  );
};

export default Aula1OperacoesBasicas;
