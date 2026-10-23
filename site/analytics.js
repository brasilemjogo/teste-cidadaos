/* Contagem de acessos na Vercel; não lê nem envia respostas do quiz. */
(() => {
  if (location.hostname !== 'brasilemjogo-teste.vercel.app') return;

  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  window.va('beforeSend', event => {
    if (event.type !== 'pageview') return null;
    const url = new URL(event.url);
    url.search = '';
    url.hash = '';
    return { ...event, url: url.toString() };
  });

  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
})();
