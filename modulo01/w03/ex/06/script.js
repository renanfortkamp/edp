const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() +1;
const estacao = document.querySelector('div');


const minhaEstacao = () =>{
    if(dia >= 21 && mes == 12 || dia >= 1 && mes == 1 || dia >= 1 && mes == 2 || dia <= 19 && mes == 3  ){
        estacao.innerHTML = `
        <img src="imgs/verao.png" alt="Verão">
        <h1>Verão</h1>
        `
    } else if( dia >= 20 && mes == 3 || dia >= 1 && mes == 4 || dia >= 1 && mes == 5 || dia < 21 && mes == 6 ){
        estacao.innerHTML = `
        <img src="imgs/outono.png" alt="Outono">
        <h1>Outono</h1>
        `;
    } else if( dia >= 21 && mes == 6 || dia >= 1 && mes == 7 || dia >= 1 && mes == 8 || dia <= 21 && mes == 9 ){
        
        estacao.innerHTML = `
        <img src="imgs/inverno.png" alt="Inverno">
        <h1>Inverno</h1>
        `
    } else(
        estacao.innerHTML = `
        <img src="imgs/primavera.png" alt="Primavera">
        <h1>Primavera</h1>
        `
        );
}

minhaEstacao()