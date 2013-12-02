var window_height = $(window).height() - $('#object').height();
var window_height = $(window).height() - $('#object2').height();
var window_height = $(window).height() - $('#object3').height();


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

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_top = 0 - window_height * (scroll_position / document_height);
        $('#object2').css({
            'top': object_position_top
        });
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_top = 20 - window_height * (scroll_position / document_height);
        $('#object3').css({
            'top': object_position_top
        });
    });
});