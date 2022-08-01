// Crie uma classe 'Funcionario' para representar um empregado de uma empresa, contendo os atributos cpf, nome completo e salário.

// Implemente também um método 'promover' que recebe como parametro um percentual, devendo o salário ser aumentado pelo percentual indicado
// no argumento do método.

// Crie e utilize um objeto desta classe para testar a implementação.


class Funcionario{
    constructor(nome,cpf,salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario
    }
    cargo(cargo){
        this.cargo = cargo;
    }

    promover(aumento){
        this.salario = this.salario + this.salario*aumento
    }

}

const renan = new Funcionario("Renan fortkamp",08745788928,1000.00);

renan.cargo("Programador")
renan.promover(0.20)

console.log(renan)