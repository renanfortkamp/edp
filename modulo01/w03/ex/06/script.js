// Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.

const btn = document.querySelector('button');
btn.addEventListener('click',function(){calcularIdade()
});




const calcularIdade = ()=>{
    let input = document.querySelector('input').value;
    if(input == ''){
        alert("Insira a sua idade")
    }else{
        let birth = new Date(input);
        let check = new Date();
        let milliDay = 1000 * 60 * 60 * 24;
        let ageInDays = (check - birth) / milliDay;
        let ageInYears =  Math.floor(ageInDays / 365 );
        showDate(ageInYears);

    }
    
   };

   const showDate= (ageInYears) =>{
    let p = document.querySelector('p');
    p.innerText = `${ageInYears}`
}