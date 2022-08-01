// Os juros de uma aplicação podem ser calculados de forma simples ou composta.
// Para o cálculo, geralmente se usa a letra 'C' ou 'M' para representar o montante final da aplicação, a letra 'i' para representar a taxa aplicada (ao mês ou anual) e a letra 't' indicando o tempo (em meses ou anos) da aplicação.

// Crie uma classe 'Juros', que tenha como atributos o capital inicial, a taxa aplicada e o tempo (no mesmo período: meses ou anos).

// a) Adicione o método 'calcularJurosSimples()' que faça o cálculo usando a fórmula 'J = C i t'
// b) Adicione o método 'calcularJurosCompostos()' que faça o cálculo usando a fórmula 'M = C (1+i)**t'
// c) Teste a implementação da classe imprimindo no console os valores de juros simples e composto para uma aplicação de 10.000 reais
// a uma taxa de 7% ao mês (ou seja, 0.07) pelo período de 24 meses.
// d) Teste também (imprimindo igualmente no console) os valores de juros simples e composto para uma aplicação de 10.000 reais
// a uma taxa de 15% ao ano (ou seja, 0.15) pelo período de 10 anos.

class Juros{
    constructor(c,i,t){
    this.capital = c;
    this.juros = i;
    this.tempo = t;
}
    calcularComposto(){
        return this.capital*(1+this.juros)**this.tempo;

    }
    calcularSimples(){
        return this.capital*this.juros*this.tempo;

    }

}


const aplicacao1 = new Juros(10000,0.07,24)
const aplicacao2 = new Juros(10000,0.15,120)
console.log(aplicacao1.calcularComposto())
console.log(aplicacao1.calcularSimples())
console.log("----------------------")
console.log(aplicacao2.calcularComposto())
console.log(aplicacao2.calcularSimples())



