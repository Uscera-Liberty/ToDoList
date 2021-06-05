const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-but')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)

function addTodo(e){
    e.preventDefault();


    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo =document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)
    saveLocalTodo(todoInput.value)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)



    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)


    todoList.appendChild(todoDiv)
    todoInput.value=''

  
}

  function saveLocalTodo(todo){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[]
        }
        else{
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        todos.push(todo);
        localStorage.setItem('todos',JSON. stringify(todos))
    }

    function deleteCheck (e){
        const item = e.target
        if( item.classList[0]=== 'trash-btn'){
            const todo = item.parentElement
            todo.remove()
            removelocalStorageTodos(todo)
            
        }
    }
    function  removelocalStorageTodos(todo){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[]
        }
        else{
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        const  toodIndex = todo.children[0].innerText
        todos.splice(todos.indexOf(indexIndex),1)
        localStorage.setItem('todos',JSON.stringify(toods))
    }