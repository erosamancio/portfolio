# Design

Documentado a partir do site construído (12/10/2026). Direção: **Editor de código**, escolhida pelo Eros entre três propostas depois de recusar a Azulejaria (conceitual demais) e substituir o "Limpo e técnico". Contrato em `.impeccable/surfaces/src-app-page-tsx.md`.

## Ideia

O site é um projeto aberto num editor: barra de título, explorador de arquivos, abas, caminho do arquivo e barra de status. O editor é a moldura; o conteúdo continua em texto normal, legível para quem não é da área.

- O explorador (`src/components/Shell.tsx`) é a navegação: cada seção da home e cada página aparece como um arquivo (`servicos.md`, `trabalhos/cicle.md`, `sobre.md`, `contato.ts`). Na home, o arquivo da seção visível fica destacado.
- Títulos levam o marcador de Markdown (`#`, `##`) em mono, apagado, com `aria-hidden`.
- O seletor da abertura é um painel `contato.ts` com números de linha: escolher o serviço reescreve a string `mensagem`, que é o texto enviado no WhatsApp.
- "Este site é a amostra" mostra o código real de `whatsappLink` com os números de linha verdadeiros de `src/content/site.ts`. Se a função mudar, atualize o `snippet` em `src/app/page.tsx`.
- Estudos de caso abrem com os fatos do projeto em formato de front matter (`contexto:`, `papel:`, `tecnologias:`).

Nada de comandos de terminal falsos, commits inventados ou dados que não existem.

## Cor

Tema escuro de editor, com um único acento chartreuse. Tokens em `src/app/globals.css`.

| Token | Papel |
|---|---|
| `--bg` / `--bg-alt` / `--surface` / `--surface-hover` | Área de edição / barras, explorador e seções alternadas / painéis / item ativo |
| `--line` / `--line-strong` | Divisórias / bordas de controle |
| `--ink` / `--ink-soft` / `--ink-muted` | Texto / texto secundário / comentários, números de linha e marcadores |
| `--accent`, `--accent-hover`, `--on-accent` | Botões de WhatsApp, palavra "funcionam.", cursor, aba ativa, barra de status, links de destaque |
| `--syn-kw`, `--syn-fn`, `--syn-str`, `--syn-ty`, `--syn-cm` | Realce de sintaxe; `--syn-ty` também nas tags de tecnologia |

Texto sobre o acento sempre em `--on-accent`. Números de linha usam `--ink-muted` para passar no contraste.

## Tipografia

- Archivo variável (`src/fonts`, OFL), só latin: títulos e todo o texto corrido.
- JetBrains Mono (`src/fonts`, OFL), latin, com preload porque aparece na primeira tela: moldura do editor, código, tags, números de passo, front matter.

## Layout

- Desktop (≥ 64rem): explorador fixo de 16rem à esquerda, área de edição com abas fixas no topo.
- Celular: o explorador vira gaveta aberta pelo botão de menu; o WhatsApp fica sempre na barra de título.
- A área de edição é um container (`container-type: inline-size`); os layouts internos usam `@container`, não a largura da janela.

## Movimento

Transições de estado (160–240ms), gaveta do explorador e o cursor que pisca oito vezes depois do título. Com `prefers-reduced-motion`, nada anima.

## Imagens

| Arquivo | Origem |
|---|---|
| `public/images/eros.jpg` | Foto enviada pelo Eros, recorte quadrado |
| `public/images/cicle.jpg` | Print enviado pelo Eros; painel direito cortado e a descrição do painel esquerdo borrada até confirmar a menção a um terceiro |
| `public/images/joyscore.jpg`, `recife-beat.jpg`, `the-draft.jpg` | Prints e arte enviados pelo Eros, só redimensionados |

Sociiz Meet não tem e não pode ter imagens.
