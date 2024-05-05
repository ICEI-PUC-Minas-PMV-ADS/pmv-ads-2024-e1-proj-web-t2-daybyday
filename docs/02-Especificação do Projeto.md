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

## Requisitos

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

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                                                                                                                                                      | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | Validação de senha no cadastro: A senha deve seguir as diretrizes de segurança estabelecidas, incluindo a exigência de pelo menos 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. | ALTA       |
| RNF-002 | Confiabilidade: Os alertas de despesas próximas ou excedentes devem ser enviados aos usuários dentro de 1 hora após a violação do limite de gastos, com uma taxa de entrega de 80%.                                                         | MÉDIA      |
| RNF-003 | Performance de Relatórios: A geração de relatórios de análise de gastos deve ser concluída em menos de 6 segundos, mesmo ao processar dados de transações financeiras de um período de um ano.                                              | MÉDIA      |
| RNF-004 | Disponibilidade: O sistema de alertas deve estar disponível 20 horas por dia, 7 dias por semana, com uma taxa de disponibilidade mínima de 90%.                                                                                             | MÉDIA      |
| RNF-005 | Compatibilidade Multiplataforma: O site deve ser responsivo e adaptar sua estilização automaticamente a diferentes dispositivos, incluindo smartphones, tablets e desktops.                                                                 | BAIXA      |

**Prioridade: Alta / Média / Baixa.
