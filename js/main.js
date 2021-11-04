$(function () {
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider__arrow slider__arrow-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider__arrow slider__arrow-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive:[
      {
        breakpoint: 1600,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 870,
        settings:{
        slidesToShow: 2,
        dots: true
        }      
      },
      {
        breakpoint: 590,
        settings:{
        slidesToShow: 1,
        dots: true  
        }      
      }
    ]
  });

  $('.menu button').on('click', function(){
    $('.menu button').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list-active');
  });
})