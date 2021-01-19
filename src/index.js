import './styles/style.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
//Script de Frontend
$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $("body").addClass("sticky-header");
        } else {
            $("body").removeClass("sticky-header");
        }
    })
})

/* Aumentar el tamaño de la letra */
$(".aumentaLetra").on('click', function(event) {

    $('.reduceLetra').removeClass('deshabiltar');

    var donde = $('html');
    var sizeFuenteActual = donde.css('font-size');
    var sizeFuente = sizeFuenteActual.replace("px", "");

    if (sizeFuente > 16) {
        $('.aumentaLetra').addClass('deshabiltar');
    } else {
        $('.aumentaLetra').removeClass('deshabiltar');
    }

    var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum + 2;
    donde.css('font-size', sizeFuenteNuevo);
    return false;

});

// Disminuir Aumentar el tamaño de la letra
$(".reduceLetra").click(function() {

    $('.aumentaLetra').removeClass('deshabiltar');

    var donde = $('html');
    var sizeFuenteActual = donde.css('font-size');
    var sizeFuente = sizeFuenteActual.replace("px", "");

    if (sizeFuente < 16) {
        $('.reduceLetra').addClass('deshabiltar');
    } else {
        $('.reduceLetra').removeClass('deshabiltar');
    }

    var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum - 2;
    donde.css('font-size', sizeFuenteNuevo);
    return false;

});

// Resetear Aumentar el tamaÃ±o de la letra
$(".resetLetra").click(function() {

    var donde = $('html');

    donde.css('font-size', '16px');
    $('.aumentaLetra').removeClass('deshabiltar');
    $('.reduceLetra').removeClass('deshabiltar');

});
/* Funcion de alto conraste */
$(".ln-cabecera").on('click', function(event) {
    $("html").toggleClass("negativo");
});