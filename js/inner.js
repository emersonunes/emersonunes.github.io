/**
*
* -----------------------------------------------------------------------------
*
* Template : Grassy - One Page Corporate HTML5 Template 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 150) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // onepage nav
    $(".navbar li").on("click", function () {
        if ($(".showhide").is(":visible")) {
            $(".showhide").trigger("click");
        }
    });
    if ($.fn.onePageNav) {
        $(".navbar").onePageNav({
            currentClass: "active"
        });
    }

    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    // wow init
    new WOW().init();
  
	// Preloader	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
		
    
    // scrollTop init
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
})(jQuery);