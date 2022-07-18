var nome = prompt("Digite seu nome!");
var idade = parseInt(prompt("Digite sua idade!"));
var esporteLike = confirm("Gosta de praticar algum esprte?");

const ex1 = () =>{
    if(esporteLike = true){
        alert(`${nome}, de ${idade} anos, gosta de praticar esportes"`)
    } else{
        alert(`${nome}, de ${idade} anos, não gosta de praticar esportes"`)
    }
} 

ex1()