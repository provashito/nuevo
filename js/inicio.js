// ==========================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
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
// CONTROL DEL SCROLL INDICATOR
// ==========================================
const scrollIndicator = document.getElementById('scrollIndicator');
const heroSection = document.getElementById('hero');

window.addEventListener('scroll', () => {
    // Ocultar el indicador cuando se sale de la hero section
    const heroBottom = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroBottom - 200) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
});

// Click en el scroll indicator para hacer scroll suave
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: heroSection.offsetHeight,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// HEADER BACKGROUND AL HACER SCROLL
// ==========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.2)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ==========================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validación básica
        if (name === '') {
            alert('Por favor, ingresa tu nombre');
            document.getElementById('name').focus();
            return false;
        }
        
        if (email === '') {
            alert('Por favor, ingresa tu correo electrónico');
            document.getElementById('email').focus();
            return false;
        }
        
        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido');
            document.getElementById('email').focus();
            return false;
        }
        
        if (message === '') {
            alert('Por favor, ingresa tu mensaje');
            document.getElementById('message').focus();
            return false;
        }
        
        // Si todo está correcto, mostrar mensaje de éxito
        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
        
        // Limpiar formulario
        contactForm.reset();
        
        return true;
    });
}

// ==========================================
// ANIMACIÓN DE CARGA DE PÁGINA
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// EFECTO HOVER EN TARJETAS DE PRODUCTOS
// ==========================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==========================================
// EFECTO HOVER EN TARJETAS DE SERVICIOS
// ==========================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon i');
        if (icon) {
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.transition = 'transform 0.6s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon i');
        if (icon) {
            icon.style.transform = 'rotate(0deg) scale(1)';
        }
    });
});

// ==========================================
// CONSOLE LOG DE BIENVENIDA
// ==========================================
console.log('%c🎮 Gamer Lab 🎮', 'color: #00D4FF; font-size: 24px; font-weight: bold;');
console.log('%cBienvenido a la plataforma de realidad aumentada para gamers', 'color: #00FFF0; font-size: 14px;');

// ==========================================
// PREVENIR ERRORES CON IMÁGENES NO ENCONTRADAS
// ==========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.opacity = '0.3';
        this.alt = 'Imagen no disponible';
    });
});

// ==========================================
// FUNCIÓN PARA NAVEGAR A OTRAS PÁGINAS
// ==========================================
function navigateTo(page) {
    window.location.href = page;
}

// Event listeners para botones de navegación
document.querySelectorAll('a[href="catalogo.html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('catalogo.html');
    });
});

document.querySelectorAll('a[href="cotizador.html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('cotizador.html');
    });
});

// ==========================================
// ANIMACIÓN DE BRILLO EN BOTONES (SHIMMER)
// ==========================================
const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const shimmer = document.createElement('span');
        shimmer.style.position = 'absolute';
        shimmer.style.top = '0';
        shimmer.style.left = '-100%';
        shimmer.style.width = '100%';
        shimmer.style.height = '100%';
        shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)';
        shimmer.style.transition = 'left 0.5s ease';
        shimmer.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(shimmer);
        
        setTimeout(() => {
            shimmer.style.left = '100%';
        }, 10);
        
        setTimeout(() => {
            shimmer.remove();
        }, 600);
    });
});

// ==========================================
// FIN DEL SCRIPT
// ==========================================