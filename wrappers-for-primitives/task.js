"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, amountMonths(date));
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if(isNaN(Number(percent)) || percent.length === 0) {
        alert(`Параметр Процентная ставка содержит неправильное значение - ${percent}`);
    return;
    }
    if(isNaN(Number(contribution)) || contribution.length === 0) {
        alert(`Параметр Начальный взнос содержит неправильное значение ${contribution}`);
    return;
    }
    if(isNaN(Number(amount)) || amount.length === 0) {
        alert(`Параметр Общая стоимость содержит неправильное значение ${amount}`);
    return;
    }

    let P = ((percent / 100) / 12);
    let salaryMont = (amount - contribution) * (P + P / ((Math.pow((1 + P), date)) - 1));
    let totalAmount = (salaryMont * date).toFixed(2);
    console.log(totalAmount);
    return totalAmount;    
}

function checkInputNaN(inputValue) {
    if(isNaN(Number(inputValue))) {
        return true;
    }
}

function amountMonths(curDate) {
    let nowDate = new Date;
    let endDate = new Date(curDate);
    let months;
    months = ((endDate.getFullYear() - nowDate.getFullYear()) * 12) + (endDate.getMonth() - nowDate.getMonth());
    return months;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting = 'Привет, мир! Меня зовут ';
    if(name.toLowerCase()!='null' && name.toLowerCase()!='undefined' && name) {
        greeting += name;
    }
    else {
        greeting += 'Аноним';
    }
    console.log(greeting);
    return greeting;
}