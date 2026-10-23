# Publicar na Vercel

Importe o repositório existente `brasilemjogo/teste-cidadaos` na sua conta da Vercel.

Mantenha **Root Directory na raiz do repositório** (vazio ou `./`), e não na subpasta `site`. O arquivo `vercel.json` na raiz configura:

- Framework: Other.
- Build Command: `node scripts/check.mjs` (verificação local dos arquivos, sem compilação).
- Output Directory: `site`.

Se o projeto já existe, salve a Root Directory correta em Settings e gere um novo deployment da branch `main`. A configuração só se aplica a novas publicações.

Confira o endereço de produção em **Settings → Domains**, e o estado do deployment em **Deployments**. Abrir um endereço `.vercel.app` que não foi associado a este projeto não confirma a disponibilidade desse nome.

O arquivo de configuração não adiciona banco de dados, rastreamento ou envio de respostas. A persistência continua apenas no navegador. Alterar o domínio do site inicia um armazenamento local separado no novo endereço.

Documentação: https://vercel.com/docs/project-configuration/vercel-json
