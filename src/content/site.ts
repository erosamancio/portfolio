export const contact = {
  whatsappNumber: "5581998050865",
  whatsappDisplay: "(81) 99805-0865",
  email: "erosamancio06@gmail.com",
  github: "https://github.com/erosamancio",
  linkedin: "https://www.linkedin.com/in/erosamancio/",
};

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export type Tag = "React" | "Python" | "Java" | "C";

export const tags: Tag[] = ["React", "Python", "Java", "C"];

export type Project = {
  slug: string;
  name: string;
  context: string;
  stack: string[];
  /** Languages the project filter matches on. */
  tags: Tag[];
  role: string;
  summary: string;
  /** Sociiz Meet has none on purpose: no screenshots of the product may be published. */
  image?: { src: string; width: number; height: number; alt: string };
  repo?: string;
  /** Why there is no repository link. */
  closedSource?: string;
  /** Component names, shown as the project's structure when there is no image. */
  structure?: string[];
  /** A documented endpoint, shown as a request panel. */
  endpoint?: { request: string; note: string; values: string[] };
  body: { heading: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "sociiz-meet",
    name: "Sociiz Meet",
    context: "Estágio na Sociiz",
    stack: ["React 19", "Vite", "LiveKit", "Flask"],
    tags: ["React", "Python"],
    role: "Frontend e serviço de tokens",
    summary:
      "A plataforma de videoconferência da Sociiz: interface própria em React 19 sobre o LiveKit, com lobby, chat, compartilhamento de tela e pós-reunião, e um serviço em Flask que emite os tokens de acesso às salas.",
    closedSource: "Código e telas são da Sociiz, por isso este projeto aparece só em texto.",
    structure: ["App", "JoinScreen", "MeetingRoom", "PostMeetingScreen"],
    endpoint: {
      request: "GET /token?room=<sala>&user=<nome>",
      note: "token JWT do LiveKit com as permissões",
      values: ["roomJoin", "canPublish", "canSubscribe", "canPublishData"],
    },
    body: [
      {
        heading: "O que é",
        text: "A plataforma de reuniões em tempo real da Sociiz. Começou sobre os componentes padrão do LiveKit e evoluiu para uma interface própria, com controles personalizados e a identidade visual da empresa.",
      },
      {
        heading: "Frontend",
        text: "Estruturei a aplicação nas etapas da reunião (App, JoinScreen, MeetingRoom e PostMeetingScreen) e construí a tela de entrada com nome e sala, o lobby com prévia de câmera e microfone, a sala com controles próprios, chat em tempo real, painel de participantes, mão levantada, indicador de intensidade de sinal, convite por link, os estados de conexão e a tela de pós-reunião.",
      },
      {
        heading: "Backend",
        text: "Um serviço em Flask, com Flask-CORS, que expõe o endpoint GET /token. Ele recebe a sala e o usuário e devolve um token JWT com as permissões de cada participante: entrar na sala, publicar e assinar áudio e vídeo e enviar dados.",
      },
    ],
  },
  {
    slug: "cicle",
    name: "Ciclê",
    context: "Projeto em equipe",
    stack: ["Java", "Spring Boot", "React", "JavaScript"],
    tags: ["Java", "React"],
    role: "Full stack",
    summary:
      "Calculadora de emissão de carbono para empresas. Transforma o volume de transações e os meios de pagamento em uma memória de cálculo clara e no total de emissão evitada.",
    image: {
      src: "/images/cicle.jpg",
      width: 915,
      height: 650,
      alt: "Tela Memória de Cálculo do Ciclê, com volume de transações, barras de meios de pagamento e composição da frota física",
    },
    repo: "https://github.com/Lucascbayma/CICLE",
    body: [
      {
        heading: "O que é",
        text: "Uma ferramenta web que calcula a emissão de carbono de uma empresa a partir das transações que ela processa. A tela de memória de cálculo mostra de onde vem cada número: volume de transações do mês, a divisão entre pagamentos por aproximação e cartões físicos e a composição da frota de cartões.",
      },
      {
        heading: "O que eu fiz",
        text: "Trabalhei no full stack: o backend em Java com Spring Boot e a interface em React e JavaScript, que apresenta o cálculo de forma legível para quem não é especialista.",
      },
    ],
  },
  {
    slug: "joyscore",
    name: "Joyscore",
    context: "Projeto acadêmico",
    stack: ["React", "Python"],
    tags: ["React", "Python"],
    role: "Full stack",
    summary:
      "Plataforma web para descobrir e avaliar jogos, com busca, filtro por gênero e destaques. Trabalhei da interface em React ao backend em Python.",
    image: {
      src: "/images/joyscore.jpg",
      width: 1900,
      height: 943,
      alt: "Página inicial do Joyscore, com busca de jogos, filtro de gêneros, destaque de Elden Ring e cards de jogos",
    },
    repo: "https://github.com/Lucascbayma/JoyScore",
    body: [
      {
        heading: "O que é",
        text: "Uma plataforma para avaliar jogos. A página inicial reúne busca, filtro por gênero, destaques populares e os favoritos dos desenvolvedores.",
      },
      {
        heading: "O que eu fiz",
        text: "Atuei no full stack: construí componentes e telas em React, integrei a interface com o backend em Python e participei da identidade visual, inspirada no universo arcade, em joysticks e em sistemas de pontuação.",
      },
    ],
  },
  {
    slug: "recife-beat",
    name: "Recife Beat",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    tags: ["C"],
    role: "Desenvolvimento",
    summary:
      "Jogo de ritmo ambientado em Recife, com notas numa lista encadeada, entrada baseada em tempo, editor de beatmap e ranking.",
    image: {
      src: "/images/recife-beat.jpg",
      width: 2000,
      height: 1269,
      alt: "Partida do Recife Beat no Recife Antigo ao pôr do sol, com trilhas de notas, botões coloridos e a mensagem Perfeito",
    },
    repo: "https://github.com/erosamancio/Recife_Beat",
    body: [
      {
        heading: "O que é",
        text: "Um jogo de ritmo inspirado em Friday Night Funkin' e Guitar Hero, ambientado em Recife, feito para a disciplina de Algoritmos e Estruturas de Dados.",
      },
      {
        heading: "O que eu fiz",
        text: "As notas da música são organizadas em uma lista encadeada com tempo, botão e estado de cada nota. O jogo tem entrada baseada em tempo, pontuação, avaliação de precisão, seleção de músicas e ranking ordenado com QuickSort e MergeSort. Também tem um editor de beatmap que grava as notas durante a música e salva em arquivo.",
      },
    ],
  },
  {
    slug: "the-draft",
    name: "The Draft",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    tags: ["C"],
    role: "Desenvolvimento",
    summary: "Roguelike top-down com estética de desenho em papel: salas, chefes, loja e upgrades.",
    image: {
      src: "/images/the-draft.jpg",
      width: 1600,
      height: 986,
      alt: "Arte de título do The Draft: um bonequinho desenhado a lápis em uma folha de caderno sobre papel quadriculado",
    },
    repo: "https://github.com/Lucascbayma/The_Draft",
    body: [
      {
        heading: "O que é",
        text: "Um roguelike top-down com visual de desenho em papel. O jogador atravessa salas com ondas de inimigos, enfrenta chefes e encontra loja, tesouros, armadilhas e upgrades.",
      },
      {
        heading: "O que eu fiz",
        text: "Desenvolvimento em C com Raylib, usando structs, ponteiros, alocação dinâmica, listas encadeadas, matrizes e arquivos para montar o sistema de salas, vida e moedas.",
      },
    ],
  },
];

