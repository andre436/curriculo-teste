// Script para adicionar a animação fade-in
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});
