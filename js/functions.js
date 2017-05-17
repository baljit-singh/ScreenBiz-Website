var height= $(window).height() - 200;
$(".FirstSection").css("min-height",height);
$(".SecondSection").css("min-height",$(window).height() - 320);
$(".BrandSection").css("min-height",$(window).height() - 70);
$(".whyUsSection").css("min-height",$(window).height() - 70);
$(".fourthSection").css("min-height",height);
$(".quoteSection").css("min-height",$(window).height() - 490);
$(".locationScr").css("min-height",height);
$("footer").css("min-height",$(window).height() - 500);



(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        if ($window.width() < 514) {
            return $(".navbar").addClass('navbar-fixed-top');
        }

       	$(".navbar").removeClass('navbar-fixed-top');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


// $('.selectpicker').selectpicker({
//   style: 'btn-info',
//   size: 4
// });

