$(() => { 
    $('.btn').on("click", function() {
        console.log("Clicked");
        $('.rectangle').css({
            'position': 'absolute',
            'animation': 'myAnimation infinite'
        }).css('animation-duration', '4s'); 
    });

    $.keyframe.define([{
        name: 'myAnimation',
        '0%': {
            'left': '0',
            'top': '0',
            'transform': 'translate(0) translateY(0)'
        },
        '25%': {
            'top': '100%',
            'left': '0',
            'transform': 'translateX(0) translateY(-100%)'
        },
        '50%': {
            'top': '100%',
            'left': '100%',
            'transform': 'translateX(-100%) translateY(-100%)'
        },
        '75%': {
            'top': '0',
            'left': '100%',
            'transform': 'translateX(-100%) translateY(0)'
        },
        '100%': {
            'top': '0',
            'left': '0',
            'transform': 'translateX(0) translateY(0)'
        }
    }]);
});



