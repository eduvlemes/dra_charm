apx_widgets.worker.sideCartPro.config.iconClose = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>';

let theme = {}

theme.colors = {
  primary: '#ff3c6f',
  secondary: '#ff7cae',
  light: '#ffe0e8',
  focus: '#dc3545',
  gray: '#9a9a9a',
  black: '#171717',
}

function triggerCDN(){
    console.log('IS_STORE_ASYNC',window.IS_STORE_ASYNC);
    let isLogged = $.cookie('LI-UserData') && $.cookie('LI-UserData').includes(`%7B%22logged%22%3Afalse%2C%22i`) ? false : true;
    sessionStorage.setItem('cdnTriggered',true)

    if(isLogged){
      $(`#c-account > span`).html(`Olá, ${JSON.parse($.cookie('LI-UserData').split(`name%22%3A%22`)).name.split(` `)[0]}<br><small class='logged-in-text'>Minha conta</small>`)
    }
};
$(window).load(function(){
  if(window.IS_STORE_ASYNC){
    triggerCDN();
  }
});


// if (window.location.hostname.includes('dracharm.com.br')){
theme.assetsPath = "https://cdn.jsdelivr.net/gh/eduvlemes/dra_charm/assets";
// } else {
  //theme.assetsPath = `http://127.0.0.1:5500/assets`
// }

theme.build = {}

