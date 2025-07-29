document.addEventListener('DOMContentLoaded', function() {
    
    // === Seletores de Elementos ===
    const themeSwitcher = document.getElementById('theme-switcher');
    const langToggle = document.getElementById('language-toggle-switch');
    const translatableElements = document.querySelectorAll('[data-lang]');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    // === Lógica do Seletor de Tema (Light/Dark) ===
    function applyTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme + '-theme');
        
        themeSwitcher.innerHTML = (theme === 'light') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', theme);
    }

    themeSwitcher.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // === Lógica do Seletor de Idioma (Switch) ===
    function applyLanguage(targetLang) {
        document.documentElement.lang = targetLang;
        
        translatableElements.forEach(el => {
            el.classList.toggle('hidden', el.dataset.lang !== targetLang);
        });

        langToggle.classList.toggle('en-active', targetLang === 'en-US');
        
        localStorage.setItem('preferredLanguage', targetLang);
    }

    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
        applyLanguage(newLang);
    });

    // === Lógica do Menu Mobile ===
    function toggleMobileMenu() {
        document.body.classList.toggle('sidebar-open');
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileMenu);
    
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('disabled-link')) {
                e.preventDefault();
                return;
            }
            if (document.body.classList.contains('sidebar-open')) {
                toggleMobileMenu();
            }
        });
    });

    // === Lógica de Inicialização (Ao carregar a página) ===
    function initialize() {
        // Tema
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

        // Idioma
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = (navigator.language || navigator.userLanguage).startsWith('pt') ? 'pt-BR' : 'en-US';
        applyLanguage(savedLang || browserLang);
    }

    initialize();
});