---
name: Eros Amancio · Portfólio
description: O repositório do Eros aberto num editor de código escuro, com um único acento chartreuse.
colors:
  bg: "oklch(0.17 0.012 260)"
  bg-alt: "oklch(0.195 0.012 260)"
  surface: "oklch(0.215 0.012 260)"
  surface-hover: "oklch(0.25 0.014 260)"
  line: "oklch(0.29 0.012 260)"
  line-strong: "oklch(0.42 0.014 260)"
  ink: "oklch(0.94 0.005 250)"
  ink-soft: "oklch(0.78 0.012 250)"
  ink-muted: "oklch(0.66 0.014 250)"
  accent: "oklch(0.91 0.19 123)"
  accent-hover: "oklch(0.95 0.15 123)"
  on-accent: "oklch(0.19 0.02 130)"
  syn-kw: "oklch(0.79 0.13 300)"
  syn-str: "oklch(0.85 0.12 75)"
  syn-ty: "oklch(0.83 0.1 200)"
  scrim: "oklch(0.1 0.01 260 / 0.6)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 8cqi, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 4.2vw, 3.1rem)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.4vw, 2rem)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1.5vw, 1.2rem)"
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
    fontSize: "0.82rem"
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

Documentado a partir do site construído (v4, 12/10/2026). Direção: **Editor de código**, escolhida pelo Eros entre três propostas depois de recusar a Azulejaria (conceitual demais) e substituir o "Limpo e técnico", e mantida na v4, quando o site passou a ser só portfólio. Contrato em `.impeccable/surfaces/src-app-page-tsx.md`. Tokens em `src/app/globals.css`; os valores do frontmatter acima são normativos.

## Overview

**Creative North Star: "O repositório aberto no editor"**

O site é o projeto do Eros aberto num editor: barra de título, explorador de arquivos, abas, caminho do arquivo e barra de status. `README.md` é a página inicial, cada projeto é um arquivo `.md`, experiência e tecnologias aparecem como dados (`perfil.ts`, `stack.json`, `contato.ts`). O editor é a moldura; o conteúdo continua em texto normal, legível para quem não é da área.

A densidade é de ferramenta de trabalho: superfícies escuras em camadas tonais, divisórias finas, um único acento chartreuse para ação e estado, e cor de sintaxe só onde há código ou dado. A interação mais marcante é real, não decorativa: as tecnologias do painel `perfil.ts` filtram a lista de projetos, e o trecho de código mostrado em "Este site" é lido do código-fonte durante a build.

Tudo que aparece como código, dado ou arquivo existe de fato. Nada de terminal falso, commits inventados ou dados que não existem. Desde a v4 não há conteúdo de venda: o seletor de serviço do WhatsApp, os serviços e o FAQ saíram, e com eles as regras que só existiam para eles.

**Key Characteristics:**
- Moldura de editor completa: título, explorador, abas, caminho, barra de status.
- Fundo escuro em camadas tonais, sem sombras estruturais.
- Um acento chartreuse; texto sobre ele sempre na cor `on-accent`.
- Archivo para o que se lê; JetBrains Mono para moldura, código e dados.
- Painéis de código com números de linha como componente de conteúdo.
- Layout interno por container query, não pela largura da janela.

## Colors

Tema escuro de editor, frio e quase neutro (matiz 250–260), com um único acento chartreuse e uma paleta curta de sintaxe.

### Primary
- **Chartreuse de Cursor** (`accent`): botões principais (Ver projetos, Contato, Mandar um e-mail), cursor do título, linha de papel do hero, filete da aba ativa, ícone do arquivo ativo no explorador, barra de status, links "Ler estudo de caso", chip pressionado do `perfil.ts`, contorno de foco e seleção de texto. Também é a cor de função no realce de sintaxe (`--syn-fn` aponta para ele).
- **Chartreuse Claro** (`accent-hover`): hover dos botões preenchidos.
- **Grafite sobre Acento** (`on-accent`): todo texto e ícone sobre o acento, inclusive a barra de status e o selo "EA".

