const input = document.querySelector('#todo-input');
const button = document.querySelector('#add-button');
const list = document.querySelector('#todo-list');

button.addEventListener('click', () => {
    if(input.value.trim() === '') return;
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
    localStorage.setItem('todos', JSON.stringify(Array.from(list.children).map(li => li.textContent)));
});

const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
savedTodos.forEach(todo => {
    const li =  document.createElement('li');
    li.textContent=todo;
    list.appendChild(li);
});