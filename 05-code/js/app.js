/* ==========================================
   APP.JS - SNOOPY WEBSITE
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar los iconos de Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Manejar el formulario del Newsletter
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value.trim() !== "") {
        alert(`¡Gracias por suscribirte, ${emailInput.value}! Pronto recibirás novedades de Snoopy.`);
        emailInput.value = ""; // Limpiar el campo
      }
    });
  }

  // 3. Efecto activo en los enlaces del menú superior
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});