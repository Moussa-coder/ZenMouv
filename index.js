 // Menu mobile
        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");
        
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
        
        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll(".nav__links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
        
        // Initialisation de Swiper pour les témoignages
        const swiper = new Swiper(".swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
        
        // Animation avec ScrollReveal
        ScrollReveal().reveal('.header__image, .about__image', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out'
        });
        
        ScrollReveal().reveal('.header__content, .about__content', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out'
        });
        
        ScrollReveal().reveal('.program__card, .service__content, .testimonial__card', {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            interval: 200
        });
        
        // Animation des statistiques
        const counters = document.querySelectorAll('.header__stats h4');
        const speed = 200;
        
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = +counter.innerText;
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);
                
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target + '+';
                }
            });
        };
        
        // Observer pour déclencher l'animation des compteurs quand ils sont visibles
        const statsSection = document.querySelector('.header__stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
        
        // Smooth scrolling pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });