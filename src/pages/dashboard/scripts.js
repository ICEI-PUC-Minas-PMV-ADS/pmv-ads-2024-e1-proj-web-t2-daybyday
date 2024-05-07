
let transactions = [];
let editedIndex = -1;

function togglePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
}

function addTransaction() {
    const nameInput = document.getElementById("transactionName");
    const valueInput = document.getElementById("transactionValue");
    
    const name = nameInput.value;
    const value = parseFloat(valueInput.value);
    
    if (!name || isNaN(value)) {
        alert("Please enter valid transaction details.");
        return;
    }
    
    if (editedIndex === -1) {
        transactions.push({ name, value });
    } else {
        transactions[editedIndex] = { name, value };
        editedIndex = -1;
    }
    
    displayTransactions();
    calculateTotalValue();
    nameInput.value = "";
    valueInput.value = "";
    togglePopup();
}

function editTransaction(index) {
    const transaction = transactions[index];
    const nameInput = document.getElementById("transactionName");
    const valueInput = document.getElementById("transactionValue");
    
    nameInput.value = transaction.name;
    valueInput.value = transaction.value;
    editedIndex = index;
    
    togglePopup();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    displayTransactions();
    calculateTotalValue();
}

function displayTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";
    
    transactions.forEach((transaction, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.value}</td>
            <td>
                <button onclick="editTransaction(${index})">Edit</button>
                <button onclick="deleteTransaction(${index})">Delete</button>
            </td>
        `;
        transactionList.appendChild(row);
    });
}

function calculateTotalValue() {
    const totalValueElement = document.getElementById("totalValue");
    let total = 0;
    transactions.forEach(transaction => {
        total += transaction.value;
    });
    totalValueElement.textContent = total.toFixed(2);
}
