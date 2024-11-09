import React from "react";
import './Matematica1.css';

const Aula8SistemasLineares = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Sistemas Lineares</h1>
      <p className="aula-introducao">
        Sistemas lineares são conjuntos de duas ou mais equações lineares com as mesmas incógnitas. O objetivo ao resolver um sistema linear é encontrar os valores das incógnitas que satisfazem todas as equações simultaneamente.
      </p>

      <section className="aula-secao definicao-sistemas-lineares">
        <h3 className="secao-titulo">1. Definição de Sistema Linear</h3>
        <p className="secao-descricao">
          Um sistema linear é um conjunto de equações lineares. A equação linear é da forma:
        </p>
        <ul className="secao-exemplos">
          <li><strong>ax + by = c</strong>, onde <em>a</em>, <em>b</em> e <em>c</em> são constantes, e <em>x</em> e <em>y</em> são variáveis.</li>
          <li>Um sistema pode ter uma, duas ou mais equações.</li>
        </ul>
        <p className="secao-descricao">
          Exemplos de sistemas lineares:
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> 
            <br />
            x + y = 5
            <br />
            2x - y = 1
          </li>
          <li><strong>Exemplo 2:</strong> 
            <br />
            3x + 2y = 12
            <br />
            x - y = 2
          </li>
        </ul>
      </section>

      <section className="aula-secao metodos-resolucao">
        <h3 className="secao-titulo">2. Métodos de Resolução de Sistemas Lineares</h3>
        <p className="secao-descricao">
          Existem diferentes métodos para resolver sistemas lineares, dependendo do número de equações e incógnitas envolvidas.
        </p>

        <h4 className="secao-subtitulo">2.1. Método da Substituição</h4>
        <p className="secao-descricao">
          Neste método, isolamos uma das variáveis em uma das equações e substituímos essa expressão na outra equação.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> 
            <br />
            Dado o sistema:
            <br />
            x + y = 5
            <br />
            2x - y = 1
            <br />
            Isolamos a variável <em>x</em> na primeira equação:
            <br />
            x = 5 - y
            <br />
            Substituímos em 2x - y = 1:
            <br />
            2(5 - y) - y = 1 → 10 - 2y - y = 1 → 10 - 3y = 1 → -3y = -9 → y = 3
            <br />
            Agora, substituímos <em>y = 3</em> em x = 5 - y:
            <br />
            x = 5 - 3 → x = 2
            <br />
            A solução do sistema é <em>x = 2</em> e <em>y = 3</em>.
          </li>
        </ul>

        <h4 className="secao-subtitulo">2.2. Método da Eliminação</h4>
        <p className="secao-descricao">
          Neste método, somamos ou subtraímos as equações para eliminar uma das variáveis. Esse método é útil quando as equações possuem coeficientes que podem ser combinados para eliminar uma incógnita.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong>
            <br />
            Dado o sistema:
            <br />
            x + y = 5
            <br />
            2x - y = 1
            <br />
            Somamos as duas equações:
            <br />
            (x + y) + (2x - y) = 5 + 1 → 3x = 6 → x = 2
            <br />
            Agora, substituímos <em>x = 2</em> em x + y = 5:
            <br />
            2 + y = 5 → y = 3
            <br />
            A solução do sistema é <em>x = 2</em> e <em>y = 3</em>.
          </li>
        </ul>

        <h4 className="secao-subtitulo">2.3. Método de Cramer</h4>
        <p className="secao-descricao">
          O método de Cramer usa determinantes de matrizes para encontrar as soluções de um sistema linear. Esse método é aplicável quando o sistema tem o mesmo número de equações e incógnitas e a matriz dos coeficientes é invertível.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong>
            <br />
            O sistema linear é representado como:
            <br />
            A * X = B, onde:
            <br />
            A é a matriz dos coeficientes,
            <br />
            X é o vetor das incógnitas, e
            <br />
            B é o vetor dos termos independentes.
          </li>
          <li>
            A solução para o sistema é dada por:
            <br />
            x = det(A₁) / det(A), y = det(A₂) / det(A), onde A₁ e A₂ são as matrizes obtidas substituindo as colunas de A pelos termos independentes.
          </li>
        </ul>
      </section>

      <section className="aula-secao sistema-linear-2x2">
        <h3 className="secao-titulo">3. Sistema Linear 2x2</h3>
        <p className="secao-descricao">
          Para sistemas lineares 2x2, as equações podem ser representadas por:
          <br />
          <strong>a₁x + b₁y = c₁</strong>
        </p>
      </section>
    </div>
  );
};

export default Aula8SistemasLineares;