export const experience = [
  {
    name: "Sociiz Meet",
    slug: "sociiz-meet",
    text: "Interface de videoconferência em React 19 e Vite sobre o LiveKit, e o serviço em Flask que gera os tokens de acesso às salas.",
  },
  {
    name: "Pipeline de OCR",
    text: "Rotinas em Python para extrair dados de documentos e PDFs com PaddleOCR, OpenCV, NumPy e PDF2Image, expostas por FastAPI, com Label Studio para anotação e integração com armazenamento em nuvem.",
  },
  {
    name: "Backend e integrações",
    text: "Manutenção de aplicações em Django e configuração de e-mail corporativo com SMTP, IMAP e POP3, incluindo TLS/SSL e diagnóstico de falhas de autenticação.",
  },
];

export const skills = [
  { group: "linguagens", label: "Linguagens", items: ["Python", "JavaScript", "Java", "C", "SQL"] },
  { group: "frontend", label: "Frontend", items: ["React", "Vite", "CSS responsivo"] },
  { group: "backend", label: "Backend", items: ["FastAPI", "Flask", "Django", "Spring Boot", "APIs REST"] },
  { group: "tempoReal", label: "Tempo real", items: ["LiveKit", "WebRTC (integração)", "WebSockets"] },
  { group: "documentos", label: "Documentos e OCR", items: ["PaddleOCR", "OpenCV", "PDF2Image"] },
  { group: "ferramentas", label: "Ferramentas", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
];