### Secondary
- **Lilás de Palavra-chave** (`syn-kw`): palavras-chave em código, ícone de arquivos `.ts` e ícone do cabeçalho dos painéis.
- **Âmbar de String** (`syn-str`): strings em código e dados, chips do `perfil.ts`, links do `contato.ts`, valores do front matter, ícone de arquivos `.json`.
- **Ciano de Tipo** (`syn-ty`): chaves de objeto e tipos, tags de tecnologia dos projetos, rótulo "filtro:", chaves do front matter, ícone de arquivos `.md`, nomes de componente (`<App />`).

### Neutral
- **Área de Edição** (`bg`): fundo do documento e da aba ativa.
- **Barra do Editor** (`bg-alt`): barra de título, explorador, barra de abas, painéis de código, seções alternadas, rodapés dos estudos de caso.
- **Painel** (`surface`): hover de item no explorador.
- **Item Ativo** (`surface-hover`): arquivo atual no explorador.
- **Divisória** (`line`) e **Borda de Controle** (`line-strong`): divisórias entre regiões; contornos de chips, tags e botões de contorno; galhos `├─` da árvore de componentes.
- **Véu da Gaveta** (`scrim`): atrás do explorador aberto no celular; o único valor com transparência da paleta.
- **Texto** (`ink`), **Texto Secundário** (`ink-soft`), **Comentário** (`ink-muted`): texto principal; texto corrido secundário e metadados; comentários, números de linha, marcadores `#` e contagens. `--syn-cm` aponta para `ink-muted`, que passa no contraste também nos números de linha.

### Named Rules
**The One Chartreuse Rule.** Existe um acento só. Ele marca ação, estado atual e a moldura viva (cursor, aba ativa, barra de status); nada mais recebe cor de destaque, e texto sobre ele usa sempre `on-accent`.

**The Syntax Stays in Code Rule.** Lilás, âmbar e ciano aparecem só em código e dados: painéis com números de linha, front matter, tags de tecnologia, ícones de tipo de arquivo e rótulos em mono. Texto corrido e títulos nunca recebem cor de sintaxe.

## Typography

**Display Font:** Archivo variável (com system-ui), arquivo local em `src/fonts`, OFL, só o subconjunto latin.
**Body Font:** Archivo variável.
**Label/Mono Font:** JetBrains Mono variável (com ui-monospace), local, OFL, latin; carregada com preload porque aparece na primeira tela.

**Character:** Uma grotesca larga e pesada para nome e títulos, com eixo de largura aberto (`font-stretch` 104% nos títulos, 112% no nome do hero), contra uma mono de editor para tudo que é moldura ou dado. A pareação diz "desenvolvedor" sem precisar de ilustração.

