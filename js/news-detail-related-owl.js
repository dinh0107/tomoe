(function ($) {
  'use strict';

  $(function () {
    var $el = $('[data-news-detail-related-owl]');
    if (!$el.length || typeof $.fn.owlCarousel !== 'function') {
      return;
    }

    var prevIcon =
      '<span class="news-detail-related__nav-btn" aria-hidden="true"><i class="fa-light fa-chevron-left"></i></span>';
    var nextIcon =
      '<span class="news-detail-related__nav-btn" aria-hidden="true"><i class="fa-light fa-chevron-right"></i></span>';

    function stripNavDisabled() {
      $el.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }

    $el.on(
      'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
      stripNavDisabled
    );

    $el.owlCarousel({
      loop: true,
      margin: 16,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 450,
      navText: [prevIcon, nextIcon],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
      onInitialized: function () {
        $el.find('.owl-prev').attr('aria-label', 'Bài viết trước');
        $el.find('.owl-next').attr('aria-label', 'Bài viết sau');
        stripNavDisabled();
      },
    });

    stripNavDisabled();
  });
})(window.jQuery);
