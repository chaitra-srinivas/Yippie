
window.onload = onLoad;

function onLoad() {
    document.getElementById("submit").onclick = saveClick;
    document.getElementById("name").onkeyup = nameKeyup;
    document.getElementById("name").onblur = nameOnblur;
    document.getElementById("basic").onkeyup = addSalary;
    document.getElementById("perks").onkeyup = addSalary;
    document.getElementById("date").onclick = dateClick;
}

function saveClick() {
    var textValue = document.getElementById("name").value;
    alert(textValue);
}

function increaseSalary(p) {
    alert(p);
}

function nameKeyup() {
    let textValue = document.getElementById("name").value;
    document.getElementById("nameValue").innerText = textValue;
}

function nameOnblur() {
    document.getElementById("nameValue").innerText = "abcd";
}

function dateClick(){
    
    let curDate = new Date();
    let tomorrowsDate = new Date();
    tomorrowsDate.setDate(curDate.getDate() + 1);
    document.getElementById("dayValue").innerText = tomorrowsDate.toDateString();
}

function addSalary(){
   
    let basicSalary = document.getElementById("basic").value;
    let perksSalary = document.getElementById("perks").value;
 
    let basicSalaryInt = parseFloat(basicSalary);
    let perksSalaryInt = parseFloat(perksSalary);
 
    let isSalaryNaN = isNaN(basicSalaryInt) || isNaN(perksSalaryInt);
    let totalSalary = isSalaryNaN ? "" : basicSalaryInt + perksSalaryInt;
 
    document.getElementById("totalSalary").value = totalSalary;
 }
 