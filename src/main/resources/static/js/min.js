// Optimized 3D Portfolio Interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio: Initializing...');

    // Loading screen management
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 300);
        }, 1000);
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = mobileMenu.classList.contains('hidden')
                ? '<i class="fas fa-bars text-2xl"></i>'
                : '<i class="fas fa-times text-2xl"></i>';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }
        });
    }

    // Smooth scrolling for anchor links (optimized)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Update URL without page reload
                history.pushState(null, null, href);

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
                }
            }
        });
    });

    // Lazy load heavy animations
    let animationsLoaded = false;

    const loadAnimations = () => {
        if (animationsLoaded) return;
        animationsLoaded = true;

        console.log('Portfolio: Loading animations...');

        // Initialize AOS with delay
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }

        // Initialize particles with reduced count
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 500 } },
                    color: { value: "#00f3ff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: true },
                    size: { value: 2, random: true },
                    line_linked: {
                        enable: false, // Disable lines for performance
                        distance: 150,
                        color: "#9d4edd",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.5, // Reduced speed
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: false }, // Disable hover for performance
                        onclick: { enable: false }
                    }
                }
            });
        }

        // Initialize Vanilla Tilt with limited instances
        if (typeof VanillaTilt !== 'undefined') {
            // Only apply to main cards, not all
            VanillaTilt.init(document.querySelectorAll('.skill-card, .contact-card'), {
                max: 10,
                speed: 300,
                glare: false, // Disable glare for performance
                "max-glare": 0,
                gyroscope: false // Disable gyroscope
            });
        }

        // Create limited floating particles
        createFloatingParticles(10); // Reduced count
    };

    // Load animations when user scrolls or after 2 seconds
    let animationTimer = setTimeout(loadAnimations, 2000);

    window.addEventListener('scroll', () => {
        if (!animationsLoaded) {
            clearTimeout(animationTimer);
            loadAnimations();
        }
    }, { once: true });

    // Update active nav link (optimized with debounce)
    let scrollTimeout;
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNavLink, 50);
    });

    // Back to Top button (optimized)
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        let backToTopTimer;
        function updateBackToTop() {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        }

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            clearTimeout(backToTopTimer);
            backToTopTimer = setTimeout(updateBackToTop, 50);
        });
    }

    // Typewriter effect (delayed)
    setTimeout(() => {
        const typewriter = document.querySelector('.typewriter');
        if (typewriter) {
            const text = "Software Engineer | Full Stack Developer";
            const speed = 50;
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    typewriter.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            setTimeout(typeWriter, 500);
        }
    }, 1000);
});

// Optimized floating particles
function createFloatingParticles(count = 10) {
    const container = document.querySelector('#particles-js') || document.body;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';

        const size = Math.random() * 6 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = Math.random() * 3 + 2;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            opacity: ${Math.random() * 0.2 + 0.1};
            z-index: 1;
            background: linear-gradient(45deg, #00f3ff, #9d4edd);
            border-radius: 50%;
            position: absolute;
            pointer-events: none;
        `;

        container.appendChild(particle);
    }
}

// Create 3D Grid Background (lightweight)
function create3DGrid() {
    if (document.querySelector('.grid-3d-bg')) return;

    const grid = document.createElement('div');
    grid.className = 'grid-3d-bg';
    grid.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px) 0 0 / 100px 100px,
            linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px) 0 0 / 100px 100px;
        transform: perspective(500px) rotateX(60deg);
        transform-origin: center top;
        z-index: -1;
        pointer-events: none;
    `;
    document.body.appendChild(grid);
}

// Initialize on load
window.addEventListener('load', function() {
    console.log('Portfolio: Loaded');
    create3DGrid();
});