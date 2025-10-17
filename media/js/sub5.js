// ./js/sub5.js
(function ($) {
  $(function () {
    /* 1) YouTube 팝업 초기화 (Magnific Popup) */
    if ($.fn.magnificPopup) {
      $('.popup_youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',      // 부드러운 페이드 인/아웃
        removalDelay: 160,          // 닫힐 때 자연스럽게
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: function (url) {
                // ?v=xxxx 형태 ID 파싱
                var m = url.match(/[?&]v=([^&]+)/);
                return (m && m[1]) ? m[1] : null;
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
            }
          },
          srcAction: 'iframe_src'
        }
      });
    } else {
      console.warn('magnificPopup not found. Make sure jquery.magnific-popup.min.js is loaded.');
    }

    /* 2) Scroll Down 버튼 → #content로 스크롤 */
    $('.videoBox .down').on('click', function (e) {
      e.preventDefault();
      var $target = $('#content');
      if ($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - 20 }, 700);
      }
    });

    /* 3) TOP 버튼 */
    $('.top_move').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 700);
    });
  });
})(jQuery);