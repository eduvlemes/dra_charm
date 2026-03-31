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

    document.querySelectorAll('[class]').forEach(function (el) {
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
