window.onload = onLoad;
let budgetItems = new Array();

function onLoad() {
    document.getElementById("saveBudget").onclick = saveBudgetClick;
}

function displayBudgetItems() {
    let table = document.getElementById("budgetItemsTable");
    clearLastBudgetItem(table);
    for (let i = 0; i < budgetItems.length; i++) {

        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = budgetItems[i].category;
        cell3.innerHTML = budgetItems[i].amount;
    }
}

function saveBudgetClick() {
    let amount = document.getElementById("budgetAmount").value;
    let category = document.getElementById("budgetCategory").value;
    validateEmptyFields(amount,category);
    displayBudgetItems();
    resetInputFields();
}

function resetInputFields() {
    document.getElementById("budgetCategory").value = "";
    document.getElementById("budgetAmount").value = "";
}

function clearLastBudgetItem(table) {
    for (let i = (table.rows.length - 1); i >= 1; i--) {
        table.deleteRow(i)
    }
}

function validateEmptyFields(amount,category) {
    if (amount != "" && category != "") {
        budgetItems.push({ category: category, amount: amount });
    }
    else if (amount == "" || category == "") {
        alert("Must enter input fields");
        return;
    }
}

