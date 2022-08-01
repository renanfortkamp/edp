// Um palindrome (ou palindromo), segundo o dicionário Houaiss,
// "diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo: osso, Ana, radar.

// Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.

// Implemente um script que retorne se determinada palavra é um palindromo.

// Obs.: Use let e const para declarar variáveis se for necessário.

const pali = (word) =>{
    let wordArray = word.split("")
    let reserveWord = wordArray.reverse()
    let joinWord = reserveWord.join("")
    if(joinWord == word){
        console.log("Está palavra é um palindomo")
    }else{
        console.log("Está palavra não é um palindromo!")
    }
}



pali('radar')