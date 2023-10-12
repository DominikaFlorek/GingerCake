const nav = document.querySelector('.navbar-collapse');
const year = document.querySelector('.footer-year');


document.addEventListener('click', () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}
})

const today = new Date();
console.log(today.getFullYear());

const currentYear = () => {
	year.textContent = today.getFullYear();
};
currentYear();
