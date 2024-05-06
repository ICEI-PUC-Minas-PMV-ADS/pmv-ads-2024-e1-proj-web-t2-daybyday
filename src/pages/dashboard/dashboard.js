
function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

function addTransaction() {
    var transactionName = document.getElementById("transactionName").value.trim();
    var transactionValue = document.getElementById("transactionValue").value.trim();

    if (transactionName !== "" && transactionValue !== "") {
        var transaction = {
            name: transactionName,
            value: parseFloat(transactionValue)
        };

        var table = document.getElementById("transactionList");
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var valueCell = row.insertCell(1);
        var actionCell = row.insertCell(2);

        nameCell.textContent = transaction.name;
        valueCell.textContent = transaction.value.toFixed(2);
        actionCell.innerHTML = '<button class="delete-btn" onclick="deleteTransaction(this)">Delete</button>';

        saveTransaction(transaction);

        togglePopup();

        document.getElementById("transactionName").value = "";
        document.getElementById("transactionValue").value = "";
    } else {
        alert("Please enter both transaction name and value.");
    }
}

function saveTransaction(transaction) {
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function deleteTransaction(element) {
    var row = element.parentNode.parentNode;
    var index = row.rowIndex;
    var transactions = JSON.parse(localStorage.getItem("transactions"));

    transactions.splice(index - 1, 1);

    localStorage.setItem("transactions", JSON.stringify(transactions));

    row.parentNode.removeChild(row);
}

function loadTransactions() {
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    var table = document.getElementById("transactionList");

    transactions.forEach(function (transaction) {
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var valueCell = row.insertCell(1);
        var actionCell = row.insertCell(2);

        nameCell.textContent = transaction.name;
        valueCell.textContent = transaction.value.toFixed(2);
        actionCell.innerHTML = '<button class="delete-btn" onclick="deleteTransaction(this)">Delete</button>';
    });
}

window.onload = loadTransactions;