const todos = [];
let nextId = 1;

function getAllTodos() {
    return todos;
}

function getTodoById(id) {
    return todos.find((todo) => todo.id === id) || null;
}

function addTodo(text, reminder = null) {
    const todo = {
        id: nextId++,
        text,
        done: false,
        reminder,
        createdAt: new Date().toISOString()
    };
    todos.push(todo);
    return todo;
}

function removeTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return null;
    return todos.splice(index, 1)[0];
}

function toggleTodo(id) {
    const todo = getTodoById(id);
    if (!todo) return null;
    todo.done = !todo.done;
    return todo;
}

function updateReminder(id, reminder) {
    const todo = getTodoById(id);
    if (!todo) return null;
    todo.reminder = reminder;
    return todo;
}

function resetTodos() {
    todos.length = 0;
    nextId = 1;
}

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    removeTodo,
    toggleTodo,
    updateReminder,
    resetTodos
};
