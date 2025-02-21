// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.sidebar .nav-link');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      // Verifica si el enlace tiene un atributo href que apunta a una página externa
      if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
        // No hace nada y permite que el navegador siga el enlace
        return;
      }
      
      event.preventDefault();
      
      // Remover la clase 'active' de todas las secciones
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });

      // Obtener el ID del objetivo de la sección
      const targetId = this.getAttribute('data-target');
      
      // Mostrar la sección seleccionada
      const targetSection = document.querySelector(targetId);
      targetSection.classList.add('active');
    });
  });
});


