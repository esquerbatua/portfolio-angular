function iconNav() {
    document.querySelector('.options-nav').classList.toggle('hidden-options-nav');
}
$(window).scroll(function() {
    var barra = $(window).scrollTop();
    var posicion = barra * 0.20;

    $('.home').css({
        'background-position': '0 -' + posicion + 'px'
    });
});