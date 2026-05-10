# Constitution do Projeto

Este documento descreve as decisões de arquitetura e os motivos por trás do desenvolvimento do Todo List com MVC.

## Por que MVC?
- Separação clara entre o modelo de dados, regras de negócio e interface.
- Facilita a manutenção e testes.
- Atende ao requisito de arquitetura do exercício.

## Por que mono-repo?
- Organiza frontend e backend no mesmo repositório.
- Facilita o versionamento conjunto.
- Simplifica o desenvolvimento local com um único `npm install`.

## Por que memória?
- O requisito indicou que não há necessidade de banco de dados persistente.
- Memória é suficiente para demonstrar cadastro, remoção e lembretes.
- Torna o projeto mais leve e focado em comportamento e testes.

## Requisitos cumpridos
- Cadastro de tarefas
- Remoção de tarefas
- Lembretes
- Marcação como concluída
- MVC
- Mono-repo
- Documentação MkDocs

## Especificações de desenvolvimento
Os testes são usados como especificação (`spec-driven development`) para garantir que os comportamentos principais funcionem conforme esperado e para documentar o fluxo do sistema.

## Observações finais
O repositório deve conter o código e o link da documentação online. A entrega será feita com o link do GitHub e do MkDocs publicado.
