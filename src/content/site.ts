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
  "GitHub Actions (CI/CD)": "var(--vivid-purple)",
  FastAPI: "var(--vivid-turquoise)",
  SQL: "var(--vivid-pink)",
  Maven: "var(--vivid-salmon)",
  PaddleOCR: "var(--vivid-purple)",
  OpenCV: "var(--vivid-green)",
  PDF2Image: "var(--vivid-yellow)",
  "AWS (Boto3)": "var(--vivid-orange)",
  "Automações em Python": "var(--vivid-blue)",
};

export const techColor = (name: string) => techColors[name] ?? "var(--vivid-turquoise)";

/** The technology's color, or undefined for names that have none (tools, concepts). */
export const knownTechColor = (name: string) => techColors[name];

export type Project = {
  slug: string;
  name: string;
  context: string;
  stack: string[];
  /** Languages the project filter matches on. */
  tags: Tag[];
  role: string;
  summary: string;
  /** The few technologies shown on the home page; the full stack lives in the case study. */
  mainStack: string[];
  /** Sociiz Meet has none on purpose: no screenshots of the product may be published. */
  image?: { src: string; width: number; height: number; alt: string };
  repo?: string;
  /** Why there is no repository link. */
  closedSource?: string;
  /** Component names, shown as the project's structure when there is no image. */
  structure?: string[];
  /** A documented endpoint, shown as a request panel. */
  endpoint?: { request: string; note: string; values: string[] };
  /** Case study, "O que é". */
  about: string;
  /** Case study, "Para quem". */
  audience: string;
  /** Case study, "O que eu fiz": one paragraph, or labelled paragraphs when the work has distinct parts. */
  did: { label?: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "sociiz-meet",
    name: "Sociiz Meet",
    context: "Estágio na Sociiz",
    stack: ["React 19", "Vite", "LiveKit", "Flask"],
    tags: ["React", "Python"],
    role: "Frontend e serviço de tokens",
    mainStack: ["React", "Flask"],
    summary:
      "A plataforma de reuniões por vídeo da Sociiz. Construí a interface em React e o serviço que libera a entrada de cada pessoa nas salas.",
    closedSource: "Código e telas são da Sociiz, por isso este projeto aparece só em texto.",
    structure: ["App", "JoinScreen", "MeetingRoom", "PostMeetingScreen"],
    endpoint: {
      request: "GET /token?room=<sala>&user=<nome>",
      note: "token JWT do LiveKit com as permissões",
      values: ["roomJoin", "canPublish", "canSubscribe", "canPublishData"],
    },
    about:
      "Reuniões com áudio, vídeo e chat. Começou sobre os componentes padrão do LiveKit, a base de áudio e vídeo em tempo real, e evoluiu para uma interface própria, com controles personalizados e a identidade visual da empresa.",
    audience:
      "Para quem participa das reuniões pela plataforma da Sociiz.",
    did: [
      { label: "Interface",  text: "Construí a interface da reunião, da entrada ao fim: a tela de entrada com nome e sala, o lobby com prévia de câmera e microfone, a sala com controles próprios, chat em tempo real, painel de participantes, mão levantada, indicador de intensidade de sinal, convite por link, os estados de conexão e a tela de pós-reunião. O código segue essas etapas: App, JoinScreen, MeetingRoom e PostMeetingScreen." },
      { label: "Acesso às salas",  text: "Um serviço em Flask, com Flask-CORS, entrega a cada pessoa um token de acesso, uma chave temporária que diz em que sala ela pode entrar e o que pode fazer. O endpoint GET /token recebe a sala e o usuário e devolve um token JWT com as permissões do participante: entrar na sala, publicar e assinar áudio e vídeo e enviar dados." },
    ],
  },
  {
    slug: "cicle",
    name: "Ciclê",
    context: "Projeto acadêmico para a Edenred",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "React", "JavaScript", "Docker"],
    tags: ["Java", "React"],
    role: "Full stack",
    mainStack: ["Java", "Spring Boot", "React"],
    summary:
      "Uma calculadora que mostra a uma empresa quanto carbono ela deixou de emitir, a partir das transações que processa e dos meios de pagamento usados. A tela explica de onde vem cada número. Trabalhei nas duas partes: o servidor em Java com Spring Boot e a interface em React.",
    image: {
      src: "/images/cicle.jpg",
      width: 915,
      height: 650,
      alt: "Tela Memória de Cálculo do Ciclê, com volume de transações, barras de meios de pagamento e composição da frota física",
    },
    repo: "https://github.com/Lucascbayma/CICLE",
    about:
      "Uma ferramenta web que calcula a emissão de carbono de uma empresa a partir das transações que ela processa. A tela de memória de cálculo mostra de onde vem cada número: o volume de transações do mês, a divisão entre pagamentos por aproximação e cartões físicos e a composição da frota de cartões.",
    audience:
      "Para a Edenred, em um projeto do CESAR School. A tela foi pensada para ser lida por quem não é especialista no cálculo.",
    did: [
      {  text: "Trabalhei nas duas partes. O servidor é em Java com Spring Boot, Spring Data JPA e H2, empacotado com Maven e Docker. A interface é em React e JavaScript e apresenta o cálculo de forma legível." },
    ],
  },
  {
    slug: "joyscore",
    name: "Joyscore",
    context: "Projeto acadêmico",
    stack: ["Django", "Python", "JavaScript", "Selenium", "GitHub Actions"],
    tags: ["Python"],
    role: "Full stack",
    mainStack: ["Django", "Python", "JavaScript"],
    summary:
      "Site para descobrir e avaliar jogos, com busca, filtro por gênero e destaques. Trabalhei da interface ao servidor, com testes automáticos que simulam o uso do site e publicação automática.",
    image: {
      src: "/images/joyscore.jpg",
      width: 1900,
      height: 943,
      alt: "Página inicial do Joyscore, com busca de jogos, filtro de gêneros, destaque de Elden Ring e cards de jogos",
    },
    repo: "https://github.com/Lucascbayma/JoyScore",
    about:
      "Uma plataforma para descobrir e avaliar jogos. A página inicial reúne busca, filtro por gênero, destaques populares e os favoritos dos desenvolvedores.",
    audience:
      "Para quem gosta de jogos e quer achar o próximo ou dar a sua nota. Foi um projeto da faculdade.",
    did: [
      {  text: "Atuei da interface ao servidor: construí telas e comportamento no frontend, integrei a interface com o backend em Django e Python e participei da identidade visual, inspirada em fliperamas e sistemas de pontuação. Os testes de ponta a ponta, que usam o site como uma pessoa usaria, são em Selenium, e o build e a publicação são automáticos com GitHub Actions." },
    ],
  },
  {
    slug: "recife-beat",
    name: "Recife Beat",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    tags: ["C"],
    role: "Desenvolvimento",
    mainStack: ["C", "Raylib"],
    summary:
      "Jogo de ritmo ambientado em Recife: você acerta as notas no tempo da música. Tem editor de fases e ranking de pontuação.",
    image: {
      src: "/images/recife-beat.jpg",
      width: 2000,
      height: 1269,
      alt: "Partida do Recife Beat no Recife Antigo ao pôr do sol, com trilhas de notas, botões coloridos e a mensagem Perfeito",
    },
    repo: "https://github.com/erosamancio/Recife_Beat",
    about:
      "Um jogo de ritmo inspirado em Friday Night Funkin' e Guitar Hero, ambientado em Recife. Você acerta as notas no tempo da música, e o jogo tem editor de fases e ranking de pontuação.",
    audience:
      "Para quem gosta de jogos de ritmo. Foi feito para a disciplina de Algoritmos e Estruturas de Dados.",
    did: [
      {  text: "As notas da música ficam em uma lista encadeada com tempo, botão e estado de cada nota. O jogo tem entrada baseada em tempo, pontuação, avaliação de precisão, seleção de músicas e um ranking ordenado com QuickSort e MergeSort, duas formas de ordenar dados. Também tem um editor de beatmap que grava as notas durante a música e salva em arquivo." },
    ],
  },
  {
    slug: "the-draft",
    name: "The Draft",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    tags: ["C"],
    role: "Desenvolvimento",
    mainStack: ["C", "Raylib"],
    summary:
      "Jogo de ação visto de cima, com visual de desenho em papel. Você enfrenta inimigos e chefes em salas, compra melhorias na loja e tenta ir o mais longe possível.",
    image: {
      src: "/images/the-draft.jpg",
      width: 1600,
      height: 986,
      alt: "Arte de título do The Draft: um bonequinho desenhado a lápis em uma folha de caderno sobre papel quadriculado",
    },
    repo: "https://github.com/Lucascbayma/The_Draft",
    about:
      "Um jogo de ação visto de cima, com visual de desenho em papel. O jogador atravessa salas com ondas de inimigos, enfrenta chefes e encontra loja, tesouros, armadilhas e melhorias.",
    audience:
      "Para quem gosta de jogos de ação e quer ir o mais longe possível. Foi um projeto da faculdade.",
    did: [
      {  text: "Desenvolvi em C com Raylib. Usei structs, ponteiros, alocação dinâmica, listas encadeadas, matrizes e arquivos para montar o sistema de salas, vida e moedas." },
    ],
  },
  {
    slug: "kivo",
    name: "KIVO",
    context: "Projeto acadêmico para o Jornal do Commercio",
    stack: ["Django", "Python", "Selenium", "Pillow", "Bootstrap Icons"],
    tags: ["Python"],
    role: "Full stack",
    mainStack: ["Django", "Python"],
    summary:
      "Nova versão do visual do portal do Jornal do Commercio, pensada primeiro para o celular, para fazer o leitor ficar mais tempo e abrir uma segunda notícia. Trabalhei nas telas e no servidor.",
    image: {
      src: "/images/kivo.jpg",
      width: 950,
      height: 1266,
      alt: "Página inicial do KIVO no celular, com o cabeçalho do JC PE, a notícia em destaque sobre a greve no Metrô do Recife e o carrossel Estamos de olho",
    },
    repo: "https://github.com/Lucascbayma/KIVO",
    about:
      "Uma nova versão do visual do portal do Jornal do Commercio, feita em um projeto do CESAR School com estudantes de Ciência da Computação e de Design.",
    audience:
      "Para o Jornal do Commercio, cujo desafio era aumentar a fidelidade dos leitores: fazer quem chega pelas buscas ficar mais tempo e abrir uma segunda notícia.",
    did: [
      {  text: "Atuei da interface ao servidor. O site foi pensado primeiro para o celular e construído em Django e Python, com testes de ponta a ponta em Selenium." },
    ],
  },
];

