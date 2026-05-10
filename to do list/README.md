# Todo List MVC Mono-repo

Projeto de lista de tarefas com arquitetura MVC e mono-repo.

## Estrutura

- `packages/api`: backend Express com modelo em memória e APIs REST
- `packages/web`: frontend estático em HTML/CSS/JS
- `docs`: documentação MkDocs
- `speckit.constitution`: justificativas e requisitos do projeto

## Comandos

```bash
npm install
npm run dev
```

- `npm start`: inicia apenas a API
- `npm run dev`: inicia API e frontend juntos
- `npm test`: executa testes do backend
- `npm run docs:serve`: executa o MkDocs localmente

## Documentação MkDocs

Instale o MkDocs com:

```bash
pip install -r requirements.txt
```

Em seguida execute:

```bash
npm run docs:serve
```

## Deployment

Sugerido para deploy gratuito:
- GitHub Pages para o frontend estático
- Render / Railway para o backend Express
- MkDocs pode ser publicado como site estático via GitHub Pages

## Features

- Cadastar tarefa
- Remover tarefa
- Marcar tarefa como concluída
- Adicionar lembrete
- Documentação online com MkDocs
