'use strict';
class Weapon {
	constructor(weapon) {
		this.name = weapon.name;
		this.attack = weapon.attack;
		this.durability = weapon.durability;
		this.initialDurability = this.durability;
		this.range = weapon.range;
	}

	takeDamage(damage) {
		let changeDurability = this.durability - damage;
		if(changeDurability >= 0) {
			this.durability = changeDurability;
		} else {
			this.durability = 0;
		}
	}

	getDamage(){
		let percentIntegrity = this.durability / this.initialDurability;
		if (percentIntegrity === 0) {
			return 0;
		} else if (percentIntegrity < 0.3) {
			return this.attack / 2;
		} else {
			return this.attack;
		}
	}

	isBroken() {
		return this.durability <= 0;
	}
}

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1
});

sword.takeDamage(5);
console.log(`sword.takeDamage(5) - sword.durability = ${sword.durability}`); // 5

sword.takeDamage(50);
console.log(`sword.takeDamage(50) - sword.durability = ${sword.durability}`); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(`arm.takeDamage(20) - arm.durability = ${arm.durability}`); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(`bow.takeDamage(20) - bow.durability = ${bow.durability}`); // 180

bow.takeDamage(200);
console.log(`bow.takeDamage(200) - bow.durability = ${bow.durability}`); // 0

console.log(`bow.getDamage() - ${bow.getDamage()}`); // 0
console.log(`bow.isBroken() - ${bow.isBroken()}`); // true

console.log(`arm.durability - ${arm.durability}`); // Infinity
console.log(`arm.getDamage() - ${arm.getDamage()}`); // 1
console.log(`arm.isBroken() - ${arm.isBroken()}`); // false

class Arm extends Weapon {
	constructor() {
		super({
			name: 'Рука',
			attack: 1,
			durability: Infinity,
			range: 1
		});
	}
}

class Bow extends Weapon {
	constructor() {
		super({
			name: 'Лук',
			attack: 10,
			durability: 200,
			range: 3
		});
	}
}

class Sword extends Weapon {
	constructor () {
		super ({
			name: 'Меч',
			attack: 25,
			durability: 500,
			range: 1
		});
	}
}

class Knife extends Weapon {
	constructor() {
		super({
			name: 'Нож',
			attack: 5,
			durability: 300,
			range: 1
		});
	}
}

class Stick extends Weapon {
	constructor() {
		super({
			name: 'Посох',
			attack: 8,
			durability: 300,
			range: 2
		});
	}
}

class LongBow extends Bow {
	constructor() {
		super();
		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class Axe extends Sword {
	constructor() {
		super();
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
		this.initialDurability = this.durability;
	}
}

class StormStick extends Stick {
	constructor() {
		super();
		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}
const bowNew = new Bow();
const axeNew = new Axe();
const longBowNew = new LongBow();

console.log('const bow = new Bow();');
console.log(`Class Bow - name = ${bowNew.name}`); // Лук
console.log(`Class Bow - attack = ${bowNew.attack}`); // 10
console.log(`Class Bow - durability = ${bowNew.durability}`); // 200
console.log(`Class Bow - range = ${bowNew.range}`); // 3

class StudentLog {
	constructor(name) {
		this.name = name;
		this.subject = {};
	}

	getName() {
		return this.name;
	}
	
	findSubject(subject) {
		for (let itemSubject in this.subject) {
			if (itemSubject == subject) {
				return true;
				break;
			}
		}
		return false;
	}

	addGrade(grade, subject) {
		if (!this.findSubject(subject)) {
			this.subject[subject] = [];	
		}
		
		if (grade > 0 && grade < 6 && !isNaN(Number(grade))){
				this.subject[subject].push(grade);	
		} else {
			console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
		}
		
		return this.subject[subject].length;
	}

	getAverageBySubject(subject) {
		if (this.subject[subject].length === 0 || !this.findSubject(subject)) {
			return 0;
		}

		let sum = 0;

		for (let items of this.subject[subject]) {
			sum += items;
		}
			return sum / this.subject[subject].length;
	}

	getTotalAverage() {
		let sumSubjcectAverege = 0;
		let amountSubject = 0
		let itemAverege;
		let averegeAll;

		for (let itemSubject in this.subject) {
			itemAverege = this.getAverageBySubject(itemSubject);
			if (itemAverege != 0) {
				sumSubjcectAverege += this.getAverageBySubject(itemSubject);
				amountSubject++;
			}
		}
		
		averegeAll = sumSubjcectAverege / amountSubject;
		
		return isNaN(averegeAll) ? 0: averegeAll;
	}
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(`Средняя оценка по всем предметам, оценок нет - ${log.getTotalAverage()}`);

console.log(`log.addGrade(2, 'algebra')`);
console.log(log.addGrade(2, 'algebra'));

console.log(`log.addGrade('отлично!', 'math')`);
console.log(log.addGrade('отлично!', 'math'));

console.log(`log.addGrade(4, 'algebra')`);
console.log(log.addGrade(4, 'algebra'));

console.log(`log.addGrade(5, 'geometry')`);
console.log(log.addGrade(5, 'geometry'));

console.log(`log.addGrade(25, 'geometry')`);
console.log(log.addGrade(25, 'geometry'));

log.addGrade(4, 'geometry');

console.log(`Средняя оцена geometry - ${log.getAverageBySubject('geometry')}`);
console.log(`Средняя оцена algebra - ${log.getAverageBySubject('algebra')}`);
console.log(`Средняя оцена math - ${log.getAverageBySubject('math')}`);

console.log(`Средняя оцена по всем предметам - ${log.getTotalAverage()}`);
