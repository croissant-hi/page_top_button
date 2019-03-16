$(function() {
    var w = $(window),
        sTop = $('.scroll_top'),
        offset = 100;

    w.on('scroll', scroll);

    function scroll(){
        var top = w.scrollTop();
        if(offset <= top){
            sTop.fadeIn('fast');
        }else{
            sTop.fadeOut('fast');
        }
    }
});
