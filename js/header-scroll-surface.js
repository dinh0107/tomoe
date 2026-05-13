(function () {
  'use strict';

  var THRESHOLD = 200;
  var headers = document.querySelectorAll('.site-header--scrollable');
  if (!headers.length) return;

  function setSurface(header, on) {
    if (on) {
      header.classList.add('site-header--surface', 'navbar-light');
      header.classList.remove('navbar-dark');
    } else {
      header.classList.remove('site-header--surface', 'navbar-light');
      header.classList.add('navbar-dark');
    }

    var logo = header.querySelector('.site-header__logo');
    if (logo) {
      var surfaceSrc = header.getAttribute('data-header-logo-surface') || 'assets/logo-2.png';
      var defaultSrc = header.getAttribute('data-header-logo-default') || 'assets/logo.png';
      logo.src = on ? surfaceSrc : defaultSrc;
    }
  }

  function update() {
    var y = window.scrollY || window.pageYOffset || 0;
    var on = y >= THRESHOLD;
    headers.forEach(function (header) {
      var wasOn = header.classList.contains('site-header--surface');
      if (wasOn !== on) setSurface(header, on);
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      update();
      ticking = false;
    });
  }

  headers.forEach(function (header) {
    if (!header.getAttribute('data-header-logo-default')) {
      var logo = header.querySelector('.site-header__logo');
      if (logo && logo.getAttribute('src')) {
        header.setAttribute('data-header-logo-default', logo.getAttribute('src'));
      }
    }
    if (!header.getAttribute('data-header-logo-surface')) {
      header.setAttribute('data-header-logo-surface', 'assets/logo-2.png');
    }
  });

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();
