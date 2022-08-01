// Crie uma classe 'CalculadorDeAreas' que tenha os atributos 'tipo', 'base' e 'altura'.

// Implemente o método 'calcular' que faça o cálculo da área conforme o 'tipo' do poligono informado:
// - 'triangulo': (base altura) / 2
// - 'quadrado' e 'retangulo' : base altura

// Teste a implementação com instâncias dessa classe para um triângulo de base 6 cm e altura 8 cm, para um quadrado de base e altura de 4 cm e um retângulo de base 4 cm e altura 6 cm.

// Imprima o resultado calculado no console.

class CalculadorDeAreas{
    constructor(tipo,base,altura){
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }
    calcular(){
        if(this.tipo == 'triangulo'){
            return this.base / 2;
        } else if(this.tipo == 'quadrado' || this.tipo == 'retangulo'){
            return this.base * this.altura
        } else{
            return 'Tipo invalido'
        }
    }
}

const triangulo = new CalculadorDeAreas('triangulo',6,8)
const quadrado = new CalculadorDeAreas('quadrado',4,4)
const retangulo = new CalculadorDeAreas('retangulo',4,6)
console.log(triangulo)
console.log(triangulo.calcular())
console.log("------------------")
console.log(quadrado)
console.log(quadrado.calcular())
console.log("------------------")
console.log(retangulo)
console.log(retangulo.calcular())
