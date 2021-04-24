$(document).ready(() => {

  $('.slider__reviews').slick({
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    appendDots: $('.section--reviews .container'),
    customPaging: () => '<div class="dot"></div>',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  });

  $('.section--slider .slider__items').slick({
    nextArrow: $('.section--slider .slider__arrows .arrow-next'),
    prevArrow: $('.section--slider .slider__arrows .arrow-prev'),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    speed: 1000
  });

  $('.section--slider .slide .item').click((event) => {
    const imageSrc      = event.currentTarget.children[1].src
    const $preview      = $('.section--slider .section__preview')
    const $previewImage = $('.section--slider .section__preview img')
    
    $preview.addClass('removing')

    setTimeout(() => {
      $previewImage.attr('src', imageSrc)
      $preview.removeClass('removing')
    }, 300)
  })

});