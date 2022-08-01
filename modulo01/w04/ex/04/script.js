// Crie uma classe chamada Fatura que possa ser utilizado por uma fábrica, representando um item vendido.

// Uma fatura deve incluir as seguintes informações como atributos:
// • um número identificador do item faturado (código do produto),
// • a descrição do item,
// • a quantidade comprada do item
// • o preço unitário do item

// Sua classe deve ter um construtor que inicialize todos os atributos.
// Se a quantidade não for positiva, ela deve ser indicada como 0.
// Se o preço por item não for positivo ele deve ser indicado como 0.0.

// Implemente um método chamado 'obterValorTotal()' que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço do item).

// Crie pelo menos uma instância desta classe para testar a implementação.


class Fatura{
    constructor(cod,desc,qtd,preco){
        if(qtd < 0){
            qtd=0
        }
        if(preco<0){
            preco = 0.0
        }
        this.codigo = cod;
        this.descricao = desc;
        this.quantidade = qtd;
        this.preco = preco;
        

    }
    obterValorTotal(){
        return this.preco*this.quantidade
    }
}

const mar = new Fatura(01,'tomada',3,10)

console.log(mar.obterValorTotal())

console.log(mar.quantidade,mar.preco)