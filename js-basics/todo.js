const input = document.querySelector('#todo-input');
const button = document.querySelector('#add-button');
const list = document.querySelector('#todo-list');

// Add new todo
button.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';

  // Add delete function
  deleteBtn.addEventListener('click', () => {
    li.remove();

    // Update localStorage after removing
    const updatedTodos = Array.from(list.children).map(li =>
      li.textContent.replace('Delete', '').trim()
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';

  // Save to localStorage
  const todos = Array.from(list.children).map(li =>
    li.textContent.replace('Delete', '').trim()
  );
  localStorage.setItem('todos', JSON.stringify(todos));
});

// Load saved todos
const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
savedTodos.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';

  deleteBtn.addEventListener('click', () => {
    li.remove();
    const updatedTodos = Array.from(list.children).map(li =>
      li.textContent.replace('Delete', '').trim()
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
});
