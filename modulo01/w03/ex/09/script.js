// Em um documento HTML, vamos fazer uma lista de compras com funcionalidades de adicionar itens e exibir todos itens adicionados.

// Na página, exiba um campo de texto (para que possamos escrever o nome de um item) e um botão (para adicionar o item à lista).

// A página deve possibilitar inserir itens em uma lista e exibir a lista atualizada à medida que forem sendo adicionados novos itens.

// A página deve conter um rótulo (<label>) "Item a adicionar" seguido do campo de texto (<input>) onde o usuário possa digitar o item.

// O botão "Adicionar" (<button>), deve, no momento do clique, inserir o item digitado na lista e apagar o texto do campo.

// Se o texto estiver vazio (length), deve mostrar uma mensagem (alert) ao usuário solicitando a inserção de algum texto.

// A página também deve conter uma lista (<ul><li>), que exibirá os itens adicionados pelo usuário.

/* variavel abaixo responsavel por armazenar as tarefas */
const todoList = new Array();

const form = document.getElementById('conteinerGeral')
form.addEventListener('submit', e => {
    e.preventDefault()
})

addTask.addEventListener('click', function(){
  if(todoList.length < 100){
    let task = document.querySelector('input').value;
    if(task == ""){
      } else{
      let task = document.querySelector('input').value;
      todoList.push({textTask:task,done:false});
      createList();
      saveStorage()
    }} else {
      alert("Limite de tarefas atingido!")
   }
  }
)

const createList = ()=>{
    document.querySelector('ul').innerHTML = "";
    document.querySelector('input').value = "";
  for(let i= 0 ; i < todoList.length; i++){
    const ul = document.querySelector('ul');
    const check = document.createElement('input');	
    const li = document.createElement('li');
    const label = document.createElement('label');
    const task = document.createTextNode(todoList[i].textTask);
      ul.appendChild(li);
      createCheckbox(li,check);
      li.appendChild(label); 
      label.appendChild(task);
      createDeleteButton(i,li);
      isChecked(i,check);
      li.classList.add('taskList');
      label.classList.add('textTask');     
  }}

const createCheckbox = (li,check)=>{
  li.appendChild(check);
  check.type = 'checkbox';
  check.classList.add('checkbox')
  check.name = "checkbox"

}

const isChecked = (i,check)=>{
    if(todoList[i].done == true){
      check.checked = true;
      check.nextSibling.classList.add('checked')
    } else{
      check.checked = false;
      check.nextSibling.classList.remove('checked')
    };
  check.addEventListener('change', function(){
    if(this.checked){	
      check.nextSibling.classList.add('checked')
      todoList[i].done = true;
      saveStorage();
    }else{
      check.nextSibling.classList.remove('checked')
      todoList[i].done = false;
      saveStorage();
  }})
}

const createDeleteButton = (i,li) =>{
  const deleteTask = document.createElement('button');
  const excluir = document.createTextNode('I');
  li.appendChild(deleteTask);
    deleteTask.appendChild(excluir);
    deleteTask.name = "deleteTask"
    deleteTask.classList.add('deleteTask');   
      deleteTask.addEventListener('click', ()=>{
          deleteThisTask(i);
        } 
      )
}

const deleteThisTask = (i) =>{
  let erase = window.confirm("Você deseja realmente excluir esta tarefa?");
  if(erase == true){
    todoList.splice(i,1);
    saveStorage();
    createList();
  }
}

deleteALL.addEventListener('click', ()=>{
  let eraseAll = window.confirm('Você deseja realmente excluir todas as tarefas:');
  if(eraseAll == true){
    todoList.splice(0,todoList.length);
    saveStorage();
    createList();
  }
})

const saveStorage = () =>{
  localStorage.removeItem('todoList')
  let list = JSON.stringify(todoList);
  localStorage.setItem('todoList', list)
}

const loadStorage = () =>{
  const local_storage = JSON.parse(localStorage.getItem('todoList'));
  if(local_storage != null){
    const local_storage = JSON.parse(localStorage.getItem('todoList'));
    for(i=0; i < local_storage.length;i++){
      todoList.push(local_storage[i])
    }
    createList();
  }
}

loadStorage();