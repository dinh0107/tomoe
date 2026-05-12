(function () {
  'use strict';

  var LABEL_SEL = '.site-header__lang-label';

  function getGoogTransValue() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
    return m ? decodeURIComponent(m[1].trim()) : '';
  }

  function isEnglishMode() {
    var v = getGoogTransValue();
    if (!v) return false;
    return /(^|\/)en(\/|$)/.test(v);
  }

  function clearGoogTransCookies() {
    var path = '/';
    var past = 'Thu, 01 Jan 1970 00:00:00 GMT';
    var host = window.location.hostname;
    document.cookie = 'googtrans=;path=' + path + ';expires=' + past;
    if (host && host !== 'localhost' && host !== '127.0.0.1' && !/^(\d{1,3}\.){3}\d{1,3}$/.test(host)) {
      document.cookie = 'googtrans=;path=' + path + ';domain=.' + host + ';expires=' + past;
    }
  }

  function setEnglishCookie() {
    var maxAge = ';max-age=' + 365 * 24 * 60 * 60;
    document.cookie = 'googtrans=' + encodeURIComponent('/vi/en') + ';path=/' + maxAge;
  }

  function updateLabels() {
    var en = isEnglishMode();
    document.querySelectorAll('.site-header__locale').forEach(function (el) {
      var span = el.querySelector(LABEL_SEL);
      if (span) span.textContent = en ? 'EN' : 'VN';
      el.setAttribute(
        'aria-label',
        en ? 'Chuyển về tiếng Việt' : 'Chuyển sang tiếng Anh (Google Dịch)'
      );
      el.setAttribute('title', el.getAttribute('aria-label'));
    });
  }

  function ensureGtContainer() {
    var el = document.getElementById('google_translate_element');
    if (!el) {
      el = document.createElement('div');
      el.id = 'google_translate_element';
      el.className = 'site-header-google-translate';
      el.setAttribute('aria-hidden', 'true');
      document.body.appendChild(el);
    }
    return el;
  }

  function bindToggle() {
    document.querySelectorAll('.site-header__locale').forEach(function (btn) {
      if (btn.__tomoeLocaleBound) return;
      btn.__tomoeLocaleBound = true;
      btn.addEventListener('click', function () {
        if (isEnglishMode()) {
          clearGoogTransCookies();
        } else {
          setEnglishCookie();
        }
        window.location.reload();
      });
    });
  }

  window.googleTranslateElementInit = function () {
    if (window.__tomoeGtElementInited) return;
    window.__tomoeGtElementInited = true;
    ensureGtContainer();
    try {
      if (window.google && google.translate && google.translate.TranslateElement) {
        new google.translate.TranslateElement(
          {
            pageLanguage: 'vi',
            includedLanguages: 'vi,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    } catch (e) {}
  };

  function loadGtScript() {
    if (document.querySelector('script[data-tomoe-gtranslate]')) return;
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    s.setAttribute('data-tomoe-gtranslate', '1');
    document.head.appendChild(s);
  }

  function init() {
    updateLabels();
    ensureGtContainer();
    bindToggle();
    loadGtScript();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
