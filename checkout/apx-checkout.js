
theme.functions = [];
theme.functions['pagina-carrinho'] = function(){
    if($('.carrinho-checkout').length > 0){
        //GIFT
        

        //END GIFT

        $(`#login-content, .checkout-alerta-seguro`).wrapAll(`<div class="caixa-sombreada theme_checkout-login invisible"></div>`);

        // Monitorar o elemento .identificacao e adicionar/remover classe .invisible em .theme_checkout-login
        //$(document).ready(function() {
            function checkIdentification() {
                if ($('.identificacao').css('display') === 'none') {
                    $('.theme_checkout-login').addClass('invisible');
                } else {
                    //$('.theme_checkout-login').removeClass('invisible');
                }
                $(`#id_email`).trigger(`keyup`);
            }

            // Verificação inicial
            checkIdentification();

            // Usar MutationObserver para detectar mudanças no estilo
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        checkIdentification();
                    }
                });
            });

            // Observar o elemento .identificacao se existir
            const identificacaoElement = document.querySelector('.identificacao');
            if (identificacaoElement) {
                observer.observe(identificacaoElement, {
                    attributes: true,
                    attributeFilter: ['style']
                });
            }
        //});
        
        theme.functions.checkoutPlaceholders();
        theme.functions.checkoutProductImage();

        $(`.li-box-payment-apple-pay, .li-box-payment-google-pay`).wrapAll(`<div id="mobile-payment-group"></div>`);
        $(`#mobile-payment-group`).prepend(`<span>Mais rápido - Sem digitar dados do cartão</span>`);

        $(`#mobile-payment-group`).after(`<span class="another-form-info">ou escolha outra forma</span>`);

        $(`[name="forma_pagamento"]`).change(function(){
            const dataCode = $(this).closest(`[data-code]`).data(`code`) || $(this).data(`code`);
            console.log(dataCode);

            if (dataCode === `cartao`) {
                theme.functions.onCartaoSelected();
            }
        });

        $(`#exibirFormasPagamento a`).click(function(){
            $(`#cart_selected_payment`).val('')
        });

        theme.functions.onCartaoSelected = function(){
            console.log(`Cartão selecionado`);
            $(`#cart_selected_payment`).val(`0`)
            // lógica para cartão aqui
        };

    }
};

theme.functions.checkoutPlaceholders = function(){
    document.querySelectorAll('.control-group').forEach(group => {
        const label = group.querySelector('label');
        const field = group.querySelector('input, select, textarea');

        if (!label || !field) return;

        // Texto limpo do label
        const labelText = label.textContent.trim();

        // Só adiciona placeholder se não existir
        if (!field.getAttribute('placeholder')) {
            field.setAttribute('placeholder', labelText);
        }
    });

    document.querySelectorAll('.control-group input, .control-group textarea')
    .forEach(field => {

        const group = field.closest('.control-group');

        const toggleFilled = () => {
        if (field.value && field.value.trim() !== '') {
            group.classList.add('is-filled');
        } else {
            group.classList.remove('is-filled');
        }
        };

        // Inicial (importante para autofill)
        toggleFilled();

        field.addEventListener('input', toggleFilled);
        field.addEventListener('change', toggleFilled);
        field.addEventListener('blur', toggleFilled);
        
        // Detectar autofill do navegador
        field.addEventListener('animationstart', (e) => {
            if (e.animationName === 'onAutoFillStart') {
                toggleFilled();
            }
        });
    });

    // Adicionar is-filled a todos os selects
    document.querySelectorAll('.control-group select').forEach(select => {
        const group = select.closest('.control-group');
        if (group) {
            group.classList.add('is-filled');
        }
    });

    // Verificação periódica para campos preenchidos dinamicamente
    const checkFilledFields = () => {
        document.querySelectorAll('.control-group input, .control-group textarea').forEach(field => {
            const group = field.closest('.control-group');
            if (field.value && field.value.trim() !== '') {
                group.classList.add('is-filled');
            } else {
                group.classList.remove('is-filled');
            }
        });
    };
    
    // Verificar após 100ms, 500ms e 1s (para capturar preenchimentos automáticos)
    setTimeout(checkFilledFields, 100);
    setTimeout(checkFilledFields, 500);
    setTimeout(checkFilledFields, 1000);

}
theme.functions.getMiniCartData = function(){
    return $.get(`/carrinho/minicart`);
}
theme.functions.checkoutProductImage = async function(){
    try {
        let cart = await theme.functions.getMiniCartData();
        cart = cart.carrinho ? cart.carrinho : false;
        console.log(cart)
        if (!cart || !cart.items) return;
        console.log(`aaa`)
        // Para cada produto no carrinho, inserir a imagem
        cart.items.forEach(product => {
            const td = document.querySelector(`td[data-produto-id="${product.id}"]`);
            if (td && product.images && product.images.length > 0) {
                // Verificar se já existe uma imagem
                if (!td.querySelector('img')) {
                    const produtoInfo = td.querySelector('.produto-info');
                    if (produtoInfo) {
                        // Buscar a imagem principal
                        const principalImage = product.images.find(img => img.principal === true);
                        const imagePath = principalImage ? principalImage.path : product.images[0].path;
                        
                        const img = document.createElement('img');
                        img.src = `https://cdn.awsli.com.br/600x600/${imagePath}`;
                        img.alt = product.name || 'Produto';
                        img.style.cssText = 'width: 60px; height: auto; border-radius: 4px; margin-right: 12px; float: left;';
                        produtoInfo.insertBefore(img, produtoInfo.firstChild);
                    }
                }
            }
        });
    } catch (error) {
        console.error('Erro ao buscar dados do carrinho:', error);
    }
}

