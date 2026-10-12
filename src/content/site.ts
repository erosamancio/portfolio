export const contact = {
  whatsappNumber: "5581998050865",
  whatsappDisplay: "(81) 99805-0865",
  email: "erosamancio06@gmail.com",
  github: "https://github.com/erosamancio",
  linkedin: "https://www.linkedin.com/in/erosamancio/",
};

export function whatsappLink(message: string) {
  const phone = contact.whatsappNumber;
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export const defaultMessage = "Oi, Eros! Vi seu portfólio e quero conversar sobre um site.";

export type ServiceId = "landing" | "institucional" | "sistema" | "naosei";

export type Service = {
  id: ServiceId;
  name: string;
  message: string;
  summary?: string;
  includes?: string[];
};

export const services: Service[] = [
  {
    id: "landing",
    name: "Landing page",
    message: "Oi, Eros! Vi seu portfólio e quero uma landing page para o meu negócio.",
    summary:
      "Uma página feita para uma coisa só: fazer a pessoa chamar você. Ideal para divulgar um serviço, um produto ou uma campanha.",
    includes: ["Página única pensada para o celular", "Botão de WhatsApp com mensagem pronta", "Publicação no ar"],
  },
  {
    id: "institucional",
    name: "Site institucional",
    message: "Oi, Eros! Vi seu portfólio e quero um site institucional para o meu negócio.",
    summary:
      "Algumas páginas para apresentar o seu negócio com calma: quem você é, o que faz, onde fica e como falar com você.",
    includes: [
      "Páginas do seu negócio",
      "Formulário de contato",
      "Boa aparência no Google e quando alguém compartilha o link no WhatsApp",
    ],
  },
  {
    id: "sistema",
    name: "Site com sistema",
    message: "Oi, Eros! Vi seu portfólio e preciso de um site com sistema. Posso te explicar a ideia?",
    summary:
      "Quando o site precisa fazer algo a mais: receber pedidos, mandar e-mails automáticos, conversar com outro sistema ou ter uma área para você atualizar as informações.",
    includes: ["O site e a parte que roda por trás dele", "Integração com o que você já usa", "Feito sob medida"],
  },
  {
    id: "naosei",
    name: "Ainda não sei",
    message: "Oi, Eros! Vi seu portfólio e quero um site, mas não sei bem qual tipo. Pode me ajudar?",
  },
];

export type Project = {
  slug: string;
  name: string;
  context: string;
  stack: string[];
  role: string;
  summary: string;
  image: { src: string; width: number; height: number; alt: string };
  repo?: string;
  isWebsite: boolean;
  body: { heading: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "cicle",
    name: "Ciclê",
    context: "Projeto em equipe",
    stack: ["Java", "Spring Boot", "React", "JavaScript"],
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
    isWebsite: true,
    body: [
      {
        heading: "O que é",
        text: "Uma ferramenta web que calcula a emissão de carbono de uma empresa a partir das transações que ela processa. A tela de memória de cálculo mostra de onde vem cada número: volume de transações do mês, a divisão entre pagamentos por aproximação e cartões físicos e a composição da frota de cartões.",
      },
      {
        heading: "O que eu fiz",
        text: "Trabalhei no full stack: o backend em Java com Spring Boot e a interface em React e JavaScript, que apresenta o cálculo de forma legível para quem não é especialista.",
      },
      {
        heading: "Por que importa para o seu site",
        text: "É o tipo de projeto em que o visual e a lógica precisam andar juntos. Um número errado ou mal explicado derruba a confiança, então a interface foi pensada para mostrar o caminho de cada resultado.",
      },
    ],
  },
  {
    slug: "joyscore",
    name: "Joyscore",
    context: "Projeto acadêmico",
    stack: ["React", "Python"],
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
    isWebsite: true,
    body: [
      {
        heading: "O que é",
        text: "Uma plataforma para avaliar jogos. A página inicial reúne busca, filtro por gênero, destaques populares e os favoritos dos desenvolvedores.",
      },
      {
        heading: "O que eu fiz",
        text: "Atuei no full stack: construí componentes e telas em React, integrei a interface com o backend em Python e participei da identidade visual, inspirada no universo arcade, em joysticks e em sistemas de pontuação.",
      },
      {
        heading: "Por que importa para o seu site",
        text: "Mostra como eu organizo uma aplicação React de ponta a ponta: dados vindos do backend, estados da interface e uma identidade visual coerente em todas as telas.",
      },
    ],
  },
  {
    slug: "recife-beat",
    name: "Recife Beat",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    role: "Desenvolvimento",
    summary:
      "Jogo de ritmo com a cultura de Recife, com editor de notas e ranking. Não é site, mas mostra como eu penso em interação, tempo e detalhe.",
    image: {
      src: "/images/recife-beat.jpg",
      width: 2000,
      height: 1269,
      alt: "Partida do Recife Beat no Recife Antigo ao pôr do sol, com trilhas de notas, botões coloridos e a mensagem Perfeito",
    },
    repo: "https://github.com/erosamancio/Recife_Beat",
    isWebsite: false,
    body: [
      {
        heading: "O que é",
        text: "Um jogo de ritmo inspirado em Friday Night Funkin' e Guitar Hero, ambientado em Recife, feito para a disciplina de Algoritmos e Estruturas de Dados.",
      },
      {
        heading: "O que eu fiz",
        text: "As notas da música são organizadas em uma lista encadeada com tempo, botão e estado de cada nota. O jogo tem entrada baseada em tempo, pontuação, avaliação de precisão, seleção de músicas e ranking ordenado com QuickSort e MergeSort. Também tem um editor de beatmap que grava as notas durante a música e salva em arquivo.",
      },
      {
        heading: "Por que importa para o seu site",
        text: "Um jogo de ritmo não perdoa atraso nem resposta confusa. É o mesmo cuidado com resposta imediata e clareza que eu levo para cada botão de um site.",
      },
    ],
  },
  {
    slug: "the-draft",
    name: "The Draft",
    context: "Projeto acadêmico",
    stack: ["C", "Raylib"],
    role: "Desenvolvimento",
    summary: "Roguelike top-down com estética de desenho em papel: salas, chefes, loja e upgrades.",
    image: {
      src: "/images/the-draft.jpg",
      width: 1600,
      height: 986,
      alt: "Arte de título do The Draft: um bonequinho desenhado a lápis em uma folha de caderno sobre papel quadriculado",
    },
    repo: "https://github.com/Lucascbayma/The_Draft",
    isWebsite: false,
    body: [
      {
        heading: "O que é",
        text: "Um roguelike top-down com visual de desenho em papel. O jogador atravessa salas com ondas de inimigos, enfrenta chefes e encontra loja, tesouros, armadilhas e upgrades.",
      },
      {
        heading: "O que eu fiz",
        text: "Desenvolvimento em C com Raylib, usando structs, ponteiros, alocação dinâmica, listas encadeadas, matrizes e arquivos para montar o sistema de salas, vida e moedas.",
      },
      {
        heading: "Por que importa para o seu site",
        text: "Uma identidade visual forte e consistente do início ao fim, que é exatamente o que faz um site ser lembrado.",
      },
    ],
  },
];

export const steps = [
  { name: "Conversa", text: "Você me conta o que faz e o que precisa, pelo WhatsApp mesmo." },
  { name: "Proposta", text: "Eu te mando o que vou fazer, o prazo e o valor, por escrito." },
  { name: "Design", text: "Você vê como o site vai ficar antes de eu programar." },
  { name: "Desenvolvimento", text: "Eu construo e te mostro andando, para você ajustar no caminho." },
  { name: "No ar", text: "Publico o site e te explico como tudo funciona." },
];

export const faq = [
  {
    q: "Quanto custa um site?",
    a: "Depende do que o seu negócio precisa. Me chama no WhatsApp, eu entendo o seu caso e te mando uma proposta por escrito, sem compromisso.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Também depende do tipo de site. O prazo vem combinado na proposta, antes de começar.",
  },
  {
    q: "Preciso ter domínio e hospedagem?",
    a: "Não precisa se preocupar. Eu ajudo a escolher e contratar o domínio e a hospedagem, com custo combinado na proposta.",
  },
  {
    q: "E depois que o site estiver no ar?",
    a: "Eu ofereço manutenção para ajustes e atualizações, também com custo combinado com você.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O site é pensado primeiro para o celular, que é onde a maioria dos seus clientes vai ver.",
  },
];
