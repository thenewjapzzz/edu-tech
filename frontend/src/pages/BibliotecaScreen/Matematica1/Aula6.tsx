import React from "react";
import './Matematica1.css';

const Aula6Polinomios = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Polinômios</h1>
      <p className="aula-introducao">
        Polinômios são expressões algébricas compostas por termos que incluem variáveis elevadas a potências inteiras não negativas.
        Um polinômio de grau n tem a forma geral: 
        <em> aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ </em>, onde os coeficientes (aₙ, aₙ₋₁, ..., a₁, a₀) são números reais e n é o grau do polinômio.
      </p>

      <section className="aula-secao operacoes-polinomios">
        <h3 className="secao-titulo">1. Operações com Polinômios</h3>

        <h4 className="secao-subtitulo">1.1. Soma de Polinômios</h4>
        <p className="secao-descricao">
          Para somar dois polinômios, somamos os coeficientes dos termos que possuem o mesmo grau. 
          Por exemplo, ao somar os polinômios 3x² + 2x + 1 e x² - 4x + 3, temos:
        </p>
        <ul className="secao-exemplos">
          <li>(3x² + 2x + 1) + (x² - 4x + 3) = (3x² + x²) + (2x - 4x) + (1 + 3) = 4x² - 2x + 4</li>
        </ul>

        <h4 className="secao-subtitulo">1.2. Subtração de Polinômios</h4>
        <p className="secao-descricao">
          Para subtrair dois polinômios, subtraímos os coeficientes dos termos com o mesmo grau. 
          Por exemplo, ao subtrair x² - 4x + 3 de 3x² + 2x + 1, temos:
        </p>
        <ul className="secao-exemplos">
          <li>(3x² + 2x + 1) - (x² - 4x + 3) = (3x² - x²) + (2x - (-4x)) + (1 - 3) = 2x² + 6x - 2</li>
        </ul>

        <h4 className="secao-subtitulo">1.3. Multiplicação de Polinômios</h4>
        <p className="secao-descricao">
          Para multiplicar dois polinômios, multiplicamos cada termo de um polinômio por cada termo do outro e somamos os resultados. 
          Por exemplo, ao multiplicar (x + 2) por (x - 3), temos:
        </p>
        <ul className="secao-exemplos">
          <li>(x + 2)(x - 3) = x(x - 3) + 2(x - 3) = x² - 3x + 2x - 6 = x² - x - 6</li>
        </ul>

        <h4 className="secao-subtitulo">1.4. Fatoração de Polinômios</h4>
        <p className="secao-descricao">
          A fatoração de polinômios consiste em expressar o polinômio como um produto de outros polinômios de menor grau. 
          Por exemplo, o polinômio x² - 5x + 6 pode ser fatorado como:
        </p>
        <ul className="secao-exemplos">
          <li>x² - 5x + 6 = (x - 2)(x - 3)</li>
        </ul>
        <p>
          Para fatorar, procuramos dois números que multiplicados resultem no termo constante (6) e somados resultem no coeficiente do termo linear (-5).
        </p>
      </section>

      <section className="aula-secao exemplos-praticos">
        <h3 className="secao-titulo">2. Exemplos Práticos</h3>

        <h4 className="secao-subtitulo">2.1. Soma de Polinômios</h4>
        <ul className="secao-exemplos">
          <li>(2x³ - 3x² + x - 4) + (x³ + 5x² - 2x + 1) = 3x³ + 2x² - x - 3</li>
        </ul>

        <h4 className="secao-subtitulo">2.2. Subtração de Polinômios</h4>
        <ul className="secao-exemplos">
          <li>(5x⁴ - 2x³ + 3x² - x + 7) - (x⁴ + 2x³ - 3x² + 4x - 6) = 4x⁴ - 4x³ + 6x² - 5x + 13</li>
        </ul>

        <h4 className="secao-subtitulo">2.3. Multiplicação de Polinômios</h4>
        <ul className="secao-exemplos">
          <li>(2x + 1)(x² - 3x + 4) = 2x³ - 5x² + 5x + 4</li>
        </ul>

        <h4 className="secao-subtitulo">2.4. Fatoração de Polinômios</h4>
        <ul className="secao-exemplos">
          <li>x² - 7x + 12 = (x - 3)(x - 4)</li>
        </ul>
      </section>

      <section className="aula-secao conclusao">
        <h3 className="secao-titulo">3. Conclusão</h3>
        <p className="secao-descricao">
          A compreensão das operações com polinômios é essencial para o avanço em álgebra e cálculo. Além das operações básicas, a fatoração desempenha um papel importante na simplificação de expressões algébricas e resolução de equações.
        </p>
      </section>
    </div>
  );
};

export default Aula6Polinomios;