/** What the home page shows, in order: three projects in full, two as short entries. Sociiz Meet is under Experiência. */
export const featuredSlugs = ["cicle", "kivo", "joyscore"];
export const compactSlugs = ["recife-beat", "the-draft"];

export type Experience = {
  name: string;
  slug?: string;
  /** Plain-language sentence, shown first everywhere. */
  text: string;
  /** Main technologies, one secondary line. */
  tech?: string[];
  /** Technical detail, shown behind "Ver detalhes" on /sobre. */
  detail?: string;
};

export const experience: Experience[] = [
  {
    name: "Sociiz Meet",
    slug: "sociiz-meet",
    text: "Plataforma de reuniões por vídeo da empresa. Construí a interface em React e o serviço que libera a entrada de cada pessoa nas salas.",
    tech: ["React", "LiveKit", "Flask"],
    detail:
      "A interface usa React 19 e Vite com LiveKit: lobby com prévia de câmera e microfone, sala com chat em tempo real, compartilhamento de tela, painel de participantes, mão levantada, indicador de sinal, convite por link, estados de conexão e tela de pós-reunião, com a identidade visual da Sociiz. No backend, um serviço em Flask emite os tokens de acesso às salas com as permissões de cada participante.",
  },
  {
    name: "Leitura automática de documentos",
    text: "Desenvolvi e mantenho as rotinas em Python que leem documentos e PDFs e extraem os dados deles, o que se conhece como OCR.",
    tech: ["Python", "PaddleOCR", "FastAPI"],
    detail:
      "As rotinas usam PaddleOCR, OpenCV, NumPy e PDF2Image. Elas são expostas por FastAPI, usam o Label Studio para anotação e se integram a um armazenamento em nuvem.",
  },
  {
    name: "API principal e fluxos financeiros",
    text: "Criei vários endpoints da API principal da empresa, os pontos por onde os outros sistemas pedem dados e ações, e trabalhei em diversos fluxos financeiros.",
  },
  {
    name: "AWS e automações",
    text: "Trabalhei com serviços de nuvem da AWS e escrevi automações em Python, programas que fazem sozinhos tarefas repetitivas.",
    tech: ["AWS", "Python"],
  },
  {
    name: "Câmeras Intelbras",
    text: "Trabalhei com serviços de câmeras da Intelbras.",
  },
  {
    name: "Backend e integrações",
    text: "Mantive aplicações em Django e configurei o e-mail corporativo, incluindo a conexão segura e o diagnóstico de falhas de login.",
    tech: ["Django"],
    detail:
      "A configuração do e-mail corporativo usou SMTP, IMAP e POP3, com TLS/SSL e diagnóstico de falhas de autenticação.",
  },
];

