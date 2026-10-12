---
version: 4
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/Shell.tsx", "src/components/Hero.tsx", "src/app/trabalhos/[slug]/page.tsx", "src/app/sobre/page.tsx"]
---

- Escopo: `/` (home). Modo do visitante: Experience (portfólio: o trabalho conduz desde a primeira tela). Estudos de caso `/trabalhos/[slug]` e `/sobre`: Read.
- Público, trabalho, provas e restrições: ver PRODUCT.md.
- Histórico: v1 Azulejaria, recusada pelo Eros em 12/10/2026 ("não tem muito a ver com um desenvolvedor de software" e "viajado demais"). v2 Limpo e técnico. v3 Editor de código, escolhida pelo Eros no mesmo dia, ainda dividida entre vender sites e portfólio. v4 (12/10/2026): o Eros decidiu que o site é só portfólio de desenvolvedor e manteve o Editor de código; toda a parte de venda de sites saiu.
- Momento memorável: o painel `perfil.ts` na abertura; cada tecnologia dele é um botão que filtra os projetos lá embaixo. Mais abaixo, o código real do hook que destaca o arquivo da seção visível no explorador.
- Em aberto: confirmação do Ciclê (acadêmico? Edenred), currículo em PDF (não existe ainda), inglês.

## Direction contract

THESIS: O portfólio é o repositório do Eros aberto no editor: README.md é a página inicial, cada projeto é um arquivo, experiência e tecnologias são dados reais. Fala direto com recrutadores, entrevistadores e outros devs; recusa o terminal falso, os commits inventados e a grade de cards genérica.

OWN-WORLD: Tema escuro de editor (área de edição, barras, painéis), um acento chartreuse para ação, cursor e barra de status, realce de sintaxe só em código e dados. Archivo no texto, JetBrains Mono na moldura, no código e nos dados. Explorador, abas, caminho do arquivo, números de linha e front matter como componentes.

STORY: O visitante entende em segundos quem é o Eros (estudante de Ciência da Computação na CESAR School, estagiário na Sociiz) e o que ele sabe fazer; acredita porque vê projetos reais com papel, contexto e código; chega ao contato (e-mail, LinkedIn, GitHub) sem procurar.

FIRST VIEWPORT: Explorador à esquerda com README.md ativo; "Eros Amancio" em display grande com o cursor, uma linha de papel e as ações Ver projetos, GitHub e LinkedIn (o e-mail fica no botão Contato da barra de título); ao lado, o painel `perfil.ts` com formação, estágio, tecnologias (botões que filtram os projetos) e idiomas. Celular: explorador na gaveta, contato sempre na barra de título.

FORM: Editor de código, escolhida pelo Eros em 12/10/2026 e mantida na v4.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
