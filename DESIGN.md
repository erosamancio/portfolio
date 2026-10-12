# Design

Documentado a partir do site construído (08/10/2026). Direção: **Azulejaria**. Contrato em `.impeccable/surfaces/src-app-page-tsx.md`.

## Ideia

Uma peça, muitos padrões. Todo o site é feito de um único azulejo (`#azulejo` em `src/components/tiles/TileDefs.tsx`) girado em quartos de volta. Cada serviço tem o seu padrão (`src/components/tiles/patterns.ts`):

| Padrão | Uso |
|---|---|
| `diagonal` | Estado inicial da abertura |
| `escamas` | Landing page |
| `ondas` | Site institucional |
| `rosetas` | Site com sistema |
| `cata-vento` | Ainda não sei |

Novos padrões entram em `patterns.ts` como um bloco 2×2 de rotações; nunca crie uma segunda peça.

## Cor

Estratégia Committed: o cobalto ocupa regiões inteiras (abertura, Serviços, Contato), não detalhes. Tokens em `src/app/globals.css`.

| Token | Papel |
|---|---|
| `--cobalto` | Tinta do azulejo, botões, links, fundo de Serviços |
| `--cobalto-fundo` | Hover de botões, rejunte sobre cobalto |
| `--cobalto-noite` | Títulos, fundo do Contato e rodapé |
| `--cobalto-claro` | Texto secundário sobre cobalto |
| `--esmalte` / `--esmalte-quebrado` | Fundo principal / seções alternadas |
| `--rejunte` | Linhas de 2px entre azulejos e divisórias |
| `--tinta` / `--tinta-suave` | Texto principal / secundário sobre esmalte |
| `--ocre` | Só anel de foco e marcadores de lista sobre cobalto |

Texto secundário sobre cobalto usa `--cobalto-claro`, nunca cinza.

## Tipografia

Archivo variável, auto-hospedada (`src/fonts`, OFL), só o subconjunto latino.

- Títulos: largura 125%, peso 800, tracking -0.02em.
- Texto: largura 100%, peso 400, 1.0625rem, entrelinha 1.6.
- Botões de destaque: largura 112%, peso 800.
- Na abertura, os tamanhos acompanham o tamanho do azulejo (`--tile`), para a cartela caber na grade em qualquer largura.

## Grade da abertura

`src/components/Hero.module.css`: colunas de azulejos quadrados com `container-type: inline-size`.

| Largura | Colunas | Cartela |
|---|---|---|
| < 40rem | 4 | largura toda, 7 linhas |
| 40–64rem | 8 | colunas 2–7, 6 linhas |
| 64–100rem | 12 | colunas 3–10, 5 linhas |
| ≥ 100rem | 16 | colunas 4–13, 5 linhas |

Se o texto da cartela crescer, aumente o número de linhas (`span`) em vez de deixar a grade esticar.

## Componentes

- **Cartela**: superfície branca lisa com cercadura dupla em cobalto (sombras internas). Usada na abertura, nas imagens de projetos e no retrato.
- **Azulejo-botão**: botão com mini painel 2×2; selecionado inverte as cores.
- **Moldura de imagem**: borda de rejunte + filete cobalto interno.
- Sem cards iguais de ícone + título, sem kicker acima de título, sem texto em gradiente.

## Movimento

Um momento autoral: os azulejos giram em onda a partir do botão escolhido (900ms, ease-out exponencial, atraso de 55ms por azulejo de distância). Passar o mouse gira um azulejo. Com `prefers-reduced-motion`, nada anima.

## Imagens

| Arquivo | Origem |
|---|---|
| `public/images/eros.jpg` | Foto enviada pelo Eros, recorte quadrado |
| `public/images/cicle.jpg` | Print enviado pelo Eros; painel direito cortado e a descrição do painel esquerdo borrada até confirmar a menção a um terceiro |
| `public/images/joyscore.jpg`, `recife-beat.jpg`, `the-draft.jpg` | Prints e arte enviados pelo Eros, só redimensionados |

Sociiz Meet não tem e não pode ter imagens.
