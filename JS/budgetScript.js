let budgetItems = new Array();

$(function() { 
    //onload
    wireUpEvents();
});

function wireUpEvents() {
    $("#saveBudget").click(saveBudgetClick);
}

function displayBudgetItems() {
    let table = $("#budgetItemsTable");
    let totalAmount = 0;
    clearBudgetItems(table);

    budgetItems.forEach(function (budgetItem, index) {
        let rowNumber = index + 1;
        totalAmount += budgetItem.amount;
        addTableRow(table, rowNumber, budgetItem.category, budgetItem.amount);
    });

    /*for (let i = 0; i < budgetItems.length; i++) {
        let rowNumber = i + 1;
        addTableRow(table, rowNumber, budgetItems[i].category, budgetItems[i].amount);
        totalAmount += budgetItems[i].amount;
    }*/
    addTableRow(table, "", "Total Amount", totalAmount)
}

function addTableRow(table, cell1Value, cell2Value, cell3Value) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = cell1Value;
    cell2.innerHTML = cell2Value;
    cell3.innerHTML = cell3Value;
}

function saveBudgetClick() {
    let amount = document.getElementById("budgetAmount").value;
    let category = document.getElementById("budgetCategory").value;
    if (!validateEmptyFields(amount, category)) {
        return;
    }
    budgetItems.push({ category: category, amount: parseInt(amount) });
    displayBudgetItems();
    resetInputFields();
}

function resetInputFields() {
    document.getElementById("budgetCategory").value = "";
    document.getElementById("budgetAmount").value = "";
}

function clearBudgetItems(table) {
    for (let i = (table.rows.length - 1); i >= 1; i--) {
        table.deleteRow(i)
    }
}

function validateEmptyFields(amount, category) {
    if (amount != "" && category != "") {
        return true;
    }
    else if (amount == "" || category == "") {
        alert("Must enter input fields");
        return false;
    }
}