let toDolist = JSON.parse(localStorage.getItem('toDolist')) || [];
renderList();

function renderList() {
   
    const todoListDiv = document.querySelector('.to-do-list');
    todoListDiv.innerHTML = ''; 

    for (let i = 0; i < toDolist.length; i++) {
        const todo = toDolist[i];
        const card = document.createElement('div');
        card.classList.add('task-card');
        const divName = document.createElement('div');
        divName.classList.add('task-text-box'); 
        divName.textContent = todo.name;

        const divDueDate = document.createElement('div');
        divDueDate.classList.add('task-date-box'); 
        divDueDate.textContent = todo.dueDate;

        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.classList.add('delete-btn');

        
        btn.addEventListener('click', function() {
            toDolist.splice(i, 1);
            localStorage.setItem('toDolist', JSON.stringify(toDolist));
            renderList();
        });
       card.appendChild(divName);    // Add the Task Name column
       card.appendChild(divDueDate); // Add the Date column
       card.appendChild(btn);        // Add the Button column
       todoListDiv.appendChild(card);
}


}

function addTask() {
    let inputElement= document.querySelector('.to-do-input');
    let name=inputElement.value;
    let dueDate=document.querySelector('.due-date').value;
    if (name === '') {
        alert("Please enter a task!");
        return;
    }
        toDolist.push({
            name,dueDate
        });
        localStorage.setItem('toDolist', JSON.stringify(toDolist));
        inputElement.value='';
        renderList()
    
    
    ;
}


document.querySelector('.to-do-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});