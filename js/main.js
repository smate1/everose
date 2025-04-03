document.addEventListener('DOMContentLoaded', function () {
	SmoothScroll({
		animationTime: 800,
		stepSize: 75,
		accelerationDelta: 30,
		accelerationMax: 2,
		keyboardSupport: true,
		arrowScroll: 50,
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
		touchpadSupport: true,
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const menu = document.querySelector('.header')
	const closeBtn = document.getElementById('burger-menu')
	const menuLinks = document.querySelectorAll('.header a') // Всі посилання в меню
	const body = document.body

	// Функція для відкриття/закриття меню
	function toggleMenu() {
		menu.classList.toggle('open')
		body.classList.toggle('no-scroll') // Вмикаємо/вимикаємо скрол
	}

	// Відкриваємо/закриваємо меню при кліку на бургер
	burger.addEventListener('click', toggleMenu)

	// Закриваємо меню при кліку на кнопку "burger-menu"
	closeBtn.addEventListener('click', function () {
		menu.classList.remove('open')
		body.classList.remove('no-scroll')
	})

	// Закриваємо меню при кліку на будь-яке посилання
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('open')
			body.classList.remove('no-scroll')
		})
	})
})


document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal')
	const openModalBtns = document.querySelectorAll('.order-btn') // Всі кнопки з класом order-btn
	const closeModalBtn = document.querySelector('.modal__close')

	// Додаємо обробник подій для кожної кнопки
	openModalBtns.forEach(btn => {
		btn.addEventListener('click', function () {
			modal.style.display = 'flex'
		})
	})

	// Закриваємо модальне вікно при кліку на хрестик
	closeModalBtn.addEventListener('click', function () {
		modal.style.display = 'none'
	})

	// Закриваємо модальне вікно при кліку поза ним
	window.addEventListener('click', function (e) {
		if (e.target === modal) {
			modal.style.display = 'none'
		}
	})
})

