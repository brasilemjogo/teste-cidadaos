# Verificação da entrega

Verificado em 22/10/2026.

- **Fidelidade das perguntas:** comparação automatizada com o texto extraído dos três PDFs. As 21 perguntas principais e a pergunta complementar correspondem aos originais, ignorando espaços, quebras de linha e aspas tipográficas.
- **Fluxos completos no navegador:** impostos (7 perguntas), segurança (8 + extra) e direitos das mulheres (6).
- **Persistência:** respostas selecionadas reapareceram após recarregar a página.
- **Edição:** alteração de uma resposta refletida no registro final. As notas informativas permaneceram iguais.
- **Pergunta pulada:** registrada como “Prefiro não responder”.
- **Navegação:** botão de continuar desabilitado até selecionar uma opção; acesso direto a um registro incompleto redireciona à pergunta pendente.
- **Subpasta:** carregamento de estilos e ícones, navegação e persistência verificados em `/preview/`, simulando a URL de um repositório no GitHub Pages.
- **Layout:** verificado em larguras de 320, 390, 768 e 1366 pixels, sem rolagem horizontal. O enunciado mais longo também foi inspecionado no celular.
- **Navegador:** sem erros ou avisos no console durante os fluxos testados.
- **Privacidade:** o código não usa chamadas de rede para enviar respostas; a política de conteúdo bloqueia conexões por scripts. O botão de copiar link cria somente o endereço do teste, sem parâmetros de respostas.
- **Arquivos:** `npm run check` passou; usa apenas recursos do próprio Node.js, sem instalar pacotes.

O workflow do GitHub Pages está preparado segundo a documentação oficial. A execução no GitHub não foi testada porque esta entrega não cria ou publica um repositório remoto. O salvamento indisponível possui tratamento em memória no código; esse bloqueio específico não foi reproduzido no navegador usado para a verificação.
