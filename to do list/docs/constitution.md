# Constitution — Diretrizes do Projeto Todo List

> **Versão:** `1.1.0`  
> **Atualizado em:** `17/05/2026`

---

## 1. Objetivo do Projeto

Desenvolver uma aplicação de lista de tarefas (**Todo List**) utilizando arquitetura **MVC** e estrutura **mono-repo**, com persistência **in-memory**.

A aplicação deverá permitir:

- Cadastro de tarefas
- Remoção de tarefas
- Alteração de status (`completed`)
- Adição de lembretes
- Documentação online utilizando **MkDocs**

---

## 2. Arquitetura e Estrutura do Projeto

O projeto utiliza o padrão **MVC (Model-View-Controller)** para separar responsabilidades e facilitar manutenção, escalabilidade e organização do código.

### Estrutura Mono-repo

```txt
packages/
 ├── api/
 └── web/

 packages/
 ├── api/
 │    └── src/
 │         ├── models/
 │         │     └── todoModel.js
 │         ├── controllers/
 │         │     └── todoController.js
 │         └── tests/
 │               └── todo.test.js
 │
 └── web/
       ├── index.html
       ├── styles.css
       └── script.js
'''

# Estrutura Mono-repo

```txt
packages/
├── api/
└── web/
```

---

# 3.Responsabilidades

| Camada | Responsabilidade |
|---|---|
| `Model` | Estrutura e manipulação dos dados |
| `Controller` | Regras de negócio e validações |
| `View` | Interface visual e consumo da API |

---

# 4.Tecnologias Utilizadas

## Backend

- `Node.js`
- `Express`
- `API RESTful`

## Frontend

- `HTML5`
- `CSS3`
- `JavaScript Vanilla`

## Ferramentas

- `MkDocs`
- `GitHub Actions`
- `Jest`
- `Supertest`

---

# 5.Persistência In-Memory

Os dados serão armazenados temporariamente em memória para simplificar o desenvolvimento e eliminar dependências externas de banco de dados.

## 6.Benefícios

- Desenvolvimento mais rápido
- Execução simplificada
- Testes mais leves
- Foco na lógica da aplicação

---

# 7.Desenvolvimento Baseado em Especificação

O projeto seguirá o conceito de `Spec-Driven Development`.

A especificação oficial da API deverá estar localizada em:

```txt
speckit.specify
```

A especificação utilizará o padrão `OpenAPI 3.0.3` e atuará como fonte principal de verdade do sistema.

---

# 8.Testes Automatizados

Os testes estarão localizados em:

```txt
packages/api/src/tests/todo.test.js
```

## 9.Os testes devem validar

- Criação de tarefas
- Regras de validação
- Listagem de tarefas
- Remoção por ID
- Alteração do status `completed`
- Configuração de lembretes

---

# 10.Integração Contínua (CI)

O projeto utilizará `GitHub Actions` para integração contínua.

## 11.Workflow obrigatório

```txt
.github/workflows/test-api.yml
```

## 12.Regras

- Nenhum código poderá ser integrado à branch principal caso os testes estejam falhando
- A pipeline deverá validar automaticamente:
  - Testes
  - Integridade da API
  - Qualidade do código

---

# 13.Diretrizes do Frontend

A camada de visualização deverá seguir boas práticas de desempenho, acessibilidade e responsividade.

## Requisitos obrigatórios

- HTML semântico
- Navegação acessível por teclado
- Feedback visual de foco
- Validação síncrona de formulários
- Mensagens claras em português
- Design responsivo
- Progressive Enhancement

---

# 14.Segurança e Observabilidade

O backend deverá validar e sanitizar todas as entradas antes da persistência em memória.

---

# Documentação

A documentação deverá ser gerada utilizando `MkDocs` e publicada online.

## A documentação deve conter

- Guia de instalação
- Guia de execução
- Arquitetura do sistema
- Endpoints da API
- Critérios de aceitação

---

# Critérios de Entrega

O projeto será considerado concluído apenas com:

- Repositório público no GitHub contendo histórico de commits e pipeline ativa
- Documentação pública gerada com MkDocs

---

# 16.Resultado Esperado

Ao final do desenvolvimento, o projeto deverá possuir:

- Arquitetura MVC organizada
- Estrutura mono-repo
- API REST funcional
- Frontend responsivo
- Testes automatizados
- Pipeline CI/CD ativa
- Documentação pública
- Código modularizado e de fácil manutenção