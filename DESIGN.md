---
name: Eros Amancio · Portfólio
description: O repositório do Eros aberto num editor de código escuro, com a paleta Vivid Black e um único acento verde.
colors:
  bg: "#141417"
  bg-alt: "#18181c"
  surface: "#1d1d22"
  surface-hover: "#26262c"
  line: "#2b2b32"
  line-strong: "#4b4b56"
  ink: "oklch(0.94 0.005 250)"
  ink-soft: "oklch(0.78 0.012 250)"
  ink-muted: "oklch(0.68 0.014 250)"
  ink-dim: "#6e6e78"
  accent: "#42dd76"
  accent-hover: "#6bea96"
  on-accent: "#08170d"
  vivid-blue: "#28a9ff"
  vivid-green: "#42dd76"
  vivid-orange: "#ff7135"
  vivid-pink: "#e66dff"
  vivid-purple: "#a95eff"
  vivid-salmon: "#ff478d"
  vivid-turquoise: "#14e5d4"
  vivid-yellow: "#ffb638"
  syn-kw: "#a95eff"
  syn-fn: "#28a9ff"
  syn-str: "#ffb638"
  syn-ty: "#14e5d4"
  syn-num: "#ff7135"
  syn-tag: "#ff478d"
  scrim: "oklch(0.1 0.01 260 / 0.6)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(min(3.1rem, 14cqi), 8cqi, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  display-narrow:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 10cqi, 3.1rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  page:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(min(2.4rem, 12vw), 6vw, 4.4rem)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(0.8rem, 1.05vw, 0.9rem)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  tag: "4px"
  chip: "5px"
  control: "6px"
  frame: "8px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(3.5rem, 8vw, 6rem)"
  max: "70rem"
  nav-h: "3.25rem"
  tabs-h: "2.5rem"
  side-w: "16rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control}"
    padding: "0 1rem"
    height: "3rem"
  button-contact-titlebar:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0 0.9rem"
    height: "2.25rem"
  chip-profile:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.syn-str}"
    typography: "{typography.code}"
    rounded: "{rounded.chip}"
    padding: "0 0.45rem"
    height: "2.25rem"
  chip-profile-pressed:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.chip}"
    padding: "0 0.75rem"
    height: "2.5rem"
  chip-filter-pressed:
    textColor: "{colors.ink}"
  tag-tech:
    backgroundColor: "transparent"
    textColor: "{colors.syn-ty}"
    rounded: "{rounded.tag}"
    padding: "0.15rem 0.55rem"
  code-panel:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.frame}"
  title-bar:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ink}"
    height: "{spacing.nav-h}"
  explorer-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    height: "2.25rem"
  explorer-item-current:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.ink}"
  tab:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    padding: "0 1rem"
    height: "{spacing.tabs-h}"
  tab-current:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
  status-bar:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    padding: "0.6rem clamp(0.75rem, 2vw, 1.25rem)"
---

# Design System: Eros Amancio · Portfólio

Documentado a partir do site construído (v6, 14/10/2026: redesign "Plano B"). Direção: **Editor de código**, escolhida pelo Eros entre três propostas depois de recusar a Azulejaria (conceitual demais), mantida quando o site passou a ser só portfólio (v4) e agora oferecida em **dois modos de leitura**: **Prévia** (padrão, linguagem comum, para quem não programa) e **Código** (o editor completo, para devs). Contrato em `.impeccable/surfaces/src-app-page-tsx.md`; plano e decisões em `PLANO-REDESIGN.md`. Tokens em `src/app/globals.css`; os valores do frontmatter acima são normativos.

## Overview

**Creative North Star: "O repositório aberto no editor"**

O site é o projeto do Eros aberto num editor: barra de título, explorador, abas, caminho do arquivo e barra de status. `README.md` é a página inicial e cada projeto é um arquivo `.md`. A moldura do editor está sempre presente; o que muda entre os modos é quanto do código aparece.

- **Prévia (padrão):** abre com a foto, o nome e uma frase em linguagem comum; três projetos com imagem, o estágio em seis frentes, e o contato. O explorador mostra "Estrutura" (Sobre, Projetos, Experiência, Contato). Nenhum painel de código, nenhum filtro, nenhuma sigla sem explicação.
- **Código:** o site completo para quem programa: `perfil.ts` com chips que filtram os projetos, `stack.json`, o trecho real do hook em "Este site", `contato.ts`, o filtro de projetos, o explorador de arquivos e `Ln, Col` na barra de status.

