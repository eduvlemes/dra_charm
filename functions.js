$(document).ready(function(){
  if($('.pagina-produto').length > 0){
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
  }
});

//<button id="charm-tabela-medidas" style="display: flex;">
  //            <i class="fa fa-tshirt fa-2x"></i>
              //<div class="btn-txt">
//                <p class="title">Tabela de Medidas da Peça</p>
                //<p class="caption">Compare as medidas do produto com um semelhante item que você tem na sua //casa.</p>
              //</div>
            //</button>