const flores = document.querySelectorAll('.flor');
const textoFlor = document.getElementById('texto-flor');

flores.forEach(flor => {
  flor.addEventListener('mouseenter', () => {
    textoFlor.textContent = flor.getAttribute('data-texto');
  });

  flor.addEventListener('mouseleave', () => {
    textoFlor.textContent = "";
  });
});