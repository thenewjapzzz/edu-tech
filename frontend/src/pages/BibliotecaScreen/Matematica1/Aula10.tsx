import React from "react";
import './Matematica1.css';

const Aula10ProgressoesAritmeticas = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Progressões Aritméticas</h1>
      <p className="aula-introducao">
        As progressões aritméticas (P.A.) são sequências numéricas em que a diferença entre qualquer termo e seu antecessor é sempre constante. Essa diferença constante é chamada de razão (r).
      </p>

      <section className="aula-secao definicao-progressao-aritmetica">
        <h3 className="secao-titulo">1. Definição de Progressão Aritmética</h3>
        <p className="secao-descricao">
          Uma progressão aritmética (P.A.) é uma sequência de números na qual a diferença entre dois termos consecutivos é sempre a mesma. Essa diferença é chamada de razão, denotada por <strong>r</strong>.
        </p>
        <p className="secao-descricao">
          A fórmula geral de uma P.A. é dada por:
        </p>
        <pre className="secao-exemplo">aₙ = a₁ + (n - 1) * r</pre>
        <p className="secao-descricao">
          Onde:
          <ul className="secao-exemplos">
            <li><strong>aₙ</strong> é o n-ésimo termo da progressão;</li>
            <li><strong>a₁</strong> é o primeiro termo;</li>
            <li><strong>r</strong> é a razão;</li>
            <li><strong>n</strong> é o número do termo.</li>
          </ul>
        </p>
      </section>

      <section className="aula-secao formulas-importantes">
        <h3 className="secao-titulo">2. Fórmulas Importantes</h3>
        <h4 className="secao-subtitulo">2.1 Soma dos Termos da Progressão Aritmética</h4>
        <p className="secao-descricao">
          A soma dos primeiros <em>n</em> termos de uma progressão aritmética pode ser calculada utilizando a seguinte fórmula:
        </p>
        <pre className="secao-exemplo">Sₙ = (n / 2) * (a₁ + aₙ)</pre>
        <p className="secao-descricao">
          Onde:
          <ul className="secao-exemplos">
            <li><strong>Sₙ</strong> é a soma dos <em>n</em> primeiros termos;</li>
            <li><strong>aₙ</strong> é o n-ésimo termo;</li>
            <li><strong>a₁</strong> é o primeiro termo;</li>
            <li><strong>n</strong> é o número de termos.</li>
          </ul>
        </p>

        <h4 className="secao-subtitulo">2.2 Fórmula da Soma dos Termos com a Razão</h4>
        <p className="secao-descricao">
          Se a razão <em>r</em> é conhecida, a soma dos primeiros <em>n</em> termos também pode ser calculada da seguinte forma:
        </p>
        <pre className="secao-exemplo">Sₙ = (n / 2) * (2a₁ + (n - 1) * r)</pre>
        <p className="secao-descricao">
          Onde:
          <ul className="secao-exemplos">
            <li><strong>2a₁</strong> é o dobro do primeiro termo;</li>
            <li><strong>(n - 1) * r</strong> é a multiplicação da razão pelo número de termos restantes após o primeiro.</li>
          </ul>
        </p>
      </section>

      <section className="aula-secao exemplo-calculo">
        <h3 className="secao-titulo">3. Exemplo de Cálculo de Progressão Aritmética</h3>
        <p className="secao-descricao">
          Vamos resolver um exemplo para entender melhor o conceito de progressões aritméticas.
        </p>

        <h4 className="secao-subtitulo">3.1 Exemplo 1</h4>
        <p className="secao-descricao">
          Dados os seguintes termos de uma progressão aritmética: a₁ = 5, r = 3, e queremos encontrar o 10º termo (a₁₀).
        </p>
        <pre className="secao-exemplo">
          aₙ = a₁ + (n - 1) * r
          a₁₀ = 5 + (10 - 1) * 3
          a₁₀ = 5 + 9 * 3
          a₁₀ = 5 + 27
          a₁₀ = 32
        </pre>
        <p className="secao-descricao">
          O 10º termo da progressão é <strong>32</strong>.
        </p>

        <h4 className="secao-subtitulo">3.2 Exemplo 2</h4>
        <p className="secao-descricao">
          Agora, vamos calcular a soma dos 10 primeiros termos da mesma P.A.
        </p>
        <pre className="secao-exemplo">
          Sₙ = (n / 2) * (2a₁ + (n - 1) * r)
          S₁₀ = (10 / 2) * (2 * 5 + (10 - 1) * 3)
          S₁₀ = 5 * (10 + 27)
          S₁₀ = 5 * 37
          S₁₀ = 185
        </pre>
        <p className="secao-descricao">
          A soma dos 10 primeiros termos é <strong>185</strong>.
        </p>
      </section>

      <section className="aula-secao aplicacoes">
        <h3 className="secao-titulo">4. Aplicações das Progressões Aritméticas</h3>
        <p className="secao-descricao">
          As progressões aritméticas têm várias aplicações no cotidiano. Um exemplo clássico é o cálculo do custo de um produto, onde o preço é determinado por uma taxa fixa (coeficiente linear) e uma taxa variável (coeficiente angular) que depende da quantidade adquirida.
        </p>
        <p className="secao-descricao">
          Exemplo:
          Se o custo de produção de um produto for dado por <em>C(q) = 5q + 20</em>, onde...
        </p>
      </section>
    </div>
  );
};

export default Aula10ProgressoesAritmeticas;