### Hierarchy
- **Display** (800, clamp(3.1rem, 8cqi, 6rem), 0.92): só o nome no hero, seguido do cursor chartreuse; a última palavra e o cursor quebram juntos. Títulos de página usam a mesma voz com o teto próprio de cada um: Sobre clamp(2.75rem, 9vw, 6rem), estudo de caso clamp(2.6rem, 7vw, 5rem), página não encontrada clamp(2.4rem, 6vw, 4.5rem) e "Vamos conversar?" clamp(2.4rem, 6vw, 4.4rem), que a partir de container 56rem passa a clamp(2.4rem, 6.5cqi, 4.4rem).
- **Headline** (740, clamp(1.95rem, 4.2vw, 3.1rem), 1.08): títulos de seção, precedidos do marcador Markdown. Quando o título fica numa coluna estreita ao lado do conteúdo, ele escala com o container: `.split .h2` da home clamp(1.75rem, 3.5cqi, 3.1rem) a partir de 56rem e o `.h2` de Sobre clamp(1.75rem, 3.2cqi, 2.5rem) a partir de 50rem (em coluna única, clamp(1.9rem, 4vw, 2.75rem)).
- **Title** (740, 1.08): nome do projeto na lista, empresa e instituição em Experiência, subtítulos `##` do estudo de caso. Passos em uso: clamp(1.5rem, 2.4vw, 2rem) na lista de projetos, clamp(1.5rem, 2.8vw, 2.1rem) e clamp(1.4rem, 2.2vw, 1.75rem) na home, clamp(1.3rem, 2.4vw, 1.75rem) em Sobre, clamp(1.4rem, 2.4vw, 1.8rem) no estudo de caso.
- **Body** (400, 1.0625rem, 1.6): texto corrido; blocos de leitura limitados a 34–42rem.
- **Lede** (400, 1.6): abertura do hero clamp(1.06rem, 1.5vw, 1.2rem), de Sobre clamp(1.15rem, 1.8vw, 1.35rem) e resumo dos estudos de caso clamp(1.1rem, 1.6vw, 1.25rem), em `ink-soft`. Textos de apoio (resumo dos projetos, linha do hero, resumo do caso) usam clamp(0.92rem, 1.4vw, 1.05rem) e clamp(0.9rem, 1.3vw, 1rem).
- **Code** (mono 400, clamp(0.8rem, 1.05vw, 0.9rem), 1.75): corpo dos painéis com números de linha.
- **Label** (mono 400, 0.75–0.88rem): abas, caminho, explorador, barra de status, filtros, tags, metadados, legenda de imagem.

Os passos fluidos acima são os que a build usa; cada título troca `vw` por `cqi` quando vive numa coluna do container. Não há outros.

### Named Rules
**The Two Voices Rule.** Archivo para o que se lê, JetBrains Mono para o que é moldura, código ou dado. Um rótulo em mono é dado; um parágrafo em mono é erro.

**The Markdown Marker Rule.** Títulos de seção levam `#` (página e seções da home) ou `##` (subseções) em mono, `ink-muted`, a 0.7em, com `aria-hidden`. É o único ornamento de título.

## Layout

- **Moldura:** grade de aplicativo com barra de título (3.25rem) fixa no topo, área de edição com barra de abas (2.5rem; 2.75rem em ponteiro grosso) fixa logo abaixo, e barra de status no fim do documento. A partir de 64rem o explorador fica fixo à esquerda com 16rem e a barra de status fica `position: relative` com `z-index: 1`, acima do explorador fixo no fim da página. Em celular deitado (altura até 32rem e largura abaixo de 64rem) a barra de abas deixa de ser fixa e a rolagem de âncoras considera só a barra de título.
- **Celular:** abaixo de 64rem o explorador vira gaveta (até 20rem) aberta pelo botão de menu, com véu escuro; Esc fecha. O botão Contato fica sempre na barra de título e vira só ícone abaixo de 26.5rem. Abaixo de 40rem a barra de status tem uma linha só (ramo e nome; os links ficam na seção de contato e na barra de título) e o caminho do arquivo some.
- **Conteúdo:** coluna `wrap` com margem lateral fluida (gutter) e largura máxima de 70rem. A área de edição é um container (`container-type: inline-size`) e todos os layouts internos usam `@container`: hero em duas colunas a partir de 60rem; projetos em zigue-zague, cabeçalhos de seção ao lado do conteúdo e painéis lado a lado a partir de 56rem; Sobre a partir de 44–50rem.
- **Projetos:** cabeçalho com título, barra de filtro e contagem; abaixo, um projeto por linha em zigue-zague (prévia 1.2fr, texto 1fr), alternando o lado entre os projetos visíveis. Ao filtrar, os ocultos saem com o atributo `hidden` e a alternância recomeça.
- **Toque:** com `(pointer: coarse)`, controles da moldura (marca, Contato, botão de menu, itens do explorador, links da barra de status), chips, opções de filtro, tags do hero e links de texto fora de parágrafos chegam a 2.75rem (44px); links dentro de texto corrido mantêm ao menos 24px.
- **Hero estreito:** com container até 22rem, o botão principal ocupa uma linha inteira e GitHub e LinkedIn dividem a seguinte. O retrato da home tem 15rem em coluna única e 20rem a partir de container 44rem.
- **Imagens:** o `sizes` das prévias acompanha a largura real: coluna única com e sem explorador, e duas colunas.
- **Ritmo:** seções com clamp(3.5rem, 8vw, 6rem) de respiro vertical e divisória `line` no topo; seções alternadas em `bg-alt`. A seção de contato respira mais (até 7rem).

