# Plano de Projeto - Template

## Informações Gerais

- **Nome do Projeto**: 
- **Data de Início**: 
- **Data de Entrega Esperada**: 
- **Responsável**: 
- **Status**: 

## Objetivo

Descrever o objetivo principal do projeto em uma ou duas frases.

## Escopo

### O que está incluído

- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

### O que está fora do escopo

- Descrição do que NÃO faz parte deste projeto

## Requisitos

### Requisitos Funcionais

| ID | Descrição | Prioridade | Status |
|---|---|---|---|
| RF-001 | [Descrição do requisito] | Alta / Média / Baixa | Not Started / In Progress / Done |
| RF-002 | [Descrição do requisito] | Alta / Média / Baixa | Not Started / In Progress / Done |

### Requisitos Não-Funcionais

| ID | Descrição | Prioridade | Status |
|---|---|---|---|
| RNF-001 | [Descrição do requisito] | Alta / Média / Baixa | Not Started / In Progress / Done |
| RNF-002 | [Descrição do requisito] | Alta / Média / Baixa | Not Started / In Progress / Done |

## Cronograma (Timeline)

| Fase | Descrição | Duração | Início | Fim |
|---|---|---|---|---|
| Fase 1 | [Descrição] | X dias | DD/MM | DD/MM |
| Fase 2 | [Descrição] | X dias | DD/MM | DD/MM |
| Fase 3 | [Descrição] | X dias | DD/MM | DD/MM |

## Estrutura do Projeto

### Estrutura de Diretórios

```
projeto-raiz/
├── packages/                    # Mono-repo com múltiplos pacotes
│   ├── api/                     # Backend / API
│   │   ├── src/
│   │   │   ├── controllers/     # Lógica de negócio
│   │   │   ├── models/          # Modelos de dados
│   │   │   ├── routes/          # Definição de rotas
│   │   │   ├── tests/           # Testes automatizados
│   │   │   └── index.js         # Ponto de entrada
│   │   ├── package.json
│   │   └── .env.example
│   │
│   └── web/                     # Frontend / UI
│       ├── src/                 # Componentes/módulos (se aplicável)
│       ├── index.html           # Página principal
│       ├── script.js            # Lógica JavaScript
│       ├── script.min.js        # Versão minificada
│       ├── styles.css           # Estilos
│       ├── styles.min.css       # Estilos minificados
│       ├── sw.js                # Service Worker
│       ├── manifest.json        # PWA Manifest
│       ├── icon-192.svg         # Ícone PWA 192x192
│       ├── icon-512.svg         # Ícone PWA 512x512
│       ├── package.json
│       └── .env.example
│
├── docs/                        # Documentação
│   ├── index.md
│   ├── api.md
│   ├── arquitetura.md
│   ├── constitution.md
│   ├── deploy.md
│   └── mkdocs.yml
│
├── site/                        # Build estático da documentação (gerado)
│   ├── index.html
│   ├── sitemap.xml
│   └── assets/                  # CSS, JS, imagens
│
├── .github/                     # Configurações do GitHub
│   └── workflows/               # CI/CD
│       └── test-api.yml
│
├── speckit.specify              # Especificação OpenAPI
├── speckit.constitution         # Requisitos e decisões do projeto
├── plan.template.md             # Template de planejamento
├── package.json                 # Configuração do mono-repo
├── mkdocs.yml                   # Configuração MkDocs
├── requirements.txt             # Dependências Python (MkDocs)
├── README.md                    # Documentação principal
└── .gitignore                   # Arquivos ignorados pelo Git
```

### Responsabilidades por Pasta

| Pasta | Propósito | Responsável |
|---|---|---|
| `packages/api/src/controllers` | Manipulação de requisições HTTP | Backend Developer |
| `packages/api/src/models` | Lógica de dados e persistência | Backend Developer |
| `packages/api/src/routes` | Definição e roteamento de endpoints | Backend Developer |
| `packages/api/src/tests` | Testes unitários e de integração | Backend Developer / QA |
| `packages/web` | Interface, estilos e interação com API | Frontend Developer |
| `docs` | Documentação do projeto | Tech Lead / Documentation |
| `.github/workflows` | Automação e CI/CD | DevOps / Backend Developer |

## Arquitetura e Tecnologias

### Stack Tecnológico

- **Frontend**: 
- **Backend**: 
- **Banco de Dados**: 
- **DevOps/Hosting**: 
- **Testing**: 

### Arquitetura

Descrever a arquitetura em alto nível (ex: MVC, microserviços, etc).

```
[Diagrama ou descrição da arquitetura]
```

## Equipe

| Papel | Nome | Responsabilidades |
|---|---|---|
| Product Owner | | |
| Tech Lead | | |
| Developer | | |
| QA | | |

## Riscos e Mitigação

| Risco | Probabilidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|
| [Descrição do risco] | Alta / Média / Baixa | Alto / Médio / Baixo | [Ação preventiva] |

## Deliverables

- [ ] [Descrição do entregável 1]
- [ ] [Descrição do entregável 2]
- [ ] [Descrição do entregável 3]

## Critérios de Sucesso

- [ ] Critério 1: [Descrição]
- [ ] Critério 2: [Descrição]
- [ ] Critério 3: [Descrição]

## Comunicação

- **Frequência de Reuniões**: Semanal / Bi-semanal / Mensal
- **Formato**: Presencial / Virtual / Híbrido
- **Canais de Comunicação**: Slack, Email, Meetings
- **Responsável por Status Reports**: 

## Orçamento (se aplicável)

- **Budget Total**: 
- **Recursos Alocados**: 
- **Contingência**: 

## Notas Importantes

Adicione qualquer observação, consideração especial ou contexto importante aqui.

## Próximos Passos

1. [ ] [Ação 1]
2. [ ] [Ação 2]
3. [ ] [Ação 3]

---

**Última atualização**: DD/MM/YYYY
**Versão**: 1.0
