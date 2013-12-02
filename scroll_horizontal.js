var window_height = $(window).height() - $('#object').height();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_top = window_height * (scroll_position / document_height);
        $('#object').css({
            'top': object_position_top
        });
    });
});