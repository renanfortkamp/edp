// Implemente uma função 'calcular' que receba como parâmetro um array (numérico) e identifique o maior e menor valor do mesmo.
// Imprima no console estes valores ou "Não é possível calcular" qdo não for possível.

// Teste a função com as seguintes entradas:

// [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
// []
// [1]
// [1, -1]
// null
// [-2,-2,-2,-2]
// [20,10, 30]
// Obs.: Use let e const para declarar variáveis se for necessário.

const arr1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
const arr2 = []
const arr3 = [1]
const arr4 =  [1, -1]
const arr5 = null
const arr6 = [-2,-2,-2,-2]
const arr7 = [20,10, 30]
const arrays = [arr1,arr2,arr3,arr4,arr5,arr6,arr7]

function callArray(){
    for(let i = 0;i<=6;i++){
        let arr = arrays[i]
        calcular(arr)
    }
}


function calcular(arr){
    let maior = ''
    let menor = ''
    for(let i = 0;i < arr.length; i++){
        if(arr[i] != null && maior < arr[i]){
            maior = arr[i]
        }else if(arr[i] != null && menor > arr[i]){
            menor = arr[i]
        }else if(arr[null])
    }
    console.log(`O maior e menor ${}numero do array ${arr} é ${maior} e ${menor}`)
}

callArray()