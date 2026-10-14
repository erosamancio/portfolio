---
version: 4
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/Shell.tsx", "src/components/ProfileIntro.tsx", "src/components/Projects.tsx", "src/components/ViewModeToggle.tsx", "src/app/trabalhos/[slug]/page.tsx", "src/app/sobre/page.tsx"]
---

- Escopo: `/` (home). Modo do visitante: Experience (portfólio: o trabalho conduz desde a primeira tela). Estudos de caso `/trabalhos/[slug]` e `/sobre`: Read. Dois modos de leitura: Prévia (padrão) e Código.
- Público, trabalho, provas e restrições: ver PRODUCT.md.
- Histórico: v1 Azulejaria, recusada pelo Eros em 12/10/2026 ("não tem muito a ver com um desenvolvedor de software" e "viajado demais"). v2 Limpo e técnico. v3 Editor de código, escolhida pelo Eros no mesmo dia, ainda dividida entre vender sites e portfólio. v4 (12/10/2026): o Eros decidiu que o site é só portfólio de desenvolvedor e manteve o Editor de código; toda a parte de venda de sites saiu. v5 (13/10/2026): paleta Vivid, GSAP, WhatsApp. v6 (14/10/2026): redesign Plano B, depois que pessoas que não programam acharam o site bonito, mas com informação demais; a home abre em Prévia e o modo Código (o site anterior) fica a um clique.
- Momento memorável: na Prévia, o rosto e o nome seguidos de três projetos com imagem; no modo Código, o painel `perfil.ts` na abertura, em que cada tecnologia é um botão que filtra os projetos, e o código real do hook que destaca o arquivo da seção visível.
- Em aberto: confirmação do Ciclê (acadêmico? Edenred), currículo em PDF (não existe ainda), inglês.

## Direction contract

THESIS: O portfólio é o repositório do Eros aberto no editor: README.md é a página inicial, cada projeto é um arquivo. Fala com quem não programa em linguagem comum (Prévia) e com devs em código real (modo Código); recusa o terminal falso, os commits inventados e a grade de cards genérica.

OWN-WORLD: Tema escuro de editor (área de edição, barras, painéis), um acento chartreuse para ação, cursor e barra de status, realce de sintaxe só em código e dados. Archivo no texto, JetBrains Mono na moldura, no código e nos dados. Explorador, abas, caminho do arquivo, números de linha e front matter como componentes.

STORY: O visitante entende em segundos quem é o Eros (estudante de Ciência da Computação na CESAR School, estagiário na Sociiz) e o que ele sabe fazer; acredita porque vê projetos reais com papel, contexto e código; chega ao contato (e-mail, LinkedIn, GitHub) sem procurar.

FIRST VIEWPORT: Prévia: painel Estrutura à esquerda; foto, "Eros Amancio" em display, papel, uma frase que diz o que ele faz e onde estuda e estagia, e as ações Ver projetos, GitHub, LinkedIn e WhatsApp. Celular: a foto pequena ao lado do nome, a primeira imagem de projeto a cerca de 1,2 tela. Código: explorador com README.md ativo, o nome em display grande com o cursor e, ao lado, o painel `perfil.ts` com os chips que filtram os projetos.

FORM: Editor de código, escolhida pelo Eros em 12/10/2026 e mantida em todas as versões; o controle Prévia | Código fica na barra de abas.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
