$(document).ready(function(){
  $('.campaign-list').slick({
  	arrows: false,
  	speed: 300,
  	dots: true,
    infinite: true,
    adaptiveHeight: true,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.testimonial-list').slick({
  	arrows: false,
  	speed: 300,
  	dots: true,
    infinite: true,
    adaptiveHeight: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $(window).scroll(function () {
	  console.log($(window).scrollTop())
	  if ($(window).scrollTop() > 75) {
	  	$('.navbar').removeClass('top-nav');
	    $('.navbar').addClass('is-sticky');
	  }
	  if ($(window).scrollTop() < 76) {
	    $('.navbar').removeClass('is-sticky');
	    $('.navbar').addClass('top-nav');
	  }
	});
  $(function () {
  'use strict'
	  $('[data-toggle="offcanvas"]').on('click', function () {
	  	$(this).toggleClass('is-active')
	    $('.offcanvas-collapse').toggleClass('open')
	  })
	})
});