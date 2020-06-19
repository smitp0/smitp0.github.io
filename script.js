const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
})
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700,
	speedAsDuration: true
});
