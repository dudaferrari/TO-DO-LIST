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

Responsabilidades
Camada	Responsabilidade
Model	Estrutura e manipulação dos dados
Controller	Regras de negócio e validações
View	Interface visual e consumo da API
3. Tecnologias Utilizadas
Backend
Node.js
Express
API RESTful
Frontend
HTML5
CSS3
JavaScript Vanilla
Ferramentas
MkDocs
GitHub Actions
Jest
Supertest
4. Persistência In-Memory

Os dados serão armazenados temporariamente em memória para simplificar o desenvolvimento e eliminar dependências externas de banco de dados.

Benefícios
Desenvolvimento mais rápido
Execução simplificada
Testes mais leves
Foco na lógica da aplicação
5. Desenvolvimento Baseado em Especificação

O projeto seguirá o conceito de Spec-Driven Development.

A especificação oficial da API deverá estar localizada em:

speckit.specify

A especificação utilizará o padrão OpenAPI 3.0.3 e atuará como fonte principal de verdade do sistema.

6. Testes Automatizados

Os testes estarão localizados em:

packages/api/src/tests/todo.test.js
Os testes devem validar:
Criação de tarefas
Regras de validação
Listagem de tarefas
Remoção por ID
Alteração do status completed
Configuração de lembretes
7. Integração Contínua (CI)

O projeto utilizará GitHub Actions para integração contínua.

Workflow obrigatório
.github/workflows/test-api.yml
Regras
Nenhum código poderá ser integrado à branch principal caso os testes estejam falhando
A pipeline deverá validar automaticamente:
Testes
Integridade da API
Qualidade do código
8. Diretrizes do Frontend

A camada de visualização deverá seguir boas práticas de desempenho, acessibilidade e responsividade.

Requisitos obrigatórios
HTML semântico
Navegação acessível por teclado
Feedback visual de foco
Validação síncrona de formulários
Mensagens claras em português
Design responsivo
Progressive Enhancement
Carregamento de Scripts

Scripts não críticos deverão utilizar:

<script defer></script>

ou

<script async></script>
9. Segurança e Observabilidade

O backend deverá validar e sanitizar todas as entradas antes da persistência em memória.

Health Check

A API deverá possuir a rota:

/health
10. Documentação

A documentação deverá ser gerada utilizando MkDocs e publicada online.

A documentação deve conter:
Guia de instalação
Guia de execução
Arquitetura do sistema
Endpoints da API
Critérios de aceitação
11. Critérios de Entrega

O projeto será considerado concluído apenas com:

Repositório público no GitHub contendo histórico de commits e pipeline ativa
Documentação pública gerada com MkDocs
12. Resultado Esperado

Ao final do desenvolvimento, o projeto deverá possuir:

Arquitetura MVC organizada
Estrutura mono-repo
API REST funcional
Frontend responsivo
Testes automatizados
Pipeline CI/CD ativa
Documentação pública
Código modularizado e de fácil manutenção