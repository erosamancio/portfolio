export const contact = {
  whatsappNumber: "5581998050865",
  whatsappDisplay: "(81) 99805-0865",
  email: "erosamancio06@gmail.com",
  github: "https://github.com/erosamancio",
  linkedin: "https://www.linkedin.com/in/erosamancio/",
};

export const whatsappMessage = "Olá, Eros! Vi seu portfólio e gostaria de conversar.";

// Opens the chat with the greeting already typed. Case studies mention the project being read.
export const whatsappLink = (project?: string) => {
  const text = project
    ? `Olá, Eros! Vi seu portfólio e o projeto ${project} e gostaria de conversar.`
    : whatsappMessage;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const whatsappUrl = whatsappLink();

export type Tag = "React" | "Python" | "Java" | "C";

export const tags: Tag[] = ["React", "Python", "Java", "C"];

// Language colors, taken from the Vivid palette in globals.css.
const techColors: Record<string, string> = {
  React: "var(--vivid-turquoise)",
  "React 19": "var(--vivid-turquoise)",
  Vite: "var(--vivid-purple)",
  Python: "var(--vivid-blue)",
  Flask: "var(--vivid-blue)",
  Django: "var(--vivid-green)",
  Java: "var(--vivid-orange)",
  "Spring Boot": "var(--vivid-green)",
  "Spring Data JPA": "var(--vivid-green)",
  JavaScript: "var(--vivid-yellow)",
  C: "var(--vivid-blue)",
  Raylib: "var(--vivid-salmon)",
  Docker: "var(--vivid-blue)",
  Selenium: "var(--vivid-green)",
  LiveKit: "var(--vivid-pink)",
  "GitHub Actions": "var(--vivid-purple)",
};

export const techColor = (name: string) => techColors[name] ?? "var(--vivid-turquoise)";

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
    context: "Projeto acadêmico para a Edenred",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "React", "JavaScript", "Docker"],
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
        text: "Uma ferramenta web desenvolvida no CESAR School para a Edenred, que calcula a emissão de carbono de uma empresa a partir das transações que ela processa. A tela de memória de cálculo mostra de onde vem cada número: volume de transações do mês, a divisão entre pagamentos por aproximação e cartões físicos e a composição da frota de cartões.",
      },
      {
        heading: "O que eu fiz",
        text: "Trabalhei no full stack: o backend em Java com Spring Boot, Spring Data JPA e H2, empacotado com Maven e Docker, e a interface em React e JavaScript, que apresenta o cálculo de forma legível para quem não é especialista.",
      },
    ],
  },
  {
    slug: "joyscore",
    name: "Joyscore",
    context: "Projeto acadêmico",
    stack: ["Django", "Python", "JavaScript", "Selenium", "GitHub Actions"],
    tags: ["Python"],
    role: "Full stack",
    summary:
      "Plataforma web para descobrir e avaliar jogos, com busca, filtro por gênero e destaques. Trabalhei da interface ao backend em Django, com testes E2E e CI/CD.",
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
        text: "Atuei no full stack: construí telas e comportamento no frontend, integrei a interface com o backend em Django e Python e participei da identidade visual, inspirada no universo arcade, em joysticks e em sistemas de pontuação. O projeto tem testes de ponta a ponta com Selenium e build e deploy automatizados com GitHub Actions.",
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
  {
    slug: "kivo",
    name: "KIVO",
    context: "Projeto acadêmico para o Jornal do Commercio",
    stack: ["Django", "Python", "Selenium", "Pillow", "Bootstrap Icons"],
    tags: ["Python"],
    role: "Full stack",
    summary:
      "Repaginação do portal do Jornal do Commercio em mobile first, pensada para aumentar a fidelidade dos leitores e levá-los ao segundo clique. Trabalhei no full stack com Django e Python.",
    image: {
      src: "/images/kivo.jpg",
      width: 950,
      height: 1266,
      alt: "Página inicial do KIVO no celular, com o cabeçalho do JC PE, a notícia em destaque sobre a greve no Metrô do Recife e o carrossel Estamos de olho",
    },
    repo: "https://github.com/Lucascbayma/KIVO",
    body: [
      {
        heading: "O que é",
        text: "Uma nova implementação do visual do portal do Jornal do Commercio, feita em um projeto do CESAR School com estudantes de Ciência da Computação e de Design. O desafio do jornal era aumentar a fidelidade dos leitores: fazer quem chega pelas buscas ficar mais tempo e dar o segundo clique.",
      },
      {
        heading: "O que eu fiz",
        text: "Atuei como full stack. O site foi pensado primeiro para o celular e construído em Django e Python, com testes de ponta a ponta em Selenium.",
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
  {
    group: "backend",
    label: "Backend",
    items: ["FastAPI", "Flask", "Django", "Spring Boot", "Spring Data JPA", "APIs REST"],
  },
  { group: "tempoReal", label: "Tempo real", items: ["LiveKit", "WebRTC (integração)", "WebSockets"] },
  { group: "documentos", label: "Documentos e OCR", items: ["PaddleOCR", "OpenCV", "PDF2Image"] },
  { group: "testes", label: "Testes e entrega", items: ["Selenium", "GitHub Actions (CI/CD)", "Docker", "Maven"] },
  { group: "jogos", label: "Jogos", items: ["Raylib"] },
  { group: "ferramentas", label: "Ferramentas", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
];
