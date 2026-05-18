# Todo List MVC Mono-repo

Este repositório contém uma aplicação de lista de tarefas com frontend estático e backend Express, organizada como um mono-repo.

## Visão geral

- `packages/api`: API REST em Node.js + Express.
- `packages/web`: frontend estático em HTML, CSS e JavaScript.
- `docs`: documentação do projeto com MkDocs.
- `speckit.constitution`: requisitos, decisões e boas práticas do projeto.
- `speckit.specify`: especificação OpenAPI para a API de tarefas.

## Recursos implementados

- CRUD de tarefas (`create`, `read`, `update`, `delete`)
- Marca tarefa como concluída/desmarcada
- Adiciona descrição e lembrete opcional à tarefa
- Frontend responsivo com feedback inline
- Service Worker para cache offline básico
- PWA com `manifest.json` e ícones
- Cabeçalhos de segurança no backend (CSP e HSTS)
- Testes automatizados com Jest e Supertest

## Requisitos

- Node.js 18+ ou compatível
- npm
- Python + MkDocs (apenas para documentação)

## Instalação (mono-repo)

No diretório raiz do projeto:

```bash
cd "c:/Users/eduar/Documents/GitHub/TO DO LIST/to do list"
npm install
```

Isso instala as dependências do workspace e prepara o backend e o frontend.

## Executando o projeto

### Iniciar API + frontend juntos

```bash
npm run dev
```

- API: `http://localhost:4000`
- Frontend: `http://localhost:3000`

### Iniciar apenas a API

```bash
npm start
```

ou

```bash
npm --workspace @todo/api start
```

### Iniciar apenas o frontend

```bash
npm --workspace @todo/web start
```

### Endpoints principais

- `GET /api/todos` — lista todas as tarefas
- `POST /api/todos` — cria nova tarefa
- `PATCH /api/todos/:id/toggle` — alterna status concluído
- `PATCH /api/todos/:id/reminder` — atualiza lembrete
- `DELETE /api/todos/:id` — remove tarefa

## Detalhes do frontend

O frontend está em `packages/web` e consome a API em `http://localhost:4000/api/todos`.

O formulário de criação inclui:

- `title` (obrigatório)
- `description` (opcional)
- `reminder` (opcional)

O app exibe o estado `completed` e permite alternar a conclusão diretamente na lista.

## Testes

Execute os testes do backend com:

```bash
npm test
```

Ou diretamente no pacote da API:

```bash
cd packages/api
npm test
```

Os testes cobrem o modelo de tarefas, controladores e rotas principais.

## Documentação

### Servir MkDocs localmente

```bash
pip install -r requirements.txt
npm run docs:serve
```

A documentação ficará disponível em `http://127.0.0.1:8000`.

### Build da documentação

```bash
npm run docs:build
```

## Estrutura de pastas

- `packages/api/src/controllers`: lógica de controle das rotas
- `packages/api/src/models`: armazenamento em memória e manipulação de tarefas
- `packages/api/src/routes`: definição dos endpoints
- `packages/web`: interface do usuário e scripts de interação
- `packages/web/sw.js`: Service Worker para cache
- `speckit.specify`: especificação OpenAPI da API

## Notas úteis

- O backend roda por padrão na porta `4000`.
- O frontend roda por padrão na porta `3000`.
- Se o navegador não carregar o Service Worker, recarregue a página ou limpe o cache.
- Qualquer mudança no código do frontend exige recarregar manualmente o navegador.

## Como tirar o amarelo no VS Code

O amarelo no explorer indica arquivos modificados localmente pelo Git.

Para salvar essas alterações:

```bash
git add .
git commit -m "Atualiza README e ajustes do projeto"
```

Se quiser descartar uma mudança específica:

```bash
git restore <arquivo>
```
