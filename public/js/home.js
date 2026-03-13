gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 }
    });

    tl.to(".brand", {
        y: 0,
        opacity: 1,
        duration: 0.8
    })

        .to(".nav-links a", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8
        }, "-=0.5")

        .from(".hero-content h1", {
            x: -50,
            opacity: 0
        }, "-=0.5")

        .from(".hero-content p", {
            x: -30,
            opacity: 0
        }, "-=0.8")

        .from(".hero-actions", {
            y: 20,
            opacity: 0
        }, "-=0.8")

        .from(".hero-visual", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2
        }, "-=1");


    // Floating card animation
    gsap.to(".visual-card", {
        y: 20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // Scroll animations
    gsap.utils.toArray(".section").forEach(section => {

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 1
        });

    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

});