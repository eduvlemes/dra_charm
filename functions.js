
theme.build.header = function() {
          $(`.carrinho > a > i`).remove()
          $(`.carrinho > a`).prepend(`<img class=ico src="${theme.assetsPath}/shopping-cart_7411136.png" alt="Carrinho de Compras">`)
          $(`<button type="button" class="icon-search" id="c-search"></button>`).insertBefore(`.carrinho`);
          $(`<a href="/conta/index" id="c-account"><img class=ico src="${theme.assetsPath}/user_1077063.png" alt="Minha Conta"></a>`).insertBefore(`.carrinho`);
        
          $(`#cabecalho .inferior > .hidden-phone`).addClass(`c-actions`);
          $(`.c-actions`).toggleClass(`span4 span3`);
          $(`.c-actions`).insertAfter(`#cabecalho .conteudo-topo`);
          $(`#cabecalho .conteudo-topo`).toggleClass(`span9 span6`);
          //$(`<h3 class="busca-titulo">O que você procura?</h3>`).prependTo(`.conteudo-topo .span8.busca-mobile`);
          $(`<button type="button" class="remove-visible-btn"></button>`).appendTo(`.conteudo-topo .span8.busca-mobile`).on('click', function() {
            $(`.conteudo-topo .span8.busca-mobile`).removeClass('visible');
          });
          //$(`.conteudo-topo .span8.busca-mobile input`).attr(`placeholder`,`Scrub, touca, jalecos...`);

          $('#c-search').on('click', function() {
            $('.conteudo-topo .span8.busca-mobile').addClass('visible');
          });

          if(window.innerWidth > 990){
            $(`.menu.superior`).appendTo(`#cabecalho .conteudo-topo.span6`)
          }

          const $cabecalho = $('#cabecalho');
          const isHomePage = $('.pagina-inicial').length > 0;
          
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
          
          document.body.style.setProperty('--cart-icon', `url(${theme.assetsPath}/shopping-cart_7411136.png)`);  
          document.body.style.setProperty('--truck-icon', `url(${theme.assetsPath}/pacotebranco.png)`);  
          document.body.style.setProperty('--return-icon', `url(${theme.assetsPath}/trocabranco.png)`);  
          document.body.style.setProperty('--account-icon', `url(${theme.assetsPath}/do-utilizador.png)`);  
          document.body.style.setProperty('--contact-icon', `url(${theme.assetsPath}/phone_1230180.png)`);  
        
          $(`.apx_header .atalho-menu`).append(`<img class=logo src="${theme.assetsPath}/menu.png" alt="Dra Charm">`);
    }