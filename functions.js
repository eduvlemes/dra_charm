theme.build.topBar = function(fundo, cor, html){
  $(`body`).prepend(`<div class="top-bar" style="background: ${fundo}; color: ${cor};">${html}${html}${html}${html}${html}</div>`);
  
  if($('.top-bar').children().length > 1){
    $('.top-bar').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  }
}
