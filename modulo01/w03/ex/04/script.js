function calculoProgressao(){
    let raiz = parseInt(document.getElementById("raiz").value)
    let valorInicial = parseInt(document.getElementById('numInicial').value)
    let p = document.querySelector('p')

    var progressaoAritmetica = [valorInicial]
    for(i = 0;i < 9; i++){
            valorInicial += raiz;
            progressaoAritmetica.push(valorInicial);
        }
    p.innerText = `Progressão Aritmética dos 10 primeiros valores da sequência é ${progressaoAritmetica}`;
    raiz.value = ""
    valorInicial.value = ""
    
}