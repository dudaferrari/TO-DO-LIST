# API Todo List

## Endpoints

- `GET /api/todos` - lista todas as tarefas
- `POST /api/todos` - cria uma nova tarefa
- `DELETE /api/todos/:id` - remove uma tarefa
- `PATCH /api/todos/:id/toggle` - marca/desmarca uma tarefa
- `PATCH /api/todos/:id/reminder` - atualiza um lembrete

## Payload de criação

```json
{
  "text": "Comprar leite",
  "reminder": "2026-05-11T09:00:00Z"
}
```

## Resposta esperada

```json
{
  "id": 1,
  "text": "Comprar leite",
  "done": false,
  "reminder": "2026-05-11T09:00:00Z",
  "createdAt": "2026-05-10T..."
}
```
