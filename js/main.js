'use strict';

{
  const todos = [];
  const tbody = document.getElementById('tbody');

  let deleteTodo = (deleteRow) => {

    todos.splice(deleteRow, 1);

    displayTodo(todos);

  }



  let displayTodo = (todos) => {
    
    while (tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }

    todos.forEach((todo, idx) => {
      const tr = document.createElement('tr');
      const tdIndex = document.createElement('td');  
      const tdTask = document.createElement('td');
      const tdState = document.createElement('td');
      const tdDelete =  document.createElement('td');
      const stateButton = document.createElement('button');
      const delButton = document.createElement('button');

      
      tdIndex.textContent = idx;
      tdTask.textContent = todo.task;
      stateButton.textContent = todo.status;
      delButton.textContent = '削除';
      delButton.addEventListener('click', () => {

        const deleteRow = delButton.parentNode.parentNode.firstChild.textContent;
        deleteTodo(deleteRow);
        
      }); 

      tr.appendChild(tdIndex);
      tr.appendChild(tdTask);
      tdState.appendChild(stateButton);
      tdDelete.appendChild(delButton);
      tr.appendChild(tdState);
      tr.appendChild(tdDelete);
      tbody.appendChild(tr);


    });



    
  }
  

  document.getElementById('btn').addEventListener('click', () => {
    const todoComment = document.getElementById('comment');
    const todo = {
      task: todoComment.value,
      status: '作業中'
    };
  
    todos.push(todo);
    
    displayTodo(todos);

    });




}