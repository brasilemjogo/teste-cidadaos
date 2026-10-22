# Em jogo · Testes de opinião

Site estático em português, feito para celular e pronto para GitHub Pages. Não usa framework, banco de dados, serviços externos nem dependências de instalação.

## O que está incluído

- Impostos: as 7 perguntas do material original, em verde e amarelo.
- Segurança pública: as 8 perguntas principais e a pergunta complementar sobre identificação da munição, em preto e vermelho.
- Direitos das mulheres: as 6 perguntas do material original, em roxo e rosa.
- Resumo inicial, uma pergunta por tela, opção de voltar, pular, continuar depois e revisar as respostas.
- Página final com o registro das respostas e notas factuais com fontes oficiais. Sem pontuação ou conclusão eleitoral.

Os enunciados originais foram preservados. Apenas espaços e quebras de linha da extração dos PDFs foram normalizados. Os cabeçalhos, resumos iniciais e explicações finais são da versão web. As notas contextualizam referências temporais dos enunciados, sem modificá-los.

## Publicar pelo GitHub Actions

1. Crie um repositório no GitHub. Para GitHub Free, use um repositório público com o código que você deseja tornar público.
2. Envie **o conteúdo desta pasta**, incluindo a pasta oculta `.github`, para a raiz do repositório, na branch `main`. A raiz deve conter `package.json`, `README.md`, `site/`, `scripts/` e `.github/`.
3. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
4. Em **Actions → Publicar no GitHub Pages → Run workflow**, execute o fluxo se o envio inicial tiver ocorrido antes de habilitar Pages.
5. O endereço aparece na execução da Action e em Settings → Pages. Os próximos envios para `main` publicam automaticamente.

O workflow `.github/workflows/pages.yml` verifica os arquivos e publica apenas `site/`. Não precisa de token pessoal nem secrets. Usa as permissões temporárias do próprio GitHub Actions.

Se a branch principal tiver outro nome, altere `branches: [main]` no workflow. Os caminhos de CSS, JS e ícones são relativos: o site funciona tanto em `usuario.github.io` quanto em `usuario.github.io/nome-do-repositorio/`.

Referência: [documentação oficial de workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Executar no computador

Com Node.js 20 ou superior instalado:

```powershell
cd C:\dev\testes-cidadaos
npm run dev
```

Abra `http://127.0.0.1:4173`. Não precisa executar `npm install`. Para outra porta:

```powershell
npm run dev -- --port 8080
```

Verificação incluída:

```powershell
npm run check
```

Também é possível publicar apenas o conteúdo de `site/` em qualquer hospedagem de arquivos estáticos. Os scripts Node são ferramentas de desenvolvimento; não há servidor Node em produção.

## Privacidade

As respostas são salvas no `localStorage` do navegador, em uma chave com o prefixo `em-jogo:questionarios:v2:` seguido do caminho de instalação. Isso separa os dados de cópias do site em subpastas diferentes. As respostas não são enviadas por formulários, APIs, analytics ou links de compartilhamento. Não há cookies de rastreamento, bibliotecas externas, CDN ou fontes remotas.

O botão de copiar link compartilha somente o endereço do teste. Parâmetros de consulta são removidos; respostas e resultados nunca são colocados na URL. O navegador bloqueia conexões iniciadas por scripts por meio de `connect-src 'none'`.

Quem usar o mesmo perfil do navegador no aparelho poderá consultar o progresso. A pessoa pode apagar um teste ou todos os testes em **Privacidade e dados**. Se o armazenamento estiver indisponível, o teste funciona em memória até a página ser fechada ou recarregada. A hospedagem pode registrar acessos normais aos arquivos, mas não recebe as respostas. Clicar nas fontes abre os sites oficiais em outra aba, sem enviar o endereço de origem.

## Editar e manter

- `site/content.js`: enunciados, resumos e notas com fontes.
- `site/styles.css`: identidade visual e estilos responsivos.
- `site/app.js`: navegação e persistência no navegador.
- `site/assets/`: ícones locais em SVG.

Os links oficiais foram consultados em **22/10/2026**. Revise informações de tramitação e legislação antes de futuras publicações. As notas não são atualizadas automaticamente.

Se alterar a quantidade, a ordem ou o sentido das perguntas, aumente a versão da chave `storageKey` em `site/app.js`. Isso evita aplicar respostas antigas a um questionário diferente. Ajuste também as quantidades verificadas em `scripts/check.mjs`.

O projeto foi preparado para publicação pelo proprietário. Nenhum repositório remoto ou site público é criado automaticamente.