O controle **Prévia | Código** fica na barra de abas e a escolha é lembrada por visitante (`localStorage`, com `try/catch`). Os dois modos existem no HTML; um script antes da pintura aplica `data-view` no `<html>` e o CSS esconde o que não pertence ao modo (`data-only="code|preview"`), então não há piscada nem mudança de layout. A fonte de conteúdo é uma só (`src/content/site.ts`): o modo Código mostra os mesmos dados em outra forma.

A densidade é de ferramenta de trabalho: superfícies escuras em camadas tonais, divisórias finas, um único acento verde para ação e estado, e a paleta Vivid (inspirada no tema Bearded Vivid Black) para sintaxe, ícones e tecnologias.

Tudo que aparece como código, dado ou arquivo existe de fato. Nada de commits inventados ou dados que não existem; a linha `$ npm run contato` e o "compilado em 0,8s" da barra de status são moldura assumida, não dados, e só aparecem no modo Código.

**Key Characteristics:**
- Moldura de editor completa: título, explorador, abas, caminho, barra de status.
- Dois modos de leitura sobre a mesma fonte de dados, com o controle sempre visível.
- Fundo escuro em camadas tonais, sem sombras estruturais.
- Um acento verde (`#42DD76`); texto sobre ele sempre na cor `on-accent`.
- Cor de sintaxe e de ícone vem da paleta Vivid; o verde de ação não é usado como cor de sintaxe.
- Archivo para o que se lê; JetBrains Mono para moldura, código e dados.
- Layout interno por container query, não pela largura da janela.

## Colors

Tema escuro de editor, base `#141417` do Bearded Vivid Black, com um único acento verde e a paleta Vivid para sintaxe, ícones e tecnologias. Contraste medido sobre `bg`: azul 7,2, verde 10,4, laranja 6,7, rosa 7,0, roxo 5,0, salmão 5,7, turquesa 11,5, amarelo 10,5; `on-accent` sobre o verde 10,4.

### Primary
- **Verde Vivid** (`accent`, `#42DD76`): botões principais (Ver projetos, Contato, Enviar e-mail), cursor do título, linha de papel da abertura, filete da aba ativa e do destaque do explorador, barra de status, links "Ler estudo de caso", marcador `+` dos projetos, contorno de foco e seleção de texto. É também a cor do WhatsApp.
- **Verde Claro** (`accent-hover`): hover dos botões preenchidos.
- **Grafite sobre Acento** (`on-accent`): todo texto e ícone sobre o acento, inclusive a barra de status e o selo "EA".

### Secondary
- **Roxo de Palavra-chave** (`syn-kw`, `#A95EFF`): palavras-chave em código.
- **Azul de Função** (`syn-fn`, `#28A9FF`): funções e métodos no trecho real; ícone dos arquivos `.md`, LinkedIn, Python e C.
- **Turquesa de Tipo** (`syn-ty`, `#14E5D4`): chaves de objeto, tipos e nomes de componente; ícone dos arquivos `.ts`; React.
- **Amarelo de String** (`syn-str`, `#FFB638`): strings, links do `contato.ts`, valores do front matter; ícone `.json`; JavaScript.
- **Laranja** (`syn-num`, `#FF7135`): números e valores quentes; pastas do explorador; Java.
- **Salmão** (`syn-tag`, `#FF478D`): tags e colchetes de JSX; ícone de e-mail. **Rosa** (`#E66DFF`) fica reservado a destaques raros (LiveKit).

### Neutral
- **Área de Edição** (`bg`): fundo do documento e da aba ativa.
- **Barra do Editor** (`bg-alt`): barra de título, explorador, barra de abas, painéis de código, seções alternadas, rodapés dos estudos de caso.
- **Painel** (`surface`): hover de item no explorador.
- **Item Ativo** (`surface-hover`): arquivo atual no explorador.
- **Divisória** (`line`) e **Borda de Controle** (`line-strong`): divisórias entre regiões; contornos de chips, tags e botões de contorno; galhos `├─` da árvore de componentes.
- **Véu da Gaveta** (`scrim`): atrás do explorador aberto no celular; o único valor com transparência da paleta.
- **Texto** (`ink`), **Texto Secundário** (`ink-soft`), **Comentário** (`ink-muted`): texto principal; texto corrido secundário e metadados; comentários, números de linha, marcadores `#` e contagens. `--syn-cm` aponta para `ink-muted`, que passa no contraste também nos números de linha.

