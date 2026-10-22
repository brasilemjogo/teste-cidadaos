/* Perguntas transcritas dos PDFs, sem mudar a redação. Apenas quebras de linha e espaços da extração foram normalizados. */
window.QUIZZES = [
  {
    id: 'impostos', number: '01', title: 'Impostos', theme: 'tax', time: '2 min',
    tagline: 'O que passa pelo seu bolso.',
    description: 'Alimentos, saúde e consumo. Um teste sobre as regras que fazem parte do dia a dia.',
    intro: 'Os impostos estão presentes nas compras e nos serviços. Este teste reúne perguntas sobre simplificação, alimentos, devolução de tributos e tributação de bens. Leia cada situação e registre sua resposta.',
    questions: [
      'Hoje existem 5 impostos diferentes sobre o que você compra, cada um com regras próprias. Você acha que deveriam virar um só, mais simples?',
      'Você acha que arroz, feijão, carne e outros alimentos da cesta básica deveriam ficar sem imposto?',
      'Você acha que famílias mais pobres deveriam receber de volta parte do imposto que pagam na conta de luz, no gás e na água?',
      'Remédios, escola e tratamento de saúde deveriam pagar menos imposto que o resto?',
      'Você acha que cigarro, bebida alcoólica e refrigerante deveriam pagar um imposto extra, por fazerem mal à saúde?',
      'Hoje quem tem carro paga IPVA, mas quem tem jatinho ou iate não paga. Você acha que eles também deveriam pagar?',
      'Os estados vivem numa briga, dando desconto de imposto para roubar empresas uns dos outros. Você acha que essa briga deveria acabar?'
    ],
    notes: [
      {
        title: 'Como a reforma está organizada', label: 'Estrutura dos tributos',
        text: 'O modelo de tributação do consumo prevê a CBS, federal, e o IBS, de estados e municípios, além do Imposto Seletivo. A expressão “um só”, usada na primeira pergunta original, simplifica essa estrutura.',
        source: 'Receita Federal · Entenda a reforma', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda'
      },
      {
        title: 'Cesta básica e devolução de tributos', label: 'Regulamentação',
        text: 'A Lei Complementar 214/2025 trata da cesta básica nacional com alíquota zero e da devolução de tributos a famílias que atendam aos critérios legais. A aplicação depende das regras e do cronograma previstos na legislação.',
        source: 'Câmara dos Deputados · Regulamentação da reforma', url: 'https://www.camara.leg.br/noticias/1127237-regulamentacao-da-reforma-tributaria-e-sancionada-conheca-a-nova-lei/'
      },
      {
        title: 'Uma observação sobre o IPVA', label: 'Referência temporal',
        text: 'A pergunta 6 mantém o texto do folheto. A Emenda Constitucional 132/2023 ampliou a previsão de incidência do IPVA para veículos aquáticos e aéreos, com exceções. Isso não significa cobrança automática e uniforme em todo o país.',
        source: 'Presidência da República · EC 132/2023', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm'
      }
    ]
  },
  {
    id: 'seguranca', number: '02', title: 'Segurança pública', theme: 'safety', time: '3 min',
    tagline: 'Como a proteção se organiza.',
    description: 'Integração das polícias, financiamento e atuação contra o crime organizado.',
    intro: 'A segurança pública envolve diferentes órgãos e níveis de governo. As perguntas deste teste abordam cooperação entre polícias, recursos, atribuições e proteção dos profissionais. Ao final, há uma pergunta complementar do material.',
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
    notes: [
      {
        title: 'O Sistema Único de Segurança Pública', label: 'Lei publicada',
        text: 'A Lei 13.675/2018 instituiu o Susp e estabeleceu a atuação conjunta e coordenada de órgãos da União, dos estados, do Distrito Federal e dos municípios. A lei pode ser consultada na íntegra abaixo.',
        source: 'Presidência da República · Lei 13.675/2018', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13675.htm'
      },
      {
        title: 'A PEC da Segurança Pública', label: 'Proposta em tramitação',
        text: 'A PEC 18/2025, de iniciativa da Presidência da República, propõe mudanças na Constituição sobre órgãos de segurança e sistema penitenciário. Em 22/10/2026, o registro do Senado indicava tramitação e deliberação pendente no Plenário. Consulte a página para atualizações.',
        source: 'Senado Federal · PEC 18/2025', url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/172997'
      },
      {
        title: 'Lei, proposta e implementação', label: 'Como ler os documentos',
        text: 'O texto de uma proposta pode mudar durante a tramitação. Para saber quais dispositivos estão em vigor, consulte a norma publicada e a situação legislativa, além do texto que foi apresentado inicialmente.',
        source: 'Câmara dos Deputados · Tramitação da PEC', url: 'https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2500080'
      }
    ]
  },
  {
    id: 'mulheres', number: '03', title: 'Direitos das mulheres', theme: 'women', time: '2 min',
    tagline: 'Trabalho, cuidado e autonomia.',
    description: 'Salário, acesso a serviços e proteção social. Questões que atravessam a vida cotidiana.',
    intro: 'Este teste reúne perguntas sobre saúde menstrual, igualdade salarial, cuidado, proteção de crianças e moradia. As perguntas preservam os exemplos e os valores do folheto; as notas ao final ajudam a contextualizar a legislação.',
    questions: [
      'Tem menina que falta na escola porque não tem dinheiro para comprar absorvente. O absorvente deveria ser de graça na farmácia para quem precisa?',
      'Uma mulher que faz o mesmo trabalho que um homem deveria ganhar o mesmo salário? E a empresa que paga menos deveria levar multa?',
      'Empresas grandes deveriam ser obrigadas a mostrar se pagam diferente para homens e mulheres, e a corrigir se pagarem?',
      'Muita mãe deixa de trabalhar ou estudar porque não tem com quem deixar o filho. O governo deveria abrir mais creches e escolas em tempo integral, espaços para deixar as crianças enquanto a mãe trabalha ou estuda, e lavanderias comunitárias, para aliviar quem cuida da casa?',
      'Quando uma mulher é assassinada pelo companheiro, os filhos muitas vezes ficam sem nada. Essas crianças, se forem pobres (família com renda de até R$ 405 por pessoa), deveriam receber um salário mínimo por mês até os 18 anos?',
      'A casa do Minha Casa Minha Vida deveria ficar no nome da mulher, e continuar com ela se o casal se separar?'
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