theme.build.header = function() {
          $(`.carrinho > a > i`).remove()
          $(`.carrinho > a`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras">`)
          $(`<button type="button" class="icon-search" id="c-search"></button>`).insertBefore(`.carrinho`);
          $(`<a href="/conta/index" id="c-account"><img class=ico src="${theme.assetsPath}/user_1077063.png" alt="Minha Conta"></a>`).insertBefore(`.carrinho`);
        
          $(`#cabecalho .inferior > .hidden-phone`).addClass(`c-actions`);
          $(`.c-actions`).toggleClass(`span4 span3`);
          $(`.c-actions`).insertAfter(`#cabecalho .conteudo-topo`);
          $(`#cabecalho .conteudo-topo`).toggleClass(`span9 span6`);
          $(`<button type="button" class="remove-visible-btn"></button>`).appendTo(`.conteudo-topo .span8.busca-mobile`).on('click', function() {
            $(`body`).removeClass('search-active');
            $(`.conteudo-topo .span8.busca-mobile`).removeClass('visible');
          });


          $('#c-search').on('click', function() {
            $(`body`).addClass('search-active');
            $(`.conteudo-topo .span8.busca-mobile input`).focus();
            $('.conteudo-topo .span8.busca-mobile').addClass('visible');
          });

          if(window.innerWidth > 990){
            $(`.menu.superior`).appendTo(`#cabecalho .conteudo-topo.span6`)
          }

          const $cabecalho = $('#cabecalho');
          const isHomePage = $('.pagina-inicial').length > 0;
          
          
          
          document.body.style.setProperty('--cart-icon', `url(${theme.assetsPath}/shopping-cart_7411136.png)`);  
  
        
          $(`.apx_header .atalho-menu`).append(`<img src="https://cdn.awsli.com.br/1930/1930166/arquivos/person1-27.svg" alt="Menu">`);

           let topBarHeight_ = $(`.top-bar`).innerHeight();
            let headerHeight_ = $(`#cabecalho`).innerHeight();
            document.body.style.setProperty('--topbarHeight', `${topBarHeight_}px`); 
            document.body.style.setProperty('--headerHeight', `${headerHeight_}px`); 
          if (isHomePage) {
            const onScroll = () => {
              const topBarHeight = $(`.top-bar`).innerHeight();
              const headerHeight = $(`#cabecalho`).innerHeight();
              document.body.style.setProperty('--topbarHeight', `${topBarHeight}px`); 
              document.body.style.setProperty('--headerHeight', `${headerHeight}px`); 
              if (window.scrollY > topBarHeight) {
                $cabecalho.addClass('fixed');
              } else {
                $cabecalho.removeClass('fixed');
              }
            };
            $(window).on('scroll', onScroll);
            onScroll();
          } else {
            $cabecalho.removeClass('fixed');
            $(window).off('scroll');
          }
    }
theme.build.pages = function(){
  let title = $(`h1`).text().trim().toLowerCase();
};

theme.build.footer = function() {
  $(`#rodape .conteiner > .row-fluid > .span9`).toggleClass(`span9 span7`);
  $(`#rodape .conteiner > .row-fluid > .span4`).toggleClass(`span4 span5`);

  $(`#rodape .links-rodape-paginas .titulo`).text(`Sobre nós`)
  $(`#rodape .sobre-loja-rodape .titulo`).remove();
  $(`<img class=logo src="${theme.assetsPath}/logo_principal_horizontal.png" alt="Dra Charm">`).prependTo(`#rodape .sobre-loja-rodape`);

  $(`#rodape .links-rodape-categorias`).remove();
  
  $(`#rodape .sobre-loja-rodape`).insertAfter($(`#rodape .redes-sociais`).closest(`.span3`));
  $(`#rodape .redes-sociais`).closest(`.span3`).insertAfter(`#rodape .links-rodape-paginas`);

  $(`.links-rodape`).toggleClass(`span4 span6`);
  $(`.links-rodape + .span3`).toggleClass(`span3 span6`);
  $(`.links-rodape-paginas`).toggleClass(`links-rodape-paginas links-rodape-paginas_`);
  $(`.links-rodape`).toggleClass(`links-rodape links-rodape_`);
  $(`.redes-sociais .titulo`).text(`Visite nossas redes sociais`);
  $(`#rodape .lista-redes a`).each(function() {
    const icon = $(this).find('i');
    let network = icon.attr('class') || '';
    let name = '';

    if (network.includes('facebook')) name = 'Facebook';
    else if (network.includes('instagram')) name = 'Instagram';
    else if (network.includes('twitter')) name = 'Twitter';
    else if (network.includes('youtube')) name = 'YouTube';
    else if (network.includes('whatsapp')) name = 'WhatsApp';
    else if (network.includes('linkedin')) name = 'LinkedIn';
    else if (network.includes('pinterest')) name = 'Pinterest';
    else name = 'Rede Social';

    if (!$(this).find('span').length) {
      $(this).append(`<span>${name}</span>`);
    }

    
  });
  
  $(`#rodape .redes-sociais`).after(`<div class="formas-de-pagamento"><span class="titulo">Formas de pagamento</span><div class="formas-de-pagamento-ico"></div></div>`);
    const paymentIcons = [
      'visa-logo.png',
      'mastercard-logo.png',
      'elo-logo.png',
      'american-express-logo.png',
      'pix-logo.png'
    ];

    paymentIcons.forEach(icon => {
      $(`.formas-de-pagamento-ico`).append(
        `<img src="${theme.assetsPath}/${icon}" alt="${icon.replace('-logo.png','').replace(/-/g,' ')}" class="payment-icon">`
      );
    });

      $(`[alt="Site Seguro"],[title="Google Safe Browsing"]`).closest(`li`).hide()
    

}

theme.build.productPage = function() {
    $('.disponibilidade-produto').each(function(){
        let txt  = $(this).text();
        if(txt.includes('Disponível')){
            $(this).html('Produto com <strong>envio imediato</strong>')
        }
    })
     $(`<div id="apx-actions"></div>`).insertAfter(`.produto-compartilhar`);
      $(`.lista-favoritos`).appendTo(`#apx-actions`);
      $(`.lista-favoritos`).html(`<i class="fa fa-heart"></i>Adicionar aos favoritos`);
     
      let attempts = 0;
      const maxAttempts = 3;
  
      const intervalId = setInterval(function() {
          attempts++;
  
          // Só adiciona o botão se ainda não existir
          if ($('.produto-video').length > 0 && $(`.botao-video.apx`).length == 0) {
              $('<button type="button" onclick="$(\'.produto-video .botao-video\').click()" class="botao-video apx"><i class="fa fa-youtube-play"></i>Ver vídeo do produto</button>')
                  .appendTo('#apx-actions');
          }
  
          // Para o intervalo após 3 tentativas
          if (attempts >= maxAttempts) {
              clearInterval(intervalId);
          }
      }, 1000); // 1 segundo
    
    
    
      $(`.principal .acoes-produto .desconto-a-vista`).each(function() {
        const discountText = $(this).html().replace(`ou`,``);
        $(this).html(discountText)
      });
    
       $(`.principal .acoes-produto`).each(function() {
        let promocinal = $(this).find(`.preco-promocional`);
        promocinal.insertBefore($(this).find(`.preco-parcela`))
      });
    
      $(window).on('load', function() {
        $(`.cep .alert-custom.alert-success`).wrap(`<div id="wrapTroque"></div>`);
        $(`#wrapTroque`).prepend(`<img loading="lazy" class="svgTroqueCommerce" src="${theme.assetsPath}/troca_rosa.png" alt="A melhor plataforma de trocas e devoluções para Trocas" title="A melhor plataforma de trocas e devoluções para E-Commerce">`);
      });
      $(`.cep button`).text(`Calcular`);
    
      $('.produto-thumbs img').each(function(){
          let crop = $(this).attr('src').split('/')[3];
          let removeCrop = $(this).attr('src').replace(crop,'150x150');
          $(this).attr('src',removeCrop);
      });
     //adicionar modal ao body
    $('body').append(`
      <div id="modal-measure" class="modal-measure" style="display: none;">
          <div class="modal-measure__content">
            <span class="modal-measure__close js-close" style="cursor: pointer;"><i class="fa fa-close"></i></span>
            <p>Encontre o tamanho ideal para você</p>
            <p>Temos diversas formas para descobrir o tamanho que mais combina com você. Escolha abaixo:</p>
            <button id="sizebay-provador-virtual" style="display: flex;">
              <i class="fa fa-female fa-3x hidden-phone"></i>
              <div class="btn-txt">
                <p class="title">Provador Virtual</p>
                <p class="caption">Insira informações básicas como altura, peso e proporção corporal.</p>
              </div>
            </button>
            <button id="sizebay-tabela-medidas" style="display: flex;">
              <i class="fa fa-table fa-3x hidden-phone"></i>
              <div class="btn-txt">
                <p class="title">Tabela de Medidas Corporais</p>
                <p class="caption">
                  Descubra o tamanho ideal comparando as medidas do seu corpo com os tamanhos indicados na tabela.
                </p>
              </div>
            </button>
            
          </div>
      </div>
    `);

    //adicionar botao apos .atributos > .atributo-comum > ul
    $('.atributos .atributo-comum ul').after(`
      <button id="modal-measure-button">
        <i class="fa fa-ruler-vertical"></i>
        Descubra o seu tamanho
      </button>
    `);

    $(document).on('click', '#sizebay-tabela-medidas', function() {
      $('#szb-measurements-button').click();
    });
    $(document).on('click', '#sizebay-provador-virtual', function() {
      $('#szb-vfr-button').click();
    });
    
    // Funcionalidade para abrir e fechar o modal
    $(document).on('click', '#modal-measure-button', function() {
      $('#modal-measure').fadeIn();
    });
    
    $(document).on('click', '.modal-measure__close', function() {
      $('#modal-measure').fadeOut();
    });
};

theme.build.topBar = function(fundo, cor, html){
  $(`body`).prepend(`<div class="top-bar" style="background: ${fundo}; color: ${cor};">${html}</div>`);
  
  if($('.top-bar').children().length > 1){
    $('.top-bar').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  }
}


theme.productionSim = function(){
  $(`.logo img`).attr(`src`, `${theme.assetsPath}/logo_completo.png`)
}

$(document).ready(function() {
    theme.build.header();
    theme.build.footer();
    theme.build.productPage();
    theme.productionSim();
});

$(window).load(function(){
    let topBarHeight_ = $(`.top-bar`).innerHeight();
      let headerHeight_ = $(`#cabecalho`).innerHeight();
      document.body.style.setProperty('--topbarHeight', `${topBarHeight_}px`); 
      document.body.style.setProperty('--headerHeight', `${headerHeight_}px`); 
})
$(document).ready(function(){
    theme.build.topBar('var(--secondary)', '#fff', '<span>PRIMEIRA TROCA GRÁTIS</span><span>FRETE GRÁTIS A PARTIR DE R$ 500</span><span>5% OFF PARA PAGAMENTO NO PIX</span>');
    let topBarHeight_ = $(`.top-bar`).innerHeight();
      let headerHeight_ = $(`#cabecalho`).innerHeight();
      document.body.style.setProperty('--topbarHeight', `${topBarHeight_}px`); 
      document.body.style.setProperty('--headerHeight', `${headerHeight_}px`); 
      
      
    if($(`.pagina-categoria, .pagina-marca, .pagina-busca`).length && window.innerWidth > 990){
        $(`.secao-principal > .conteudo .ordenar-listagem > div > .span6.clearfix`).prepend(`<button type="button" class="c-toggleFilters"><i class="fa fa-filter"></i> Exibir Filtros</button>`)
    
        var $coluna = $('.secao-principal > .coluna');
        var $conteudo = $('.secao-principal > .conteudo');
        $coluna.hide();
        $conteudo.removeClass('span9').addClass('span12');
        $(`.listagem > ul > li > ul > li`).unwrap().unwrap();
        $('.c-toggleFilters').on('click', function() {
          $('body').toggleClass('filters-active');
          // Toggle button text
          if ($('body').hasClass('filters-active')) {
            $(this).html('<i class="fa fa-filter"></i> Ocultar Filtros');
          } else {
            $(this).html('<i class="fa fa-filter"></i> Exibir Filtros');
          }
          // Toggle coluna classes
          
          if ($coluna.is(':visible')) {
            $coluna.hide();
            $conteudo.removeClass('span9').addClass('span12');
          } else {
            $coluna.show();
            $conteudo.removeClass('span12').addClass('span9');
          }
        });
    }
})