### Named Rules
**The One Green Rule.** Existe um acento de ação só, o verde. Ele marca ação, estado atual e a moldura viva (cursor, aba ativa, barra de status); texto sobre ele usa sempre `on-accent`.

**The Color Lives in Code and Icons Rule.** As cores Vivid aparecem em código e dados, ícones de arquivo e de contato, e nos chips e tags de tecnologia (cada tecnologia tem sua cor, definida em `techColor`). Texto corrido e títulos nunca recebem cor.

## Typography

**Display Font:** Archivo variável (com system-ui), arquivo local em `src/fonts`, OFL, só o subconjunto latin.
**Body Font:** Archivo variável.
**Label/Mono Font:** JetBrains Mono variável (com ui-monospace), local, OFL, latin; carregada com preload porque aparece na primeira tela.

**Character:** Uma grotesca larga e pesada para nome e títulos, com eixo de largura aberto (`font-stretch` 104% nos títulos, 112% no nome), contra uma mono de editor para tudo que é moldura ou dado. A pareação diz "desenvolvedor" sem precisar de ilustração.

### Hierarchy
Sete passos, definidos como variáveis `--text-*` em `globals.css`; nenhum outro lugar define tamanho de fonte. As variantes `-col` são o mesmo passo dentro de uma coluna estreita, escalando com o container (`cqi`) em vez da janela.
- **Display** (`--text-display`, 800, clamp(min(3.1rem, 14cqi), 8cqi, 6rem), 0.92): só o nome na abertura, seguido do cursor verde. Ao lado da foto, em container estreito, usa `--text-display-narrow` (clamp(2rem, 10cqi, 3.1rem)); abaixo de container 34rem o nome sempre ocupa duas linhas ("Eros" e "Amancio"), para a troca de fonte não mudar a altura da abertura.
- **Page** (`--text-page`, 740, clamp(min(2.4rem, 12vw), 6vw, 4.4rem); `--text-page-col` clamp(2.4rem, 6.5cqi, 4.4rem)): título de página (Sobre, estudo de caso, página não encontrada) e "Vamos conversar?".
- **Section** (`--text-section`, 740, clamp(1.75rem, 4vw, 2.75rem); `--text-section-col` clamp(1.75rem, 3.5cqi, 2.75rem)): títulos de seção, precedidos do marcador Markdown.
- **Item** (`--text-item`, 740, clamp(1.35rem, 2.2vw, 1.75rem)): nome do projeto, empresa e instituição, subtítulos `##` dos estudos de caso.
- **Lede** (`--text-lede`, 400, clamp(1.1rem, 1.6vw, 1.25rem), 1.6): abertura, resumo dos estudos de caso, em `ink-soft`.
- **Body** (`--text-body`, 400, 1.0625rem, 1.6): texto corrido; blocos de leitura limitados a 34–42rem.
- **Label** (`--text-label`, 0.875rem) e **Code** (`--text-code`, mono 400, clamp(0.8rem, 1.05vw, 0.9rem), 1.75): moldura, abas, caminho, explorador, barra de status, tags, metadados; corpo dos painéis com números de linha.

Na Prévia a mono é só moldura (abas, barra de status, painel Estrutura), cerca de 2,6% das palavras no desktop e 1,6% no celular. No modo Código ela aparece também nos painéis.

### Named Rules
**The Two Voices Rule.** Archivo para o que se lê, JetBrains Mono para o que é moldura, código ou dado. Um rótulo em mono é dado; um parágrafo em mono é erro.

**The Markdown Marker Rule.** Títulos de seção levam `#` (página e seções da home) ou `##` (subseções) em mono, `ink-muted`, a 0.7em, com `aria-hidden`. É o único ornamento de título.

## Layout

