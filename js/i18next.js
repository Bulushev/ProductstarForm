import en from '../data/en.js';
import ru from '../data/ru.js';

i18next.init({
    lng: 'ru', // Язык по умолчанию
    debug: true,
    resources: {
        en,
        ru
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.getElementById('t-label-login').innerHTML = i18next.t('t-label-login');
    document.getElementById('t-login').placeholder = i18next.t('t-login');
    document.getElementById('t-label-password').innerHTML = i18next.t('t-label-password');
    document.getElementById('t-password').placeholder = i18next.t('t-password');
    document.getElementById('t-submit').value = i18next.t('t-submit');
    document.getElementById('switchlanguage').innerHTML = i18next.t('switchlanguage');
}

document.getElementById('switchlanguage').addEventListener('click', function() {
    const newLang = i18next.language === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(newLang, updateContent);
});