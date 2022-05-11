$( document ).ready(function() {

    var btnMenuMobile = $('.btn-menumobile')

    $(btnMenuMobile).on('click', function() {

        $('.nav-container ul').toggleClass('open');
    });

});