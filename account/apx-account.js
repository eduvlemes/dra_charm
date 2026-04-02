if (window.location.pathname.includes('/conta/')) {
  document.body.classList.add('apx_account');

  // Injeta Phosphor Icons via CDN
  (function () {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css';
    document.head.appendChild(link);
  })();

  document.addEventListener('DOMContentLoaded', function () {
    // Mapa: classe legada → classe Phosphor Icons (peso regular)
    var iconMap = {
      'icon-user':               'ph-user',
      'icon-lock':               'ph-lock',
      'icon-unlock':             'ph-lock-open',
      'icon-envelope':           'ph-envelope',
      'icon-home':               'ph-house',
      'icon-phone':              'ph-phone',
      'icon-search':             'ph-magnifying-glass',
      'icon-ok':                 'ph-check',
      'icon-check':              'ph-check',
      'icon-remove':             'ph-x',
      'icon-close':              'ph-x',
      'icon-trash':              'ph-trash',
      'icon-pencil':             'ph-pencil',
      'icon-edit':               'ph-pencil-simple',
      'icon-shopping-cart':      'ph-shopping-cart',
      'icon-heart':              'ph-heart',
      'icon-star':               'ph-star',
      'icon-map-marker':         'ph-map-pin',
      'icon-chevron-right':      'ph-caret-right',
      'icon-chevron-left':       'ph-caret-left',
      'icon-chevron-up':         'ph-caret-up',
      'icon-chevron-down':       'ph-caret-down',
      'icon-arrow-right':        'ph-arrow-right',
      'icon-arrow-left':         'ph-arrow-left',
      'icon-plus':               'ph-plus',
      'icon-minus':              'ph-minus',
      'icon-cog':                'ph-gear',
      'icon-info-sign':          'ph-info',
      'icon-warning-sign':       'ph-warning',
      'icon-time':               'ph-clock',
      'icon-camera':             'ph-camera',
      'icon-list':               'ph-list',
      'icon-list-alt':           'ph-list-checks',
      'icon-tag':                'ph-tag',
      'icon-tags':               'ph-tag',
      'icon-bookmark':           'ph-bookmark',
      'icon-print':              'ph-printer',
      'icon-upload':             'ph-upload',
      'icon-download':           'ph-download',
      'icon-globe':              'ph-globe',
      'icon-eye-open':           'ph-eye',
      'icon-eye-close':          'ph-eye-slash',
      'icon-credit-card':        'ph-credit-card',
      'icon-gift':               'ph-gift',
      'icon-calendar':           'ph-calendar',
      'icon-comment':            'ph-chat',
      'icon-comments':           'ph-chats',
      'icon-key':                'ph-key',
      'icon-spinner':            'ph-spinner',
      'icon-sort':               'ph-arrows-down-up',
      'icon-sort-down':          'ph-sort-descending',
      'icon-sort-up':            'ph-sort-ascending',
      'icon-refresh':            'ph-arrow-clockwise',
      'icon-share':              'ph-share',
      'icon-retweet':            'ph-repeat',
      'icon-signal':             'ph-chart-bar',
      'icon-barcode':            'ph-barcode',
      'icon-qrcode':             'ph-qr-code',
      'icon-leaf':               'ph-leaf',
      'icon-fire':               'ph-fire',
      'icon-plane':              'ph-airplane',
      'icon-music':              'ph-music-note',
      'icon-film':               'ph-film-strip',
      'icon-move':               'ph-arrows-out-cardinal',
      'icon-certificate':        'ph-certificate',
      'icon-circle-arrow-right': 'ph-arrow-circle-right',
      'icon-circle-arrow-left':  'ph-arrow-circle-left',
      'icon-circle-arrow-up':    'ph-arrow-circle-up',
      'icon-circle-arrow-down':  'ph-arrow-circle-down',
      'icon-check-sign':         'ph-check-circle',
      'icon-rss':                'ph-rss',
      'icon-group':              'ph-users',
    };

    document.querySelectorAll('#corpo [class]').forEach(function (el) {
      el.classList.forEach(function (cls) {
        if (iconMap[cls]) {
          el.classList.remove(cls);
          el.classList.add('ph', iconMap[cls]);
        }
      });
    });

    // Substitui <legend> dentro de .abas-conteudo por <strong class="legend">
    document.querySelectorAll('.abas-conteudo legend').forEach(function (legend) {
      var strong = document.createElement('strong');
      strong.className = 'legend ' + legend.className;
      strong.innerHTML = legend.innerHTML;
      legend.parentNode.replaceChild(strong, legend);
    });
  });
}

