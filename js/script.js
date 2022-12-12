"use strict"

const searchBody = document.querySelector('.form__action');

document.addEventListener("click", clickSearch);

function clickSearch(event) {
	if (event.target.closest('.form__search-button')) {
		searchBody.classList.toggle('active');
	}
	if (!event.target.closest('.form')) {
		searchBody.classList.remove('active');
	}
}
document.addEventListener('keyup', function (event) {
	if (event.code === "Escape") {
		searchBody.classList.remove('active');
	}
});

const textInput = document.querySelector('.form__text');
const textCounter = document.querySelector('.form__word-counter span');
const textCounterLimit = textInput.getAttribute('maxlength');
textCounter.innerHTML = textCounterLimit;



textInput.addEventListener("keyup", txtSetCounter);
textInput.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const textCounterRezult = textCounterLimit - textInput.value.length;
	textCounter.innerHTML = textCounterRezult;
}