//hamburger navlist toggle
$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });

  AOS.init({
    easing: 'ease',
    duration: 1000,
  });
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());
