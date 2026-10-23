(() => {
  'use strict';
  const quizzes = window.QUIZZES;
  const storageKey = `em-jogo:questionarios:v2:${new URL('./', location.href).pathname}`;
  const main = document.querySelector('#main');
  const dialog = document.querySelector('#dialog');
  const dialogBody = document.querySelector('#dialog-body');
  const labels = { for: 'Sou a favor', against: 'Sou contra', skip: 'Prefiro não responder', yes: 'Sim', no: 'Não' };
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="./assets/icons.svg#${name}"/></svg>`;
  let persistent = true;
  let toastTimer;
  let lastFocus;
  let state;
  const empty = quiz => ({ answers: Array(quiz.questions.length).fill(null), extra: null });
  function sanitize(raw) {
    const result = {};
    for (const quiz of quizzes) {
      const item = raw?.[quiz.id];
      result[quiz.id] = empty(quiz);
      if (Array.isArray(item?.answers) && item.answers.length === quiz.questions.length) {
        result[quiz.id].answers = item.answers.map(value => ['for', 'against', 'skip'].includes(value) ? value : null);
        result[quiz.id].extra = ['yes', 'no', 'skip'].includes(item.extra) ? item.extra : null;
      }
    }
    return result;
  }
  try { state = sanitize(JSON.parse(localStorage.getItem(storageKey) || '{}')); }
  catch { state = sanitize({}); }
  try {
    localStorage.setItem(`${storageKey}:check`, '1');
    localStorage.removeItem(`${storageKey}:check`);
  } catch { persistent = false; }
  function save() {
    if (!persistent) return;
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch {
      persistent = false;
      toast('O navegador bloqueou o salvamento. As respostas ficam disponíveis enquanto esta página estiver aberta.');
      document.querySelectorAll('.local-note').forEach(element => { element.innerHTML = storageText(); });
    }
  }
  const count = quiz => state[quiz.id].answers.filter(value => value !== null).length;
  const complete = quiz => count(quiz) === quiz.questions.length && (!quiz.extra || state[quiz.id].extra !== null);
  const nextIndex = quiz => state[quiz.id].answers.findIndex(value => value === null);
  const resumeRoute = quiz => complete(quiz) ? `${quiz.id}/resultado` : nextIndex(quiz) >= 0 ? `${quiz.id}/pergunta/${nextIndex(quiz) + 1}` : `${quiz.id}/extra`;
  function navigate(hash) {
    if (location.hash === `#${hash}` || (!hash && !location.hash)) render();
    else location.hash = hash;
  }
  function toast(text) {
    clearTimeout(toastTimer);
    const element = document.querySelector('#toast');
    element.textContent = text;
    element.classList.add('visible');
    toastTimer = setTimeout(() => element.classList.remove('visible'), 5000);
  }
  function artwork(quiz) {
    const attrs = 'class="artwork" viewBox="0 0 240 160" aria-hidden="true"';
    if (quiz.theme === 'tax') return `<svg ${attrs}><circle cx="156" cy="72" r="66" fill="#ffda32"/><path d="M24 136h196" stroke="#124731" stroke-width="2"/><g fill="#fff5b6" stroke="#124731" stroke-width="3"><path d="M35 93v30c0 15 77 15 77 0V93"/><ellipse cx="73.5" cy="93" rx="38.5" ry="11"/><path d="M35 105c0 15 77 15 77 0m-77 12c0 15 77 15 77 0" fill="none"/></g><g transform="rotate(-17 143 80)"><rect x="100" y="42" width="85" height="62" rx="8" fill="#13864b" stroke="#124731" stroke-width="3"/><circle cx="142" cy="73" r="19" fill="#ffda32"/><path d="M145 60c-18 1-18 13-3 13s14 14-4 13m4-29v33" fill="none" stroke="#124731" stroke-width="3" stroke-linecap="round"/></g><path d="m47 38 6 7-6 7-6-7zm150 67 6 7-6 7-6-7z" fill="#124731"/></svg>`;
    if (quiz.theme === 'safety') return `<svg ${attrs}><circle cx="150" cy="80" r="68" fill="#d63040"/><path d="m48 54 59-25 59 25v39c0 30-59 51-59 51S48 123 48 93z" fill="#f3f0e7" stroke="#161616" stroke-width="4"/><path d="m78 85 20 20 38-44" fill="none" stroke="#bd1629" stroke-width="10"/><path d="m170 40 15-15m-7 42h23m-31 43 17 13" fill="none" stroke="#161616" stroke-width="3"/><path d="M17 147h202" stroke="#161616" stroke-width="2"/></svg>`;
    return `<svg ${attrs}><circle cx="157" cy="73" r="64" fill="#e94b92"/><circle cx="197" cy="36" r="16" fill="#ffce42"/><path d="M38 144h169" stroke="#4b2380" stroke-width="3"/><circle cx="104" cy="64" r="37" fill="#f8eeff" stroke="#4b2380" stroke-width="6"/><path d="M104 103v39m-18-14h36" stroke="#4b2380" stroke-width="7"/><path d="m80 65 16 15 31-32" fill="none" stroke="#8255c0" stroke-width="6" stroke-linecap="round"/><path d="m38 36 6-8 6 8-6 8zM182 112l6-8 6 8-6 8z" fill="#ffce42"/></svg>`;
  }
  function storageText() {
    return `${icon('lock')}<span>${persistent ? 'Progresso salvo apenas neste navegador.' : 'Salvamento bloqueado. As respostas duram só enquanto esta página estiver aberta.'}</span>`;
  }
  const storageNote = () => `<p class="local-note">${storageText()}</p>`;
  function home() {
    return `<section class="home-hero"><div><h1>ESTÁ INDECISO?<br>AINDA NÃO SABE<br>EM QUEM <span class="underline">VOTAR?</span></h1><p>Faça o teste agora!</p></div></section><section class="quiz-grid" aria-label="Testes disponíveis">${quizzes.map(quiz => {
      const done = complete(quiz);
      const answered = count(quiz);
      const status = done ? 'Concluído · ver respostas' : answered ? `Continuar · ${answered}/${quiz.questions.length}${quiz.extra && answered === quiz.questions.length ? ' + extra' : ''}` : `${quiz.questions.length} perguntas${quiz.extra ? ' + extra' : ''}`;
      return `<a class="quiz-card theme-${quiz.theme}" href="#${done ? `${quiz.id}/resultado` : quiz.id}"><div class="card-top"><span class="card-time">${icon('clock')}${quiz.time}</span></div>${artwork(quiz)}<div class="card-content"><h3>${quiz.title}</h3><p>${quiz.description}</p><div class="card-bottom"><span>${status}</span><span class="circle-arrow">${icon('arrow')}</span></div></div></a>`;
    }).join('')}</section>`;
  }
  function intro(quiz) {
    return `<div class="quiz-shell theme-${quiz.theme}"><a class="back-link" href="#">${icon('back')}Todos os testes</a><section class="intro-panel"><div class="intro-visual"><span class="eyebrow">${quiz.questions.length} PERGUNTAS${quiz.extra ? ' + EXTRA' : ''}</span>${artwork(quiz)}<h1>${quiz.title}</h1></div><div class="intro-content"><p>${quiz.intro}</p><div class="rules"><p>Escolha “sou a favor” ou “sou contra”. Ao final, confira suas respostas e informações sobre o tema.</p></div><button class="button primary" data-action="start">${count(quiz) ? 'Continuar meu teste' : 'Começar o teste'}${icon('arrow')}</button>${storageNote()}</div></section></div>`;
  }
  function question(quiz, index, extra = false) {
    const value = extra ? state[quiz.id].extra : state[quiz.id].answers[index];
    const number = extra ? quiz.questions.length : index;
    const heading = extra ? quiz.extra : quiz.questions[index];
    const options = extra ? [['yes', 'Sim', 'Deveriam deixar de ter “RG”', 'check'], ['no', 'Não', 'Não deveriam deixar de ter “RG”', 'minus']] : [['for', 'Sou a favor', 'Concordo com essa ideia', 'check'], ['against', 'Sou contra', 'Não concordo com essa ideia', 'minus']];
    return `<div class="question-shell theme-${quiz.theme}"><div class="question-top"><a class="back-link" href="#">${icon('back')}Sair e salvar</a><span class="eyebrow">${quiz.title}</span></div><div class="question-progress"><span>${extra ? 'Pergunta complementar' : `Pergunta <strong>${index + 1}</strong> de ${quiz.questions.length}`}</span><span>${Math.round(number / quiz.questions.length * 100)}%</span></div><progress value="${number}" max="${quiz.questions.length}" aria-label="Progresso do teste">${number} de ${quiz.questions.length}</progress><section class="question-body"><form id="question-form"><fieldset><legend><span id="question-text">${heading}</span></legend>${extra ? '<p class="extra-context">No folheto, “RG” se refere à identificação gravada na munição.</p>' : ''}<div class="answer-options">${options.map(([id, title, detail, symbol]) => `<label class="answer-option"><input type="radio" name="opinion" value="${id}" ${value === id ? 'checked' : ''}><span class="answer-icon">${icon(symbol)}</span><span><strong>${title}</strong></span><span class="radio-mark"></span></label>`).join('')}</div></fieldset><div class="question-navigation"><button type="button" class="back-button" data-action="previous">${icon('back')}${number ? 'Anterior' : 'Introdução'}</button><button type="submit" class="button primary" id="next-button" ${value === null ? 'disabled' : ''}>${extra || (!quiz.extra && index === quiz.questions.length - 1) ? 'Ver meu registro' : 'Continuar'}${icon('arrow')}</button></div><div class="question-hints"><button type="button" class="text-button skip-question" data-action="skip">Prefiro não responder</button><span id="selection-hint" role="status">${value === 'skip' ? 'Você pulou esta pergunta.' : value ? 'Você pode mudar sua resposta.' : 'Escolha uma opção para continuar.'}</span></div></form>${complete(quiz) ? `<a class="return-result" href="#${quiz.id}/resultado">Voltar ao meu registro${icon('arrow')}</a>` : ''}</section>${storageNote()}</div>`;
  }
  function consultationLink(reference) {
    return `<a class="consultation-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">Consultar: ${reference.label}<span aria-hidden="true"> ↗</span><span class="sr-only"> (abre em outra aba)</span></a>`;
  }
  function comparison(quiz) {
    return `<section class="comparison-section" aria-labelledby="comparison-heading"><div class="reading-heading"><h2 id="comparison-heading">Lula e Flávio Bolsonaro</h2><p>Medidas e propostas sobre este tema. O conteúdo é igual para todos.</p></div><div class="comparison-grid">${quiz.comparison.map(item => `<article class="comparison-card"><span class="eyebrow">${item.status}</span><h3>${item.name}</h3><p>${item.text}</p><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.source}<span aria-hidden="true"> ↗</span><span class="sr-only"> (abre em outra aba)</span></a></article>`).join('')}</div><p class="source-note">Recorte de registros e planos; não é uma lista completa. Propostas dependem de aprovação e implementação. Consulta em 23/10/2026.</p></section>`;
  }
  function questionContext(reference) {
    if (!reference.positions) return '';
    return `<section class="question-context" aria-label="Registros sobre esta pergunta"><h3>Sobre este ponto</h3>${reference.positions.map(item => `<div class="position-record"><p><strong>${item.name}:</strong> ${item.text}</p><a href="${item.url}" target="_blank" rel="noopener noreferrer">Fonte: ${item.source}<span aria-hidden="true"> ↗</span><span class="sr-only"> (abre em outra aba)</span></a></div>`).join('')}</section>`;
  }
  function review(quiz) {
    return `<section class="answer-review"><h2>Suas respostas</h2><ol>${quiz.questions.map((text, index) => `<li><div class="review-number">${String(index + 1).padStart(2, '0')}</div><div class="review-content"><p>${text}</p><div><span class="review-answer">${labels[state[quiz.id].answers[index]]}</span><a href="#${quiz.id}/pergunta/${index + 1}" aria-label="Alterar resposta da pergunta ${index + 1}">Alterar</a></div>${questionContext(quiz.questionSources[index])}${consultationLink(quiz.questionSources[index])}</div></li>`).join('')}${quiz.extra ? `<li><div class="review-number">+</div><div class="review-content"><p>${quiz.extra}</p><div><span class="review-answer">${labels[state[quiz.id].extra]}</span><a href="#${quiz.id}/extra">Alterar</a></div>${consultationLink(quiz.extraSource)}</div></li>` : ''}</ol></section>`;
  }
  function resultSummary(quiz) {
    const answers = state[quiz.id].answers;
    const total = quiz.questions.length;
    const favorable = answers.filter(answer => answer === 'for').length;
    const against = answers.filter(answer => answer === 'against').length;
    const skipped = answers.filter(answer => answer === 'skip').length;
    const description = 'Reveja suas respostas e consulte as fontes.';
    if (favorable > total / 2) return {
      heading: 'Sua opinião é favorável a políticas do governo Lula!',
      subtitle: 'VOTE 13!',
      tone: 'favorable', symbol: 'check',
      score: `${favorable}/${total} a favor`, description
    };
    if (against > total / 2) return {
      heading: 'Sua opinião é contrária a essas afirmações',
      tone: 'against', symbol: 'cross',
      score: `${against}/${total} contra`, description
    };
    if (skipped > total / 2) return {
      heading: 'Você ainda está indeciso sobre vários temas!',
      tone: 'neutral', symbol: 'question',
      score: `${skipped}/${total} sem resposta`,
      description: 'Pesquise sobre os temas nas fontes abaixo.'
    };
    return {
      heading: 'Suas respostas não indicam uma maioria',
      tone: 'neutral', symbol: 'question',
      score: `${favorable} a favor · ${against} contra · ${skipped} sem resposta`, description
    };
  }