### Named Rules
**The Container, Not Viewport Rule.** A janela decide só a moldura (explorador fixo ou gaveta, linha única da barra de status). Tudo dentro da área de edição responde à largura do container.

## Elevation & Depth

Profundidade vem de camadas tonais: área de edição (`bg`) abaixo das barras e painéis (`bg-alt`), item ativo em `surface-hover`, divisórias de 1px separando regiões. A única sombra é ambiente, sob os painéis de código, para destacá-los da seção alternada; não há sombra em botões, cartões ou imagens.

### Shadow Vocabulary
- **Painel flutuante** (`box-shadow: 0 24px 48px -32px oklch(0 0 0 / 0.8)`): só nos painéis de código (`perfil.ts`, `stack.json`, trecho do hook, `contato.ts`, painéis do Sociiz Meet).
- **Borda de rolagem** (máscara `linear-gradient(to left, transparent, #000 var(--edge))` com `@property --edge`: 3rem até 92% da rolagem horizontal e 0 no fim, via `animation-timeline: scroll(self inline)`): o trecho de código real esmaece na borda direita só enquanto há mais código para rolar; sem overflow a linha do tempo fica inativa e nada esmaece. É máscara, não sombra, e `#000` só dá opacidade.
- **Véu da gaveta** (`scrim`): atrás do explorador aberto no celular.

### Named Rules
**The Tonal Layering Rule.** Superfícies se separam por tom e filete, não por sombra. Sombra nova só se for ambiente e sob um painel de código.

## Shapes

Cantos pouco arredondados e em quatro passos, do maior (moldura) ao menor (dado): 8px em painéis, imagens, retrato e front matter; 6px em botões, botão de menu e selo "EA"; 5px em chips clicáveis (perfil e filtro); 4px nas tags de tecnologia e no contorno de foco. As barras do editor e as abas são retas. Bordas sempre de 1px; o único traço mais grosso é o filete de 2px em chartreuse no topo da aba ativa. A árvore de componentes usa os galhos de texto `├─` e `└─` em `line-strong`.

## Components

### Buttons
Preenchidos e diretos, sem gradiente nem sombra.
- **Shape:** cantos discretos (6px).
- **Primary:** fundo `accent`, texto `on-accent`, Archivo 750, altura mínima de 3rem, 0 1.25rem. Usado em Ver projetos, Mandar um e-mail e Falar sobre este projeto.
- **Hover / Focus:** fundo `accent-hover` em 160ms; no hero, um afundamento de 1px no clique. Foco: contorno de 2px em `accent` com 3px de afastamento em todo elemento.
- **Contorno:** transparente, borda `line-strong`, texto `ink-soft`; hover clareia borda e texto. É o botão Copiar e-mail, que mostra "E-mail copiado" em `accent` por 2.2s.
- **Secundário:** texto `ink-soft` sem caixa (GitHub, LinkedIn no hero); hover para `ink`.
- **Contato da barra de título:** versão compacta do primário (2.25rem), com ícone de envelope; leva à seção de contato.