export const skills = [
  { group: "linguagens", label: "Linguagens", items: ["Python", "JavaScript", "Java", "C", "SQL"] },
  { group: "frontend", label: "Para telas", items: ["React", "Vite", "CSS responsivo"] },
  {
    group: "backend",
    label: "Para servidores",
    items: ["FastAPI", "Flask", "Django", "Spring Boot", "Spring Data JPA", "APIs REST"],
  },
  { group: "tempoReal", label: "Vídeo e áudio ao vivo", items: ["LiveKit", "WebRTC (integração)", "WebSockets"] },
  { group: "documentos", label: "Leitura de documentos", items: ["PaddleOCR", "OpenCV", "PDF2Image"] },
  { group: "nuvem", label: "Nuvem e automação", items: ["AWS (Boto3)", "Automações em Python"] },
  { group: "testes", label: "Testes e publicação", items: ["Selenium", "GitHub Actions (CI/CD)", "Docker", "Maven"] },
  { group: "jogos", label: "Jogos", items: ["Raylib"] },
  { group: "ferramentas", label: "Ferramentas", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"] },
];

/** What a technology is, in one line for someone who does not program. Generic on purpose: it says nothing about what I did with it. */
export const glossary: Record<string, string> = {
  React: "Biblioteca para montar telas.",
  "React 19": "Biblioteca para montar telas.",
  Vite: "Ferramenta que prepara e serve o código da interface.",
  LiveKit: "A base para áudio e vídeo em tempo real.",
  Flask: "Base em Python para montar servidores pequenos.",
  Django: "Base em Python para montar sites com servidor.",
  "Spring Boot": "Base em Java para montar servidores.",
  "Spring Data JPA": "A camada que liga o código Java ao banco de dados.",
  Docker: "Empacota o programa para rodar igual em qualquer máquina.",
  Selenium: "Testes automáticos que usam o site como uma pessoa usaria.",
  "GitHub Actions": "Testes e publicação automáticos a cada mudança no código.",
  Raylib: "Biblioteca em C para fazer jogos.",
  Pillow: "Biblioteca de imagens para Python.",
  "Bootstrap Icons": "Conjunto de ícones para o site.",
};
