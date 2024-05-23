"use strict"

let pageSlider = new Swiper('.page',{
	//Свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	//Вертикальный слайдер
	direction: 'vertial',

	//Количество слайдов для показа
	slidesPerView: 'auto',

	//Включаем параллакс
	parallax: true,

	//Управление клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	//Управление колесиком мыши
	mousewheel: {
		sensitivity: 1,
	},

	watchOverflow: true,
	speed: 800,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	//Скролл 
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		draggable: true
	},
})
