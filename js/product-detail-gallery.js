(function () {
  var root = document.querySelector('[data-product-gallery]');
  if (!root) return;

  var imgEl = root.querySelector('[data-product-gallery-img]');
  var slides = [];
  try {
    slides = JSON.parse(root.getAttribute('data-slides') || '[]');
  } catch (e) {
    return;
  }
  if (!imgEl || slides.length === 0) return;

  var i = 0;

  function show(idx) {
    i = (idx + slides.length) % slides.length;
    imgEl.src = slides[i];
  }

  var prevBtn = root.querySelector('[data-product-gallery-prev]');
  var nextBtn = root.querySelector('[data-product-gallery-next]');
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      show(i - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      show(i + 1);
    });
  }
})();
