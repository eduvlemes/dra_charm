console.log('localhost loaded')

let theme = {}

theme.colors = {
  primary: '#ff3c6f',
  secondary: '#ff7cae',
  light: '#ffe0e8',
  focus: '#dc3545',
  gray: '#9a9a9a',
  black: '#171717',
}


if (window.location.hostname.includes('dracharm.com.br')){
  theme.assetsPath = "https://cdn.jsdelivr.net/gh/eduvlemes/dra_charm/assets";
} else {
  theme.assetsPath = `http://127.0.0.1:5500/assets`
}

theme.build = {}
theme.build.header = function() {
  // $(`#cabecalho .superior .acoes-conta`).insertBefore(`.hidden-phone > .carrinho`)
  $(`.carrinho > a > i`).remove()
  $(`.carrinho > a`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras">`)

  $(`.apx_header .icon-shopping-cart`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras">`)

  $(`<a href="/conta/index" id="c-account"><span>Entre ou<br>cadastre-se</span><img class=ico src="${theme.assetsPath}/user_1077063.png" alt="Minha Conta"></a>`).insertBefore(`.carrinho`);

  $(`#cabecalho .inferior > .hidden-phone`).addClass(`c-actions`);
  $(`.c-actions`).toggleClass(`span4 span3`);
  $(`.c-actions`).insertAfter(`#cabecalho .conteudo-topo`);
  $(`#cabecalho .conteudo-topo`).toggleClass(`span9 span6`);

  document.body.style.setProperty('--cart-icon', `url(${theme.assetsPath}/shopping-cart_7411136.png)`);  
}

theme.build.footer = function() {
  // $(`#rodape`).prepend(`<div id="c-footer"><div class="conteiner"></div></div>`)
  // $(`#rodape > #c-footer > .conteiner`).prepend(`<div class="security-seals"></div>`);
  // $(`#rodape > #c-footer > .conteiner`).prepend(`<div class="row-fluid"><div class="span7"><div class="row-fluid"><div class="span6 menu"></div><div class="span6 social"></div></div></div><div class="span5 resume"></div></div>`);

  // $(`.selos > ul`).appendTo(`.security-seals`);
  // $(`.selos > ul`).appendTo(`.security-seals`);

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
  
}

theme.build.productPage = function() {
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
  $(`#wrapTroque`).prepend(`<img loading="lazy" class="svgTroqueCommerce" src="https://cdn.awsli.com.br/1930/1930166/arquivos/selo-quadrado-novo.png" alt="A melhor plataforma de trocas e devoluções para Trocas" title="A melhor plataforma de trocas e devoluções para E-Commerce">`);
  });
  $(`.cep button`).text(`Calcular`);
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