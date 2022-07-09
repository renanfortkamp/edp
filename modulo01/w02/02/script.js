const contaMais = () =>{
    let contar = document.querySelector('h1')
    contar.innerText++

}

const contaMenos = () =>{
    let contar = document.querySelector('h1')
    contar.innerText--

}

const h1 = document.createElement('h1')
h1.innerText = "0"

const buttonMais = document.createElement('button')
buttonMais.innerText = "+";
buttonMais.onclick = contaMais;

const buttonMenos = document.createElement('button')
buttonMenos.innerText = "-";
buttonMenos.onclick = contaMenos;

document.querySelector('div');

const div = document.querySelector('div');
div.append(h1);
div.append(buttonMais);
div.append(buttonMenos);


