let transactions = [];
let editedIndex = -1;
let alertActivated = false;

function deleteTransaction(index) {
  transactions.splice(index, 1);
  displayTransactions();
  calculateTotalValue();
  // updateFilterOptions();
}

function displayTransactions() {
  // define quais serao as transacoes mostradas
  const transactionsToShow = transactions;
  // acha o elemento da tabela
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  transactionsToShow.forEach((transaction, index) => {
    // cria a linha da tabela
    const row = document.createElement("tr");
    // define o nome da transacao
    const displayName = transaction.isMonthly
      ? `Mensal - ${transaction.name}`
      : transaction.name;
    // define o codigo da tabela - linha com o nome, valor e tags, além dos botoes de editar e deletar
    row.innerHTML = `
            <td class="tableText-name">
                ${displayName}
                <div>
                    <button onclick="editTransaction(${index})">Editar</button>
                    <button onclick="deleteTransaction(${index})">Deletar</button>
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
  const monthlyGoal = parseFloat(localStorage.getItem("monthlyBudget"));
  
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

  // console de todos os valores
  console.log(positivos, negativos, saldoSum, despesasSum, receitasSum);

  
  // let positiveTotal = saldoSum < monthlyGoal ? monthlyGoal - saldoSum : 0;
  // let negativeTotal = saldoSum > monthlyGoal ? saldoSum - monthlyGoal : 0;
  saldoAtual.textContent = `R$${saldoSum.toFixed(2)}`;
  despesas.textContent = `R$${despesasSum.toFixed(2)}`;
  receitas.textContent = `R$${receitasSum.toFixed(2)}`;
}

function filterTransactions() {
  const filterSelect = document.getElementById("filterSelect");
  const filterOption = filterSelect.value;

  let filteredTransactions;
  if (filterOption === "all") {
    filteredTransactions = transactions;
  } else if (filterOption) {
    filteredTransactions = transactions.filter((transaction) =>
      transaction.tags.includes(filterOption)
    );
  } else {
    return;
  }

  displayTransactions(filteredTransactions);
  calculateTotalValue(filteredTransactions);
}

function getUniqueTags() {
  const allTags = transactions.flatMap((transaction) => transaction.tags);
  return Array.from(new Set(allTags));
}

document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    console.log('rodei')
    event.preventDefault();
    const confirmation = confirm("Tem certeza que deseja desconectar?");
    if (confirmation) {
      localStorage.clear();
      window.location.href = "/src/pages/login/login.html";
    }
  });

document
  .getElementById("setBudgetButton")
  .addEventListener("click", function () {
    document.getElementById("budgetModal").style.display = "block";
  });

function closeModal() {
  document.getElementById("budgetModal").style.display = "none";
  document.getElementById("setBudgetButton").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const monthlyBudget = localStorage.getItem("monthlyBudget");
  if (monthlyBudget) {
    document.getElementById(
      "monthlyGoal"
    ).textContent = `Limite de gastos mensal: ${monthlyBudget}`;
  } else {
    document.getElementById("monthlyGoal").textContent =
      "Sem limite de gastos mensal";
  }
});



// FILTROS

document.addEventListener("click", function (event) {
  const filterSelect = document.getElementById("filterSelect");
  const filterButton = document.getElementById("filter-btn");
  if (event.target !== filterSelect && event.target !== filterButton) {
    filterSelect.style.display = "none";
  }
});

document.getElementById("filter-btn").addEventListener("click", function () {
  // Troca o estilo de display para abrir e fechar o filtros
  document.getElementById("filterSelect").style.display = "block";
});

// POPUP DE TRANSACAO

function toggleTrasactionPopup() {
  // acha o popup
  const popup = document.getElementById("transaction-popup");
  // troca o estilo de display para abrir e fechar o popup
  popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

function editTransaction(index) {
  const transaction = transactions[index];
  const nameInput = document.getElementById("transactionName");
  const valueInput = document.getElementById("transactionValue");
  const tagsInput = document.getElementById("transactionTags");

  nameInput.value = transaction.name;
  valueInput.value = transaction.value;
  tagsInput.value = transaction.tags.join(", ");
  editedIndex = index;

  toggleTrasactionPopup();
}

function playClickSound() {
  // acha o som de click
  const clickSound = document.getElementById("clickSound");
  // toca o som
  clickSound.play();
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
  console.log(name, value, tags, tagsInput.value);

  // se o nome nao for preenchido ou o valor nao for um numero, alerta
  if (!name || isNaN(value)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // verifica se é uma conta mensal
  var isMonthlyBill = document.getElementById("monthlyBill").checked;

  // cria um objeto com os valores da transacao
  var newTransaction = {
    name: name,
    value: value,
    tags: tags,
    isMonthly: isMonthlyBill,
  };

  // se o index de edicao for -1, adiciona a transacao, se nao, edita a transacao
  if (editedIndex === -1) {
    transactions.push(newTransaction);
  } else {
    transactions[editedIndex] = newTransaction;
    editedIndex = -1;
  }

  // joga o array de transacoes pro local storage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // roda a funcao do que deve ser mostrado na tabela
  displayTransactions();
  calculateTotalValue();

  const totalValue = transactions.reduce(
    (total, transaction) => total + transaction.value,
    0
  );
  const monthlyBudget = parseFloat(localStorage.getItem("monthlyBudget"));
  if (!isNaN(monthlyBudget)) {
    var goalDifference = monthlyBudget - totalValue;
    var differenceText =
      "Diferença: " +
      (goalDifference >= 0 ? "+" : "-") +
      Math.abs(goalDifference);
    document.getElementById("goalDifference").innerText = differenceText;
    document.getElementById("goalDifference").style.color =
      goalDifference >= 0 ? "green" : "red";

    if (totalValue > monthlyBudget && !alertActivated) {
      alert("O total de suas transações excede o limite de gastos mensal!");
      alertActivated = true;
    }
  }

  nameInput.value = "";
  valueInput.value = "";
  tagsInput.value = "";

  // updateFilterOptions();
  toggleTrasactionPopup();
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
  // joga pro local 
  localStorage.setItem("monthlyBudget", monthlyBudget);
  // insere texto no campo de monthlyGoal
  document.getElementById("monthlyGoal").innerText =
    "Limite de gastos mensal: " + monthlyBudget;
  // abre um alerta para mostrar que foi estipulado
  alert("Meta mensal estipulada para " + monthlyBudget);
  // fecha o popup
  toggleBudgetPopup();
}

// logout

function handleLogout() {
  const confirmation = confirm("Tem certeza que deseja desconectar?");
  if (confirmation) {
    window.location.href = "/src/pages/login/login.html";
  }
}