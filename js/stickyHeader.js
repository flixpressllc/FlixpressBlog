$(document).ready(function() {
  (function() {
    var windowWidth = $(window).width();
    var $header = $('.Header');
    var $stickyHeader = $header.clone().addClass('stickyheader');

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
    if (windowWidth > 767) {
      var smallheader = 500;
      var isAttached = false;
      $(window).on('scroll.stickyHeader', function() {
        var scroll = getCurrentScroll();
        if (scroll >= smallheader && isAttached == false) {
          $header.parent().append($stickyHeader);
          isAttached = true;
        } else if (scroll < smallheader && isAttached == true) {
          $stickyHeader.detach();
          isAttached = false;
        }
      });
    };
  })();
});