- **Moldura:** grade de aplicativo com barra de título (3.25rem) fixa no topo, área de edição com barra de abas (2.5rem; 2.8rem em ponteiro grosso) fixa logo abaixo, e barra de status no fim do documento. A partir de 64rem o explorador fica fixo à esquerda com 16rem. Em celular deitado (altura até 32rem e largura abaixo de 64rem) a barra de abas deixa de ser fixa e a rolagem de âncoras considera só a barra de título.
- **Modos:** o controle Prévia | Código está na barra de abas, à direita (`aria-pressed`, grupo "Modo de leitura"). Na Prévia o painel lateral é "Estrutura" com quatro itens; no modo Código é "Explorador" com a árvore de arquivos. Abaixo de 64rem o painel vira gaveta aberta pelo botão de menu, com véu escuro; Esc fecha. O botão Contato fica sempre na barra de título e vira só ícone abaixo de 26.5rem.
- **Conteúdo:** coluna `wrap` com margem lateral fluida (gutter) e largura máxima de 70rem. A área de edição é um container e os layouts internos usam `@container`.
- **Abertura (Sobre):** foto, nome, papel, frase, parágrafo do estágio e ações. No celular a foto de 4.5rem fica ao lado do nome (container de 20rem a 55.99rem); a partir de 36rem ela cresce para 9rem; a partir de 56rem vai para a coluna da direita com 14rem. No modo Código não há foto e o nome ocupa a linha inteira, com o `perfil.ts` ao lado.
- **Projetos:** três projetos grandes (Ciclê, KIVO, Joyscore) em zigue-zague, com imagem, contexto, duas frases, até três tecnologias com ponto de cor e "Ler o estudo de caso"; Recife Beat e The Draft em lista compacta de duas colunas (uma coluna no celular, sem imagem). Sociiz Meet fica em Experiência. O filtro de projetos só existe no modo Código.
- **Experiência:** Sociiz com as seis frentes sempre visíveis, uma frase clara por frente (decisão de manter todas abertas, 14/10/2026), mais a linha da CESAR School. A /sobre repete as frentes com tecnologias em uma linha e o texto técnico atrás de "Ver detalhes".
- **Toque:** com `(pointer: coarse)`, controles da moldura, botões e links de texto fora de parágrafos chegam a 2.75rem (44px); links dentro de texto corrido mantêm ao menos 24px. Nenhuma largura de 280px a 2560px tem rolagem horizontal, nem em zoom de 200% e 400%.
- **Ritmo:** seções com clamp(2.25rem, 8vw, 6rem) de respiro vertical, sem divisória na Prévia (fundo contínuo) e com divisória `line` no modo Código; seções alternadas em `bg-alt` só no modo Código. A seção de contato respira até 7rem.
- **Metas medidas (14/10/2026, Prévia):** 541 palavras na home (meta do plano: 450; as seis frentes do estágio ficam visíveis por decisão), 8 tecnologias, primeira imagem de projeto a 1,2 tela no celular, contato a 5,0 telas e 5.170px de altura no celular, 13 elementos clicáveis na primeira tela do celular.

### Named Rules
**The Container, Not Viewport Rule.** A janela decide só a moldura (explorador fixo ou gaveta, linha única da barra de status). Tudo dentro da área de edição responde à largura do container.

**The Two Readers Rule.** Todo bloco da Prévia começa pelo que a coisa faz para alguém, em linguagem comum; a tecnologia vem depois, numa linha secundária, e siglas de protocolo só aparecem na /sobre em "Ver detalhes", nos estudos de caso e no modo Código. Nada do modo Código pode ser necessário para entender a Prévia.

## Elevation & Depth

Profundidade vem de camadas tonais: área de edição (`bg`) abaixo das barras e painéis (`bg-alt`), item ativo em `surface-hover`, divisórias de 1px separando regiões. A única sombra é ambiente, sob os painéis de código, para destacá-los da seção alternada; não há sombra em botões, cartões ou imagens.

### Shadow Vocabulary
- **Painel flutuante** (`box-shadow: 0 24px 48px -32px oklch(0 0 0 / 0.8)`): só nos painéis de código (`perfil.ts`, `stack.json`, trecho do hook, `contato.ts`, painéis do Sociiz Meet).
- **Borda de rolagem** (máscara `linear-gradient(to left, transparent, #000 var(--edge))` com `@property --edge`: 3rem até 92% da rolagem horizontal e 0 no fim, via `animation-timeline: scroll(self inline)`): o trecho de código real esmaece na borda direita só enquanto há mais código para rolar; sem overflow a linha do tempo fica inativa e nada esmaece. É máscara, não sombra, e `#000` só dá opacidade.
- **Véu da gaveta** (`scrim`): atrás do explorador aberto no celular.

### Named Rules
**The Tonal Layering Rule.** Superfícies se separam por tom e filete, não por sombra. Sombra nova só se for ambiente e sob um painel de código.

## Shapes

