(function ($) {
  'use strict';

  $(function () {
    /* Sản phẩm nổi bật */
    var $products = $('[data-products-owl]');
    if ($products.length && typeof $.fn.owlCarousel === 'function') {
      var productsPrevIcon =
        '<i class="fa-light fa-arrow-left products-carousel__nav-icon" aria-hidden="true"></i>';
      var productsNextIcon =
        '<i class="fa-light fa-arrow-right products-carousel__nav-icon" aria-hidden="true"></i>';

      $products.on(
        'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
        function () {
          $products.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        }
      );

      $products.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 400,
        navText: [productsPrevIcon, productsNextIcon],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1200: { items: 3 },
        },
        onInitialized: function () {
          $products.find('.owl-prev').attr('aria-label', 'Sản phẩm trước');
          $products.find('.owl-next').attr('aria-label', 'Sản phẩm sau');
          $products.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        },
      });

      $products.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }

    /* Dự án nổi bật */
    var $projects = $('[data-projects-owl]');
    if ($projects.length && typeof $.fn.owlCarousel === 'function') {
      var projectsPrevIcon =
        '<i class="fa-light fa-arrow-left products-carousel__nav-icon" aria-hidden="true"></i>';
      var projectsNextIcon =
        '<i class="fa-light fa-arrow-right products-carousel__nav-icon" aria-hidden="true"></i>';

      $projects.on(
        'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
        function () {
          $projects.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        }
      );

      $projects.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 400,
        navText: [projectsPrevIcon, projectsNextIcon],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1200: { items: 3 },
        },
        onInitialized: function () {
          $projects.find('.owl-prev').attr('aria-label', 'Dự án trước');
          $projects.find('.owl-next').attr('aria-label', 'Dự án sau');
          $projects.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        },
      });

      $projects.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }

    /* Tin tức */
    var $news = $('[data-news-owl]');
    if ($news.length && typeof $.fn.owlCarousel === 'function') {
      var newsPrevIcon =
        '<i class="fa-light fa-arrow-left products-carousel__nav-icon" aria-hidden="true"></i>';
      var newsNextIcon =
        '<i class="fa-light fa-arrow-right products-carousel__nav-icon" aria-hidden="true"></i>';

      $news.on(
        'initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel translated.owl.carousel',
        function () {
          $news.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        }
      );

      $news.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 400,
        navText: [newsPrevIcon, newsNextIcon],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1200: { items: 4 },
        },
        onInitialized: function () {
          $news.find('.owl-prev').attr('aria-label', 'Tin tức trước');
          $news.find('.owl-next').attr('aria-label', 'Tin tức sau');
          $news.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
            $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
          });
        },
      });

      $news.find('.owl-nav .owl-prev, .owl-nav .owl-next').each(function () {
        $(this).removeClass('disabled').prop('disabled', false).removeAttr('aria-disabled');
      });
    }
  });
})(window.jQuery);
