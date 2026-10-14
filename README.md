# Portfólio · Eros Amancio

Portfólio de desenvolvedor de [Eros Amancio](https://github.com/erosamancio), estudante de Ciência da Computação na CESAR School e estagiário na Sociiz. Feito para recrutadores, entrevistadores, outros devs e quem não programa.

O site imita um editor de código e tem dois modos de leitura, trocados no controle **Prévia | Código** da barra de abas. A **Prévia** (padrão) conta o que ele faz em linguagem comum, com projetos em imagem. O modo **Código** mostra o editor completo: o painel `perfil.ts` com as tecnologias como botões que filtram os projetos, o `stack.json` e um trecho do próprio código, lido do arquivo no build. Os dois modos usam os mesmos dados.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
npm run typecheck
```

## Estrutura

- `src/app`: páginas (home, `/trabalhos/[slug]`, `/sobre`, 404, sitemap, robots)
- `src/components`: a moldura do editor (`Shell`), a abertura (`ProfileIntro`), a lista de projetos, o controle de modo (`ViewModeToggle`) e os painéis de código do modo Código
- `src/content/site.ts`: todos os textos, projetos, experiência, tecnologias, glossário e contatos
- `src/content/source.ts`: lê no build o trecho de código mostrado na home
- `public/images`: imagens dos projetos e retrato
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/`: contexto de produto e design

Para mudar um texto ou adicionar um projeto, edite `src/content/site.ts`.

## Deploy

Pensado para a Vercel: importe o repositório, sem configuração extra. Para fixar a URL usada no SEO, defina `NEXT_PUBLIC_SITE_URL` (sem isso, usa a URL de produção da Vercel).

Stack: Next.js, React, TypeScript, CSS Modules. Fontes Archivo e JetBrains Mono (OFL).

## Claude Code

`.claude/settings.json` ativa o plugin oficial da Vercel para quem trabalhar no projeto com o Claude Code.
