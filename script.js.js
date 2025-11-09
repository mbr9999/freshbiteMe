

// Menu burger
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    burgerBtn.addEventListener('click', () => {
        const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
        burgerBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    // Fermer menu sur clic lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        });
    });

    // Fermer menu sur clic dehors 
    document.addEventListener('click', (e) => {
        if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            burgerBtn.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });

    // Validation formulaire 
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Nom
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (name.value.trim() === '') {
                nameError.textContent = 'Le nom est requis.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Email invalide.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Message
            const message = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (message.value.trim() === '') {
                messageError.textContent = 'Le message est requis.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (isValid) {
                alert('Formulaire envoyé ! (Simulation)');
                form.reset();
            }
        });
    }
});



