"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let d, x1;
    let x = [];
    d = Math.pow(b,2) - (4 * a * c);

    if (d == 0) {
    	x1 = (- b + Math.sqrt(d)) / (2 * a)
			x.push(x1);
    } else if (d > 0) {
    	x1 = (- b - Math.sqrt(d)) / (2 * a)
			x.push(x1);
			x1 = (- b + Math.sqrt(d)) / (2 * a)
			x.push(x1);
    }

    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0, item, averageMark;

    if (marks.length > 5) {
    	marks.splice(5);
    	console.log('Колличество оценок больше 5');
    }

    for (item of marks) {
    	sum += item;
    }

    averageMark = sum / marks.length;
    return averageMark;
  }

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let years;
    let toDay = new Date();
    let yearToDay = toDay.getFullYear();
    let result;

    years = yearToDay - dateOfBirthday.getFullYear();
    result = (years > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(years);
    console.log(result)
    return result;
}