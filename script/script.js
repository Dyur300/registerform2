$(document).ready(function () {
  $('.nav a[href^="#"]').ckick(function(){ //выбрать ссылкииз меню
    var offset = $('.nav').innerHeight (); //высота меню, получаем динамически
    var target = $(this).attr('href'); //сохранить значение атрибуtа href
    $('html, body').animate({
      scrollTop: $(target).offset().top - offset//вычесть высоту меню
    }, 500);//время анимации
    $('.nav a [href^="#"]').removeClass('active'); //удалить класс active4
    $(this).addClass('active');
    return false;
  });
});