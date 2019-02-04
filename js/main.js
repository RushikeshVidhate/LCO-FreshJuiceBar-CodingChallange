

// Navbar JS
/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  //On Scroll Annimation
  // Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
  $.fn.visible = function(partial) {
    
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};
$(window).scroll(function(event) {
  
  $(".about-scroll-animations .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeInLeft"); 
    } 
  });
  $(".menu-scroll-animations .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeInUp"); 
    } 
  });
  $(".services-scroll-animations .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("bounceIn"); 
    } 
  });
  $(".reviews-scroll-animations .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeIn"); 
    } 
  });
  $(".contact-scroll-animations-1 .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeInLeft"); 
    } 
  });
  $(".contact-scroll-animations-2 .animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeIn"); 
    } 
  });

  
  
});


