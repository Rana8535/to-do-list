document.getElementById('add-task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const newTask = document.getElementById('new-task').value.trim();
  if (newTask === '') return;
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <span class="task-text">${newTask}</span>
    <button class="delete-task" type="button">Delete</button>
  `;
  taskList.appendChild(taskItem);
  document.getElementById('new-task').value = '';
  taskItem.querySelector('.delete-task').addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });
});

document.getElementById('task-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-task')) {
    const taskItem = e.target.parentElement;
    taskItem.parentNode.removeChild(taskItem);
  }
});