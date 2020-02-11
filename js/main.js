jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-fixed');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // custom code
 const swiper = new Swiper('.swiper-container.swiper-full', {
      slidesPerView: 'auto',
      spaceBetween: 0,
       speed: 200,
      slideToClickedSlide:true,
      centeredSlides:true,
       
      loop:true,
        autoplay: {
          delay: 3000,
         },


        keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
       },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


       breakpoints: {
            
            640: {
              slidesPerView: 'auto',
            },
            320: {
              slidesPerView: 'auto',
            }
      }

   
    });
 
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // diff ids of diff sections rip no easy way to do it ;/
  // 1)about
   document.getElementById('about').classList.remove('section-bg');
  document.getElementById('about').classList.add('darkmode-section-bg');
  // 2)features
  document.getElementById('features').classList.remove('section-bg');
  document.getElementById('features').classList.add('darkmode-section-bg');
  // 3)Team
  document.getElementById('team').classList.remove('section-bg');
  document.getElementById('team').classList.add('darkmode-section-bg');
  // 4)Contact
  document.getElementById('contact').classList.remove('section-bg');
  document.getElementById('contact').classList.add('darkmode-section-bg');
  // 5)footer
  document.getElementById('footer').classList.remove('section-bg');
  document.getElementById('footer').classList.add('darkmode-section-bg');
  //a)add darker box for elements changing color
  document.getElementById('features').classList.add('darkmode-shadow');
  document.getElementById('contact').classList.add('darkmode-shadow');
  document.getElementById('footer').classList.add('darkmode-shadow');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // diff ids of diff sections rip no easy way to do it ;/
  // 1)about
  document.getElementById('about').classList.remove('darkmode-section-bg');
  document.getElementById('about').classList.add('section-bg');
  // 2)features
  document.getElementById('features').classList.remove('darkmode-section-bg');
  document.getElementById('features').classList.add('section-bg');
  // 3)Team
  document.getElementById('team').classList.remove('darkmode-section-bg');
  document.getElementById('team').classList.add('section-bg');
  // 4)Contact
  document.getElementById('contact').classList.remove('darkmode-section-bg');
  document.getElementById('contact').classList.add('section-bg');
  // 5)footer
  document.getElementById('footer').classList.remove('darkmode-section-bg');
  document.getElementById('footer').classList.add('section-bg');
  //a)add darker box for elements changing color
  document.getElementById('features').classList.remove('darkmode-shadow');
  document.getElementById('contact').classList.remove('darkmode-shadow');
  document.getElementById('footer').classList.remove('darkmode-shadow');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

});