Cantos pouco arredondados e em quatro passos, do maior (moldura) ao menor (dado): 8px em painéis, imagens, retrato e front matter; 6px em botões, botão de menu e selo "EA"; 5px em chips clicáveis (perfil e filtro); 4px nas tags de tecnologia e no contorno de foco. As barras do editor e as abas são retas. Bordas sempre de 1px; o único traço mais grosso é o filete de 2px em verde no topo da aba ativa. A árvore de componentes usa os galhos de texto `├─` e `└─` em `line-strong`.

## Components

### Buttons
Preenchidos e diretos, sem gradiente nem sombra.
- **Shape:** cantos discretos (6px).
- **Primary:** fundo `accent`, texto `on-accent`, Archivo 750, altura mínima de 3rem, 0 1.25rem. Usado em Ver projetos, Enviar e-mail e Falar sobre este projeto.
- **Hover / Focus:** fundo `accent-hover` em 160ms; na abertura, um afundamento de 1px no clique. Foco: contorno de 2px em `accent` com 3px de afastamento em todo elemento.
- **Contorno:** transparente, borda `line-strong`, texto `ink-soft`; hover clareia borda e texto. É o botão Copiar e-mail, que mostra "E-mail copiado" em `accent` por 2.2s.
- **Secundário:** texto `ink-soft` sem caixa (GitHub, LinkedIn, WhatsApp na abertura, cada um com o ícone na própria cor); hover para `ink`.
- **WhatsApp:** contorno de 1px em verde a 55%, ícone verde, texto `ink`; hover enche de verde a 12%. Fica ao lado de Enviar e-mail no contato, nos estudos de caso e na página Sobre, e a mensagem já vem escrita ("Olá, Eros! Vi seu portfólio e gostaria de conversar."; nos estudos de caso cita o projeto).
- **Contato da barra de título:** versão compacta do primário (2.25rem) que abre um menu com Enviar e-mail, Chamar no WhatsApp e Ver todos os contatos; fecha com Esc ou clique fora. No celular o menu ocupa a largura da barra.
- **Clique:** todo botão afunda a 97% (`scale`) enquanto pressionado.

### Chips
Só no modo Código.
- **Perfil (`perfil.ts`):** strings entre aspas em mono, na cor da tecnologia, sobre `bg`, borda `line-strong`, 2.25rem de altura. Pressionado: fundo na cor da tecnologia, texto `on-accent`. Escolher um chip filtra a lista e rola até Projetos; escolher de novo desfaz. Em painéis estreitos (container abaixo de 30rem) os quatro chips ficam em duas linhas iguais.
- **Filtro de Projetos:** "filtro:" em `syn-ty`, depois "todos" e cada tecnologia com a contagem em números tabulares. Transparente, borda `line-strong`, 2.5rem; pressionado ganha borda na cor da tecnologia e fundo a 14%. Uma linha `aria-live` diz quantos projetos usam a tecnologia. O filtro atua por `data-filter` no `<html>` e só tem efeito no modo Código.
- **Linha de tecnologias (`TechLine`)**, nos dois modos: até três tecnologias em texto calmo, cada uma com um ponto da própria cor (`techColor`). Um componente de servidor compartilhado pela home, pela /sobre e pelos estudos de caso.

### Code Panel (componente de assinatura)
Só no modo Código. Cabeçalho com ícone em `syn-kw` e nome do arquivo em mono, corpo `bg-alt` com números de linha alinhados à direita em `ink-muted` numa coluna de 2.75rem. Texto quebra com recuo pendente; código real não quebra e rola na horizontal. Variantes em uso:
- **`perfil.ts`** na abertura: objeto `eros` com formação, estágio, tecnologias (os chips) e idiomas.
- **`stack.json`** em Tecnologias: grupos e itens como dados.
- **Trecho real** em Este site: a função `useActiveSection` de `src/components/Shell.tsx`, lida na build por `src/content/source.ts` e realçada com as cores de sintaxe, com os números de linha verdadeiros. Na Prévia vira uma linha com o link para o GitHub.
- **`contato.ts`**: precedido da linha `~/portfolio $ npm run contato`; e-mail, LinkedIn, GitHub e WhatsApp como links em `syn-str`. Na Prévia é uma lista simples com o nome e o endereço por extenso.

### Disclosure
`<details>` nativo estilizado (`src/components/Disclosure.tsx`), usado como "Ver detalhes" nas frentes do estágio da /sobre. Funciona sem JavaScript, o teclado abre e fecha (Enter e Espaço) e o leitor de tela recebe o estado. A altura anima em 250ms com `::details-content` e `interpolate-size`; onde não há suporte abre sem animação, e com movimento reduzido nunca anima.

