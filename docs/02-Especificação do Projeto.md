# Especificações do Projeto


## Perfis de Usuário

<table>
<tbody>
<tr align=center>
<th colspan="2">Usuário Comum </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário típico do aplicativo de gestão financeira, representando a maioria dos usuários-alvo. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Buscam melhorar sua saúde financeira e encontrar soluções práticas para lidar com desafios financeiros. </td>
</tr>
</tbody>
</table>


## Histórias de Usuários

<table>
    <tr>
        <th>Eu como... (Usuário)</th>
        <th>Quero/desejo... (Necessidade)</th>
        <th>Para... (Objetivo)</th>
    </tr>
    <tr>
        <td>Pais e Mães de Família </td>
        <td>Quero cadastrar minha conta. </td>
        <td>Organizar as finanças e garantir um futuro financeiramento estável para minha família. </td>
    </tr>
    <tr>
        <td>Jovens Profissionais Iniciantes </td>
        <td>Quero logar na minha conta cadastrada. </td>
        <td>Evitar exceder minhas despesas. </td>
    </tr>
    <tr>
        <td>Autônomos e Freelancers </td>
        <td>Quero registrar transações financeiras. </td>
        <td>Para lidar com a instabilidade e garantir minha segurança financeira a longo prazo. </td>
    </tr>
    <tr>
        <td>Alguém enfrentando dificuldades financeiras </td>
        <td>Quero categorizar minhas transações financeiras. </td>
        <td>Para encontrar soluções práticas e sair do endividamento. </td>
    </tr>
    <tr>
        <td>Estudantes Universitários </td>
        <td>Quero definir meu orçamento mensal. </td>
        <td>Para formar-me com segurança financeira e enfrentar o futuro com confiança. </td>
    </tr>
    <tr>
        <td>Todos interessados em gestão financeira </td>
        <td>Quero receber alertas personalizados com o orçamento mensal. </td>
        <td>Para alcançar uma vida financeiramente saudável e equilibrada. </td>
    </tr>
    <tr>
        <td>Pais e Mães de Família </td>
        <td>Quero visualizar meus gastos. </td>
        <td>Para controlar meu custo mensal. </td>
    </tr>
    <tr>
        <td>Autônomos e Freelancers </td>
        <td>Quero cadastrar contas a pagar. </td>
        <td>Para ter controle sobre as contas. </td>
    </tr>
    <tr>
        <td>Alguém enfrentando dificuldades financeiras </td>
        <td>Quero receber alertas de conta próximas do vencimento/vencidas. </td>
        <td>Para não perder o prazo das contas a pagar. </td>
    </tr>
    <tr>
        <td>Estudantes Universitários </td>
        <td>Quero personalizar metas financeiras. </td>
        <td>Para projetar um futuro melhor. </td>
    </tr>
</table>


## Requisitos

### Requisitos Funcionais

<table>
    <tr>
        <th>ID</th>
        <th>Descrição</th>
        <th>Prioridade</th>
    </tr>
    <tr>
        <td>RF-01 </td>
        <td>A aplicação deve permitir cadastrar contas. </td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-02 </td>
        <td>A aplicação deve permitir logar na conta cadastrada. </td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-03 </td>
        <td>A aplicação deve permitir registrar transações financeiras. </td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-04 </td>
        <td>A aplicação deve permitir categorizar transações financeiras. </td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-05 </td>
        <td>A aplicação deve permitir definir orçamento mensal. </td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-06 </td>
        <td>A aplicação deve permitir receber alertas personalizados com o orçamento mensal. </td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-07 </td>
        <td>A aplicação deve permitir visualizar os gastos. </td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-08 </td>
        <td>A aplicação deve permitir cadastrar contas a pagar. </td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-09 </td>
        <td>A aplicação deve permitir receber alertas de conta próximas do vencimento/vencidas. </td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-10 </td>
        <td>A aplicação deve permitir personalizar metas financeiras. </td>
        <td>BAIXA</td>
    </tr>
</table>

**Prioridade: Alta / Média / Baixa.


### Requisitos não Funcionais

<table>
    <tr>
        <th>ID </th>
        <th>Descrição </th>
        <th>Prioridade </th>
    </tr>
    <tr>
        <td>RNF-01</td>
        <td>Validação de senha no cadastro: A senha deve seguir as diretrizes de segurança estabelecidas, incluindo a exigência de pelo menos 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. </td>
        <td>ALTA </td>
    </tr>
    <tr>
        <td>RNF-02</td>
        <td>Confiabilidade: Os alertas de despesas próximas ou excedentes devem ser enviados aos usuários dentro de 1 hora após a violação do limite de gastos, com uma taxa de entrega de 80%. </td>
        <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RNF-03</td>
        <td>Performance de Relatórios: A geração de relatórios de análise de gastos deve ser concluída em menos de 6 segundos, mesmo ao processar dados de transações financeiras de um período de um ano. </td>
        <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RNF-04</td>
        <td>Disponibilidade: O sistema de alertas deve estar disponível 20 horas por dia, 7 dias por semana, com uma taxa de disponibilidade mínima de 90%. </td>
        <td>MÉDIA </td>
    </tr>
    <tr>
        <td>RNF-05</td>
        <td>Compatibilidade Multiplataforma: O site deve ser responsivo e adaptar sua estilização automaticamente a diferentes dispositivos, incluindo smartphones, tablets e desktops. </td>
        <td>BAIXA </td>
    </tr>
</table>

**Prioridade: Alta / Média / Baixa.
