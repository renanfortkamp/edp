class Gato{
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    miar(){
        console.log("Miauuuu")
    }
}

const gato = new Gato("Garfild",10,20)

const nome = gato.nome

gato.miar()