// Optimized Portfolio Interactions - MOBILE FIXED
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio: Mobile Optimized Initializing...');

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

    // Mobile Menu Functionality
    function setupMobileMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu-container');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                this.classList.toggle('active');

                if (mobileMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    document.body.style.overflow = 'auto';
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });

            // Close menu button
            if (closeMenuBtn) {
                closeMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    menuBtn.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            }

            // Close menu when clicking links
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    menuBtn.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (mobileMenu.classList.contains('active')) {
                    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                        mobileMenu.classList.remove('active');
                        menuBtn.classList.remove('active');
                        document.body.style.overflow = 'auto';
                        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        }
    }

    setupMobileMenu();

    // Smooth scrolling for anchor links
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
            }
        });
    });

    // Back to Top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        let scrollTimeout;

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

        // Throttle scroll event
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateBackToTop, 50);
        });
    }

    // Optimize for mobile
    function optimizeForMobile() {
        if (window.innerWidth <= 768) {
            // Disable heavy hover effects
            const cards = document.querySelectorAll('.premium-card, .project-card, .skill-card');
            cards.forEach(card => {
                card.style.transition = 'transform 0.2s ease';
            });

            // Simplify typewriter effect
            const typewriter = document.querySelector('.typewriter-text');
            if (typewriter) {
                typewriter.style.animation = 'none';
                typewriter.style.borderRight = 'none';
            }
        }
    }

    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);

    console.log('Portfolio: Mobile Optimization Complete');
});

// Create lightweight floating particles (desktop only)
function createFloatingParticles() {
    if (window.innerWidth > 768) {
        const container = document.body;
        const particleCount = 6; // Very reduced for performance

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';

            const size = Math.random() * 3 + 1;
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
                opacity: ${Math.random() * 0.1 + 0.05};
                z-index: 1;
                background: linear-gradient(45deg, #00f3ff, #9d4edd);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
            `;

            container.appendChild(particle);
        }
    }
}

// Initialize on load
window.addEventListener('load', function() {
    console.log('Portfolio: Loaded');

    // Delay particle creation for better performance
    setTimeout(createFloatingParticles, 2000);
});