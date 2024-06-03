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
            <td>${transaction.name}</td>
            <td>${transaction.value}</td>
            <td>${transaction.tags.join(", ")}</td>
            <td>
                <button onclick="editTransaction(${index})">Editar</button>
                <button onclick="deleteTransaction(${index})">Deletar</button>
            </td>
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
