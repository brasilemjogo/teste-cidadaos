/* Perguntas transcritas dos PDFs, sem mudar a redação. Apenas quebras de linha e espaços da extração foram normalizados. */
window.QUIZZES = [
  {
    id: 'impostos', number: '01', title: 'Impostos', theme: 'tax', time: '2 min',
    tagline: 'O que passa pelo seu bolso.',
    description: 'Alimentos, consumo e impostos.',
    intro: 'O que você pensa sobre impostos nas compras, nos serviços e nos bens?',
    questions: [
      'Hoje existem 5 impostos diferentes sobre o que você compra, cada um com regras próprias. Você acha que deveriam virar apenas dois com regras semelhantes e mais simples?',
      'Você acha que arroz, feijão, carne e outros alimentos da cesta básica deveriam ficar sem imposto?',
      'Você acha que famílias mais pobres deveriam receber de volta parte do imposto que pagam na conta de luz, no gás e na água?',
      'Remédios, escola e tratamento de saúde deveriam pagar menos imposto que o resto?',
      'Você acha que cigarro, bebida alcoólica e refrigerante deveriam pagar um imposto extra, por fazerem mal à saúde?',
      'Hoje quem tem carro paga IPVA, mas quem tem jatinho ou iate não paga. Você acha que eles também deveriam pagar?',
      'Os estados vivem numa briga, dando desconto de imposto para roubar empresas uns dos outros. Você acha que essa briga deveria acabar?'
    ],
    questionSources: [
      {
        "label": "Reforma do consumo · LC 214/2025",
        "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Sancionou a LC 214/2025, que institui IBS, CBS e Imposto Seletivo. O modelo simplifica a tributação, mas não cria literalmente um único imposto.",
            "source": "LC 214/2025",
            "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "Cesta básica · LC 214/2025",
        "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Sancionou a LC 214/2025, com alíquota zero de IBS e CBS para os alimentos da cesta básica nacional.",
            "source": "LC 214/2025",
            "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "Devolução de impostos · LC 214/2025",
        "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Sancionou as regras de devolução de IBS e CBS para famílias de baixa renda, incluindo contas de serviços essenciais, conforme os critérios e o calendário da LC 214/2025.",
            "source": "LC 214/2025",
            "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "Saúde e educação · LC 214/2025",
        "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Sancionou reduções de IBS e CBS para saúde e educação e regras de redução ou alíquota zero para medicamentos, na LC 214/2025.",
            "source": "LC 214/2025",
            "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "Imposto Seletivo · LC 214/2025",
        "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Sancionou a LC 214/2025, que inclui tabaco, bebidas alcoólicas e bebidas açucaradas no Imposto Seletivo. A cobrança depende das regras e do calendário previstos na legislação.",
            "source": "LC 214/2025",
            "url": "https://planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "IPVA · Emenda Constitucional 132/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Seu governo apoiou a reforma tributária, promulgada pelo Congresso. A EC 132/2023 ampliou a previsão de IPVA para veículos aquáticos e aéreos, com exceções; a cobrança depende da legislação aplicável.",
            "source": "Plano no TSE · Reforma tributária",
            "url": "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=11"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      },
      {
        "label": "Transição dos tributos · EC 132/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm",
        "positions": [
          {
            "name": "Lula",
            "text": "Seu plano defende a reforma do consumo como forma de eliminar a guerra fiscal. A EC 132/2023 prevê a transição do ICMS para o IBS.",
            "source": "Plano no TSE · Reforma tributária",
            "url": "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=11"
          },
          {
            "name": "Flávio Bolsonaro",
            "text": "Votou contra a PEC 45/2019 em 08/11/2023.",
            "source": "Votação nominal no Senado",
            "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/158930/votacoes"
          }
        ]
      }
    ],
    comparison: [
      {
        "name": "Lula",
        "status": "Lei sancionada",
        "text": "Sancionou a Lei Complementar 214/2025, aprovada pelo Congresso. Ela prevê alíquota zero de IBS e CBS para a cesta básica e devolução de tributos para famílias de baixa renda. A aplicação segue o calendário de transição da reforma.",
        "source": "Câmara · Sanção da LC 214/2025",
        "url": "https://www.camara.leg.br/noticias/1127237-regulamentacao-da-reforma-tributaria-e-sancionada-conheca-a-nova-lei/"
      },
      {
        "name": "Flávio Bolsonaro",
        "status": "Proposta de campanha",
        "text": "Seu plano propõe revisar a reforma tributária em um eventual governo.",
        "source": "TSE · Plano de governo, página 30 (PDF)",
        "url": "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl#page=30"
      }
    ],
    notes: [
      {
        title: 'Como a reforma está organizada', label: 'Estrutura dos tributos',
        text: 'O modelo de tributação do consumo prevê a CBS, federal, e o IBS, de estados e municípios, além do Imposto Seletivo.',
        source: 'Receita Federal · Entenda a reforma', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda'
      },
      {
        title: 'Cesta básica e devolução de tributos', label: 'Regulamentação',
        text: 'A Lei Complementar 214/2025 trata da cesta básica nacional com alíquota zero e da devolução de tributos a famílias que atendam aos critérios legais. A aplicação depende das regras e do cronograma previstos na legislação.',
        source: 'Câmara dos Deputados · Regulamentação da reforma', url: 'https://www.camara.leg.br/noticias/1127237-regulamentacao-da-reforma-tributaria-e-sancionada-conheca-a-nova-lei/'
      }
    ]
  },
  {
    id: 'seguranca', number: '02', title: 'Segurança pública', theme: 'safety', time: '3 min',
    tagline: 'Como a proteção se organiza.',
    description: 'Polícias, recursos e combate ao crime.',
    intro: 'O que você pensa sobre a atuação das polícias e os recursos para a segurança?',
    questions: [
      'As polícias federal, estaduais e municipais deveriam trabalhar juntas e trocar informações, como o SUS faz com os hospitais do país?',
      'Tem facção que age em vários estados e fora do Brasil. A Polícia Federal deveria ter mais poder para ir atrás delas?',
      'Droga e arma chegam também de barco e de trem. A Polícia Rodoviária Federal deveria fiscalizar também rios e trilhos?',
      'Quando falta dinheiro, o governo pode bloquear a verba da segurança. A da saúde e a da educação têm proteção na Constituição. O dinheiro da segurança também deveria ser proibido de bloquear?',
      'O Brasil ganha muito dinheiro com as reservas de petróleo (pré-sal). Uma parte desse dinheiro deveria ir para a segurança?',
      'A sua cidade deveria poder ter uma polícia própria, para cuidar do seu bairro?',
      'Chefe de facção deveria ficar em presídio de segurança máxima, com regras mais duras para sair mais cedo e perder os bens do crime?',
      'Se um policial morre ou fica inválido trabalhando, a família dele deveria ter pensão garantida?'
    ],
    extra: 'Você acha que as balas deveriam deixar de ter “RG”?',
    questionSources: [
      {
        "label": "Integração das polícias · Lei do Susp",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13675.htm"
      },
      {
        "label": "Competências da PF · PEC 18/2025",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/172997"
      },
      {
        "label": "Ferrovias e hidrovias · PEC 18/2025",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/172997"
      },
      {
        "label": "Proteção dos recursos · Texto da PEC no Senado",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/10/14/ccj-conclui-votacao-da-pec-da-seguranca-texto-vai-ao-plenario"
      },
      {
        "label": "Recursos do pré-sal · Texto da PEC no Senado",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/10/14/ccj-conclui-votacao-da-pec-da-seguranca-texto-vai-ao-plenario"
      },
      {
        "label": "Polícias municipais · PEC 18/2025",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/172997"
      },
      {
        "label": "Regras para facções · Texto da PEC no Senado",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/10/14/ccj-conclui-votacao-da-pec-da-seguranca-texto-vai-ao-plenario"
      },
      {
        "label": "Previdência dos profissionais · PEC 18/2025",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/172997"
      }
    ],
    extraSource: {
      "label": "Identificação das munições · Estatuto do Desarmamento, art. 23",
      "url": "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.826.htm"
    },
    comparison: [
      {
        "name": "Lula",
        "status": "Proposta legislativa",
        "text": "Seu governo apresentou a PEC 18/2025. A proposta trata da integração das polícias e da ampliação de competências federais. O texto passou por alterações no Congresso e, na consulta de 22/10/2026, ainda estava em tramitação no Senado.",
        "source": "Senado · Texto e tramitação da PEC 18/2025",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/172997"
      },
      {
        "name": "Flávio Bolsonaro",
        "status": "Posição do PL em relação a PEC 18/2025",
        "text": "Deputados do PL criticaram a PEC da Segurança Pública apresentada pelo governo Lula, tentaram obstruir sua tramitação e votaram contra a proposta na Comissão de Constituição e Justiça.",
        "source": "Votação nominal na Câmara · PEC 18/2025",
        "url": "https://www.camara.leg.br/presenca-comissoes/votacao-portal?itemVotacao=72988&reuniao=77257"
      }
    ],
    notes: [
      {
        title: 'A PEC da Segurança Pública', label: 'Proposta em tramitação',
        text: 'A PEC 18/2025, de iniciativa da Presidência da República, propõe mudanças na Constituição sobre órgãos de segurança e sistema penitenciário. Em 22/10/2026, o registro do Senado indicava tramitação e deliberação pendente no Plenário. Consulte a página para atualizações.',
        source: 'Senado Federal · PEC 18/2025', url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/172997'
      }
    ]
  },
  {
    id: 'mulheres', number: '03', title: 'Direitos das mulheres', theme: 'women', time: '2 min',
    tagline: 'Trabalho, cuidado e autonomia.',
    description: 'Salário, serviços e proteção social.',
    intro: 'O que você pensa sobre salário, cuidado, saúde e moradia para as mulheres?',
    questions: [
      'Tem menina que falta na escola porque não tem dinheiro para comprar absorvente. O absorvente deveria ser de graça na farmácia para quem precisa?',
      'Uma mulher que faz o mesmo trabalho que um homem deveria ganhar o mesmo salário? E a empresa que paga menos deveria levar multa?',
      'Empresas grandes deveriam ser obrigadas a mostrar se pagam diferente para homens e mulheres, e a corrigir se pagarem?',
      'Muita mãe deixa de trabalhar ou estudar porque não tem com quem deixar o filho. O governo deveria abrir mais creches e escolas em tempo integral, espaços para deixar as crianças enquanto a mãe trabalha ou estuda, e lavanderias comunitárias, para aliviar quem cuida da casa?',
      'Quando uma mulher é assassinada pelo companheiro, os filhos muitas vezes ficam sem nada. Essas crianças, se forem pobres (família com renda de até R$ 405 por pessoa), deveriam receber um salário mínimo por mês até os 18 anos?',
      'A casa do Minha Casa Minha Vida deveria ficar no nome da mulher, e continuar com ela se o casal se separar?'
    ],
    questionSources: [
      {
        "label": "Absorventes gratuitos · Serviço oficial",
        "url": "https://www.gov.br/pt-br/servicos/obter-autorizacao-para-retirada-gratuita-de-absorventes-higienicos-em-estabelecimentos-do-farmacia-popular"
      },
      {
        "label": "Igualdade salarial · Lei 14.611/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14611.htm"
      },
      {
        "label": "Transparência salarial · Lei 14.611/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14611.htm"
      },
      {
        "label": "Política Nacional de Cuidados · Lei 15.069/2024",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15069.htm"
      },
      {
        "label": "Pensão para órfãos · Lei 14.717/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14717.htm"
      },
      {
        "label": "Minha Casa Minha Vida · Lei 14.620/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14620.htm"
      }
    ],
    comparison: [
      {
        "name": "Lula",
        "status": "Lei sancionada",
        "text": "Sancionou a Lei 14.611/2023, aprovada pelo Congresso, que reforça a igualdade salarial entre mulheres e homens. Ela prevê fiscalização e relatórios de transparência salarial para empresas privadas com 100 ou mais empregados.",
        "source": "Planalto · Lei 14.611/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14611.htm"
      },
      {
        "name": "Flávio Bolsonaro",
        "status": "Posicionamento em votação",
        "text": "Em 31/05/2023, durante discussão na Comissão de Assuntos Econômicos do Senado, declarou que votaria contra o PL 1.085/2023. Argumentou que a proposta poderia desconsiderar critérios de meritocracia e desempenho profissional.",
        "source": "Votação nominal no Senado",
        "url": "https://www.camara.leg.br/internet/votacao/mostraVotacao.asp?ideVotacao=11427"
      }
    ],
    notes: [
      {
        title: 'Igualdade e transparência salarial', label: 'Lei publicada',
        text: 'A Lei 14.611/2023 dispõe sobre igualdade salarial entre mulheres e homens no trabalho de igual valor ou na mesma função. Também exige relatórios semestrais de transparência de empresas privadas com 100 ou mais empregados.',
        source: 'Presidência da República · Lei 14.611/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14611.htm'
      },
      {
        title: 'Pensão para órfãos do feminicídio', label: 'Nota sobre a pergunta 5',
        text: 'A Lei 14.717/2023 define o limite de renda por pessoa como um quarto do salário mínimo, e não como um valor fixo em reais. A pensão de um salário mínimo é destinada ao conjunto de filhos e dependentes elegíveis menores de 18 anos, observadas as condições legais.',
        source: 'Presidência da República · Lei 14.717/2023', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14717.htm'
      },
      {
        title: 'Política Nacional de Cuidados', label: 'Lei publicada',
        text: 'A Lei 15.069/2024 instituiu a Política Nacional de Cuidados. A norma prevê responsabilidades do poder público, das famílias, do setor privado e da sociedade civil, e implementação por meio de um plano nacional.',
        source: 'Presidência da República · Lei 15.069/2024', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15069.htm'
      }
    ]
  }
];
