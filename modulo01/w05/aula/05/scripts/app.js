

// function promiseSample(param){
//     return new Promise((resolve,reject)=>{
//         resolve(`Resolve ${param}`) // se sucesso
//         reject() // se falha
// })
// }

// promiseSample('batata')
//     .then((result)=>{
//     console.log("then",result)
//     })
//     .catch((error)=>{
//         console.log("catch", error)
//     })
    

// console.log(promiseSample)





// function promiseSample(param){
//     return new Promise((resolve,reject)=>{
//         resolve(`Resolve ${param}`) // se sucesso
//         reject() // se falha
// })
// }

const div = document.querySelector('div')
const input = document.createElement('input')
input.type='text'
div.appendChild(input)
const button = document.createElement('button')
div.appendChild(button)
button.innerText = 'Buscar'

button.addEventListener('click',()=>{
    const cep = input.value;
    input.value = ''
    mainAsync(cep)
})

async function mainAsync(cep) {
      try{
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        if(resp.ok){
            const json = await resp.json();
            const logradouro = json.logradouro
            showCep(logradouro)
        }
      }catch(error){
        console.log("Error", error);
      }
    };

const showCep = (logradouro)=>{
    const p = document.createElement('p')
    p.innerText = logradouro
    div.appendChild(p)
}