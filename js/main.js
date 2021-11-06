$(function () {
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000, 
    prevArrow: '<button class="slider__arrow slider__arrow-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider__arrow slider__arrow-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive:[
      {
        breakpoint: 1601,
        settings:{
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1201,
        settings:{
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 920,
        settings:{
        slidesToShow: 2,
        dots: true
        }      
      },
      {
        breakpoint: 620,
        settings:{
        slidesToShow: 1,
        dots: true,
        centerMode: true,
        variableWidth: true  
        }      
      }
    ]
  });

  $('.menu button').on('click', function(){
    $('.menu button').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list-active');
  });
})