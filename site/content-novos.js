/* Testes 04 a 07: meio ambiente, saúde, trabalho e custo de vida. Fontes consultadas em 24/10/2026. */
(() => {
  const TSE_LULA = 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt';
  const TSE_FLAVIO = 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl';
  const SBT_AMBIENTE_LULA = 'https://sbtnews.sbt.com.br/noticia/eleicoes/meio-ambiente-e-energia-veja-propostas-de-lula-na-integra';
  const SBT_AMBIENTE_FLAVIO = 'https://sbtnews.sbt.com.br/noticia/eleicoes/meio-ambiente-e-energia-veja-propostas-de-flavio-na-integra';
  const SBT_SAUDE = 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-saude-e-combate-a-pobreza';
  const SBT_TRABALHO = 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-economia-e-trabalho';
  const SBT_CUSTO_FLAVIO = 'https://sbtnews.sbt.com.br/colunas/coluna-da-amanda/reducao-do-custo-de-vida-e-promessa-de-flavio-bolsonaro';
  const INPE = 'https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/20251015Nota_tcnica_EstimativaPRODES_2025.pdf';
  const EC141 = 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc141.htm';
  const DESENROLA = 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/novo-desenrola-brasil';

  const plano = (name, text, url = name === 'Lula' ? TSE_LULA : TSE_FLAVIO) => ({ name, text, source: 'Plano de governo registrado no TSE', url });

  window.QUIZZES.push(
    {
      id: 'ambiente', number: '04', title: 'Meio ambiente', theme: 'env', time: '3 min',
      tagline: 'A floresta, a água e o calor que a gente sente.',
      description: 'Floresta, queimadas e clima.',
      intro: 'O que você pensa sobre a floresta, as queimadas e o calor que está cada vez mais forte?',
      checkedAt: '24/10/2026',
      questions: [
        'Hoje, uma parte da derrubada de mata é permitida por lei. A meta do Brasil deveria ser chegar em 2030 sem perder floresta nenhuma, replantando o que for derrubado?',
        'Quem derruba floresta sem permissão deveria levar multa e ter o gado e as máquinas apreendidos, com fiscal no local e satélite vigiando?',
        'Uma obra que pode sujar um rio ou derrubar mata deveria esperar o órgão ambiental conferir o projeto antes de começar, mesmo que essa análise atrase?',
        'O Brasil deveria liderar um fundo mundial em que países ricos pagam para quem mantém a floresta em pé?',
        'O governo deveria manter brigadistas treinados o ano inteiro, para apagar o fogo antes que a queimada vire um incêndio gigante?',
        'As terras onde vivem povos indígenas deveriam ser reconhecidas e protegidas contra garimpo ilegal e invasores?',
        'Toda cidade deveria ter um plano contra calor extremo e enchentes, com dinheiro e ajuda do governo federal?'
      ],
      questionSources: [
        {
          label: 'Meta para 2030 · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano reafirma a meta de “desmatamento líquido zero” até 2030: no fim das contas, o país não perde floresta.'),
            plano('Flávio Bolsonaro', 'O plano promete zerar só o desmatamento ilegal, até 2029.')
          ]
        },
        {
          label: 'Taxa de desmatamento 2025 · INPE', url: INPE,
          positions: [
            { name: 'Lula', text: 'No seu governo, a derrubada na Amazônia caiu de cerca de 11,6 mil km² (2022) para 5.796 km² (agosto de 2024 a julho de 2025), o menor número em 11 anos. O plano promete mais satélite e inteligência artificial contra crimes ambientais.', source: 'INPE · Estimativa PRODES 2025', url: INPE },
            { name: 'Flávio Bolsonaro', text: 'O plano também promete fiscalização com inteligência artificial e satélite, e propõe juntar funções do Ibama, da Funai e do ICMBio.', source: 'SBT News · Propostas de Flávio para o meio ambiente', url: SBT_AMBIENTE_FLAVIO }
          ]
        },
        {
          label: 'Licenciamento ambiental · Lei 15.190/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15190.htm',
          positions: [
            { name: 'Lula', text: 'Sancionou a nova lei de licenciamento com vetos a vários trechos. A lei diz que, se o órgão atrasar, a licença não sai automaticamente.', source: 'Planalto · Lei 15.190/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15190.htm' },
            { name: 'Flávio Bolsonaro', text: 'Votou a favor do projeto no Senado em 21/05/2025. Seu plano propõe que a licença seja concedida se o órgão não decidir no prazo.', source: 'Poder360 · Voto de cada senador', url: 'https://www.poder360.com.br/poder-congresso/licenca-ambiental-45-dos-votos-a-favor-foram-da-base-de-lula/' }
          ]
        },
        {
          label: 'Fundo Florestas Tropicais para Sempre · Planalto', url: 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/11/lula-lanca-fundo-florestas-tropicais-para-sempre-e-faz-da-conservacao-um-investimento-global',
          positions: [
            { name: 'Lula', text: 'Lançou o Fundo Florestas Tropicais para Sempre na COP30, em Belém (novembro de 2025). Em 2023, reativou o Fundo Amazônia.', source: 'Planalto · Lançamento do fundo', url: 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/11/lula-lanca-fundo-florestas-tropicais-para-sempre-e-faz-da-conservacao-um-investimento-global' },
            { name: 'Flávio Bolsonaro', text: 'O plano propõe pagar quem conserva a mata e vender créditos de carbono. Também quer exigir que ONGs com dinheiro estrangeiro mostrem quem as financia.', source: 'SBT News · Propostas de Flávio para o meio ambiente', url: SBT_AMBIENTE_FLAVIO }
          ]
        },
        {
          label: 'Manejo Integrado do Fogo · Lei 14.944/2024', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14944.htm',
          positions: [
            { name: 'Lula', text: 'Sancionou em 2024 a lei que organiza a prevenção e o combate às queimadas. O plano promete colocá-la em prática por completo.', source: 'Planalto · Lei 14.944/2024', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14944.htm' },
            { name: 'Flávio Bolsonaro', text: 'O plano promete combater queimadas ilegais com prevenção, monitoramento e fiscalização.', source: 'SBT News · Propostas de Flávio para o meio ambiente', url: SBT_AMBIENTE_FLAVIO }
          ]
        },
        {
          label: 'Terras públicas e povos indígenas · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano promete destinar terras públicas para territórios indígenas e quilombolas, áreas de conservação e assentamentos.'),
            { name: 'Flávio Bolsonaro', text: 'O plano promete combater garimpo ilegal e ocupação irregular de terras públicas, e juntar funções da Funai, do Ibama e do ICMBio.', source: 'SBT News · Propostas de Flávio para o meio ambiente', url: SBT_AMBIENTE_FLAVIO }
          ]
        },
        {
          label: 'Adaptação ao clima · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano propõe tornar a preparação para o clima parte permanente do planejamento e estimular planos de estados e cidades contra calor extremo.'),
            { name: 'Flávio Bolsonaro', text: 'O plano propõe barragens, reservatórios contra cheias, diques, obras de drenagem e reforço da Defesa Civil.', source: 'SBT News · Propostas de Flávio para o meio ambiente', url: SBT_AMBIENTE_FLAVIO }
          ]
        }
      ],
      comparison: [
        { name: 'Lula', status: 'Resultado medido', text: 'Entre 2022 e 2025, a derrubada da Amazônia caiu cerca de 50%, segundo o INPE. O plano promete chegar a 2030 sem perder floresta no saldo final.', source: 'INPE · Estimativa PRODES 2025', url: INPE },
        { name: 'Flávio Bolsonaro', status: 'Plano de governo', text: 'Promete zerar só o desmatamento ilegal até 2029 e quer que a licença ambiental saia automaticamente quando o órgão atrasar. Votou a favor da lei que mudou o licenciamento.', source: 'TSE · Plano de governo', url: TSE_FLAVIO, sources: [{ label: 'Propostas de Flávio · SBT News', url: SBT_AMBIENTE_FLAVIO }] }
      ],
      notes: [
        { title: 'O que é “desmatamento líquido zero”', label: 'Para entender', text: 'No saldo final, o país não perde floresta: o que for derrubado dentro da lei precisa ser compensado com recuperação de área.', source: 'Plano de governo de Lula no TSE', url: TSE_LULA },
        { title: 'Como o desmatamento é medido', label: 'Metodologia', text: 'O INPE compara imagens de satélite de agosto de um ano a julho do ano seguinte. O número de 2025 é uma estimativa, que depois é confirmada.', source: 'INPE · Estimativa PRODES 2025', url: INPE }
      ]
    },
    {
      id: 'saude', number: '05', title: 'Saúde', theme: 'health', time: '3 min',
      tagline: 'Do posto de saúde à farmácia.',
      description: 'SUS, remédios, médicos e filas.',
      intro: 'O que você pensa sobre o SUS, os remédios e a espera por médico especialista?',
      checkedAt: '24/10/2026',
      questions: [
        'Remédio de pressão, diabetes e asma, e até fralda geriátrica, deveria ser de graça na farmácia do bairro para qualquer pessoa com receita?',
        'Hospital particular que deve imposto ao governo deveria poder pagar essa dívida fazendo cirurgias, exames e consultas de graça para pacientes do SUS?',
        'O governo deveria levar médicos para cidades pequenas e periferias onde falta médico, pagando a mais para eles ficarem lá?',
        'Carretas com médicos e máquinas de exame deveriam rodar o interior fazendo mamografia, ultrassom e consulta onde não tem especialista?',
        'O SUS deveria dar de graça as “canetas” para tratar obesidade, para quem tem indicação do médico?',
        'A vacina deveria ir até a escola, para a criança ser vacinada sem o pai ou a mãe precisar faltar ao trabalho?',
        'O SUS deveria oferecer os remédios mais modernos contra o câncer, como os que os planos de saúde caros pagam?',
        'O SUS deveria ter atendimento especial para quem ficou viciado em apostas, as “bets”?'
      ],
      questionSources: [
        {
          label: 'Farmácia Popular 100% gratuito · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2025/fevereiro/ministerio-da-saude-anuncia-100-de-gratuidade-no-farmacia-popular-e-abre-credenciamento-a-todos-os-municipios-do-pais',
          positions: [
            { name: 'Lula', text: 'Em fevereiro de 2025, todos os itens do Farmácia Popular passaram a ser de graça. O plano promete manter e abrir mais pontos nas periferias.', source: 'Ministério da Saúde · 100% de gratuidade', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2025/fevereiro/ministerio-da-saude-anuncia-100-de-gratuidade-no-farmacia-popular-e-abre-credenciamento-a-todos-os-municipios-do-pais' },
            { name: 'Flávio Bolsonaro', text: 'O plano não traz proposta para ampliar o acesso a remédios. Propõe entregar remédios em casa para idosos, pessoas com deficiência e doentes crônicos.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Agora Tem Especialistas · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas',
          positions: [
            { name: 'Lula', text: 'Criou em 2025 o Agora Tem Especialistas, que troca dívidas de hospitais particulares por atendimento no SUS, além de mutirões e atendimento à noite. O plano promete continuar.', source: 'Ministério da Saúde · Lançamento do programa', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2025/maio/governo-federal-lanca-o-agora-tem-especialistas-para-ampliar-o-atendimento-a-populacao-e-reduzir-tempo-de-espera-no-sus' },
            { name: 'Flávio Bolsonaro', text: 'O plano também propõe usar hospitais particulares, contratando consultas e exames nos horários em que estão vazios.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Mais Médicos · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/junho/mais-medicos-completa-13-anos-levando-assistencia-a-67-milhoes-de-brasileiros-e-fortalecendo-o-sus-em-todo-o-pais',
          positions: [
            { name: 'Lula', text: 'Retomou o Mais Médicos em 2023. O plano promete continuar levando e fixando médicos onde falta atendimento.', source: 'Ministério da Saúde · Mais Médicos', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/junho/mais-medicos-completa-13-anos-levando-assistencia-a-67-milhoes-de-brasileiros-e-fortalecendo-o-sus-em-todo-o-pais' },
            { name: 'Flávio Bolsonaro', text: 'O plano propõe atendimento por aplicativo: médicos de lugares com pouca procura atendendo pacientes de onde a fila é longa.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Agora Tem Especialistas · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas',
          positions: [
            { name: 'Lula', text: 'Promete ampliar as carretas e mutirões. Afirmou que serão 150 carretas da saúde da mulher rodando o país.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE },
            { name: 'Flávio Bolsonaro', text: 'O plano também prevê unidades móveis, incluindo barcos para quem vive na beira dos rios.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Pedido de inclusão no SUS · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/ministerio-da-saude-protocola-na-conitec-pedido-de-analise-para-incorporacao-de-canetas-emagrecedoras-no-sus',
          positions: [
            { name: 'Lula', text: 'Anunciou em 17/09/2026 que as canetas serão de graça para pessoas com obesidade e indicação médica. O pedido de inclusão no SUS está em análise e ainda não tem data.', source: 'Ministério da Saúde · Pedido à Conitec', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/ministerio-da-saude-protocola-na-conitec-pedido-de-analise-para-incorporacao-de-canetas-emagrecedoras-no-sus' },
            { name: 'Flávio Bolsonaro', text: 'Criticou a promessa em entrevista (28/09/2026), dizendo que falta remédio para dor de cabeça nos postos de saúde.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Vacinação · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano mantém a vacinação nas escolas, com destaque para o HPV, a vacina da dengue para quem puder tomar e a vacina contra o vírus que causa bronquiolite em bebês.'),
            { name: 'Flávio Bolsonaro', text: 'O plano diz que vai manter a vacinação e a produção de vacinas no Brasil, sem detalhar como.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Tratamento do câncer · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano promete uma rede pública contra o câncer, com aparelhos novos e remédios de quimioterapia e imunoterapia atualizados.'),
            { name: 'Flávio Bolsonaro', text: 'O plano não traz proposta para ampliar o acesso a remédios de alto custo.', source: 'SBT News · Comparação dos planos para a saúde', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Saúde mental · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano prevê mais profissionais e atendimento no SUS para pessoas com problemas causados por apostas.'),
            { name: 'Flávio Bolsonaro', text: 'O plano propõe proibir que dinheiro de programa social seja usado em apostas. Não fala em tratamento.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        }
      ],
      comparison: [
        { name: 'Lula', status: 'Programas em funcionamento', text: 'Farmácia Popular 100% gratuito desde 2025, Mais Médicos retomado e Agora Tem Especialistas para diminuir a fila. O plano promete continuar e ampliar.', source: 'Planalto · Lei 14.621/2023 (Mais Médicos)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14621.htm', sources: [{ label: 'Comparação dos planos · SBT News', url: SBT_SAUDE }] },
        { name: 'Flávio Bolsonaro', status: 'Plano de governo', text: 'Aposta em tecnologia, como prontuário único, marcação de consulta por inteligência artificial e atendimento por aplicativo, e em contratar hospitais particulares. Não traz proposta para ampliar remédios de graça.', source: 'TSE · Plano de governo', url: TSE_FLAVIO, sources: [{ label: 'Comparação dos planos · SBT News', url: SBT_SAUDE }] }
      ],
      notes: [
        { title: 'O SUS é para todo mundo', label: 'Constituição', text: 'A saúde é direito de todos. Quem tem plano de saúde também pode usar o SUS: vacina, remédio, transplante e emergência.', source: 'Constituição Federal, art. 196', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
        { title: 'Promessa não é programa pronto', label: 'Situação', text: 'As canetas para obesidade ainda dependem de avaliação técnica, decisão do Ministério da Saúde e dinheiro no orçamento.', source: 'Ministério da Saúde · Pedido à Conitec', url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/ministerio-da-saude-protocola-na-conitec-pedido-de-analise-para-incorporacao-de-canetas-emagrecedoras-no-sus' }
      ]
    },
    {
      id: 'trabalho', number: '06', title: 'Trabalho', theme: 'work', time: '2 min',
      tagline: 'Salário, folga e carteira assinada.',
      description: 'Emprego, jornada e direitos.',
      intro: 'O que você pensa sobre salário, folga, carteira assinada e trabalho por aplicativo?',
      checkedAt: '24/10/2026',
      questions: [
        'Quem trabalha deveria ter duas folgas por semana e trabalhar no máximo 40 horas, sem perder nada do salário?',
        'O trabalhador deveria continuar recebendo um salário fixo por mês, em vez de a empresa poder pagar só pelas horas que ele trabalhou?',
        'O salário mínimo deveria subir todo ano mais do que os preços, por lei, para o trabalhador e o aposentado ganharem poder de compra?',
        'Motorista e entregador de aplicativo deveriam ter um ganho mínimo por hora, aposentadoria e proteção se sofrerem acidente?',
        'Horário e folga deveriam continuar garantidos por lei e por acordo com o sindicato, em vez de cada trabalhador negociar sozinho com o patrão?',
        'Quem tem carteira assinada deveria poder pegar empréstimo com juros mais baixos, descontado direto do salário, como o aposentado já pode?'
      ],
      questionSources: [
        {
          label: 'Fim da escala 6x1 · Emenda Constitucional 141/2026', url: EC141,
          positions: [
            { name: 'Lula', text: 'Apoiou a proposta e participou da promulgação da Emenda 141, em 16/10/2026.', source: 'Correio da Manhã · Promulgação com Lula', url: 'https://www.correiodamanha.com.br/politica/2026/10/327556-congresso-promulga-fim-da-escala-6x1-com-presenca-de-lula-e-nova-jornada-comeca-em-dezembro.html' },
            { name: 'Flávio Bolsonaro', text: 'Deixou o fim da 6x1 fora do plano e criticou a proposta por meses. Votou a favor no Senado em 14/10/2026, dizendo ouvir a maioria dos trabalhadores.', source: 'O Povo · Mudança de voto', url: 'https://www.opovo.com.br/noticias/economia/2026/10/14/flavio-bolsonaro-muda-voto-sobre-escala-6x1.html' }
          ]
        },
        {
          label: 'Plano de governo de Flávio no TSE', url: TSE_FLAVIO,
          positions: [
            { name: 'Lula', text: 'Defendeu a redução da jornada para 40 horas com o salário mensal mantido.', source: 'SBT News · Comparação dos planos para trabalho', url: SBT_TRABALHO },
            { name: 'Flávio Bolsonaro', text: 'Como alternativa ao fim da 6x1, apoiou uma proposta de contratação por hora, com salário e direitos proporcionais ao tempo trabalhado.', source: 'SBT News · Comparação dos planos para trabalho', url: SBT_TRABALHO }
          ]
        },
        {
          label: 'Valorização do salário mínimo · Lei 14.663/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm',
          positions: [
            { name: 'Lula', text: 'Sancionou em 2023 a lei que voltou a dar aumento acima da inflação ao salário mínimo, e promete mantê-la.', source: 'Planalto · Lei 14.663/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm' },
            { name: 'Flávio Bolsonaro', text: 'Em sabatina na TV Globo, disse que manterá o reajuste acima da inflação. O plano não fixa nenhuma regra. A imprensa noticiou que sua equipe estudou separar a correção das aposentadorias do salário mínimo, o que ele nega.', source: 'A Crítica · Sabatina na TV Globo', url: 'https://acritica.net/politica/flavio-6x1-salario-minimo-pisos-saude-educacao-sabatina/' }
          ]
        },
        {
          label: 'Trabalho por aplicativo · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            { name: 'Lula', text: 'O plano promete proteção trabalhista e aposentadoria para motoristas e entregadores, regras de pagamento e transparência sobre como os aplicativos decidem quem recebe cada corrida.', source: 'SBT News · Comparação dos planos para trabalho', url: SBT_TRABALHO },
            { name: 'Flávio Bolsonaro', text: 'O plano quer manter o modelo flexível, com menos interferência de sindicatos, e também fala em garantir aposentadoria a esses trabalhadores.', source: 'SBT News · Comparação dos planos para trabalho', url: SBT_TRABALHO }
          ]
        },
        {
          label: 'Acordo coletivo · Emenda Constitucional 141/2026', url: EC141,
          positions: [
            { name: 'Lula', text: 'Defendeu a emenda do fim da 6x1, que garante as regras na Constituição e só permite outra escala por acordo coletivo.', source: 'Planalto · Emenda Constitucional 141/2026', url: EC141 },
            { name: 'Flávio Bolsonaro', text: 'O plano dá prioridade à negociação direta entre empresa e funcionário para definir jornada e condições de trabalho.', source: 'Poder360 · Plano de Flávio para o trabalho', url: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-deixa-fim-da-escala-6-x-1-fora-do-plano-de-governo/' }
          ]
        },
        {
          label: 'Crédito consignado para trabalhadores · Lei 15.179/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15179.htm',
          positions: [
            { name: 'Lula', text: 'Criou em 2025 o Crédito do Trabalhador, que levou o empréstimo descontado do salário a quem tem carteira assinada.', source: 'Planalto · Lei 15.179/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15179.htm' },
            { name: 'Flávio Bolsonaro', text: 'Não encontramos proposta de Flávio sobre esse empréstimo. O plano fala em usar a Caixa para orientar e renegociar dívidas.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        }
      ],
      comparison: [
        { name: 'Lula', status: 'Emenda promulgada', text: 'Fez do fim da escala 6x1 uma bandeira, e o Congresso aprovou: duas folgas e no máximo 42 horas a partir de dezembro de 2026, e 40 horas um ano depois, sem corte de salário. Também retomou o aumento do salário mínimo acima da inflação, por lei.', source: 'Planalto · Emenda Constitucional 141/2026', url: EC141, sources: [{ label: 'Lei 14.663/2023 · Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm' }] },
        { name: 'Flávio Bolsonaro', status: 'Plano de governo', text: 'Seu plano dá prioridade à negociação direta entre patrão e empregado, e ele apoiou um modelo de contratação por hora. Votou a favor do fim da 6x1 em outubro de 2026, depois de criticá-lo por meses.', source: 'TSE · Plano de governo', url: TSE_FLAVIO, sources: [{ label: 'Comparação dos planos · SBT News', url: SBT_TRABALHO }] }
      ],
      notes: [
        { title: 'Como fica a nova jornada', label: 'Emenda 141/2026', text: 'Dois meses depois da publicação: duas folgas por semana e no máximo 42 horas. Um ano depois disso: no máximo 40 horas. Escala diferente só com acordo coletivo, garantindo em média duas folgas por semana no mês. Nada disso pode reduzir salário.', source: 'Planalto · Emenda Constitucional 141/2026', url: EC141 }
      ]
    },
    {
      id: 'custo', number: '07', title: 'Custo de vida', theme: 'cost', time: '3 min',
      tagline: 'O que pesa no fim do mês.',
      description: 'Gás, luz, dívidas e transporte.',
      intro: 'O que você pensa sobre gás, conta de luz, dívidas e passagem de ônibus?',
      checkedAt: '24/10/2026',
      questions: [
        'Família pobre deveria receber o botijão de gás de graça, direto na revenda, em vez de um dinheiro que nem sempre dá para pagar o gás?',
        'Família de baixa renda que gasta pouca luz deveria ter a conta zerada, e quem ganha um pouco mais deveria ter desconto?',
        'Quem está com nome sujo deveria poder renegociar dívida de cartão e cheque especial com desconto grande e juro baixo, com ajuda do governo?',
        'Quem renegocia dívida com ajuda do governo deveria ficar um ano proibido de apostar em bets, para não se endividar de novo?',
        'Ônibus, metrô e trem deveriam ser de graça nos fins de semana e feriados, em todas as cidades que têm transporte público?',
        'O governo deveria comprar comida de pequenos agricultores para abastecer escolas, restaurantes populares e cozinhas solidárias?',
        'O Bolsa Família deveria pagar um valor a mais para cada criança pequena da família?',
        'A Petrobras, que é controlada pelo governo, deveria voltar a vender combustível também para os postos?'
      ],
      questionSources: [
        {
          label: 'Gás do Povo · Lei 15.348/2026', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15348.htm',
          positions: [
            { name: 'Lula', text: 'Criou o Gás do Povo, que virou lei em fevereiro de 2026. Em março de 2026, o programa chegou a 14,8 milhões de famílias.', source: 'Ministério do Desenvolvimento Social · Informe nº 2', url: 'https://www.gov.br/mds/pt-br/acoes-e-programas/gas-do-povo/informes/informe-gas-do-povo-no02' },
            { name: 'Flávio Bolsonaro', text: 'O plano promete manter os programas sociais que existem, combatendo fraudes, mas não cita cada programa.', source: 'SBT News · Comparação dos planos', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Luz do Povo · Lei 15.235/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15235.htm',
          positions: [
            { name: 'Lula', text: 'Sancionou em outubro de 2025 a lei do Luz do Povo: desconto de 100% nos primeiros 80 kWh do mês para famílias de baixa renda do Cadastro Único.', source: 'Planalto · Lei 15.235/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15235.htm' },
            { name: 'Flávio Bolsonaro', text: 'O plano promete manter a tarifa social, mas propõe reduzir aos poucos a CDE, a taxa da conta de luz que paga esse desconto.', source: 'SBT News · Propostas de Flávio para energia', url: SBT_AMBIENTE_FLAVIO }
          ]
        },
        {
          label: 'Novo Desenrola Brasil · Ministério da Fazenda', url: DESENROLA,
          positions: [
            { name: 'Lula', text: 'Criou o Desenrola em 2023 e lançou o Novo Desenrola em maio de 2026, com descontos de até 90% e juros de no máximo 1,99% ao mês.', source: 'Ministério da Fazenda · Novo Desenrola', url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/maio/governo-federal-anuncia-programa-para-renegociacao-de-dividas-de-familias-estudantes-e-empresas' },
            { name: 'Flávio Bolsonaro', text: 'O plano também prevê renegociar dívidas, usando a rede da Caixa para orientar as famílias.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        },
        {
          label: 'Novo Desenrola Brasil · Ministério da Fazenda', url: DESENROLA,
          positions: [
            { name: 'Lula', text: 'No Novo Desenrola, quem renegocia fica bloqueado por um ano nas plataformas de apostas.', source: 'Metrópoles · Pronunciamento de Lula', url: 'https://www.metropoles.com/brasil/lula-pronunciamento-tv' },
            { name: 'Flávio Bolsonaro', text: 'O plano também quer limitar apostas: propõe proibir que dinheiro de programa social seja usado em bets.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        },
        {
          label: 'PEC da Tarifa Zero · Rádio Senado', url: 'https://www12.senado.leg.br/radio/1/noticia/2026/10/22/congresso-recebe-proposta-do-passe-livre-em-fins-de-semana-e-feriados',
          positions: [
            { name: 'Lula', text: 'Enviou ao Congresso, em 21/10/2026, a proposta de tarifa zero no transporte público aos sábados, domingos e feriados, paga com parte das emendas parlamentares. Ainda precisa ser votada.', source: 'Governo Federal · Envio da PEC', url: 'https://www.gov.br/memp/pt-br/assuntos/noticias/lula-sanciona-lei-que-amplia-beneficios-para-meis-e-envia-ao-congresso-pec-sobre-tarifa-zero-no-transporte-coletivo' },
            { name: 'Flávio Bolsonaro', text: 'Não encontramos proposta ou declaração de Flávio sobre tarifa zero.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        },
        {
          label: 'Combate à fome · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano promete ampliar o Programa de Aquisição de Alimentos, as cozinhas solidárias, os restaurantes populares e o crédito para a agricultura familiar.'),
            { name: 'Flávio Bolsonaro', text: 'O plano aposta em estradas, armazéns e seguro rural para baratear a comida.', source: 'SBT News · Propostas de Flávio para o custo de vida', url: SBT_CUSTO_FLAVIO }
          ]
        },
        {
          label: 'Bolsa Família · Lei 14.601/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14601.htm',
          positions: [
            { name: 'Lula', text: 'Recriou o Bolsa Família em 2023, com R$ 150 a mais por criança de até 6 anos.', source: 'Planalto · Lei 14.601/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14601.htm' },
            { name: 'Flávio Bolsonaro', text: 'Afirmou que vai manter o Bolsa Família e o reajuste anunciado pelo governo em setembro de 2026.', source: 'SBT News · Comparação dos planos', url: SBT_SAUDE }
          ]
        },
        {
          label: 'Petrobras · Plano de governo de Lula no TSE', url: TSE_LULA,
          positions: [
            plano('Lula', 'O plano propõe que a Petrobras volte a distribuir combustível e aumente o refino no Brasil.'),
            { name: 'Flávio Bolsonaro', text: 'O plano propõe retomar as privatizações e diz que o Estado deve regular, não ser empresário. O coordenador econômico da campanha disse que a Petrobras não seria vendida.', source: 'SBT News · Comparação dos planos para economia', url: SBT_TRABALHO }
          ]
        }
      ],
      comparison: [
        { name: 'Lula', status: 'Programas em funcionamento', text: 'Botijão de gás de graça para quase 15 milhões de famílias, conta de luz zerada para quem gasta até 80 kWh e renegociação de dívidas com até 90% de desconto. Enviou ao Congresso a tarifa zero no transporte aos fins de semana.', source: 'Planalto · Lei 15.348/2026 (Gás do Povo)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15348.htm', sources: [{ label: 'Lei 15.235/2025 (Luz do Povo) · Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15235.htm' }] },
        { name: 'Flávio Bolsonaro', status: 'Plano de governo', text: 'Promete baixar impostos sobre consumo, energia e combustíveis, e reduzir aos poucos a taxa da conta de luz que paga os descontos sociais, mantendo a tarifa social. Não diz quanto cada família economizaria.', source: 'TSE · Plano de governo', url: TSE_FLAVIO, sources: [{ label: 'Propostas de Flávio · SBT News', url: SBT_CUSTO_FLAVIO }] }
      ],
      notes: [
        { title: 'O que é a CDE', label: 'Para entender', text: 'A Conta de Desenvolvimento Energético é um valor cobrado na conta de luz de todo mundo. Uma parte dele paga os descontos da tarifa social para famílias de baixa renda.', source: 'Planalto · Lei 15.235/2025', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15235.htm' },
        { title: 'Promessa não é economia garantida', label: 'Para entender', text: 'Programas em funcionamento e promessas de campanha são coisas diferentes. Os planos não permitem calcular quanto uma família vai economizar.', source: 'Ministério da Fazenda · Novo Desenrola', url: DESENROLA }
      ]
    }
  );
})();
