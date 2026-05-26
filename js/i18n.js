const translations = {};

async function loadLanguage(lang) {
    try {
        if (!translations[lang]) {
            const response = await fetch(`lang/${lang}.json`);
            translations[lang] = await response.json();
        }
        applyTranslations(translations[lang]);
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    } catch (e) {
        console.warn(`Could not load language: ${lang}`, e);
        if (lang !== 'en') loadLanguage('en');
    }
}

function applyTranslations(data) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(data, key);
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const value = getNestedValue(data, key);
        if (value) el.innerHTML = value;
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}
