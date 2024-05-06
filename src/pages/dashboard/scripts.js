let transactions = [];

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
    
    transactions.push({ name, value });
    displayTransactions();
    calculateTotalValue();
    nameInput.value = "";
    valueInput.value = "";
}

function displayTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";
    
    transactions.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.value}</td>
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
