const request = require('supertest');
const app = require('../index');
const todoModel = require('../models/todoModel');

describe('Todo API', () => {
    beforeEach(() => {
        todoModel.resetTodos();
    });

    test('deve criar uma tarefa', async () => {
        const response = await request(app)
            .post('/api/todos')
            .send({ title: 'Teste de tarefa', reminder: '2026-05-12T10:00:00Z' });

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            title: 'Teste de tarefa',
            completed: false,
            reminder: '2026-05-12T10:00:00Z'
        });
    });

    test('deve listar tarefas', async () => {
        todoModel.addTodo('Tarefa 1');

        const response = await request(app).get('/api/todos');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].title).toBe('Tarefa 1');
    });

    test('deve remover uma tarefa', async () => {
        const todo = todoModel.addTodo('Remover tarefa');

        const response = await request(app).delete(`/api/todos/${todo.id}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(todo.id);
    });

    test('deve marcar/desmarcar tarefa como concluída', async () => {
        const todo = todoModel.addTodo('Tarefa de toggle');

        const response = await request(app).patch(`/api/todos/${todo.id}/toggle`);

        expect(response.status).toBe(200);
        expect(response.body.completed).toBe(true);
    });

    test('deve atualizar lembrete', async () => {
        const todo = todoModel.addTodo('Tarefa com lembrete');

        const response = await request(app)
            .patch(`/api/todos/${todo.id}/reminder`)
            .send({ reminder: '2026-05-13T08:00:00Z' });

        expect(response.status).toBe(200);
        expect(response.body.reminder).toBe('2026-05-13T08:00:00Z');
    });
});
