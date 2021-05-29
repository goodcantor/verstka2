$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $('.header__nav').toggleClass('header__nav-active');
    $('.header__burger').toggleClass('header__burger-active');
    $('.header__black-left').toggleClass('header__black-left-active');

    // // Плавное появление ссылок в nav
    // $('.header__home').toggleClass('header__home1');
    // $('.header__about').toggleClass('header__about1');
    // $('.header__services').toggleClass('header__services1');
    // $('.header__portfolio').toggleClass('header__portfolio1');
    // $('.header__blog').toggleClass('header__blog1');
    // $('.header__contact').toggleClass('header__contact1');
  });

  $('.header__black-left, .header__a').on('click', function () {
    $('.header__black-left-active').removeClass('header__black-left-active');
    $('.header__nav-active').removeClass('header__nav-active');
    $('.header__burger-active').removeClass('header__burger-active');

    // // Удаляем классы у ссылок в nav
    // $('.header__home').removeClass('header__home1');
    // $('.header__about').removeClass('header__about1');
    // $('.header__services').removeClass('header__services1');
    // $('.header__portfolio').removeClass('header__portfolio1');
    // $('.header__blog').removeClass('header__blog1');
    // $('.header__contact').removeClass('header__contact1');
  });

  // When the user scrolls down 20px from the top of the document, changes the header's bg
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("header").style.background = "white";
      document.getElementById("header").style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
      document.getElementById("header__ul").style.color = "black";
      document.getElementById("header__logo-text").style.color = "black";
    } else {
      document.getElementById("header").style.background = "transparent";
      document.getElementById("header__ul").style.color = "white";
      document.getElementById("header__logo-text").style.color = "white";
      document.getElementById("header").style.borderBottom = "none";
    }
  }


  var glideMulti = new Glide('.multi', {
    type: 'carousel',
    autoplay: 5000,
    focusAt: 'center',
    perView: 2,
    startAt: 2,
    breakpoints: {
      4000: {
        gap: 70
      },
      1200: {
        gap: 50
      },
      600: {
        gap: 30
      },
      400: {
        gap: 16
      }
    },
    animationDuration: 600,
    peek: {
      before: -120,
      after: -120
    }
  });


  glideMulti.mount();
});