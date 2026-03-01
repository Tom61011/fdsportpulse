// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// ==========================================
// CONTACT FORM HANDLING (FormSubmit)
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Vérifier si l'utilisateur revient après un envoi réussi
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showFormMessage('✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
        // Nettoyer l'URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Validation avant envoi
    contactForm.addEventListener('submit', function(e) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation basique
        if (!firstName || !lastName || !email || !message) {
            e.preventDefault();
            showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
            return false;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            showFormMessage('Veuillez entrer une adresse email valide.', 'error');
            return false;
        }

        // Afficher un message d'envoi en cours
        showFormMessage('⏳ Envoi en cours...', 'success');
        
        // Le formulaire sera soumis normalement à FormSubmit
        return true;
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Faire défiler jusqu'au message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de fonctionnalités et services
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll(
        '.feature-card, .service-card, .pricing-card'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ==========================================
// FORM INPUT VALIDATION FEEDBACK
// ==========================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ff6b35';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#ff6b35';
    });
});

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Fd Sport Pulse. Tous droits réservés.`;
    }
});

// ==========================================
// PRELOAD OPTIMIZATION
// ==========================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ==========================================
// COOKIE CONSENT BANNER
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Afficher la bannière après 1 seconde
        setTimeout(() => {
            showCookieBanner();
        }, 1000);
    }
});

function showCookieBanner() {
    // Créer la bannière si elle n'existe pas
    if (!document.querySelector('.cookie-banner')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h3>🍪 Cookies et confidentialité</h3>
                    <p>
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                        En continuant à naviguer, vous acceptez notre utilisation des cookies. 
                        <a href="mentions-legales.html">En savoir plus</a>
                    </p>
                </div>
                <div class="cookie-buttons">
                    <button class="btn btn-accept" onclick="acceptCookies()">Accepter</button>
                    <button class="btn btn-decline" onclick="declineCookies()">Refuser</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
        
        // Afficher avec animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    // Ici vous pouvez activer Google Analytics ou autres services
    console.log('Cookies acceptés');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
    console.log('Cookies refusés');
}

function hideCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.remove();
        }, 400);
    }
}

// Fonction pour réinitialiser le consentement (pour tester)
function resetCookieConsent() {
    localStorage.removeItem('cookieConsent');
    location.reload();
}
