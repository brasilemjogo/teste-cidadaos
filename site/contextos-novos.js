/* Contexto dos testes 04 a 07. Fontes consultadas em 24/10/2026. */
(() => {
  const s = (label, url) => ({ label, url });
  const TSE_LULA = s('Plano de governo de Lula · TSE', 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt');
  const TSE_FLAVIO = s('Plano de governo de Flávio · TSE', 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl');
  const SBT_AMB_LULA = s('Propostas de Lula para o meio ambiente · SBT News', 'https://sbtnews.sbt.com.br/noticia/eleicoes/meio-ambiente-e-energia-veja-propostas-de-lula-na-integra');
  const SBT_AMB_FLAVIO = s('Propostas de Flávio para o meio ambiente · SBT News', 'https://sbtnews.sbt.com.br/noticia/eleicoes/meio-ambiente-e-energia-veja-propostas-de-flavio-na-integra');
  const SBT_SAUDE = s('Comparação dos planos para a saúde · SBT News', 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-saude-e-combate-a-pobreza');
  const SBT_TRABALHO = s('Comparação dos planos para trabalho · SBT News', 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-economia-e-trabalho');
  const SBT_CUSTO_FLAVIO = s('Propostas de Flávio para o custo de vida · SBT News', 'https://sbtnews.sbt.com.br/colunas/coluna-da-amanda/reducao-do-custo-de-vida-e-promessa-de-flavio-bolsonaro');
  const INPE = s('Estimativa do desmatamento em 2025 · INPE', 'https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/20251015Nota_tcnica_EstimativaPRODES_2025.pdf');
  const EC141 = s('Emenda Constitucional 141/2026 · Planalto', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc141.htm');
  const DESENROLA = s('Novo Desenrola Brasil · Ministério da Fazenda', 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/novo-desenrola-brasil');

  Object.assign(window.QUIZ_CONTEXT, {
    ambiente: {
      context: {
        lead: 'Entre 2022 e 2025, a derrubada da floresta amazônica caiu pela metade.',
        caption: 'Dado do INPE, que mede o desmatamento por satélite desde 1988.',
        paragraphs: [
          'Em 2022 foram cerca de 11,6 mil km² de floresta derrubada. Entre agosto de 2024 e julho de 2025 foram 5.796 km², o menor número em 11 anos. Mas o calor, a seca e as queimadas continuam batendo na porta de todo mundo. Responda “sou a favor” ou “sou contra” e veja o que está em jogo.'
        ],
        sources: [INPE, s('Queda de 50% em relação a 2022 · Poder360', 'https://www.poder360.com.br/poder-sustentavel/desmatamento-da-amazonia-cai-118-em-2025-diz-inpe/')]
      },
      overview: [], more: [],
      questions: [
        { title: 'Floresta inteira, não só a ilegal', status: 'Plano de governo',
          paragraphs: ['É a meta de “desmatamento líquido zero até 2030”: o que for cortado precisa ser reposto. Ela está no plano de Lula. O plano de Flávio promete zerar só o desmatamento ilegal, até 2029.'],
          sources: [SBT_AMB_LULA, SBT_AMB_FLAVIO] },
        { title: 'Fiscal no mato e satélite no céu', status: 'Resultado medido',
          paragraphs: ['Desde 2023, o governo Lula voltou a fazer grandes operações contra desmatamento e garimpo ilegal, e a derrubada na Amazônia caiu cerca de 50% até 2025. O plano de Flávio também promete fiscalizar, com inteligência artificial e satélite.'],
          sources: [INPE, SBT_AMB_FLAVIO] },
        { title: 'Licença ambiental automática', status: 'Lei em vigor / proposta de campanha',
          paragraphs: [
            'A lei de licenciamento sancionada em 2025 diz que, se o órgão ambiental atrasar, a licença não sai sozinha. O plano de Flávio quer mudar isso: se o órgão não responder no prazo, a licença seria concedida.',
            'Em 2025, Flávio votou a favor dessa lei, chamada por ambientalistas de “PL da Devastação”. Lula vetou vários trechos, e o Congresso derrubou parte dos vetos.'
          ],
          sources: [s('Lei 15.190/2025 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15190.htm'), SBT_AMB_FLAVIO, s('Voto de cada senador · Poder360', 'https://www.poder360.com.br/poder-congresso/licenca-ambiental-45-dos-votos-a-favor-foram-da-base-de-lula/')] },
        { title: 'Pagar para manter a floresta em pé', status: 'Fundo lançado',
          paragraphs: ['É o Fundo Florestas Tropicais para Sempre, lançado por Lula na COP30, em Belém, em 2025. O governo Lula também reativou em 2023 o Fundo Amazônia, que estava parado no governo Jair Bolsonaro, pai de Flávio.'],
          sources: [s('Lançamento do fundo · Planalto', 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/11/lula-lanca-fundo-florestas-tropicais-para-sempre-e-faz-da-conservacao-um-investimento-global'), s('Decreto 11.368/2023 (Fundo Amazônia) · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11368.htm'), s('Fundos parados no governo anterior · A Crítica', 'https://acritica.net/eleicoes-2026/planos-de-lula-e-flavio-divergem-sobre-clima-desmatamento-e-amazonia/')] },
        { title: 'Brigadistas o ano todo', status: 'Lei sancionada',
          paragraphs: ['Em 2024, Lula sancionou a lei do Manejo Integrado do Fogo, que organiza a prevenção e o combate às queimadas. O plano de Lula promete colocá-la em prática por completo. O plano de Flávio também promete combater queimadas ilegais.'],
          sources: [s('Lei 14.944/2024 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14944.htm'), SBT_AMB_LULA, SBT_AMB_FLAVIO] },
        { title: 'Terra indígena protegida', status: 'Plano de governo',
          paragraphs: ['No governo Jair Bolsonaro, pai de Flávio, nenhuma terra indígena foi demarcada. O governo Lula voltou a reconhecer terras e fez operações contra o garimpo ilegal na terra Yanomami. O plano de Lula promete destinar terras públicas a povos indígenas, quilombolas e áreas de conservação.'],
          sources: [s('Planos de Lula e Flávio para a Amazônia · A Crítica', 'https://acritica.net/eleicoes-2026/planos-de-lula-e-flavio-divergem-sobre-clima-desmatamento-e-amazonia/'), SBT_AMB_LULA, SBT_AMB_FLAVIO] },
        { title: 'Calor e enchente', status: 'Plano de governo',
          paragraphs: ['As enchentes no Rio Grande do Sul e as ondas de calor mostraram que o clima já mudou. O plano de Lula quer que estados e cidades tenham planos contra o calor extremo. O plano de Flávio propõe barragens, diques e obras de drenagem.'],
          sources: [SBT_AMB_LULA, SBT_AMB_FLAVIO] }
      ]
    },
    saude: {
      context: {
        lead: 'Mais de 24 milhões de brasileiros pegaram remédio no Farmácia Popular em 2024.',
        caption: 'Maior número da série histórica, segundo o Ministério da Saúde.',
        paragraphs: [
          'É no SUS que a maioria consulta, vacina, pega remédio e faz cirurgia. O que mais dói é a fila: em 2024, a espera média por consulta com especialista registrada no sistema federal foi de 57 dias. Responda “sou a favor” ou “sou contra” e veja o que está em jogo.'
        ],
        sources: [s('Farmácia Popular em 2024 · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/assuntos/noticias/2025/fevereiro/farmacia-popular-beneficiou-mais-de-24-milhoes-de-brasileiros-em-2024-maior-numero-da-serie-historica'), SBT_SAUDE]
      },
      overview: [], more: [],
      questions: [
        { title: 'Remédio de graça na farmácia do bairro', status: 'Programa em funcionamento',
          paragraphs: ['Desde fevereiro de 2025, todos os itens do Farmácia Popular são de graça para qualquer pessoa com receita. O plano de Lula promete manter e abrir mais pontos nas periferias. O plano de Flávio não traz proposta para ampliar o acesso a remédios; propõe entregar remédios em casa para idosos e doentes crônicos.'],
          sources: [s('100% de gratuidade · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/assuntos/noticias/2025/fevereiro/ministerio-da-saude-anuncia-100-de-gratuidade-no-farmacia-popular-e-abre-credenciamento-a-todos-os-municipios-do-pais'), SBT_SAUDE] },
        { title: 'Dívida paga com atendimento', status: 'Programa em funcionamento',
          paragraphs: ['É uma parte do Agora Tem Especialistas, criado pelo governo Lula em 2025 para diminuir a fila de consultas, exames e cirurgias. Flávio também propõe usar hospitais particulares, mas contratando os horários em que eles estão vazios.'],
          sources: [s('Agora Tem Especialistas · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas'), SBT_SAUDE] },
        { title: 'Médico onde não tem médico', status: 'Programa em funcionamento',
          paragraphs: ['É o Mais Médicos, criado em 2013 e retomado pelo governo Lula em 2023. Segundo o Ministério da Saúde, hoje ele atende 67 milhões de brasileiros. No governo Jair Bolsonaro, pai de Flávio, foi criado outro programa, o Médicos pelo Brasil. O plano de Flávio aposta em atendimento por aplicativo.'],
          sources: [s('Mais Médicos completa 13 anos · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/junho/mais-medicos-completa-13-anos-levando-assistencia-a-67-milhoes-de-brasileiros-e-fortalecendo-o-sus-em-todo-o-pais'), s('Lei 13.958/2019 (Médicos pelo Brasil) · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/L13958.htm'), SBT_SAUDE] },
        { title: 'Carreta com médico e exame', status: 'Programa em funcionamento / promessa',
          paragraphs: ['As carretas da saúde fazem parte do Agora Tem Especialistas. Lula promete chegar a 150 carretas da saúde da mulher rodando o país. O plano de Flávio também prevê unidades móveis, incluindo barcos para quem vive na beira dos rios.'],
          sources: [s('Agora Tem Especialistas · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas'), SBT_SAUDE] },
        { title: 'Remédio para obesidade no SUS', status: 'Promessa / em análise',
          paragraphs: ['Em setembro de 2026, Lula anunciou que as canetas serão de graça para pessoas com obesidade e indicação médica. O Ministério da Saúde já pediu a análise para incluir o remédio no SUS, mas ainda não há data. Flávio criticou a promessa.'],
          sources: [s('Pedido de inclusão no SUS · Ministério da Saúde', 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/ministerio-da-saude-protocola-na-conitec-pedido-de-analise-para-incorporacao-de-canetas-emagrecedoras-no-sus'), SBT_SAUDE] },
        { title: 'Vacina na escola', status: 'Plano de governo',
          paragraphs: ['O plano de Lula mantém a vacinação nas escolas como prioridade, com destaque para o HPV, e promete vacina da dengue para quem puder tomar. O plano de Flávio diz que vai manter a vacinação, sem detalhar como.'],
          sources: [SBT_SAUDE, TSE_LULA] },
        { title: 'Remédio moderno contra o câncer', status: 'Plano de governo',
          paragraphs: ['O plano de Lula promete uma rede pública contra o câncer, com aparelhos novos e remédios de quimioterapia e imunoterapia atualizados. O plano de Flávio não traz proposta para remédios de alto custo.'],
          sources: [SBT_SAUDE, TSE_LULA] },
        { title: 'Vício em apostas é caso de saúde', status: 'Plano de governo',
          paragraphs: ['O plano de Lula prevê atendimento no SUS para pessoas com problemas causados por apostas. O plano de Flávio propõe proibir que dinheiro de programa social seja usado em bets, mas não fala em tratamento.'],
          sources: [SBT_SAUDE, SBT_CUSTO_FLAVIO] }
      ]
    },
    trabalho: {
      context: {
        lead: 'O desemprego está no menor nível desde 2012.',
        caption: 'IBGE: 5,3% no trimestre encerrado em agosto de 2026.',
        paragraphs: [
          'Mas ainda tem muita gente sem carteira assinada: 38,8 milhões de pessoas trabalham na informalidade. E até agora muita gente trabalhava seis dias para folgar um. Responda “sou a favor” ou “sou contra” e veja o que está em jogo.'
        ],
        sources: [s('Raio-X do trabalho, com dados do IBGE · SBT News', 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-economia-e-trabalho')]
      },
      overview: [], more: [],
      questions: [
        { title: 'Duas folgas e 40 horas', status: 'Emenda promulgada',
          paragraphs: [
            'Isso virou regra da Constituição em 16/10/2026. As duas folgas valem dois meses depois da publicação, e as 40 horas chegam um ano depois disso, sem corte de salário.',
            'Lula fez do fim da escala 6x1 uma bandeira. Flávio criticou a proposta por meses e defendeu outro modelo, mas votou a favor no Senado em 14/10/2026.'
          ],
          sources: [EC141, s('Promulgação com Lula · Correio da Manhã', 'https://www.correiodamanha.com.br/politica/2026/10/327556-congresso-promulga-fim-da-escala-6x1-com-presenca-de-lula-e-nova-jornada-comeca-em-dezembro.html'), s('Mudança de voto de Flávio · O Povo', 'https://www.opovo.com.br/noticias/economia/2026/10/14/flavio-bolsonaro-muda-voto-sobre-escala-6x1.html')] },
        { title: 'Salário por mês, não por hora', status: 'Proposta de Flávio',
          paragraphs: ['Como alternativa ao fim da 6x1, Flávio apoiou uma proposta de contratação por hora, com salário e direitos proporcionais ao tempo trabalhado. Lula defendeu a redução da jornada sem corte de salário.'],
          sources: [SBT_TRABALHO] },
        { title: 'Salário mínimo acima da inflação', status: 'Lei sancionada',
          paragraphs: [
            'Em 2023, Lula sancionou a lei que voltou a dar aumento acima da inflação ao salário mínimo. Isso também vale para aposentadorias e benefícios de um salário mínimo. Entre 2020 e 2022, no governo Jair Bolsonaro, pai de Flávio, não havia regra de aumento acima da inflação.',
            'Flávio afirma que vai manter o reajuste acima da inflação, mas o plano dele não fixa nenhuma regra.'
          ],
          sources: [s('Lei 14.663/2023 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm'), s('Sabatina de Flávio na TV Globo · A Crítica', 'https://acritica.net/politica/flavio-6x1-salario-minimo-pisos-saude-educacao-sabatina/'), SBT_TRABALHO] },
        { title: 'Proteção para quem trabalha por aplicativo', status: 'Plano de governo',
          paragraphs: ['Hoje, a maioria dos motoristas e entregadores não contribui para a aposentadoria e fica sem proteção se adoecer ou se acidentar. O plano de Lula promete proteção e regras de pagamento. O plano de Flávio quer manter o modelo flexível, com menos sindicato, mas também fala em aposentadoria.'],
          sources: [SBT_TRABALHO] },
        { title: 'Regra garantida, não “cada um por si”', status: 'Emenda promulgada / plano de governo',
          paragraphs: ['A emenda do fim da 6x1 garante as regras na Constituição e só permite outra escala por acordo coletivo, com média de duas folgas por semana. O plano de Flávio dá prioridade à negociação direta entre empresa e funcionário.'],
          sources: [EC141, s('Plano de Flávio para o trabalho · Poder360', 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-deixa-fim-da-escala-6-x-1-fora-do-plano-de-governo/')] },
        { title: 'Empréstimo mais barato para quem tem carteira', status: 'Programa em funcionamento',
          paragraphs: ['Em 2025, o governo Lula criou o Crédito do Trabalhador, que levou o empréstimo descontado do salário a quem tem carteira assinada. A ideia é trocar dívida cara, como cartão e cheque especial, por juros menores.'],
          sources: [s('Lei 15.179/2025 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15179.htm')] }
      ]
    },
    custo: {
      context: {
        lead: 'Quase 15 milhões de famílias já recebem o botijão de gás de graça.',
        caption: 'Gás do Povo, março de 2026, segundo o Ministério do Desenvolvimento Social.',
        paragraphs: [
          'Gás, luz, comida e juro do cartão pesam no bolso de quase todo mundo. Lula e Flávio prometem aliviar o fim do mês, mas de jeitos diferentes. Responda “sou a favor” ou “sou contra” e veja o que está em jogo.'
        ],
        sources: [s('Gás do Povo · Informe nº 2 do MDS', 'https://www.gov.br/mds/pt-br/acoes-e-programas/gas-do-povo/informes/informe-gas-do-povo-no02'), s('Propostas para o custo de vida · Agora RN', 'https://agorarn.com.br/politica/lula-flavio-bolsonaro-custo-de-vida-propostas/')]
      },
      overview: [], more: [],
      questions: [
        { title: 'Botijão de graça', status: 'Lei sancionada',
          paragraphs: ['É o Gás do Povo, que trocou o antigo Auxílio Gás em dinheiro pelo botijão de graça na revenda. Virou lei em fevereiro de 2026 e chegou a 14,8 milhões de famílias, três vezes mais que o programa anterior. O plano de Flávio promete manter os programas sociais, sem citar cada um.'],
          sources: [s('Lei 15.348/2026 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15348.htm'), s('Gás do Povo · Informe nº 2 do MDS', 'https://www.gov.br/mds/pt-br/acoes-e-programas/gas-do-povo/informes/informe-gas-do-povo-no02')] },
        { title: 'Conta de luz zerada para quem gasta pouco', status: 'Lei sancionada',
          paragraphs: ['É o Luz do Povo: famílias de baixa renda do Cadastro Único não pagam pelos primeiros 80 kWh do mês. Flávio diz que vai manter a tarifa social, mas propõe reduzir aos poucos a CDE, a taxa da conta de luz que paga esse desconto.'],
          sources: [s('Lei 15.235/2025 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15235.htm'), SBT_AMB_FLAVIO] },
        { title: 'Limpar o nome com desconto', status: 'Programa em funcionamento',
          paragraphs: ['É o Desenrola. A primeira versão foi em 2023, e o Novo Desenrola veio em maio de 2026, com descontos de até 90% e juros de no máximo 1,99% ao mês. O plano de Flávio também fala em renegociar dívidas, pela Caixa.'],
          sources: [DESENROLA, SBT_CUSTO_FLAVIO] },
        { title: 'Renegociou? Um ano longe das bets', status: 'Programa em funcionamento',
          paragraphs: ['Essa regra está no Novo Desenrola. O plano de Flávio também quer limitar as apostas: propõe proibir o uso de dinheiro de programa social em bets.'],
          sources: [DESENROLA, s('Pronunciamento de Lula · Metrópoles', 'https://www.metropoles.com/brasil/lula-pronunciamento-tv'), SBT_CUSTO_FLAVIO] },
        { title: 'Ônibus de graça no fim de semana', status: 'Proposta enviada ao Congresso',
          paragraphs: ['Em 21/10/2026, Lula enviou ao Congresso uma proposta para isso, paga com parte das emendas parlamentares. A ideia não estava no plano de governo registrado em agosto. Ela ainda precisa ser votada e, se aprovada, vale a partir de 2027.'],
          sources: [s('PEC da Tarifa Zero · Rádio Senado', 'https://www12.senado.leg.br/radio/1/noticia/2026/10/22/congresso-recebe-proposta-do-passe-livre-em-fins-de-semana-e-feriados'), s('Envio da PEC · Governo Federal', 'https://www.gov.br/memp/pt-br/assuntos/noticias/lula-sanciona-lei-que-amplia-beneficios-para-meis-e-envia-ao-congresso-pec-sobre-tarifa-zero-no-transporte-coletivo')] },
        { title: 'Comida do pequeno agricultor', status: 'Plano de governo',
          paragraphs: ['É o Programa de Aquisição de Alimentos. O plano de Lula promete ampliar o programa, as cozinhas solidárias e o crédito para a agricultura familiar. O plano de Flávio aposta em estradas, armazéns e seguro rural para baratear a comida.'],
          sources: [SBT_SAUDE, SBT_CUSTO_FLAVIO] },
        { title: 'Dinheiro a mais para criança pequena', status: 'Programa em funcionamento',
          paragraphs: ['Desde 2023, o Bolsa Família paga R$ 150 a mais por criança de até 6 anos. Flávio diz que vai manter o Bolsa Família.'],
          sources: [s('Lei 14.601/2023 · Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14601.htm'), SBT_SAUDE] },
        { title: 'Petrobras de volta aos postos', status: 'Plano de governo',
          paragraphs: ['O plano de Lula propõe que a Petrobras volte a distribuir combustível e aumente o refino no Brasil. O plano de Flávio propõe retomar as privatizações, mas a campanha dele disse que não venderia a Petrobras.'],
          sources: [SBT_AMB_LULA, SBT_TRABALHO] }
      ]
    }
  });
})();
