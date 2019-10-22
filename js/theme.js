$(function () {

  $('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - 0
    }, 1000);
  });

  
  $('#navbar').hide();
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $('#navbar').addClass("bg-dark"); // Classe a ser adicionada na classe que foi definida na variavel header
    $('#navbar').removeClass("bg-transparent"); // Classe a ser removida na classe que foi definida na variavel container
    $('#navbar').show();
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $('#navbar').addClass("bg-dark"); // Adiciona classe
      $('#navbar').removeClass("bg-transparent"); // Remove o transparente
      $('#navbar').show();

    } else {
      $('#navbar').removeClass("bg-dark"); // Classe a ser adicionada na classe que foi definida na variavel header
      $('#navbar').addClass("bg-transparent"); // Classe a ser removida na classe que foi definida na variavel container
      $('#navbar').hide(500);
      
    }
  });

  $('.descricao-imagem').mouseover(function () {
    $('.progress-bar').addClass('animated')
    $('.progress-bar').addClass('fadeInLeft')
    $('.progress-bar').addClass('slower')
  })






});