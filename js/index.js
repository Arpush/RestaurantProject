$(document).ready(function () {

    var $animation_elements = $('.animation_element');
    var $window = $(window);
    var window_top_position = $window.scrollTop();

    $window.on('scroll resize',fixedHeader );
    $window.on('scroll resize',check_if_in_view );


    function fixedHeader() {


        var $header = $('.top_header');

        if (window_top_position = $header.height()) {
            $($header).addClass('fixed');
        }else {
            $($header).removeClass('fixed');
        }
    }


    function check_if_in_view() {

        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);


        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);


            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }

        });

           

    }

});