### Chips
- **Perfil (`perfil.ts`):** strings entre aspas em mono, `syn-str` sobre `bg`, borda `line-strong`, 2.25rem de altura. Pressionado: fundo `accent`, texto `on-accent`. Escolher um chip filtra a lista e rola até Projetos; escolher de novo desfaz. Em painéis estreitos (container abaixo de 30rem) os quatro chips ficam em duas linhas iguais.
- **Filtro de Projetos:** "filtro:" em `syn-ty`, depois "todos" e cada tecnologia com a contagem em números tabulares. Transparente, borda `line-strong`, 2.5rem; pressionado ganha borda `accent`, fundo de acento a 10% e contagem em `accent`. Uma linha `aria-live` diz quantos projetos usam a tecnologia.
- **Tag de tecnologia:** só leitura, mono 0.8rem em `syn-ty`, borda `line-strong`, 4px.

### Code Panel (componente de assinatura)
Cabeçalho com ícone em `syn-kw` e nome do arquivo em mono, corpo `bg-alt` com números de linha alinhados à direita em `ink-muted` numa coluna de 2.75rem. Texto quebra com recuo pendente; código real não quebra e rola na horizontal. Variantes em uso:
- **`perfil.ts`** no hero: objeto `eros` com formação, estágio, tecnologias (os chips) e idiomas.
- **`stack.json`** em Tecnologias: grupos e itens como dados.
- **Trecho real** em Este site: a função `useActiveSection` de `src/components/Shell.tsx`, lida na build por `src/content/source.ts` e realçada com as cores de sintaxe, com os números de linha verdadeiros. O leitor exige que a função comece no início da linha (`function nome` ou `export function nome`) e termina na primeira linha que seja só `}`.
- **`contato.ts`**: e-mail, LinkedIn, GitHub e WhatsApp como links em `syn-str`, ao lado de "Vamos conversar?", Mandar um e-mail e Copiar e-mail.

### Explorer
- Painel `bg-alt` em mono 0.86rem, título de painel "Explorador" (Archivo 0.75rem, maiúsculas espaçadas, `ink-muted`), pasta `portfolio` com `README.md`, a pasta `trabalhos` (um `.md` por projeto) e `experiencia.md`, `stack.json`, `sobre.md`, `este-site.ts`, `contato.ts`.
- Ícone por tipo: `.md` em `syn-ty`, `.ts` em `syn-kw`, `.json` em `syn-str`; no arquivo atual o ícone fica `accent` e o fundo `surface-hover`.
- Na home, o arquivo da seção visível fica destacado (`aria-current="location"`); fora dela, o da página.

### Tabs, Path and Status Bar
- **Abas:** `README.md` sempre aberta; fora da home, uma segunda aba com o arquivo da página. Aba atual em `bg` com filete chartreuse de 2px no topo, emendada na área de edição.
- **Caminho:** `portfolio › trabalhos › arquivo` em `ink-muted`, último trecho em `ink-soft`; só a partir de 40rem.
- **Barra de status:** faixa `accent` com ramo `main` e "Eros Amancio · Recife, PE"; a partir de 40rem, GitHub, LinkedIn, e-mail e Sobre. No celular, uma linha só.

### Project Preview
- **Com imagem:** prévia com barra de nome do arquivo em mono e a imagem em largura total da coluna, borda `line` que escurece no hover. O link da prévia sai da ordem de tabulação (o título já leva ao estudo).
- **Sem imagem (Sociiz Meet):** painel de código com a árvore de componentes (`<App />`, `<JoinScreen />`, `<MeetingRoom />`, `<PostMeetingScreen />`) e uma nota com cadeado explicando que código e telas são da Sociiz.

### Case Study
- Abre com "Todos os projetos", título com `#`, resumo e os fatos do projeto como front matter (`---`, `contexto:`, `papel:`, `tecnologias:`), chaves em `syn-ty` e valores em `syn-str`.
- **Prévia de imagem:** moldura `bg-alt` com barra do nome do arquivo; a imagem aparece no máximo no tamanho nativo, centralizada como a prévia de imagem de um editor, nunca esticada.
- **Sociiz Meet, só texto:** no lugar da imagem, dois painéis lado a lado a partir de 56rem: árvore de componentes e o serviço de tokens em Flask (`GET /token`, comentário e valores), mais a nota de cadeado no fim do texto. Sem imagens, por acordo.
- Corpo em blocos `##` de até 42rem; rodapé `bg-alt` com Falar sobre este projeto (e-mail) e Próximo projeto.

