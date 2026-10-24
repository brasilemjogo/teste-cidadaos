import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script, createContext } from 'node:vm';

const root = new URL('../site/', import.meta.url);
const context = createContext({ window: {} });
new Script(await readFile(new URL('content.js', root), 'utf8')).runInContext(context);
const quizzes = context.window.QUIZZES.slice();
assert.equal(quizzes.length, 3);
assert.deepEqual(Array.from(quizzes, quiz => quiz.questions.length), [9, 8, 15]);
assert.equal(new Set(quizzes.map(quiz => quiz.id)).size, 3);
new Script(await readFile(new URL('content-novos.js', root), 'utf8')).runInContext(context);
const novos = context.window.QUIZZES.slice(3);
assert.deepEqual(Array.from(novos, quiz => quiz.id), ['ambiente', 'saude', 'trabalho', 'custo']);
assert.deepEqual(Array.from(novos, quiz => quiz.questions.length), [7, 8, 6, 8]);
assert.equal(new Set(context.window.QUIZZES.map(quiz => quiz.id)).size, 7);
context.window.QUIZ_CONTEXT = {};
new Script(await readFile(new URL('contextos.js', root), 'utf8')).runInContext(context);
new Script(await readFile(new URL('contextos-novos.js', root), 'utf8')).runInContext(context);
const official = /^https:\/\/(?:www\d*\.)?(?:gov\.br|planalto\.gov\.br|senado\.leg\.br|camara\.leg\.br|tse\.jus\.br)\//;
for (const quiz of novos) {
  assert.match(quiz.id, /^[a-z]+$/);
  assert.ok(['env', 'health', 'work', 'cost'].includes(quiz.theme));
  assert.ok(quiz.questions.every(question => typeof question === 'string' && question.endsWith('?')));
  assert.ok(quiz.questions.every(question => !/Lula|Flávio|Bolsonaro/.test(question)), `${quiz.id}: o nome dos candidatos não deve aparecer na pergunta`);
  assert.equal(quiz.questionSources.length, quiz.questions.length);
  for (const reference of quiz.questionSources) {
    assert.ok(reference.label);
    assert.match(reference.url, official);
    assert.deepEqual(Array.from(reference.positions, item => item.name), ['Lula', 'Flávio Bolsonaro']);
    for (const item of reference.positions) {
      assert.ok(item.text && item.source);
      assert.match(item.url, /^https:\/\//);
    }
  }
  assert.deepEqual(Array.from(quiz.comparison, item => item.name), ['Lula', 'Flávio Bolsonaro']);
  for (const item of quiz.comparison) {
    assert.ok(item.status && item.text && item.source);
    assert.match(item.url, official);
  }
  for (const note of quiz.notes) assert.match(note.url, official);
  const extra = context.window.QUIZ_CONTEXT[quiz.id];
  assert.ok(extra?.context?.lead && extra.context.sources.length);
  assert.equal(extra.questions.length, quiz.questions.length);
  for (const point of extra.questions) {
    assert.ok(point.title && point.paragraphs.length && point.sources.length);
    for (const source of point.sources) assert.match(source.url, /^https:\/\//);
  }
}
for (const quiz of quizzes) {
  assert.match(quiz.id, /^[a-z]+$/);
  assert.ok(quiz.questions.every(question => typeof question === 'string' && question.endsWith('?')));
  assert.equal(quiz.questionSources.length, quiz.questions.length);
  for (const reference of [...quiz.questionSources, ...(quiz.extra ? [quiz.extraSource] : [])]) {
    assert.ok(reference.label);
    if (quiz.id === 'impostos') {
      assert.deepEqual(Array.from(reference.positions, item => item.name), ['Lula', 'Flávio Bolsonaro']);
      for (const item of reference.positions) {
        assert.ok(item.text && item.source);
        assert.match(item.url, /^https:\/\/(?:www\d*\.|legis\.)?(?:planalto\.gov\.br|senado\.leg\.br|tse\.jus\.br|camara\.leg\.br|infomoney\.com\.br|youtube\.com)\//);
      }
    }
    assert.match(reference.url, /^https:\/\/(?:www\d*\.)?(?:gov\.br|planalto\.gov\.br|senado\.leg\.br|camara\.leg\.br|brasildefato\.com\.br)\//);
  }
  assert.deepEqual(Array.from(quiz.comparison, item => item.name), ['Lula', 'Flávio Bolsonaro']);
  for (const item of quiz.comparison) {
    assert.ok(item.status && item.text && item.source);
    assert.match(item.url, /^https:\/\/(?:www\d*\.)?(?:planalto\.gov\.br|senado\.leg\.br|camara\.leg\.br|tse\.jus\.br)\//);
  }
  for (const note of quiz.notes) assert.match(note.url, /^https:\/\/(?:www\d*\.)?(?:gov\.br|planalto\.gov\.br|legislacao\.presidencia\.gov\.br|senado\.leg\.br|camara\.leg\.br)\//);
}
assert.ok(quizzes[1].extra);
new Script(await readFile(new URL('app.js', root), 'utf8'));
const html = await readFile(new URL('index.html', root), 'utf8');
assert.match(html, /connect-src 'self'/);
assert.match(html, /src="\.\/analytics\.js" defer/);
assert.match(html, /lang="pt-BR"/);
assert.doesNotMatch(html, /(?:src|href)="https?:\/\//);
const js = await readFile(new URL('app.js', root), 'utf8');
assert.doesNotMatch(js, /\b(?:fetch|XMLHttpRequest|WebSocket|sendBeacon)\b/);
const analytics = await readFile(new URL('analytics.js', root), 'utf8');
new Script(analytics);
assert.doesNotMatch(analytics, /\b(?:localStorage|sessionStorage|QUIZZES)\b/);
const analyticsContext = createContext({
  window: {}, URL,
  location: { hostname: 'brasilemjogo-teste.vercel.app' },
  document: { createElement: () => ({}), head: { appendChild() {} } }
});
new Script(analytics).runInContext(analyticsContext);
const filterEvent = analyticsContext.window.vaq[0][1];
assert.equal(filterEvent({type:'pageview', url:'https://brasilemjogo-teste.vercel.app/?private=1#mulheres/resultado'}).url, 'https://brasilemjogo-teste.vercel.app/');
assert.equal(filterEvent({type:'event', url:'https://brasilemjogo-teste.vercel.app/'}), null);
for (const file of ['styles.css', 'assets/favicon.svg', 'assets/icons.svg', '.nojekyll']) await readFile(new URL(file, root));
assert.match(html, /src="\.\/content-novos\.js" defer/);
assert.match(html, /src="\.\/contextos-novos\.js" defer/);
console.log('OK: 7 testes (32 perguntas + 1 extra nos 3 primeiros, 29 nos 4 novos), fontes, sintaxe, caminhos e ausência de envio de respostas.');
