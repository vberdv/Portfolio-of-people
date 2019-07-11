$(document).ready(function () {

    /*    $('.newsBlockRigth-slider__indicator-item').click(function () {

            //Добавить класс active при нажатие
            if ($('.newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                $('.newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
            }
            $(this).addClass('newsBlockRigth-slider__indicator-item_active');

            //Смена изображения при нажатие на кнопку
            if ($(this).data('slideTo') == 0) {
                $('#slider-right').children().eq().removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(2).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(3).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(0).addClass('newsBlockRigth-slider__item_active');
            } else if ($(this).data('slideTo') == 1) {
                $('#slider-right').children().eq(0).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(2).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(3).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(1).addClass('newsBlockRigth-slider__item_active');
            } else if ($(this).data('slideTo') == 2) {
                $('#slider-right').children().eq(0).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(1).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(3).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(2).addClass('newsBlockRigth-slider__item_active');
            } else if ($(this).data('slideTo') == 3) {
                $('#slider-right').children().eq(0).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(1).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(2).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(3).addClass('newsBlockRigth-slider__item_active');
            }
        });*/

    //Смена изображения вертикального баннера
    setInterval(function () {

        if ($('#slider-right').children().eq(0).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-right').children().eq(0).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(1).addClass('newsBlockRigth-slider__item_active');

                if ($('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#slider-indicator-right').children().eq(1).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 4000);
        } else if ($('#slider-right').children().eq(1).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-right').children().eq(1).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(2).addClass('newsBlockRigth-slider__item_active');

                if ($('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#slider-indicator-right').children().eq(2).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 4000);
        } else if ($('#slider-right').children().eq(2).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-right').children().eq(2).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(3).addClass('newsBlockRigth-slider__item_active');

                if ($('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#slider-indicator-right').children().eq(3).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 4000);
        } else if ($('#slider-right').children().eq(3).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-right').children().eq(3).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-right').children().eq(0).addClass('newsBlockRigth-slider__item_active');

                if ($('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#slider-indicator-right > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#slider-indicator-right').children().eq(0).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 4000);
        }
    });

    //Смена изображения квадратного баннера
    setInterval(function () {

        if ($('#slider-left').children().eq(0).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-left').children().eq(0).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-left').children().eq(1).addClass('newsBlockRigth-slider__item_active');

                if ($('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#newsBlockRigth-slider__indicator_left').children().eq(1).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 2000);
        } else if ($('#slider-left').children().eq(1).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-left').children().eq(1).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-left').children().eq(2).addClass('newsBlockRigth-slider__item_active');

                if ($('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#newsBlockRigth-slider__indicator_left').children().eq(2).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 2000);
        } else if ($('#slider-left').children().eq(2).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-left').children().eq(2).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-left').children().eq(3).addClass('newsBlockRigth-slider__item_active');

                if ($('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#newsBlockRigth-slider__indicator_left').children().eq(3).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 2000);
        } else if ($('#slider-left').children().eq(3).hasClass('newsBlockRigth-slider__item_active')) {
            setTimeout(function () {
                $('#slider-left').children().eq(3).removeClass('newsBlockRigth-slider__item_active');
                $('#slider-left').children().eq(0).addClass('newsBlockRigth-slider__item_active');

                if ($('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').hasClass('newsBlockRigth-slider__indicator-item_active')) {
                    $('#newsBlockRigth-slider__indicator_left > .newsBlockRigth-slider__indicator-item').removeClass('newsBlockRigth-slider__indicator-item_active');
                }
                $('#newsBlockRigth-slider__indicator_left').children().eq(0).addClass('newsBlockRigth-slider__indicator-item_active');
            }, 2000);
        }
    });

    //Слайдер на главной
    $('.slider-switch__item').click(function () {

        //Добавить класс active при нажатие
        if ($('.slider-switch__item').hasClass('slider-switch__item_active')) {
            $('.slider-switch__item').removeClass('slider-switch__item_active');
            $('.slider-switch__line').remove();
        }
        $(this).addClass('slider-switch__item_active');

        //Добавлет отступ для полоски от цифры
        $('.slider-switch__item_active > .slider-switch__link').append('<span class="slider-switch__line" style="margin-left: 5px;"></span>');
        if ($('.slider-switch__list').children().eq(1).hasClass('slider-switch__item_active')) {
            $('.slider-switch__line').css('margin-left', '0');
        }

        // Смена цифры на боковой нумерации соотвествующей цифре при выборе слайда
        $num = $('.slider-switch__item_active > .slider-switch__link').text();
        $('.slider-list__link').empty().text($num);

        //Скрытие главного слайда свойствами css
        $('.block-image-two__img').css({
            opacity: 0,
            width: 0
        });
        $('.slider-list__line').css({
            height: 0
        });
        $('.slider__title-name').css({
            width: 0
        });
        $('.slider__title-text').css({
            opacity: 0
        });

        if ($('.slider-switch__item_active')) {
            //Индекс ативного слайда
            $indexCurretSlide = $('.slider-switch__item_active').index();

            //Добавить активный класс соответствующий индексу слайда
            if ($('.block-image__item').hasClass('block-image__item_active')) {
                $('.block-image__item').removeClass('block-image__item_active');
            }

            if ($indexCurretSlide == 0) {
                $('.block-image').children().eq($indexCurretSlide).addClass('block-image__item_active');
                $('.block-image-two__img').attr('src', $('.block-image').children().eq(3).children().attr('src'));

                if ($('.slider-switch__item_active')) {
                    $('.block-image-two__img').animate({
                        opacity: 1,
                        width: '100%'
                    }, 2000);
                    $('.slider-list__line').animate({
                        height: '60px'
                    }, 2000);
                    $('.slider__title-name').animate({
                        width: '340px'
                    }, 2000);
                    $('.slider__title-text').animate({
                        opacity: 1
                    }, 1000);
                }
            } else {
                $('.block-image').children().eq($indexCurretSlide).addClass('block-image__item_active');

                //Замена главного слайда на соотвествующий номер выбранного слайда
                $prevImg = $('.block-image__item_active').prev()[0];
                $srcImgSmallSlide = $prevImg.firstChild.nextSibling.getAttribute('src');

                if ($('.slider-switch__item_active')) {
                    $('.block-image-two__img').attr('src', $srcImgSmallSlide).animate({
                        opacity: 1,
                        width: '100%'
                    }, 2000);
                    $('.slider-list__line').animate({
                        height: '60px'
                    }, 2000);
                    $('.slider__title-name').animate({
                        width: '340px'
                    }, 2000);
                    $('.slider__title-text').animate({
                        opacity: 1
                    }, 1000);
                }
            }
        }
    });

    //Анимация слайда при первой загрузке страницы
    if ($('.slider-switch__item_active')) {
        $('.block-image-two__img').animate({
            opacity: 1,
            width: '100%'
        }, 2000);
        $('.slider-list__line').animate({
            height: '60px'
        }, 2000);
        $('.slider__title-name').animate({
            width: '340px'
        }, 2000);
        $('.slider__title-text').animate({
            opacity: 1
        }, 1000);
    }
});