if (window.location.pathname.includes('/conta/login')) {
  document.addEventListener('DOMContentLoaded', function () {
    var target = document.querySelector('.cadastro-logar > .span6:last-child');
    if (target) {
      var span = document.createElement('span');
      span.className = 'ou';
      span.textContent = 'ou';
      target.parentNode.insertBefore(span, target);
    }
  });
}

if (window.location.pathname.includes('/conta/index')) {
  document.addEventListener('DOMContentLoaded', function () {
    var base = '#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div > div:nth-child(1) > div';
    var toMove   = document.querySelector(base + ' > div:nth-child(2) > fieldset:nth-child(1)');
    var insertRef = document.querySelector(base + ' > div:nth-child(1) > fieldset');
    if (toMove && insertRef && insertRef.parentNode) {
      insertRef.parentNode.insertBefore(toMove, insertRef.nextSibling);
    }
  });
}

if (window.location.pathname.includes('/listar_reduzido')) {
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div:nth-child(1) > div:nth-child(1) > div > span:nth-child(4)');
    if (el) {
      el.innerHTML = 'Envio rápido em até 1 dia útil.<br>Prazo contado após postagem. Consulte a <a href="/pagina/politica-de-envio.html">Política de Envio</a>';
    }
  });
}

if (window.location.pathname.includes('/conta/endereco/criar')) {
  document.addEventListener('DOMContentLoaded', function () {
    var acaoEditar = document.querySelector('.acao-editar');
    var cadastro   = document.querySelector('.cadastro');
    if (acaoEditar && cadastro) {
      cadastro.appendChild(acaoEditar);
    }
  });
}

if (window.location.pathname.includes('/conta/favorito')) {
  document.addEventListener('DOMContentLoaded', function () {
    var table = document.querySelector('.pagina-favorito-listar table.table');
    if (!table) return;

    var grid = document.createElement('div');
    grid.className = 'apx-fav-grid';

    table.querySelectorAll('tbody tr').forEach(function (row) {
      var cells = row.querySelectorAll('td');
      if (cells.length < 4) return;

      var imgLink  = cells[0].querySelector('a');
      var img      = cells[0].querySelector('img');
      var nameLink = cells[1].querySelector('a');
      var buyLink  = cells[2].querySelector('a');
      var removeLink = cells[3].querySelector('a');

      var card = document.createElement('div');
      card.className = 'apx-fav-card';

      var imgAnchor = document.createElement('a');
      imgAnchor.href = imgLink ? imgLink.href : '#';
      imgAnchor.className = 'apx-fav-card__image';
      if (img) {
        var newImg = img.cloneNode(true);
        newImg.src = newImg.src.replace('/64x64/', '/400x400/');
        imgAnchor.appendChild(newImg);
      }

      var body = document.createElement('div');
      body.className = 'apx-fav-card__body';

      var name = document.createElement('a');
      name.href = nameLink ? nameLink.href : '#';
      name.className = 'apx-fav-card__name';
      name.textContent = nameLink ? nameLink.textContent.trim() : '';

      var actions = document.createElement('div');
      actions.className = 'apx-fav-card__actions';
      if (buyLink) actions.appendChild(buyLink.cloneNode(true));
      if (removeLink) actions.appendChild(removeLink.cloneNode(true));

      body.appendChild(name);
      body.appendChild(actions);
      card.appendChild(imgAnchor);
      card.appendChild(body);
      grid.appendChild(card);
    });

    table.parentNode.replaceChild(grid, table);
  });
}
(function () {
  if (window.location.pathname.includes('/carrinho/index')) {
    $(`.tabela-carrinho .imagem img`).each(function () {  
      const src = $(this).attr('src');
      $(this).attr('src', src.replace('/64x64/', '/400x400/'));
    });
    
  }
})();
