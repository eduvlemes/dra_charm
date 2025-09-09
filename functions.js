document.addEventListener('DOMContentLoaded', function() {
  const pagina = document.querySelector('.pagina-pagina');
  if (pagina) {
    const corpo = pagina.querySelector('#corpo');
    if (corpo) {
      fetch('http://127.0.0.1:5500/x.html')
        .then(response => response.text())
        .then(html => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          corpo.insertBefore(tempDiv, corpo.firstChild);
        })
        .catch(error => {
          console.error('Erro ao carregar sobre.html:', error);
        });
    }
  }
});