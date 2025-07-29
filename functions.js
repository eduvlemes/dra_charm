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
theme.assetsPath = `http://127.0.0.1:5500/assets`
theme.build = {}
theme.build.header = function() {
  // $(`#cabecalho .superior .acoes-conta`).insertBefore(`.hidden-phone > .carrinho`)
  $(`.carrinho > a > i`).remove()
  $(`.carrinho > a`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras" ">`)

  $(`<a href="/conta/index" id="c-account"><span>Entre ou<br>cadastre-se</span><img class=ico src="${theme.assetsPath}/user_1077063.png" alt="Minha Conta"></a>`).insertBefore(`.carrinho`);

  $(`#cabecalho .inferior > .hidden-phone`).addClass(`c-actions`);
  $(`.c-actions`).toggleClass(`span4 span3`);
  $(`.c-actions`).insertAfter(`#cabecalho .conteudo-topo`);
  $(`#cabecalho .conteudo-topo`).toggleClass(`span9 span6`);


  
}

theme.productionSim = function(){
  $(`.logo img`).attr(`src`, `${theme.assetsPath}/logo_completo.png`)
}

$(document).ready(function() {
    theme.build.header();
    theme.productionSim();
});