### Explorer e Estrutura
- **Modo Código, "Explorador":** painel `bg-alt` em mono 0.86rem, pasta `portfolio` com `README.md`, a pasta `trabalhos` (um `.md` por projeto) e `experiencia.md`, `stack.json`, `sobre.md`, `este-site.ts`, `contato.ts`. Ícone por tipo: `.md` azul, `.ts` turquesa, `.json` amarelo, pastas laranja.
- **Prévia, "Estrutura":** quatro itens em Archivo (Sobre, Projetos, Experiência, Contato) que levam às seções da home. O item da seção visível ganha `aria-current="location"`.
- O destaque do item atual é um elemento único (`surface-hover` com filete verde) que desliza entre itens (posicionado por `transform`, transição em CSS); ele escolhe o painel visível e se recalcula quando o modo muda (evento `viewchange`).

### Tabs, Path and Status Bar
- **Abas:** `README.md` sempre aberta; fora da home, uma segunda aba com o arquivo da página, que abre com deslize. Aba atual em `bg` com filete verde de 2px no topo. À direita, o controle Prévia | Código.
- **Caminho:** `portfolio › trabalhos › arquivo` em `ink-muted`; só no modo Código a partir de 40rem.
- **Barra de status:** faixa `accent`. Na Prévia mostra só "Eros Amancio · Recife, PE" e os links; no modo Código acrescenta o ramo `main`, `Ln, Col` que acompanham a rolagem e "pronto". No celular, uma linha só.

### Project Card
- **Prévia:** imagem sem moldura (contorno de 1px em `--image-edge`, que clareia no hover), nome, contexto ("Projeto acadêmico para a Edenred · Full stack"), duas frases, até três tecnologias e "Ler o estudo de caso". O título é o link principal; o link da imagem sai da ordem de tabulação.
- **Código:** a imagem ganha a barra com o nome do arquivo em mono, o marcador `+ trabalhos/nome.md` e as demais tecnologias.
- **Sociiz Meet** não tem imagem: aparece em Experiência com link para o estudo de caso; no modo Código mostra a árvore de componentes e a nota com cadeado explicando que código e telas são da Sociiz.

### Case Study
- Abre com "Todos os projetos", título com `#`, resumo e os fatos do projeto. Na Prévia, uma lista simples (Contexto e Meu papel); no modo Código, o front matter (`---`, `contexto:`, `papel:`, `tecnologias:`), chaves em `syn-ty` e valores em `syn-str`.
- **Prévia de imagem:** moldura `bg-alt` com barra do nome do arquivo; a imagem aparece no máximo no tamanho nativo, centralizada, nunca esticada.
- **Sociiz Meet, só texto:** dois painéis lado a lado a partir de 56rem: árvore de componentes e o serviço de tokens em Flask (`GET /token`), mais a nota de cadeado. Sem imagens, por acordo.
- Corpo em quatro blocos `##` de até 42rem: **O que é**, **Para quem**, **O que eu fiz** (com subtítulos quando há partes distintas) e **Tecnologias** (cada uma com ponto de cor e, quando é conhecida, uma linha genérica de explicação vinda do glossário em `site.ts`). Rodapé `bg-alt` com Falar sobre este projeto (e-mail) e Próximo projeto.

### Images
| Arquivo | Origem |
|---|---|
| `public/images/eros.jpg` | Foto enviada pelo Eros, recorte quadrado (800×800) |
| `public/images/cicle.jpg` | Print enviado pelo Eros (915×650); painel direito cortado e a descrição do painel esquerdo borrada até confirmar a menção a um terceiro |
| `public/images/joyscore.jpg`, `recife-beat.jpg`, `the-draft.jpg`, `kivo.jpg` | Prints e arte enviados pelo Eros, só redimensionados |

Sociiz Meet não tem e não pode ter imagens.

