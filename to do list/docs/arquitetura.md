# Arquitetura MVC

## Model
O modelo (`packages/api/src/models/todoModel.js`) mantém os dados em memória. Ele oferece funções para listar, criar, remover, alternar status e atualizar lembrete.

## Controller
O controlador (`packages/api/src/controllers/todoController.js`) valida as requisições e orquestra as operações do modelo.

## View
A view é o frontend estático em `packages/web`, que consome a API e exibe a interface ao usuário.

## Mono-repo
O mono-repo permite manter frontend e backend no mesmo repositório, organizando o código em `packages/*`.

## Por que memória?
Usar memória elimina a dependência de banco de dados e atende ao requisito do exercício: não há persistência necessária, apenas o comportamento do sistema.
