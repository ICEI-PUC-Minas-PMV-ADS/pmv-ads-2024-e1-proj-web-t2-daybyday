// Function to toggle popup visibility
function togglePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
    }
}

// Function to add transaction
function addTransaction() {
    var transactionName = document.getElementById("transactionName").value.trim();
    var transactionValue = document.getElementById("transactionValue").value.trim();

    // Validate if transaction name and value are not empty
    if (transactionName !== "" && transactionValue !== "") {
        var transaction = {
            name: transactionName,
            value: parseFloat(transactionValue)
        };

        // Create table row
        var table = document.getElementById("transactionList");
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var valueCell = row.insertCell(1);

        nameCell.textContent = transaction.name;
        nameCell.setAttribute("contenteditable", "true");
        nameCell.addEventListener("blur", function() {
            updateTransactionName(this.textContent, row.rowIndex);
        });
        valueCell.textContent = transaction.value.toFixed(2);

        // Save transaction to local storage
        saveTransaction(transaction);

        // Close the popup
        togglePopup();

        // Clear input fields
        document.getElementById("transactionName").value = "";
        document.getElementById("transactionValue").value = "";
    } else {
        alert("Please enter both transaction name and value.");
    }
}

// Function to save transaction to local storage
function saveTransaction(transaction) {
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Function to update transaction name
function updateTransactionName(newName, index) {
    var transactions = JSON.parse(localStorage.getItem("transactions"));
    transactions[index - 1].name = newName;
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Function to load transactions from local storage
function loadTransactions() {
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    var table = document.getElementById("transactionList");

    transactions.forEach(function (transaction) {
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var valueCell = row.insertCell(1);

        nameCell.textContent = transaction.name;
        nameCell.setAttribute("contenteditable", "true");
        nameCell.addEventListener("blur", function() {
            updateTransactionName(this.textContent, row.rowIndex);
        });
        valueCell.textContent = transaction.value.toFixed(2);
    });
}

// Load transactions when the page loads
window.onload = loadTransactions;
