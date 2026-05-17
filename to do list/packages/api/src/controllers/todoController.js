const todoModel = require('../models/todoModel');

function listTodos(req, res) {
    res.json(todoModel.getAllTodos());
}

function createTodo(req, res) {
    const { title, description, reminder } = req.body;
    if (!title || typeof title !== 'string' || !title.trim()) {
        return res.status(400).json({ error: 'Título da tarefa é obrigatório.' });
    }

    const todo = todoModel.addTodo(title.trim(), description || '', reminder || null);
    res.status(201).json(todo);
}

function removeTodo(req, res) {
    const id = Number(req.params.id);
    const todo = todoModel.removeTodo(id);
    if (!todo) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.status(200).json(todo);
}

function toggleTodo(req, res) {
    const id = Number(req.params.id);
    const todo = todoModel.toggleTodo(id);
    if (!todo) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.json(todo);
}

function updateReminder(req, res) {
    const id = Number(req.params.id);
    const { reminder } = req.body;
    const todo = todoModel.updateReminder(id, reminder || null);
    if (!todo) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.json(todo);
}

module.exports = {
    listTodos,
    createTodo,
    removeTodo,
    toggleTodo,
    updateReminder
};
