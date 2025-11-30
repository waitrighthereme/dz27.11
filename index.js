const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', function(e) {
     e.stopPropagation(); // Предотвращаем всплытие события
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});


document.querySelectorAll('.nav a').forEach(link => {
     link.addEventListener('click', () => {
     nav.classList.remove('active');
     burger.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('active');
    burger.classList.remove('active');
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
}
});
