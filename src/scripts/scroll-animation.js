// src/scripts/scroll-animation.js

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Para a observação após a animação
      }
    });
  }, {
    threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
  });

  // Seleciona todos os elementos que queremos animar
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});