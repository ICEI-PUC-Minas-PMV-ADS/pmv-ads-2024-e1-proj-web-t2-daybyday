let transactions = [];
let editedIndex = -1;
let alertActivated = false;

function playClickSound() {
  // acha o som de click
  const clickSound = document.getElementById("clickSound");
  // toca o som
  clickSound.play();
}

function displayTransactions(displayedTransactions) {
  // define quais serao as transacoes mostradas
  const transactionsToShow = displayedTransactions;
  // acha o elemento da tabela
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  transactionsToShow.forEach((transaction, index) => {
    // cria a linha da tabela
    const row = document.createElement("tr");
    // define o nome da transacao
    const displayName = transaction.name;
    // define o codigo da tabela - linha com o nome, valor e tags, além dos botoes de editar e deletar
    row.innerHTML = `
            <td class="tableText-name">
                ${displayName}
                <div>
                    <button class="editTransaction" onclick="editTransaction(${index})">Editar</button>
                    <button class="deleteTransaction" onclick="deleteTransaction(${index})">Deletar</button>
                </div>
            </td>
            <td class="tableText">${transaction.value}</td>
            <td class="tableText">${transaction.tags}</td>
        `;
    // adiciona a linha como filha do elemento pricipal na tabela
    transactionList.appendChild(row);
  });
}

function calculateTotalValue(transacoes = transactions) {
  // define os elementos que serao alterados
  const saldoAtual = document.getElementById("saldoAtual");
  const despesas = document.getElementById("despesas");
  const receitas = document.getElementById("receitas");

  let positivos = [];
  let negativos = [];
  let saldoSum = 0;
  let despesasSum = 0;
  let receitasSum = 0;
  // usa o forEach para separar as transacoes em positivas e negativas
  transacoes.forEach((transaction) => {
    if (transaction.value >= 0) {
      positivos.push(transaction.value);
    } else {
      negativos.push(transaction.value);
    }
  });

  // soma o valor de todas as transacoes
  transacoes.forEach((transaction) => {
    saldoSum += transaction.value;
  });
  // soma o valor das despesas
  negativos.forEach((negative) => {
    despesasSum += negative;
  });
  // soma o valor das receitas
  positivos.forEach((positive) => {
    receitasSum += positive;
  });

  saldoAtual.textContent = `R$${saldoSum.toFixed(2)}`;
  despesas.textContent = `R$${despesasSum.toFixed(2)}`;
  receitas.textContent = `R$${receitasSum.toFixed(2)}`;

  const metaDeEconomia = parseFloat(localStorage.getItem("monthlyBudget"));
  document.getElementById("economias").innerText = metaDeEconomia
    ? `R$${metaDeEconomia.toFixed(2)}`
    : "Não definida";

  if (!isNaN(metaDeEconomia)) {
    var diferenca = saldoSum - metaDeEconomia;
    var textoDiferenca = `Saldo: ${diferenca >= 0 ? "+" : "-"} R$${Math.abs(
      diferenca
    ).toFixed(2)}`;
    document.getElementById("diferenca").innerText = textoDiferenca;
    document.getElementById("diferenca").style.color =
      diferenca >= 0 ? "green" : "red";

    if (diferenca < 0 && !alertActivated) {
      alert(
        "O total de suas transações excede o limite de gastos mensal para se atingir a meta!"
      );
      alertActivated = true;
    }
  }
}

// Filtro:

function filterTransactions() {
  const filterSelect = document.getElementById("filterSelect");
  const filterOption = filterSelect.value;

  let filteredTransactions;

  if (filterOption === "all") {
    filteredTransactions = transactions;
  } else if (filterOption === "income") {
    filteredTransactions = transactions.filter(
      (transaction) => transaction.value >= 0
    );
  } else if (filterOption === "expenses") {
    filteredTransactions = transactions.filter(
      (transaction) => transaction.value < 0
    );
  } else {
    // Filtra por tag específica
    filteredTransactions = transactions.filter((transaction) =>
      transaction.tags.includes(filterOption)
    );
  }

  displayTransactions(filteredTransactions);
  calculateTotalValue(filteredTransactions);
}

function getUniqueTags() {
  const allTags = transactions.flatMap((transaction) => transaction.tags);
  return Array.from(new Set(allTags));
}

