import React from "react";
import './Matematica1.css';

const Aula9FuncoesAfins = () => {
  return (
    <div className="aula-container">
      <h1 className="aula-titulo">Funções Afins</h1>
      <p className="aula-introducao">
        As funções afins são funções do tipo <strong>f(x) = ax + b</strong>, onde <em>a</em> e <em>b</em> são constantes, e <em>x</em> é a variável. Essa função também é conhecida como função linear, pois sua representação gráfica é uma reta.
      </p>

      <section className="aula-secao definicao-funcoes-afins">
        <h3 className="secao-titulo">1. Definição de Função Afim</h3>
        <p className="secao-descricao">
          A função afim é uma função polinomial do primeiro grau. A constante <em>a</em> é chamada de coeficiente angular, e a constante <em>b</em> é chamada de coeficiente linear.
        </p>
        <p className="secao-descricao">
          A fórmula geral de uma função afim é:
        </p>
        <pre className="secao-exemplo">f(x) = ax + b</pre>
        <p className="secao-descricao">
          Onde:
          <ul className="secao-exemplos">
            <li><strong>a</strong> é o coeficiente angular, que determina a inclinação da reta;</li>
            <li><strong>b</strong> é o coeficiente linear, que determina a interseção da reta com o eixo <em>y</em>;</li>
            <li><strong>x</strong> é a variável independente;</li>
            <li><strong>f(x)</strong> é a variável dependente.</li>
          </ul>
        </p>
      </section>

      <section className="aula-secao grafico-funcao-afim">
        <h3 className="secao-titulo">2. Gráfico da Função Afim</h3>
        <p className="secao-descricao">
          O gráfico de uma função afim é sempre uma reta. O coeficiente angular <em>a</em> define a inclinação da reta: se <em>a</em> for positivo, a reta será crescente; se <em>a</em> for negativo, a reta será decrescente. O coeficiente <em>b</em> define o ponto onde a reta corta o eixo <em>y</em>, ou seja, a ordenada na origem.
        </p>
        <p className="secao-descricao">
          Exemplo de gráficos de funções afins:
        </p>
        <ul className="secao-exemplos">
          <li><strong>f(x) = 2x + 1</strong>: A reta é crescente, passando pelo ponto (0, 1) no eixo <em>y</em>.</li>
          <li><strong>f(x) = -x + 3</strong>: A reta é decrescente, passando pelo ponto (0, 3) no eixo <em>y</em>.</li>
        </ul>
      </section>

      <section className="aula-secao coeficientes">
        <h3 className="secao-titulo">3. Coeficiente Angular e Linear</h3>
        <h4 className="secao-subtitulo">3.1 Coeficiente Angular (a)</h4>
        <p className="secao-descricao">
          O coeficiente angular <em>a</em> é responsável pela inclinação da reta. Se <em>a</em> for maior que 0, a reta será crescente, e se <em>a</em> for menor que 0, a reta será decrescente. Quanto maior o valor de <em>a</em>, mais inclinada será a reta.
        </p>
        <ul className="secao-exemplos">
          <li><strong>a = 2</strong>: A reta sobe 2 unidades no eixo <em>y</em> para cada unidade que se move para a direita no eixo <em>x</em>.</li>
          <li><strong>a = -3</strong>: A reta desce 3 unidades no eixo <em>y</em> para cada unidade que se move para a direita no eixo <em>x</em>.</li>
        </ul>

        <h4 className="secao-subtitulo">3.2 Coeficiente Linear (b)</h4>
        <p className="secao-descricao">
          O coeficiente linear <em>b</em> determina o ponto onde a reta intercepta o eixo <em>y</em>. Este valor é o valor de <em>f(x)</em> quando <em>x = 0</em>.
        </p>
        <ul className="secao-exemplos">
          <li><strong>b = 1</strong>: A reta intercepta o eixo <em>y</em> no ponto (0, 1).</li>
          <li><strong>b = -2</strong>: A reta intercepta o eixo <em>y</em> no ponto (0, -2).</li>
        </ul>
      </section>

      <section className="aula-secao exemplos">
        <h3 className="secao-titulo">4. Resolução de Exemplos</h3>
        <p className="secao-descricao">
          Vamos agora ver como resolver algumas questões envolvendo funções afins.
        </p>

        <h4 className="secao-subtitulo">4.1 Exemplo 1</h4>
        <p className="secao-descricao">
          Resolva para <em>f(x) = 3x - 4</em>, dado que <em>x = 2</em>:
        </p>
        <pre className="secao-exemplo">f(2) = 3(2) - 4 = 6 - 4 = 2</pre>
        <p className="secao-descricao">
          A resposta é <em>f(2) = 2</em>.
        </p>

        <h4 className="secao-subtitulo">4.2 Exemplo 2</h4>
        <p className="secao-descricao">
          Resolva para <em>f(x) = -x + 5</em>, dado que <em>x = -3</em>:
        </p>
        <pre className="secao-exemplo">f(-3) = -(-3) + 5 = 3 + 5 = 8</pre>
        <p className="secao-descricao">
          A resposta é <em>f(-3) = 8</em>.
        </p>
      </section>

      <section className="aula-secao aplicacoes">
        <h3 className="secao-titulo">5. Função Afim e Problemas do Cotidiano</h3>
        <p className="secao-descricao">
          As funções afins têm várias aplicações no cotidiano. Um exemplo clássico é o cálculo do custo de um produto, onde o preço é determinado por uma taxa fixa (coeficiente linear) e uma taxa variável (coeficiente angular) que depende da quantidade adquirida.
        </p>
        <p className="secao-descricao">
          Exemplo:
          Se o custo de produção de um produto for dado por <em>C(q) = 5q + 20</em>, onde...
        </p>
      </section>
    </div>
  );
};

export default Aula9FuncoesAfins;
