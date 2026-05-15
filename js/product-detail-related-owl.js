(function ($) {
  'use strict';

  $(function () {
    var $related = $('[data-related-owl]');
    if (!$related.length || typeof $.fn.owlCarousel !== 'function') {
      return;
    }

    var prevImg =
    '<i class="fa-light fa-arrow-left products-carousel__nav-icon" aria-hidden="true"></i>';
  var nextImg =
    '<i class="fa-light fa-arrow-right products-carousel__nav-icon" aria-hidden="true"></i>';

    function stripNavDisabled() {
      $related.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }

    $related.on(
      'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
      stripNavDisabled
    );

    $related.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 400,
      navText: [prevImg, nextImg],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
      onInitialized: function () {
        $related.find('.owl-prev').attr('aria-label', 'Sản phẩm trước');
        $related.find('.owl-next').attr('aria-label', 'Sản phẩm sau');
        stripNavDisabled();
      },
    });

    stripNavDisabled();
  });
})(window.jQuery);
