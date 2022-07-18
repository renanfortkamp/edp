const showHours = ()=>{
    let data = new Date();
    let hora = data.getHours();         
    let min = data.getMinutes();
    let seg = data.getSeconds();
    let horaAtual = `${hora}:${min}:${seg}`;
    let p = document.querySelector('p')
    p.innerText =`Hora Atual é ${horaAtual}`;
}
setInterval(function(){
    showHours()
},1000)