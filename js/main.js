$(function() {

    $('.slider__inner, .news__slider-inner').slick({/* метод slick будет применятся идля slider__inner и для news__slider-inner */
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

 $('select').styler()

 $('.header__btn-menu').on('click', function(){/* в адаптиве сеню будет выпадать из гамбургера при клике */
   $('.menu ul').slideToggle();
 });


});