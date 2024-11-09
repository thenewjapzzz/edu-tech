import React from "react";
import './Matematica1.css';

const Aula7Radicais = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Radicais</h1>
      <p className="aula-introducao">
        Radicais são expressões que envolvem raízes, como a raiz quadrada, cúbica, etc. Um radical é escrito na forma 
        <em> √(a) </em> para representar a raiz quadrada de <em>a</em>, ou <em> ∛(a) </em> para a raiz cúbica, e assim por diante.
        O índice do radical (o número pequeno à esquerda) indica a ordem da raiz. A raiz quadrada é o caso mais comum, mas outras raízes também são usadas.
      </p>

      <section className="aula-secao definicao-radicais">
        <h3 className="secao-titulo">1. Definição de Radicais</h3>
        <p className="secao-descricao">
          Um radical é uma expressão que envolve a operação de extração de raiz. O símbolo √ é usado para representar a raiz quadrada, enquanto 
          os símbolos ∛ e ∜ são usados para a raiz cúbica e quarta, respectivamente. A forma geral de um radical é:
        </p>
        <ul className="secao-exemplos">
          <li><strong>Raiz quadrada (√a):</strong> É o número que, quando multiplicado por si mesmo, dá o número <em>a</em>.</li>
          <li><strong>Raiz cúbica (∛a):</strong> É o número que, quando multiplicado por si mesmo três vezes, dá o número <em>a</em>.</li>
          <li><strong>Raiz enésima (ⁿ√a):</strong> É o número que, quando multiplicado por si mesmo <em>n</em> vezes, dá o número <em>a</em>.</li>
        </ul>
      </section>

      <section className="aula-secao simplificacao-radicais">
        <h3 className="secao-titulo">2. Simplificação de Radicais</h3>
        <p className="secao-descricao">
          A simplificação de radicais envolve encontrar a forma mais simples possível de uma expressão radical, extraindo fatores quadrados, cúbicos, etc., 
          sempre que possível. A simplificação é importante para tornar os cálculos mais fáceis e rápidos.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo 1:</strong> √18 = √(9 × 2) = √9 × √2 = 3√2</li>
          <li><strong>Exemplo 2:</strong> √50 = √(25 × 2) = √25 × √2 = 5√2</li>
          <li><strong>Exemplo 3:</strong> ∛64 = ∛(4³) = 4</li>
        </ul>
      </section>

      <section className="aula-secao operacoes-radicais">
        <h3 className="secao-titulo">3. Operações com Radicais</h3>

        <h4 className="secao-subtitulo">3.1. Adição e Subtração de Radicais</h4>
        <p className="secao-descricao">
          Para somar ou subtrair radicais, é necessário que eles tenham o mesmo índice e o mesmo radicando (número sob o símbolo da raiz). 
          Apenas os coeficientes (números fora da raiz) podem ser somados ou subtraídos.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> 3√2 + 5√2 = (3 + 5)√2 = 8√2</li>
          <li><strong>Exemplo:</strong> 2√3 - 4√3 = (2 - 4)√3 = -2√3</li>
        </ul>

        <h4 className="secao-subtitulo">3.2. Multiplicação e Divisão de Radicais</h4>
        <p className="secao-descricao">
          Para multiplicar ou dividir radicais, podemos multiplicar ou dividir os radicandos (números sob o símbolo da raiz) e depois extrair a raiz do 
          resultado.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo de multiplicação:</strong> √2 × √3 = √(2 × 3) = √6</li>
          <li><strong>Exemplo de divisão:</strong> √8 ÷ √2 = √(8 ÷ 2) = √4 = 2</li>
        </ul>
      </section>

      <section className="aula-secao radicais-expoentes">
        <h3 className="secao-titulo">4. Radicais com Expoentes</h3>
        <p className="secao-descricao">
          Quando lidamos com radicais envolvendo expoentes, a base do radical (o número sob a raiz) pode ser elevada a uma potência. A simplificação é feita 
          usando propriedades de expoentes e radicais.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> (√x)² = x</li>
          <li><strong>Exemplo:</strong> (∛y)³ = y</li>
          <li><strong>Exemplo:</strong> (ⁿ√z)ⁿ = z</li>
        </ul>
      </section>

      <section className="aula-secao radicais-indices-diferentes">
        <h3 className="secao-titulo">5. Radicais com Índices Diferentes</h3>
        <p className="secao-descricao">
          Quando lidamos com radicais de índices diferentes, devemos procurar um denominador comum para que possamos combiná-los. Este é um conceito importante 
          na simplificação de expressões algébricas envolvendo raízes de diferentes ordens.
        </p>
        <ul className="secao-exemplos">
          <li><strong>Exemplo:</strong> √2 + ∛2 não pode ser simplificado diretamente, pois eles têm índices diferentes (2 e 3). Neste caso, podemos trabalhar com aproximações numéricas.</li>
        </ul>
      </section>

      <section className="aula-secao conclusao">
        <h3 className="secao-titulo">6. Conclusão</h3>
        <p className="secao-descricao">
          Radicais são uma parte fundamental da álgebra e têm várias aplicações em problemas matemáticos e científicos. Entender como simplificar, realizar operações 
          e manipular radicais é essencial para o avanço em álgebra e em muitas áreas da matemática.
        </p>
      </section>
    </div>
  );
};

export default Aula7Radicais;
