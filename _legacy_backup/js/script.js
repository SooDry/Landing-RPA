document.addEventListener('DOMContentLoaded', () => {
    // 0. Lógica de Internacionalización (i18n)
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('softtek_lang') || 'es';

    function setLanguage(lang) {
        if (!window.translations || !window.translations[lang]) return;

        currentLang = lang;
        localStorage.setItem('softtek_lang', lang);

        // Actualizar botones UI
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Traducir texto interior
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.translations[lang][key]) {
                if (el.getAttribute('data-i18n-html') === 'true') {
                    el.innerHTML = window.translations[lang][key];
                } else {
                    el.textContent = window.translations[lang][key];
                }
            }
        });

        // Traducir placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (window.translations[lang][key]) {
                el.placeholder = window.translations[lang][key];
            }
        });

        // Actualizar html lang
        document.documentElement.lang = lang;
    }

    // Inicializar idioma
    setLanguage(currentLang);

    // Event listeners para botones de idioma
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(btn.dataset.lang);
        });
    });

    // 1. Configuración de Navbar on scroll
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Navegación suave (Smooth Scrolling)
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Permitir descargas u otros links que no sean anclas puras
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Altura de la navbar aprox
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Animations on scroll usando Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejar de observar una vez que ya se mostró
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Lógica de Menú Móvil (Básico)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Como no se pide funcionalidad compleja de menú, solo hacemos un toggle básico
            // o idealmente mostramos un modal/sidebar. Por ahora alert para feedback.
            alert('En un entorno productivo, esto abriría un menú lateral.');
        });
    }

    // 6. Lógica de Calculadora ROI (Nivel Senior - Enfoque Analítico Financiero)
    const roiHours = document.getElementById('roi-hours');
    const roiCost = document.getElementById('roi-cost');
    const roiError = document.getElementById('roi-error');
    
    const roiHoursVal = document.getElementById('roi-hours-val');
    const roiCostVal = document.getElementById('roi-cost-val');
    const roiErrorVal = document.getElementById('roi-error-val');
    
    const roiSavings = document.getElementById('roi-savings');
    let animationFrameId = null;

    /**
     * Anima el conteo de números para un efecto visual premium.
     */
    function animateValue(element, start, end, duration) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Función de suavizado (easeOutQuart)
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.floor(progress * (end - start) + start);
            
            element.textContent = new Intl.NumberFormat('en-US').format(currentVal);
            
            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            }
        };
        animationFrameId = requestAnimationFrame(step);
    }

    function calculateROI() {
        if (!roiHours || !roiCost || !roiError || !roiSavings) return;
        
        const hours = parseFloat(roiHours.value) || 0;
        const cost = parseFloat(roiCost.value) || 0;
        const errorRate = parseFloat(roiError.value) || 0;
        
        // Actualizar visualización de las métricas en la UI
        if(roiHoursVal) roiHoursVal.textContent = hours;
        if(roiCostVal) roiCostVal.textContent = cost;
        if(roiErrorVal) roiErrorVal.textContent = errorRate;
        
        // --- Cálculo Analítico (Validado mediante Benchmarks de Frida) ---
        // Asume un 80% de eficiencia basal gracias a la resiliencia del framework (Zero-Selector Failure).
        const ahorroProductividad = (hours * cost * 52) * 0.8;
        
        // Mitigación de Pérdida Oculta (Enterprise Exception Handling).
        const ahorroError = (hours * cost * 52) * (errorRate / 100);
        
        const totalAnual = Math.round(ahorroProductividad + ahorroError);
        
        // Obtener el valor actual que muestra la UI y animar hasta el nuevo total
        const currentDisplayed = parseInt(roiSavings.textContent.replace(/,/g, '')) || 0;
        animateValue(roiSavings, currentDisplayed, totalAnual, 800);
    }

    // Bind events
    [roiHours, roiCost, roiError].forEach(input => {
        if (input) {
            input.addEventListener('input', calculateROI);
        }
    });

    // Calcular por defecto al inicio
    calculateROI();

    // 5. Validación de formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulación de envío
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Simular petición a servidor (ej. 1.5s delay)
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                const successKey = currentLang === 'en'
                    ? 'Thank you! We have received your request. A Softtek RPA expert will contact you shortly.'
                    : '¡Gracias! Hemos recibido su solicitud. Un experto de Softtek RPA se pondrá en contacto pronto.';

                formStatus.textContent = successKey;
                formStatus.className = 'form-status success';

                // Ocultar mensaje después de unos segundos
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
});