function updateFilterOptions() {
  const filterSelect = document.getElementById("filterSelect");
  const uniqueTags = getUniqueTags();

  // Remove todas as opções de tags específicas antes de adicionar novamente
  filterSelect.innerHTML = `
      <option value="all">Todas as transações</option>
      <option value="income">Receitas</option>
      <option value="expenses">Despesas</option>
  `;

  // Adiciona as opções de tags únicas
  uniqueTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    filterSelect.appendChild(option);
  });
}

// POPUP DE TRANSACAO

function toggleTrasactionPopup() {
  // acha o popup
  const popup = document.getElementById("transaction-popup");
  // troca o estilo de display para abrir e fechar o popup
  popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

function toggleMonthlyBillPopup() {
  const popup = document.getElementById("monthly-bill-popup");
  // troca o estilo de display para abrir e fechar o popup
  popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

// trasacaoes

function editTransaction(index) {
  editedIndex = index;

  // Acha a transacao baseada no index
  const transactionToEdit = transactions[index];

  // pega os valores da transacao e coloca nos inputs
  const nameInput = document.getElementById("transactionName");
  const valueInput = document.getElementById("transactionValue");
  const tagsInput = document.getElementById("transactionTags");

  nameInput.value = transactionToEdit.name;
  valueInput.value = transactionToEdit.value;
  tagsInput.value = transactionToEdit.tags;

  // abre o popup pra edicao
  toggleTrasactionPopup();
}

function deleteTransaction(index) {
  // Confirma a exclusão com o usuário
  const confirmation = confirm(
    "Tem certeza que deseja deletar esta transação?"
  );
  if (!confirmation) {
    return; // para caso o usuario cancelar
  }

  // Remove a transação do array transactions
  transactions.splice(index, 1);

  // Atualiza o localStorage com o array de transações modificado
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Atualiza a tabela de transações e os valores totais
  displayTransactions(transactions);
  calculateTotalValue();
}

function clearAllTransactions() {
  const confirmacaoDeLimpeza = confirm(
    "Tem certeza que deseja limpar todos os dados?"
  );

  if (confirmacaoDeLimpeza) {
    // Limpa o array de transacoes
    transactions = [];

    // Remove as transacoes do local storage
    localStorage.removeItem("transactions");

    // Atualiza a tabela de transacoes e os valores totais
    displayTransactions(transactions);
    calculateTotalValue();

    // Atualiza as opções do filtro de tags
    updateFilterOptions();
  }
}

function addTransaction() {
  // acha os inputs da transacao nome, valor e tags
  const nameInput = document.getElementById("transactionName");
  const valueInput = document.getElementById("transactionValue");
  const tagsInput = document.getElementById("transactionTags");

  // define const com os valores dos inputs
  const name = nameInput.value;
  // como recebemos a string do input, precisamos transformar em float
  const value = parseFloat(valueInput.value);
  const tags = tagsInput.value;

  // se o nome nao for preenchido ou o valor nao for um numero, alerta
  if (!name || isNaN(value)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // cria um objeto com os valores da transacao
  var newTransaction = {
    name: name,
    value: value,
    tags: tags,
  };

  // se o index de edicao for -1, adiciona a transacao, se nao, edita a transacao
  if (editedIndex === -1) {
    transactions.push(newTransaction);
  } else {
    transactions[editedIndex] = newTransaction;
    editedIndex = -1; // Reset editedIndex after editing
  }

  // joga o array de transacoes pro local storage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // roda a funcao do que deve ser mostrado na tabela
  displayTransactions(transactions);
  calculateTotalValue();

  nameInput.value = "";
  valueInput.value = "";
  tagsInput.value = "";

  // updateFilterOptions();
  toggleTrasactionPopup();
  playClickSound();
}

function addBill() {
  // Assume a mesma estrutura para contas: nome, valor e tags
  const nameInput = document.getElementById("billName");
  const valueInput = document.getElementById("billValue");
  const dueDateInput = document.getElementById("billDueDate");

  const name = nameInput.value;
  const value = parseFloat(valueInput.value);
  const dueDate = dueDateInput.value;

  // Validação básica
  if (!name || isNaN(value) || !dueDate) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  // Verifica se dueDate corresponde ao formato
  if (!dateFormatRegex.test(dueDate)) {
    alert("Por favor, insira a data no formato correto: DD/MM/AAAA.");
    return;
  }

  const [day, month, year] = dueDate
    .split("/")
    .map((part) => parseInt(part, 10));
  const dueDateObj = new Date(year, month - 1, day); // Os meses são indexados a partir de 0 em JavaScript Date

  // Cria um novo objeto Date para o dia atual
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reseta horas, minutos, segundos e milissegundos

  // Verifica se dueDate é anterior ao dia atual
  if (dueDateObj < today) {
    alert("A data não pode ser anterior ao dia atual.");
    return;
  }

  // Salva a dueDate no localStorage
  localStorage.setItem("lastInsertedBillDueDate", dueDate);

  // Define automaticamente como uma conta mensal
  var newBill = {
    name: name,
    value: -value,
    tags: "Conta mensal - Data de vencimento: " + dueDate,
    dueDate: dueDate, // Armazena a data de vencimento ou qualquer outra informação específica da conta
  };

  // Adiciona a nova conta ao array de transações
  transactions.push(newBill);

  // Atualiza o armazenamento local
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Atualiza a tabela
  displayTransactions(transactions, (isBill = true));
  calculateTotalValue();

  // Limpa os inputs
  nameInput.value = "";
  valueInput.value = "";
  dueDateInput.value = "";

  toggleMonthlyBillPopup();
  playClickSound();
}
// POPUP DE ORCAMENTO

function toggleBudgetPopup() {
  // acha o popup
  const popup = document.getElementById("budget-popup");
  // troca o estilo de display para abrir e fechar o popup
  popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

function setMonthlyBudget() {
  // acha o input de orcamento mensal
  const monthlyBudget = document.getElementById("monthlyBudget").value;
  const monthlyBudgetN = parseFloat(monthlyBudget);
  // joga pro local
  localStorage.setItem("monthlyBudget", monthlyBudget);
  // abre um alerta para mostrar que foi estipulado
  alert(
    "Meta de economia mensal estipulada em " + `R$${monthlyBudgetN.toFixed(2)}`
  );
  // calcula os dados novamente com a nova meta
  calculateTotalValue();
  // fecha o popup
  toggleBudgetPopup();
}

function clearMonthlyBudget() {
  const confirmacaoDeLimpeza = confirm(
    "Tem certeza que deseja limpar a meta de economia?"
  );

  if (confirmacaoDeLimpeza) {
    // remove o orcamento mensal do local storage
    localStorage.removeItem("monthlyBudget");
    // abre um alerta para mostrar que foi removido
    alert("Meta de economia mensal removida.");
    // calcula os dados novamente sem a meta
    calculateTotalValue();
    document.getElementById("diferenca").innerText = "";
  }
}

// logout

function handleLogout() {
  const confirmation = confirm("Tem certeza que deseja desconectar?");
  if (confirmation) {
    window.location.href = "/src/pages/login/login.html";
  }
}

// esse addEventListener é para quando a pagina carregar
// ele vai popular a tabela com os valores do local storage
document.addEventListener("DOMContentLoaded", () => {
  // busca as informacoes do local storage
  let storedTransactions = localStorage.getItem("transactions");
  transactions = storedTransactions ? JSON.parse(storedTransactions) : [];
  // mostra as informacoes na tabela
  displayTransactions(transactions);
  // calcula o valor total das transacoes
  calculateTotalValue(transactions);
  // atualiza os filtros
  updateFilterOptions();
});

function checkBillDueDatesOnLogin() {
  const dueDateStr = localStorage.getItem("lastInsertedBillDueDate");
  if (!dueDateStr) {
    console.log("No due date found in local storage.");
    return;
  }

  const [day, month, year] = dueDateStr
    .split("/")
    .map((part) => parseInt(part, 10));
  const dueDate = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (dueDate.getTime() === today.getTime()) {
    alert("O prazo para sua conta vai vencer hoje.");
  }
}

function onLoad() {
  checkBillDueDatesOnLogin();
}

// esse addEventListener é para quando a pagina carregar
// ele vai popular a tabela com os valores do local storage
document.addEventListener("DOMContentLoaded", onLoad);
