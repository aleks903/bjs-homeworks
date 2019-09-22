"use strict";
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now();
    birthday = Number(new Date(birthday));
    let diff = (now - birthday) / 31556736000;
    return (diff > 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
  if (animal == 'undefined') {
		return null;
  }
  else {
  	return animal.sound;	
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь

    let roundedAverage = 0;
    for (mark of marks) {
    	roundedAverage += Number(mark);
    }
console.log(roundedAverage);
    roundedAverage = Math.round(roundedAverage / marks.length);
    return roundedAverage;
}
