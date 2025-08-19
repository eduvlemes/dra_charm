console.log('localhost loaded')

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
//   theme.assetsPath = "https://cdn.jsdelivr.net/gh/eduvlemes/dra_charm/assets";
// } else {
  theme.assetsPath = `http://127.0.0.1:5500/assets`
// }

theme.build = {}
theme.build.header = function() {
  // $(`#cabecalho .superior .acoes-conta`).insertBefore(`.hidden-phone > .carrinho`)
  $(`.carrinho > a > i`).remove()
  $(`.carrinho > a`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras">`)

  

  $(`<a href="/conta/index" id="c-account"><span>Entre ou<br>cadastre-se</span><img class=ico src="${theme.assetsPath}/user_1077063.png" alt="Minha Conta"></a>`).insertBefore(`.carrinho`);

  $(`#cabecalho .inferior > .hidden-phone`).addClass(`c-actions`);
  $(`.c-actions`).toggleClass(`span4 span3`);
  $(`.c-actions`).insertAfter(`#cabecalho .conteudo-topo`);
  $(`#cabecalho .conteudo-topo`).toggleClass(`span9 span6`);

  document.body.style.setProperty('--cart-icon', `url(${theme.assetsPath}/shopping-cart_7411136.png)`);  
  document.body.style.setProperty('--truck-icon', `url(${theme.assetsPath}/pacotebranco.png)`);  
  document.body.style.setProperty('--return-icon', `url(${theme.assetsPath}/trocabranco.png)`);  
  document.body.style.setProperty('--account-icon', `url(${theme.assetsPath}/do-utilizador.png)`);  
  document.body.style.setProperty('--contact-icon', `url(${theme.assetsPath}/phone_1230180.png)`);  

  $(`.apx_header .atalho-menu`).append(`<img class=logo src="${theme.assetsPath}/menu.png" alt="Dra Charm">`);

 
  $(window).load(function(){
     if(window.innerWidth < 990){
      $(`.busca-mobile .busca`).prependTo(`.apx-menu`)
    }
  })


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
  $(`<div id="apx-actions"></div>`).insertAfter(`.produto-compartilhar`);
  $(`.lista-favoritos`).appendTo(`#apx-actions`);
  $(`.lista-favoritos`).html(`<i class="fa fa-heart"></i>Adicionar aos favoritos`);
  $(window).on('load', function() {
    if($(`.cn-divVideo`).length > 0){
      $(`<button type="button" onclick="$('.cn-span').closest('a').click()" class="botao-video"><i class="fa fa-youtube-play"></i>Ver vídeo do produto</button>`).appendTo(`#apx-actions`);
    }
  });

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
};

theme.build.topBar = function(fundo, cor, html){
  $(`body`).prepend(`<div class="top-bar" style="background: ${fundo}; color: ${cor};">${html}</div>`);
}

theme.productionSim = function(){
  $(`.logo img`).attr(`src`, `${theme.assetsPath}/logo_completo.png`)
}

$(document).ready(function() {
    theme.build.header();
    theme.build.footer();
    theme.build.productPage();
    theme.productionSim();
    theme.build.topBar('var(--secondary)', '#fff', '<span>PRIMEIRA TROCA GRÁTIS</span>');
});