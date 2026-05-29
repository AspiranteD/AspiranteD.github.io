document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNav();
    initProjectToggle();
    initScrollAnimations();
    initLangSwitcher();
});

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

function initNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    let lastScroll = 0;
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            nav.style.boxShadow = 'var(--shadow)';
        } else {
            nav.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    }, { passive: true });
}

function initProjectToggle() {
    const btn = document.getElementById('toggleProjects');
    const grid = document.getElementById('projectsGrid');
    if (!btn || !grid) return;

    btn.addEventListener('click', () => {
        const isCollapsed = grid.classList.contains('projects__grid--collapsed');
        grid.classList.toggle('projects__grid--collapsed');
        if (isCollapsed) {
            btn.textContent = btn.dataset.hideText || 'Show less';
            grid.querySelectorAll('[data-animate]').forEach(el => el.classList.add('visible'));
        } else {
            btn.textContent = btn.dataset.showText || 'Show all components (9 more)';
        }
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

function initLangSwitcher() {
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    const options = dropdown.querySelectorAll('.lang-option');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => dropdown.classList.remove('open'));

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            options.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            document.getElementById('currentLang').textContent = lang.toUpperCase();
            dropdown.classList.remove('open');
            loadLanguage(lang);
        });
    });

    const saved = localStorage.getItem('lang') || 'en';
    document.getElementById('currentLang').textContent = saved.toUpperCase();
    options.forEach(o => {
        o.classList.toggle('active', o.dataset.lang === saved);
    });
    loadLanguage(saved);
}
