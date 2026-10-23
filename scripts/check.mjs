import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script, createContext } from 'node:vm';

const root = new URL('../site/', import.meta.url);
const context = createContext({ window: {} });
new Script(await readFile(new URL('content.js', root), 'utf8')).runInContext(context);
const quizzes = context.window.QUIZZES;
assert.equal(quizzes.length, 3);
assert.deepEqual(Array.from(quizzes, quiz => quiz.questions.length), [9, 8, 15]);
assert.equal(new Set(quizzes.map(quiz => quiz.id)).size, 3);
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
assert.match(html, /connect-src 'none'/);
assert.match(html, /lang="pt-BR"/);
assert.doesNotMatch(html, /(?:src|href)="https?:\/\//);
const js = await readFile(new URL('app.js', root), 'utf8');
assert.doesNotMatch(js, /\b(?:fetch|XMLHttpRequest|WebSocket|sendBeacon)\b/);
for (const file of ['styles.css', 'assets/favicon.svg', 'assets/icons.svg', '.nojekyll']) await readFile(new URL(file, root));
console.log('OK: 3 testes, 32 perguntas + 1 extra, fontes, sintaxe, caminhos e ausência de envio de respostas.');
