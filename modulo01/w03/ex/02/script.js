
function parImpar(){
    let input = document.getElementById("number").value;
    let p = document.querySelector('p');
    if(input % 2 == 0){
        p.innerText = "Numero é Par"
    } else{
        p.innerText = "Numero é Impar"
    }
    input = document.getElementById("number").value = "";

}