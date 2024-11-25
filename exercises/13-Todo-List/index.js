// Your code here
let inputTask = document.querySelector('#addToDo');
let toDoList = document.querySelector('ul');

inputTask.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        let task = event.target.value;
        let newTask = document.createElement('li');
        newTask.innerHTML = `<span><i class="fa fa-trash"></i></span> ${task}`
        toDoList.appendChild(newTask)
    }
})



toDoList.addEventListener('click',function (event){
    if (event.target.matches('.fa-trash')){
        event.target.parentElement.parentElement.remove();
    }
})