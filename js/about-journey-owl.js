  (function ($) {
  'use strict';

  $(function () {
    var $journey = $('[data-journey-owl]');
    if (!$journey.length || typeof $.fn.owlCarousel !== 'function') {
      return;
    }

    var $section = $journey.closest('.about-journey');
    var $years = $section.find('.about-journey__year');

    var prevIcon =
      '<i class="fa-light fa-arrow-left journey-carousel__nav-icon" aria-hidden="true"></i>';
    var nextIcon =
      '<i class="fa-light fa-arrow-right journey-carousel__nav-icon" aria-hidden="true"></i>';

    function stripJourneyNavDisabled() {
      $('#aboutJourneyNav .owl-prev, #aboutJourneyNav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }

    $journey.on(
      'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
      function (e) {
        stripJourneyNavDisabled();
        if (typeof e.item === 'object' && e.item.index !== undefined) {
          var idx = e.item.index;
          $years.removeClass('is-active');
          $years.filter('[data-journey-go="' + idx + '"]').addClass('is-active');
        }
      }
    );

    $journey.owlCarousel({
      loop: false,
      rewind: true,
      margin: 74,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 400,
      navText: [prevIcon, nextIcon],
      navContainer: '#aboutJourneyNav',
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
      onInitialized: function () {
        $section.find('#aboutJourneyNav .owl-prev').attr('aria-label', 'Mốc trước');
        $section.find('#aboutJourneyNav .owl-next').attr('aria-label', 'Mốc sau');
        stripJourneyNavDisabled();
      },
    });

    stripJourneyNavDisabled();

    $years.on('click', function () {
      var go = parseInt($(this).attr('data-journey-go'), 10);
      if (!isNaN(go)) {
        $journey.trigger('to.owl.carousel', go);
      }
    });
  });
})(window.jQuery);
