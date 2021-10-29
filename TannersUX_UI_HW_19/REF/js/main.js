const heroImg = document.querySelector('section.heroImg');
const mySkills = document.querySelector('section.mySkills');

const myWork = document.querySelector('section.myWork');

ScrollReveal().reveal(heroImg, { delay: 1000 });

ScrollReveal().reveal(mySkills, { delay: 1400 });

ScrollReveal().reveal(myWork, { delay: 2000 });

heroImg.addEventListener('mouseover', (event) => {
	heroImg.style.backgroundColor = "salmon";
});

heroImg.addEventListener('mouseout', (event) => {
	heroImg.style.backgroundColor = "white";
});