function result(quiz) {
  const summary = resultSummary(quiz);
  const subtitle = 'Seu texto adicional aqui';

  return `
    <div class="result-shell theme-${quiz.theme}">
      <div class="result-top">
        <a class="back-link" href="#">
          ${icon('back')}Todos os testes
        </a>
        <span class="eyebrow">${quiz.title}</span>
      </div>

      <section class="result-hero result-${summary.tone}">
        <div class="result-copy">
          <span class="eyebrow">TESTE CONCLUÍDO</span>
          <h1>${summary.heading}</h1>
          <p class="result-subtitle">${subtitle}</p>
          <p class="result-score">${summary.score}</p>
          <p>${summary.description}</p>
        </div>

        <div class="result-symbol" aria-hidden="true">
          ${icon(summary.symbol)}
        </div>
      </section>

      ${review(quiz)}

      <section class="reading-section">
        <div class="reading-heading">
          <h2>Entenda o tema</h2>
        </div>

        <div class="reading-grid">
          ${quiz.notes.map(note => `
            <article class="reading-card">
              <span class="eyebrow">${note.label}</span>
              <h3>${note.title}</h3>
              <p>${note.text}</p>
              <a
                href="${note.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${note.source}
                <span aria-hidden="true">↗</span>
                <span class="sr-only"> (abre em outra aba)</span>
              </a>
            </article>
          `).join('')}
        </div>

        <p class="source-note">
          Fontes consultadas em 22/10/2026. As perguntas mantêm a redação
          do material original, inclusive seus exemplos e referências
          de época. Normas e tramitações podem mudar.
        </p>
      </section>

      ${comparison(quiz)}

      <div class="result-actions">
        <a class="button primary" href="#">
          Escolher outro teste${icon('arrow')}
        </a>
        <button class="button secondary" data-action="copy-link">
          ${icon('link')}Copiar link do teste
        </button>
        <button class="text-button" data-action="reset">
          Apagar e refazer
        </button>
      </div>

      <p class="share-note">
        O link abre apenas o teste, sem suas respostas.
      </p>

      ${storageNote()}
    </div>
  `;
}
  function route() {
    const [id, view, position] = location.hash.slice(1).split('/');
    const quiz = quizzes.find(item => item.id === id);
    if (!quiz) return { view: 'home' };
    if (view === 'resultado') {
      if (complete(quiz)) return { quiz, view: 'result' };
      return nextIndex(quiz) >= 0 ? { quiz, view: 'question', index: nextIndex(quiz) } : { quiz, view: 'extra' };
    }
    if (view === 'extra' && quiz.extra) {
      return nextIndex(quiz) >= 0 ? { quiz, view: 'question', index: nextIndex(quiz) } : { quiz, view: 'extra' };
    }
    const index = Number(position) - 1;
    if (view === 'pergunta' && Number.isInteger(index) && index >= 0 && index < quiz.questions.length) return { quiz, view: 'question', index };
    return { quiz, view: 'intro' };
  }
  function render() {
    const current = route();
    if (current.quiz) {
      const canonical = current.view === 'question' ? `${current.quiz.id}/pergunta/${current.index + 1}` : current.view === 'extra' ? `${current.quiz.id}/extra` : current.view === 'result' ? `${current.quiz.id}/resultado` : current.quiz.id;
      if (location.hash !== `#${canonical}`) history.replaceState(null, '', `#${canonical}`);
    }
    document.body.className = current.quiz ? `theme-${current.quiz.theme}` : '';
    main.innerHTML = current.view === 'home' ? home() : current.view === 'intro' ? intro(current.quiz) : current.view === 'result' ? result(current.quiz) : question(current.quiz, current.index, current.view === 'extra');
    document.title = current.quiz ? `${current.quiz.title} · Em jogo` : 'Em jogo · Faça o teste';
    document.querySelector('meta[name="theme-color"]').content = current.quiz?.theme === 'women' ? '#4b2380' : current.quiz?.theme === 'safety' ? '#171717' : '#124731';
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  function showDialog(html) {
    if (!dialog.open) lastFocus = document.activeElement;
    dialogBody.innerHTML = html;
    if (!dialog.open) dialog.showModal();
  }
  function privacy() {
    showDialog(`<h2 id="dialog-title">Suas respostas ficam aqui.</h2><p>As respostas são salvas só neste navegador e não são enviadas a um servidor. Não há cadastro nem rastreadores.</p><p>Outras pessoas que usam este navegador podem ver o registro. Para removê-lo, use o botão abaixo ou limpe os dados do navegador.</p><p>A hospedagem pode registrar acessos ao site, sem as respostas.${persistent ? '' : ' O salvamento está bloqueado; as respostas duram só enquanto esta página estiver aberta.'}</p><button class="button danger" data-action="confirm-clear">Apagar respostas dos três testes</button>`);
  }
  function advance(current) {
    const { quiz, index, view } = current;
    if (view === 'extra') navigate(resumeRoute(quiz));
    else if (index < quiz.questions.length - 1) navigate(`${quiz.id}/pergunta/${index + 2}`);
    else navigate(resumeRoute(quiz));
  }
  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const current = route();
    const quiz = current.quiz;
    switch (button.dataset.action) {
      case 'privacy': privacy(); break;
      case 'close': dialog.close(); break;
      case 'start': navigate(resumeRoute(quiz)); break;
      case 'previous': navigate(current.view === 'extra' ? `${quiz.id}/pergunta/${quiz.questions.length}` : current.index ? `${quiz.id}/pergunta/${current.index}` : quiz.id); break;
      case 'skip':
        if (current.view === 'extra') state[quiz.id].extra = 'skip';
        else state[quiz.id].answers[current.index] = 'skip';
        save(); advance(current); break;
      case 'reset':
        showDialog(`<h2 id="dialog-title">Refazer este teste?</h2><p>As respostas de “${quiz.title}” serão apagadas deste navegador. Os demais testes continuam salvos.</p><div class="dialog-actions"><button class="button secondary" data-action="close">Cancelar</button><button class="button danger" data-action="do-reset" data-quiz="${quiz.id}">Apagar e refazer</button></div>`); break;
      case 'do-reset': {
        const target = quizzes.find(item => item.id === button.dataset.quiz);
        state[target.id] = empty(target); save(); dialog.close(); navigate(target.id); toast('Respostas deste teste apagadas.'); break;
      }
      case 'confirm-clear':
        showDialog('<h2 id="dialog-title">Apagar todas as respostas?</h2><p>Isso apaga o progresso e o registro dos três testes neste navegador.</p><div class="dialog-actions"><button class="button secondary" data-action="close">Cancelar</button><button class="button danger" data-action="do-clear">Apagar tudo</button></div>'); break;
      case 'do-clear':
        state = sanitize({});
        try { localStorage.removeItem(storageKey); } catch { /* O estado em memória já foi limpo. */ }
        dialog.close(); navigate(''); toast('Suas respostas foram apagadas.'); break;
      case 'copy-link': {
        const url = new URL(location.href); url.hash = quiz.id; url.search = '';
        try { await navigator.clipboard.writeText(url.href); toast('Link do teste copiado, sem suas respostas.'); }
        catch {
          showDialog('<h2 id="dialog-title">Copiar link do teste</h2><p>Selecione e copie o endereço. Ele não contém suas respostas.</p><input class="copy-input" aria-label="Link do teste" readonly>');
          const input = dialogBody.querySelector('input'); input.value = url.href; input.select();
        }
        break;
      }
    }
  });
  document.addEventListener('change', event => {
    if (!event.target.matches('input[name="opinion"]')) return;
    const current = route();
    if (current.view === 'extra') state[current.quiz.id].extra = event.target.value;
    else if (current.view === 'question') state[current.quiz.id].answers[current.index] = event.target.value;
    else return;
    save();
    document.querySelector('#next-button').disabled = false;
    document.querySelector('#selection-hint').textContent = 'Você pode mudar sua resposta.';
  });
  document.addEventListener('submit', event => {
    if (event.target.id !== 'question-form') return;
    event.preventDefault();
    const current = route();
    const answer = current.view === 'extra' ? state[current.quiz.id].extra : state[current.quiz.id].answers[current.index];
    if (answer !== null) advance(current);
  });
  dialog.addEventListener('close', () => { if (lastFocus?.isConnected) lastFocus.focus(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  window.addEventListener('hashchange', render);
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    try { state = sanitize(JSON.parse(localStorage.getItem(storageKey) || '{}')); render(); } catch { /* Ignora valores inválidos. */ }
  });
  render();
})();
