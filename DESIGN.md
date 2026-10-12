# Design

Documentado a partir do site construído (12/10/2026). Direção: **Limpo e técnico**, que substituiu a Azulejaria a pedido do Eros (achou conceitual demais e pouco ligada a desenvolvimento de software). Contrato em `.impeccable/surfaces/src-app-page-tsx.md`.

## Ideia

Um site de desenvolvedor que um cliente sem vocabulário técnico entende. A base é clara, tipográfica e organizada como produto de software; os sinais de "dev" são concretos e verdadeiros, nunca enfeite:

- O seletor da abertura é uma ferramenta de verdade: escolher o serviço monta a mensagem que vai para o WhatsApp.
- A seção "Este site é a amostra" mostra o código real dessa função (`whatsappLink` em `src/content/site.ts`). Se a função mudar, atualize o `snippet` em `src/app/page.tsx`.
- Mono só onde é código ou dado técnico: stack, tags de tecnologia, numeração dos passos, nome de arquivo, 404.

## Cor

Estratégia Restrained: neutros frios quase brancos, tinta grafite e um único acento chartreuse usado como marca-texto e sinal. Tokens em `src/app/globals.css`.

| Token | Papel |
|---|---|
| `--bg` / `--bg-alt` | Fundo principal / seções alternadas |
| `--surface` | Superfícies elevadas (compositor da abertura) |
| `--line` / `--line-strong` | Divisórias / bordas de controle e hover |
| `--ink` / `--ink-hover` / `--ink-soft` | Texto e botões principais / hover / texto secundário |
| `--accent` / `--accent-strong` | Marca-texto (`.mark`), rádio marcado, marcadores, fundo do Contato, botões sobre escuro |
| `--dark`, `--dark-line`, `--on-dark`, `--on-dark-soft` | Seção "Este site é a amostra", CTA dos estudos de caso e rodapé |

O acento nunca é cor de texto sobre fundo claro (contraste baixo); sobre ele, sempre `--ink`.

## Tipografia

- Archivo variável (`src/fonts`, OFL), só latin. Títulos com largura 104%, peso 760–780, tracking -0.03 a -0.04em. Texto 1.0625rem, entrelinha 1.6.
- JetBrains Mono (`src/fonts`, OFL), latin, sem preload (não está no primeiro viewport crítico).

## Componentes

- **Compositor** (`src/components/Hero.tsx`): rádios de serviço à esquerda, prévia da mensagem em balão à direita (`aria-live`), botão grafite com ícone no acento. Em telas estreitas empilha e o botão ocupa a largura.
- **Bloco de código**: figura escura com nome do arquivo e realce mínimo; linhas quebram com recuo pendente em vez de rolar.
- **Trabalhos**: print com moldura de borda + raio, texto ao lado, tags em mono. Jogos ficam em "Fora da web", menores.
- **Passos** numerados `01`–`05` em mono; **FAQ** em `details` com ícone de mais.
- Sem cards iguais de ícone + título, sem kicker acima de título, sem texto em gradiente, sem borda lateral colorida.

## Movimento

Só transições de estado (160ms) em hover, foco e seleção. Com `prefers-reduced-motion`, nada anima.

## Imagens

| Arquivo | Origem |
|---|---|
| `public/images/eros.jpg` | Foto enviada pelo Eros, recorte quadrado |
| `public/images/cicle.jpg` | Print enviado pelo Eros; painel direito cortado e a descrição do painel esquerdo borrada até confirmar a menção a um terceiro |
| `public/images/joyscore.jpg`, `recife-beat.jpg`, `the-draft.jpg` | Prints e arte enviados pelo Eros, só redimensionados |

Sociiz Meet não tem e não pode ter imagens.
