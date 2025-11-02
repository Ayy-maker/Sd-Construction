// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        toggle.classList.remove('active');
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.padding = '24px';
        nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
        toggle.classList.add('active');
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const nav = document.querySelector('.nav-menu');
            if (window.innerWidth <= 968 && nav.style.display === 'flex') {
                toggleMenu();
            }
        }
    });
});

// Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    event.target.reset();
    return false;
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project items and service cards
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.project-item, .service-card, .process-step, .faq-item');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (window.innerWidth <= 968 && nav.style.display === 'flex') {
        if (!navContainer.contains(e.target)) {
            toggleMenu();
        }
    }
});

// Prevent zoom on input focus (iOS)
document.addEventListener('touchstart', function() {}, {passive: true});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace('+', ''));
                stat.textContent = '0+';
                
                setTimeout(() => {
                    animateCounter(stat, number, 2000);
                }, 100);
            });
        }
    });
}, { threshold: 0.3 });

// Observe hero stats
document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});
