
window.onload = onLoad;

function onLoad() {
    document.getElementById("submit").onclick = saveClick;
    document.getElementById("name").onkeyup = nameKeyup;
    document.getElementById("name").onblur = nameOnblur;
    document.getElementById("basic").onkeyup = addSalary;
    document.getElementById("perks").onkeyup = addSalary;
}

function saveClick() {
    var textValue = document.getElementById("name").value;
    alert(textValue);
}

function nameKeyup() {
    var textValue = document.getElementById("name").value;
    document.getElementById("nameValue").innerText = textValue;
}

function nameOnblur() {
    document.getElementById("nameValue").innerText = "abcd";
}

function addSalary(){
   
   var basicSalary = document.getElementById("basic").value;
   var perksSalary = document.getElementById("perks").value;

   var basicSalaryInt = parseInt(basicSalary);
   var perksSalaryInt = parseInt(perksSalary);

   var isSalaryNaN = isNaN(basicSalaryInt) || isNaN(perksSalaryInt);
   var totalSalary = isSalaryNaN ? "" : basicSalaryInt + perksSalaryInt;

   document.getElementById("totalSalary").value = totalSalary;
}