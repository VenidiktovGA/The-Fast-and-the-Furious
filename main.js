
const score = document.querySelector('.score'),
	start = document.querySelector('.start'),
	gameArea = document.querySelector('.gameArea'),
	car = document.createElement('div'),
	imgCar = document.createElement('img');

car.classList.add('car');
car.appendChild(imgCar);
imgCar.src = '/image/SquadCar.png';

const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRight: false,
	ArrowLeft: false
};

const settings = {
	start: false,
	score: 0,
	speed: 3
};

const startingGame = () => {
	settings.start = true;
	start.classList.add('hide');

	//Рисуем авто
	gameArea.appendChild(car);
	//Анимируем игру
	//if (settings.start) requestAnimationFrame(animation);
};

const animation = () => {
	console.log('animation');
	if (settings.start) requestAnimationFrame(animation);

};

const startMoving = (e) => {
	//Скролить страницу не надо
	e.eventPreventDefault();
	keys[e.key] = true;
};

const endMoving = (e) => {
	//Скролить страницу не надо
	e.eventPreventDefault();
	keys[e.key] = false;
};

document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', endMoving);

start.addEventListener('click', startingGame);

