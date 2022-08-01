// Crie a classe 'Animal' com os atributos 'nome', 'idade' e 'som'.
// Depois crie as subclasses (de Animal) 'Cachorro' e 'Gato' com os atributos 'nome' e 'idade', incializando o atributo 'som' da superclasse com 'latido' e 'miado', respectivamente.

// Crie uma instância de cada subclasse para testar, conforme abaixo.

// // exemplos
// const snoopy = new Cachorro('snoopy', 10);
// console.log( snoopy.som ); // latido
// const frajola = new Gato('frajola', 8);
// console.log( frajola.som ); // miado

// Atividade


class Animal{
    constructor(nome,idade,som){
        this.nome = nome;
        this.idade = idade;
        this.som = som;

    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.som = 'latindo'
    }
    
}
class Gato extends Animal{
    constructor(){
        super()
        this.som = 'Miado'
    }
    
}

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som ); // latido
const frajola = new Gato('frajola', 8);
console.log( frajola.som ); // miado