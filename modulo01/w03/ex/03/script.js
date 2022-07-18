const calcular =(operador)=>{
    let primeiroValor = parseInt(document.getElementById("priNum").value)
    let segundoValor = parseInt(document.getElementById("segNum").value)
    let p = document.getElementById('visor')
    switch(operador){
        case "+":
            calculo = primeiroValor + segundoValor; 
            p.value =`${calculo} `
        break;
        case "-":
            calculo = primeiroValor - segundoValor; 
            p.value =`${calculo} `
        break;
        case "*":
            calculo = primeiroValor * segundoValor; 
            p.value =`${calculo} `
        break;
        case "/":
            calculo = primeiroValor / segundoValor; 
            p.value =`${calculo} `
        break;
        default:
            alert("Operador digitado incorretamente, recarregar pagina e digitar novamente!(Ex: + e -)");
    }
    priNum = document.getElementById("priNum").value = ""
    segNum = document.getElementById("segNum").value = ""

}