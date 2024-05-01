# Especificações do Projeto

## Perfis de Usuário

| Perfil        | Descrição                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------- |
| Usuário Comum | Usuário típico do aplicativo de gestão financeira, representando a maioria dos usuários-alvo. |

## Histórias de Usuários

| Eu como...                                  | Quero/desejo...                                                                                                                                                                                           | Para...                                                                                          |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Pais e Mães de Família                      | Equilibrar o orçamento familiar, economizar para despesas futuras (como educação dos filhos ou aquisição de uma casa) e planejar para a aposentadoria.                                                    | Preparar um fundo de emergência e garantir um futuro financeiramente estável para minha família. |
| Jovens Profissionais Iniciantes             | Gerenciar efetivamente meu primeiro salário.                                                                                                                                                              | Evitar dívidas desnecessárias e começar a construir uma base financeira sólida.                  |
| Autônomos e Freelancers                     | Aprender a controlar melhor minha renda variável, para administrar a instabilidade financeira e planejar investimentos para meu negócio, garantindo minha segurança financeira a longo prazo.             | Planejar investimentos para meu negócio e garantir minha segurança financeira a longo prazo.     |
| Alguém enfrentando dificuldades financeiras | Encontrar soluções práticas para sair do endividamento.                                                                                                                                                   | Reconstruir a saúde financeira de maneira sustentável.                                           |
| Estudantes Universitários                   | Aprender a gerenciar meu dinheiro enquanto estou na faculdade, para evitar acumular dívidas estudantis e economizar, construindo uma base financeira sólida para a vida pós-universidade.                 | Construir uma base financeira sólida para a vida pós-universidade.                               |
| Todos interessados em gestão financeira     | Aprimorar minhas habilidades de gestão financeira, para tomar decisões mais informadas sobre meu dinheiro, alcançando minhas metas financeiras e vivendo uma vida financeiramente saudável e equilibrada. | Alcançar minhas metas financeiras e viver uma vida financeiramente saudável e equilibrada.       |

## Modelagem do Processo de Negócio

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional.

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN.

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID      | Descrição do Requisito                                            | Prioridade |
| ------- | ----------------------------------------------------------------- | ---------- |
| RNF-001 | Permitir cadastrar contas                                         | ALTA       |
| RNF-002 | Permitir logar na conta cadastrada                                | ALTA       |
| RNF-003 | Permitir registrar transações financeiras                         | ALTA       |
| RNF-004 | Permitir categorizar transações financeiras                       | ALTA       |
| RNF-005 | Permitir definir orçamento mensal                                 | ALTA       |
| RNF-006 | Permitir receber alertas personalizados com o orçamento mensal    | MÉDIA      |
| RNF-007 | Permitir visualizar os gastos                                     | MÉDIA      |
| RNF-008 | Permitir cadastrar contas a pagar                                 | MÉDIA      |
| RNF-009 | Permitir receber alertas de conta próximas do vencimento/vencidas | MÉDIA      |
| RNF-010 | Permitir personalizar metas financeiras                           | BAIXA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                                                                                                                                                      | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | Validação de senha no cadastro: A senha deve seguir as diretrizes de segurança estabelecidas, incluindo a exigência de pelo menos 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. | ALTA       |
| RNF-002 | Confiabilidade: Os alertas de despesas próximas ou excedentes devem ser enviados aos usuários dentro de 1 hora após a violação do limite de gastos, com uma taxa de entrega de 80%.                                                         | MÉDIA      |
| RNF-003 | Performance de Relatórios: A geração de relatórios de análise de gastos deve ser concluída em menos de 6 segundos, mesmo ao processar dados de transações financeiras de um período de um ano.                                              | MÉDIA      |
| RNF-004 | Disponibilidade: ● O sistema de alertas deve estar disponível 20 horas por dia, 7 dias por semana, com uma taxa de disponibilidade mínima de 90%.                                                                                           | MÉDIA      |
| RNF-005 | Compatibilidade Multiplataforma: ● O site deve ser responsivo e adaptar sua estilização automaticamente a diferentes dispositivos, incluindo smartphones, tablets e desktops.                                                               | BAIXA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
>
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
>
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
