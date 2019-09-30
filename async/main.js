const goodMorning = () => console.log('Доброе утро, Вася.');
const goodNight = () => console.log('Спокойной ночи, Вася.')

function setDaylyRhythm(wakeUpTime, bedTime) {
	const wakeUp = setAlarm(wakeUpTime, goodMorning);
	const bed = setAlarm(bedTime, goodNight);

	setInterval(() => {
		const now = new Date();
		const curTime = now.getHours() + ':' + now.getMinutes();
		wakeUp(curTime);
		bed(curTime);
	}, 1000);
}

function setAlarm(time, fn) {
	const alarm = time;
	return (currentTime) => {
		if (currentTime === alarm) {
			fn();
		}
	}
}

checkTime = setAlarm('07:00', goodMorning);
checkTime('07:30');
checkTime('07:00');

setDaylyRhythm('12:40','12:42');
