# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento do login e cadastro de contas</td>
  <td>
   <ul>
    <li>RF-01:A aplicação deve permitir cadastrar contas.</li>
   <li>RF-02:A aplicação deve permitir logar na conta cadastrada.</li>
   </ul>
  </td>
  <td>Verificar se é possível cadastrar e logar em uma conta cadastrada.</td>
  <td>
   <ol>
  <li>Acessar o navegador</li>
  <li>Informar endereço do site</li>
  <li>Visualizar pagina home</li>
  <li>Clicar em cadastrar</li>
  <li>Inserir uma senha que falhe nas credenciais</li>
  <li>Inserir uma senha que cumpra os requisitos</li>
  <li>Salvar as credenciais no local storage</li>
  <li>Ser possivel fazer logout</li>

   </ol>
   </td>
  <td>Deve permitir cadastrar e logar na conta cadastrada com sucesso.</td>
  <td>Bruno</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento das transações financeiras</td>
  <td>
   <ul>
    <li>RF-03:	A aplicação deve permitir registrar transações financeiras.</li>
    <li>RF-04:	A aplicação deve permitir categorizar transações financeiras.</li>
    <li>RF-08:	A aplicação deve permitir cadastrar contas a pagar.</li>
    <li>RF-09:	A aplicação deve permitir editar e deletar transações ativas</li>
    <li>RF-10:	A aplicação deve permitir filtrar as transações por tag</li>
   </ul>
  </td>
  <td>Verificar se recebeu alerta.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Após entrar ser redirecionado para a pagina dashboard</li>
    <li>Adicionar transações financeiras e categorizá-las</li>
    <li>Cadastrar uma conta a pagar</li>
    <li>Editar e deletar alguma transação financeira</li>
    <li>Filtrar alguma transação por tag</li>
   </ol>
   </td>
  <td>Deve permitir acessar o dashboard e fazer as funcionalidades descritas.</td>
  <td>Rafael</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o recebimento de alertas personalizados com o orçamento mensal.</td>
  <td>
   <ul>
    <li>RF-06:	A aplicação deve permitir receber alertas personalizados com o orçamento mensal.</li>
   </ul>
  </td>
  <td>Verificar se o dashboard está funcionando corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Após entrar ser redirecionado para a pagina dashboard</li>
    <li>Adicionar uma conta com vencimento no mesmo dia</li>
    <li>Atualizar a página</li>
    <li>Visualizar o alerta</li>
   </ol>
   </td>
  <td>Deve receber o alertar personalizado de acordo com o orçamento mensal.</td>
  <td>Bruno</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento do dashboard</td>
  <td>
   <ul>
    <li>RF-05:	A aplicação deve permitir definir orçamento mensal.</li>
    <li>RF-07:	A aplicação deve permitir visualizar os gastos.</li>
   </ul>
  </td>
  <td>Verificar se o dashboard possibilita visualizar os gastos e definir o orçamento mensal</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Após entrar ser redirecionado para a pagina dashboard</li>
    <li>Adicionar transações</li>
    <li>Definir um orçamento mensal</li>
    <li>Visualizar a tabela de gastos com o orçamento mensal</li>
   </ol>
   </td>
  <td>Deve visualizar a tabela com gastos e definir o orçamento mensal</td>
  <td>Rafael</td>
 </tr>
</table>

