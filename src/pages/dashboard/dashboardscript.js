let transactions = [];
let editedIndex = -1;

function togglePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
}

function addTransaction() {
    const nameInput = document.getElementById("transactionName");
    const valueInput = document.getElementById("transactionValue");
    const tagsInput = document.getElementById("transactionTags");
    
    const name = nameInput.value;
    const value = parseFloat(valueInput.value);
    const tags = tagsInput.value.split(",").map(tag => tag.trim());
    
    if (!name || isNaN(value)) {
        alert("Please enter valid transaction details.");
        return;
    }
    
    if (editedIndex === -1) {
        transactions.push({ name, value, tags });
    } else {
        transactions[editedIndex] = { name, value, tags };
        editedIndex = -1; 
    }
    
    displayTransactions();
    calculateTotalValue(); 

const totalValue = transactions.reduce((total, transaction) => total + transaction.value, 0);
const monthlyBudget = parseFloat(localStorage.getItem('monthlyBudget'));
if (!isNaN(monthlyBudget)) {
    var goalDifference = monthlyBudget - totalValue;
    var differenceText = "Difference: " + (goalDifference >= 0 ? "+" : "-") + Math.abs(goalDifference);
    document.getElementById("goalDifference").innerText = differenceText;

    document.getElementById("goalDifference").style.color = goalDifference >= 0 ? "green" : "red";
    if (totalValue > monthlyBudget) {
        alert("Warning: Your total transactions have exceeded your monthly goal!");
    }
}
var isMonthlyBill = document.getElementById("monthlyBill").checked;
if (isMonthlyBill) {
    var monthlyBills = JSON.parse(localStorage.getItem("monthlyBills")) || [];
    monthlyBills.push({name: transactionName, value: transactionValue, tags: transactionTags});
    localStorage.setItem("monthlyBills", JSON.stringify(monthlyBills));
}
    nameInput.value = "";
    valueInput.value = "";
    tagsInput.value = ""; 
    
    updateFilterOptions();
    togglePopup();
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
    
    togglePopup();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    displayTransactions();
    calculateTotalValue();
    updateFilterOptions();
}

function displayTransactions(transactionsToShow = transactions) {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";
    
    transactionsToShow.forEach((transaction, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="tableText-name">
                ${transaction.name}
                <div>
                    <button onclick="editTransaction(${index})">Editar</button>
                    <button onclick="deleteTransaction(${index})">Deletar</button>
                </div>
            </td>
            <td class="tableText">${transaction.value}</td>
            <td class="tableText">${transaction.tags.join(", ")}</td>
        `;
        transactionList.appendChild(row);
    });
}

function calculateTotalValue(transactionsToCalculate = transactions) {
    const totalValueElement = document.getElementById("totalValue");
    const negativeTotalElement = document.getElementById("negativeTotal");
    const positiveTotalElement = document.getElementById("positiveTotal");

    let total = 0;
    let negativeTotal = 0;
    let positiveTotal = 0;

    transactionsToCalculate.forEach(transaction => {
        total += transaction.value;
        if (transaction.value < 0) {
            negativeTotal += transaction.value;
        } else if (transaction.value > 0) {
            positiveTotal += transaction.value;
        }
    });

    totalValueElement.textContent = total.toFixed(2);
    negativeTotalElement.textContent = negativeTotal.toFixed(2);
    positiveTotalElement.textContent = positiveTotal.toFixed(2);
}

function filterTransactions() {
    const filterSelect = document.getElementById("filterSelect");
    const filterOption = filterSelect.value;
    
    let filteredTransactions;
    if (filterOption === "all") {
        filteredTransactions = transactions;
    } else if (filterOption) {
        filteredTransactions = transactions.filter(transaction => transaction.tags.includes(filterOption));
    } else {
        return;
    }
    
    displayTransactions(filteredTransactions);
    calculateTotalValue(filteredTransactions);
}

function updateFilterOptions() {
    const filterSelect = document.getElementById("filterSelect");
    const uniqueTags = getUniqueTags();

    filterSelect.innerHTML = "";
    
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todas as transações";
    filterSelect.appendChild(allOption);
    
    uniqueTags.forEach(tag => {
        if (tag !== "") {
            const option = document.createElement("option");
            option.value = tag;
            option.textContent = tag;
            filterSelect.appendChild(option);
        }
    });
}

function getUniqueTags() {
    const allTags = transactions.flatMap(transaction => transaction.tags);
    return Array.from(new Set(allTags));
}

updateFilterOptions();

document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const confirmation = confirm('Tem certeza que deseja desconectar?');
    if (confirmation) {
        localStorage.clear();
        window.location.href="/src/pages/login/login.html";
    }
});


document.getElementById('setBudgetButton').addEventListener('click', function() {
    document.getElementById('budgetModal').style.display = 'block';
});

function closeModal() {
    document.getElementById('budgetModal').style.display = 'none';
    document.getElementById('setBudgetButton').style.display = 'block'; 
}

function setMonthlyBudget() {
    const monthlyBudget = document.getElementById('monthlyBudget').value;
    localStorage.setItem('monthlyBudget', monthlyBudget);
    document.getElementById("monthlyGoal").innerText = "Meta mensal: " + monthlyBudget;
    alert("Meta mensal estipulada para" + monthlyBudget);
    closeModal();
}

// Função para exibir as transações mensais
function displayMonthlyBills() {
    var monthlyBills = JSON.parse(localStorage.getItem("monthlyBills")) || [];
    // TODO: Exibir as transações mensais na tela apos o carregamento da página
    monthlyBills.forEach(bill => {
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const monthlyBudget = localStorage.getItem('monthlyBudget');
    if (monthlyBudget) {
        document.getElementById('monthlyGoal').textContent = `Meta mensal: ${monthlyBudget}`;
    } else {
        document.getElementById('monthlyGoal').textContent = 'Sem meta mensal';
    }
});

document.getElementById('filter-btn').addEventListener('click', function() {
    document.getElementById('filterSelect').style.display = 'block';
});

document.addEventListener('click', function(event) {
    const filterSelect = document.getElementById('filterSelect');
    const filterButton = document.getElementById('filter-btn');
    if (event.target !== filterSelect && event.target !== filterButton) {
        filterSelect.style.display = 'none';
    }
});

document.getElementById('setBudgetButton').addEventListener('click', function() {
    document.getElementById('budgetModal').style.display = 'block';
    this.style.display = 'none';
});

window.onload = function() {
    displayMonthlyBills();
}