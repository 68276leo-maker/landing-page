// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
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