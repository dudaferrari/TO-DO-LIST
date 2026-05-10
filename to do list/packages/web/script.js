const API_URL = 'http://localhost:4000/api/todos';
const form = document.getElementById('todo-form');
const input = document.getElementById('new-todo');
const reminderInput = document.getElementById('new-reminder');
const list = document.getElementById('todo-list');
const statusMessage = document.getElementById('status-message');
const taskCount = document.getElementById('task-count');
const emptyState = document.getElementById('empty-state');
const refreshButton = document.getElementById('refresh-button');
let todos = [];

function showNotice(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.style.color = type === 'error' ? '#b91c1c' : '#2563eb';
}

function clearNotice() {
  statusMessage.textContent = '';
}

function formatReminder(reminder) {
  if (!reminder) return '';
  const date = new Date(reminder);
  return date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function setTaskCount(count) {
  taskCount.textContent = count;
}

function renderTodos() {
  list.innerHTML = '';

  if (todos.length === 0) {
    emptyState.style.display = 'block';
    setTaskCount(0);
    return;
  }

  emptyState.style.display = 'none';
  setTaskCount(todos.length);

  todos.forEach((todo) => {
    const item = document.createElement('li');
    item.className = `task-item${todo.done ? ' done' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.className = 'task-checkbox';
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    item.appendChild(checkbox);

    const info = document.createElement('div');
    info.className = 'task-info';

    const title = document.createElement('strong');
    title.textContent = todo.text;
    info.appendChild(title);

    if (todo.reminder) {
      const reminder = document.createElement('small');
      reminder.textContent = `Lembrete: ${formatReminder(todo.reminder)}`;
      info.appendChild(reminder);
    }

    item.appendChild(info);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const reminderButton = document.createElement('button');
    reminderButton.type = 'button';
    reminderButton.textContent = 'Editar lembrete';
    reminderButton.addEventListener('click', async () => {
      const newReminder = prompt('Nova data/hora (YYYY-MM-DDTHH:MM)', todo.reminder || '');
      if (newReminder === null) return;
      await updateReminder(todo.id, newReminder.trim() || null);
    });
    actions.appendChild(reminderButton);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', async () => {
      await removeTodo(todo.id);
    });
    actions.appendChild(removeButton);

    item.appendChild(actions);
    list.appendChild(item);
  });
}

async function fetchTodos() {
  try {
    clearNotice();
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Não foi possível carregar as tarefas.');
    todos = await response.json();
    renderTodos();
  } catch (error) {
    showNotice('Erro: certifique-se de que a API está rodando em http://localhost:4000', 'error');
    console.error(error);
  }
}

async function addTodo(text, reminder) {
  const trimmed = text.trim();
  if (!trimmed) {
    showNotice('Escreva uma tarefa antes de adicionar.', 'error');
    return;
  }

  try {
    clearNotice();
    const body = { text: trimmed };
    if (reminder) body.reminder = new Date(reminder).toISOString();

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Falha ao criar tarefa.');
    }

    input.value = '';
    reminderInput.value = '';
    showNotice('Tarefa adicionada com sucesso!');
    await fetchTodos();
  } catch (error) {
    showNotice('Erro ao adicionar tarefa. Verifique a API.', 'error');
    console.error(error);
  }
}

async function toggleTodo(id) {
  try {
    clearNotice();
    const response = await fetch(`${API_URL}/${id}/toggle`, { method: 'PATCH' });
    if (!response.ok) throw new Error('Falha ao atualizar tarefa.');
    await fetchTodos();
  } catch (error) {
    showNotice('Erro ao atualizar tarefa. Verifique a API.', 'error');
    console.error(error);
  }
}

async function removeTodo(id) {
  try {
    clearNotice();
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Falha ao remover tarefa.');
    await fetchTodos();
  } catch (error) {
    showNotice('Erro ao remover tarefa. Verifique a API.', 'error');
    console.error(error);
  }
}

async function updateReminder(id, reminder) {
  try {
    clearNotice();
    const response = await fetch(`${API_URL}/${id}/reminder`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reminder: reminder || null })
    });
    if (!response.ok) throw new Error('Falha ao atualizar lembrete.');
    await fetchTodos();
  } catch (error) {
    showNotice('Erro ao atualizar lembrete. Verifique a API.', 'error');
    console.error(error);
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await addTodo(input.value, reminderInput.value);
});

refreshButton.addEventListener('click', fetchTodos);

fetchTodos();
