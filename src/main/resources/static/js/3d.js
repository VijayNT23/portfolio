// Enhanced 3D Portfolio Effects

class Portfolio3D {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.create3DElements();
        this.setupEventListeners();
        this.animate();
    }

    create3DElements() {
        // Create 3D container
        const container3D = document.createElement('div');
        container3D.className = 'parallax-layer-container';
        container3D.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        document.body.appendChild(container3D);

        // Create 3D layers
        for (let i = 0; i < 3; i++) {
            const layer = document.createElement('div');
            layer.className = `parallax-layer layer-${i}`;
            layer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
            `;
            container3D.appendChild(layer);
        }

        // Create interactive hologram effect
        this.createHologramEffect();
    }

    createHologramEffect() {
        const style = document.createElement('style');
        style.textContent = `
            .hologram-highlight {
                position: relative;
                overflow: hidden;
            }
            
            .hologram-highlight::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    to right,
                    transparent 20%,
                    rgba(0, 243, 255, 0.1) 50%,
                    transparent 80%
                );
                animation: hologram-scan 3s linear infinite;
                pointer-events: none;
            }
            
            @keyframes hologram-scan {
                0% { transform: translateX(-100%) rotate(45deg); }
                100% { transform: translateX(100%) rotate(45deg); }
            }
        `;
        document.head.appendChild(style);

        // Add hologram effect to skill cards on hover
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hologram-highlight');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hologram-highlight');
            });
        });
    }

    setupEventListeners() {
        // Mouse move for 3D parallax
        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX - window.innerWidth / 2) / 100;
            this.mouseY = (e.clientY - window.innerHeight / 2) / 100;
        });

        // Touch events for mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouseX = (e.touches[0].clientX - window.innerWidth / 2) / 50;
                this.mouseY = (e.touches[0].clientY - window.innerHeight / 2) / 50;
            }
        });

        // Scroll for 3D depth
        window.addEventListener('scroll', () => {
            this.updateScrollDepth();
        });
    }

    updateScrollDepth() {
        const scrollY = window.scrollY;
        const depth = scrollY * 0.1;

        document.querySelectorAll('.card-3d').forEach((card, index) => {
            const cardDepth = depth - (index * 20);
            card.style.transform = `perspective(1000px) translateZ(${cardDepth}px)`;
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Update 3D layers based on mouse position
        const layers = document.querySelectorAll('.parallax-layer');
        layers.forEach((layer, index) => {
            const depth = (index + 1) * 0.5;
            const x = this.mouseX * depth;
            const y = this.mouseY * depth;

            layer.style.transform = `translate3d(${x}px, ${y}px, ${index * 50}px)`;
        });

        // Rotate 3D elements
        const time = Date.now() * 0.001;
        document.querySelectorAll('.float-3d').forEach(element => {
            const rotation = Math.sin(time) * 5;
            element.style.transform = `rotateY(${rotation}deg)`;
        });
    }

    // Create particle burst effect
    createParticleBurst(x, y, color = '#00f3ff') {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'burst-particle';

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 30;
            const size = Math.random() * 6 + 2;
            const duration = Math.random() * 1000 + 500;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(0, 0);
                opacity: 1;
            `;

            document.body.appendChild(particle);

            // Animate particle
            const animation = particle.animate([
                {
                    transform: `translate(0, 0) scale(1)`,
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            });

            animation.onfinish = () => particle.remove();
        }
    }

    // Add 3D click effect to buttons
    add3DClickEffect(selector) {
        document.querySelectorAll(selector).forEach(button => {
            button.addEventListener('click', (e) => {
                const rect = button.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;

                this.createParticleBurst(x, y);

                // 3D button press effect
                button.style.transform = 'translateZ(-20px)';
                setTimeout(() => {
                    button.style.transform = 'translateZ(0)';
                }, 200);
            });
        });
    }
}

// Initialize 3D effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const portfolio3D = new Portfolio3D();

    // Add 3D click effects to CTA buttons
    portfolio3D.add3DClickEffect('a[href="#contact"], a[href="#projects"]');
    portfolio3D.add3DClickEffect('.contact-card');

    // Add 3D hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = 'perspective(1000px) translateZ(30px) rotateY(10deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) translateZ(0) rotateY(0)';
        });
    });

    // Add 3D effect to skill icons
    document.querySelectorAll('.skill-3d-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotateY(180deg) translateZ(50px)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotateY(0) translateZ(0)';
        });
    });
});