### Images
| Arquivo | Origem |
|---|---|
| `public/images/eros.jpg` | Foto enviada pelo Eros, recorte quadrado (800×800) |
| `public/images/cicle.jpg` | Print enviado pelo Eros (915×650); painel direito cortado e a descrição do painel esquerdo borrada até confirmar a menção a um terceiro |
| `public/images/joyscore.jpg`, `recife-beat.jpg`, `the-draft.jpg`, `kivo.jpg` | Prints e arte enviados pelo Eros, só redimensionados |

Sociiz Meet não tem e não pode ter imagens.

### Motion
Transições de estado em 160ms (cor, fundo, borda), 200ms em setas e bordas de prévia, 240ms na gaveta do explorador, entrada dos projetos ao filtrar em 420ms (opacidade 0.4 e 6px), e o cursor que pisca oito vezes depois do nome. Curva padrão `cubic-bezier(0.16, 1, 0.3, 1)`. O momento autoral é o `perfil.ts` se digitando: cada linha entra em 460ms com revelação da esquerda para a direita (`clip-path`), a 55ms da anterior, uma vez por visita; ao voltar para a home ele já aparece pronto. Ao abrir um arquivo no explorador o conteúdo sobe 8px e aparece em 260ms (`template.tsx`). Uma linha de 2px em `accent` sob as abas se enche conforme a rolagem (linha de posição do editor, só onde há `animation-timeline`). As prévias dos projetos aproximam 2,5% no hover de mouse. Só `transform`, `opacity` e `clip-path` animam. Com `prefers-reduced-motion`, o perfil.ts aparece pronto, as entradas viram só opacidade e a rolagem deixa de ser suave; a linha de posição continua, porque mostra estado.

### Named Rules
**The Real Source Rule.** Código, dados e arquivos mostrados no site existem e rodam. Trechos de código são lidos do fonte na build, não copiados à mão.

**The Native Size Rule.** Imagem de projeto nunca passa do tamanho nativo; o que sobra da moldura fica vazio dos lados, como numa prévia de imagem do editor.

## Do's and Don'ts

### Do:
- **Do** apresentar página nova como arquivo: entrada no explorador, aba, caminho e título com marcador `#`.
- **Do** usar o painel de código com números de linha para qualquer dado estruturado (perfil, tecnologias, contato, endpoint).
- **Do** ler do código-fonte na build qualquer trecho de código mostrado como real.
- **Do** manter texto sobre o acento em `on-accent` e foco visível com contorno de 2px em `accent`.
- **Do** mostrar imagens de projeto no máximo no tamanho nativo, centralizadas na moldura com a barra do nome do arquivo.
- **Do** mostrar Sociiz Meet só em texto: árvore de componentes, painel do serviço de tokens e a nota de cadeado.
- **Do** responder com `@container` dentro da área de edição e manter a barra de status em uma linha no celular.
- **Do** deixar o container decidir o tamanho de título em coluna estreita (`cqi`), nunca a janela.
- **Do** zerar `text-indent` em link `inline-block` dentro de linha de código, para o recuo pendente não deslocar o alvo.

### Don't:
- **Don't** usar terminal falso, commits inventados ou dados que não existem.
- **Don't** colocar imagem, print ou captura do Sociiz Meet.
- **Don't** esticar imagem além do tamanho nativo.
- **Don't** usar cor de sintaxe em texto corrido ou títulos, nem criar um segundo acento.
- **Don't** usar rótulo em maiúsculas espaçadas acima de títulos; esse estilo existe só no título do painel do explorador.
- **Don't** separar superfícies com sombra; use tom e filete de 1px.
- **Don't** usar metáfora de fora do mundo do software.
