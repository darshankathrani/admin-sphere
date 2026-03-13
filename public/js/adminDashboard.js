gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 }
    });

    // Sidebar animation - only on desktop
    if(window.innerWidth > 920) {
        tl.from(".sidebar", {
            x: -100,
            opacity: 0
        });
    }

    tl.from(".nav a", {
        y: 10,
        opacity: 0,
        stagger: 0.15
    }, window.innerWidth > 920 ? "-=0.4" : 0)

        // Topbar
        .from(".topbar", {
            y: -20,
            opacity: 0
        }, "-=0.4")

        // Cards
        .from(".card", {
            y: 30,
            opacity: 0,
            stagger: 0.2
        }, "-=0.4");


    // Mobile menu toggle logic
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const navLinks = document.querySelectorAll('.nav a');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }

    if(menuToggle && closeSidebar && sidebar && sidebarOverlay) {
        menuToggle.addEventListener('click', toggleMenu);
        closeSidebar.addEventListener('click', toggleMenu);
        sidebarOverlay.addEventListener('click', toggleMenu);
        
        // Close menu on link click on mobile
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 920) {
                    toggleMenu();
                }
            });
        });
    }

    // Table rows animation
    gsap.from("tbody tr", {
        scrollTrigger: {
            trigger: ".card",
            start: "top 85%"
        },
        y: 15,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4
    });

});