theme.functions.checkoutPlaceholders = function(){
    document.querySelectorAll('.control-group').forEach(group => {
        const label = group.querySelector('label');
        const field = group.querySelector('input, select, textarea');

        if (!label || !field) return;

        // Texto limpo do label
        const labelText = label.textContent.trim();

        // Só adiciona placeholder se não existir
        if (!field.getAttribute('placeholder')) {
            field.setAttribute('placeholder', labelText);
        }
    });

    document.querySelectorAll('.control-group input, .control-group textarea')
    .forEach(field => {

        const group = field.closest('.control-group');

        const toggleFilled = () => {
        if (field.value && field.value.trim() !== '') {
            group.classList.add('is-filled');
        } else {
            group.classList.remove('is-filled');
        }
        };

        // Inicial (importante para autofill)
        toggleFilled();

        field.addEventListener('input', toggleFilled);
        field.addEventListener('change', toggleFilled);
        field.addEventListener('blur', toggleFilled);
        
        // Detectar autofill do navegador
        field.addEventListener('animationstart', (e) => {
            if (e.animationName === 'onAutoFillStart') {
                toggleFilled();
            }
        });
    });

    // Adicionar is-filled a todos os selects
    document.querySelectorAll('.control-group select').forEach(select => {
        const group = select.closest('.control-group');
        if (group) {
            group.classList.add('is-filled');
        }
    });

    // Verificação periódica para campos preenchidos dinamicamente
    const checkFilledFields = () => {
        document.querySelectorAll('.control-group input, .control-group textarea').forEach(field => {
            const group = field.closest('.control-group');
            if (field.value && field.value.trim() !== '') {
                group.classList.add('is-filled');
            } else {
                group.classList.remove('is-filled');
            }
        });
    };
    
    // Verificar após 100ms, 500ms e 1s (para capturar preenchimentos automáticos)
    setTimeout(checkFilledFields, 100);
    setTimeout(checkFilledFields, 500);
    setTimeout(checkFilledFields, 1000);

    // Toggle de personalizações nos itens do pedido
    $('[data-produto-id]').each(function() {
        const $td = $(this);
        const $lisPers = $td.find('li').filter(function() {
            return $(this).find('[style="text-transform: capitalize"]').length > 0;
        });

        if ($lisPers.length === 0) return;

        const $btn = $('<button type="button" class="toggle-personalizacoes">Ver Personalizações</button>');
        const $container = $('<li class="personalizacoes-container"><ul class="personalizacoes-lista"></ul></li>').hide();

        $lisPers.each(function() {
            $container.find('.personalizacoes-lista').append($(this).clone());
        });
        $lisPers.remove();

        $btn.on('click', function() {
            const isVisible = $container.is(':visible');
            $container.toggle();
            $(this).text(isVisible ? 'Ver Personalizações' : 'Fechar');
        });

        $td.find('.produto-info ul').append($btn);

        $td.find('.produto-info ul').append($container);
        
    });

}

theme.functions['pagina-carrinho']();
