// js/script.js
// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // Evitar que el navegador restaure la posición de scroll automáticamente
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Si la URL tiene hash (ej: index.html#contacto), lo eliminamos para que no haga scroll al ancla.
    if (location.hash) {
        // Reemplaza la URL sin volver a recargar la página
        history.replaceState(null, document.title, location.pathname + location.search);
    }

    // Temporalmente desactivar el comportamiento smooth para evitar desplazamientos suaves automáticos
    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    // Forzar scroll al top inmediatamente
    window.scrollTo(0, 0);

    // Asegurarnos de volver a colocar al top después de que carguen recursos pesados (iframe, imágenes)
    window.addEventListener('load', function() {
        // Un doble chequeo por si algún recurso hizo scroll después
        window.scrollTo(0, 0);
        // Restaurar el comportamiento de scroll después de un pequeño retraso
        setTimeout(function() {
            htmlEl.style.scrollBehavior = prevScrollBehavior || '';
        }, 50);
    });

    // Feather Icons Initialization
    // This function finds all elements with a `data-feather` attribute and replaces them with SVG icons.
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Mobile Menu Toggle Logic
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggles the 'hidden' class on the mobile menu element
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link inside it is clicked
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        for (let link of mobileMenuLinks) {
            link.addEventListener('click', () => {
                // Hides the menu for a better user experience on navigation
                mobileMenu.classList.add('hidden');
            });
        }
    }
});