### Motion
Ideia: **o editor ganha vida, só onde o visitante está lendo código**. GSAP (ScrollTrigger, SplitText) cuida de sequências e rolagem e só roda no modo Código, em tela de 64rem ou mais; o resto (menu, abas, filtro, "Ver detalhes", destaque do explorador, ícone de copiar) é CSS puro. O pacote `motion` saiu do projeto. O GSAP carrega depois da hidratação, em chunk próprio. Curva padrão `cubic-bezier(0.16, 1, 0.3, 1)` (`expo.out` no GSAP); constantes em `src/motion/tokens.ts`. Só `transform`, `opacity` e `clip-path` animam.
- **Abertura** (`src/motion/Opening.tsx`, só na home, no modo Código, em tela de 64rem ou mais, uma vez por sessão): o nome é digitado, as linhas do `perfil.ts` se escrevem e acendem as cores de cada token (a cor de partida do acendimento é `ink-dim`, `#6e6e78`, valor literal porque o GSAP não lê `oklch`), depois entram o texto e os botões. Dura cerca de 0,7s e qualquer clique, tecla ou rolagem a completa. Nada fica escondido por mais de 0,9s.
- **Modo Código** (`src/motion/CodeMotion.tsx`): `stack.json` e `contato.ts` se escrevem linha a linha quando entram na tela; a linha de leitura de `este-site.ts` desce pelo código conforme a rolagem.
- **Projetos** (`ProjectsMotion.tsx`): cada imagem aparece com um fade de 0,5s ao entrar na tela.
- **Troca de modo:** a Prévia entra com fade de 200ms; os painéis de código do modo Código se abrem com `clip-path` em 400ms, escalonados de 60ms (`--k`). A troca é interrompível: clicar de novo no meio volta na hora.
- **Transições de CSS:** conteúdo da página sobe 8px em 260ms (`template.tsx`); a aba do arquivo abre com deslize; menu de contato com fade e escala; "Ver detalhes" em 250ms; clique em botão afunda a 96%.
- **Movimento reduzido:** nenhuma animação de deslocamento; a página já nasce completa e as transições viram só opacidade (regra global de CSS). No celular não roda GSAP.

### Named Rules
**The Real Source Rule.** Código, dados e arquivos mostrados no site existem e rodam. Trechos de código são lidos do fonte na build, não copiados à mão.

**The Native Size Rule.** Imagem de projeto nunca passa do tamanho nativo; o que sobra da moldura fica vazio dos lados, como numa prévia de imagem do editor.

## Do's and Don'ts

### Do:
- **Do** escrever primeiro em linguagem comum (o que a coisa faz para alguém) e só depois a tecnologia; siglas de protocolo ficam na /sobre em "Ver detalhes", nos estudos de caso e no modo Código.
- **Do** manter uma só fonte de conteúdo (`site.ts`) para os dois modos; o modo Código mostra os mesmos dados, nunca um texto paralelo.
- **Do** apresentar página nova como arquivo: entrada no explorador, aba, caminho e título com marcador `#`.
- **Do** usar o painel de código com números de linha para dado estruturado, só no modo Código.
- **Do** ler do código-fonte na build qualquer trecho de código mostrado como real.
- **Do** dar a cada tecnologia a mesma cor em todo o site (`techColor`), sempre como ponto ou texto de tag, nunca em texto corrido.
- **Do** manter texto sobre o acento em `on-accent` e foco visível com contorno de 2px em `accent`.
- **Do** mostrar imagens de projeto no máximo no tamanho nativo.
- **Do** mostrar Sociiz Meet só em texto.
- **Do** responder com `@container` dentro da área de edição, deixar o container decidir o tamanho de título em coluna estreita (`cqi`) e usar só os sete passos `--text-*`.
- **Do** zerar `text-indent` em link `inline-block` dentro de linha de código, para o recuo pendente não deslocar o alvo.

### Don't:
- **Don't** usar commits inventados, saída de terminal que finja dados ou números que não existem.
- **Don't** colocar imagem, print ou captura do Sociiz Meet.
- **Don't** esticar imagem além do tamanho nativo.
- **Don't** usar cor Vivid em texto corrido ou títulos, nem criar um segundo acento de ação.
- **Don't** esconder conteúdo por mais de 0,9s esperando uma animação, nem animar o que já estava na tela.
- **Don't** deixar o modo Código esconder informação que a Prévia precisa, nem pôr jargão técnico na Prévia sem explicar.
- **Don't** usar rótulo em maiúsculas espaçadas acima de títulos; esse estilo existe só no título do painel do explorador.
- **Don't** separar superfícies com sombra; use tom e filete de 1px.
- **Don't** usar metáfora de fora do mundo do software.
- **Don't** destacar "em equipe" nos projetos: o papel do Eros é descrito com o tamanho exato, sem "liderei" nem "sozinho".
