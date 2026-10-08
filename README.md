# Portfólio · Eros Amancio

Site pessoal de [Eros Amancio](https://github.com/erosamancio): vitrine para quem quer contratar a criação de um site e portfólio para entrevistas.

O visual é um painel de azulejos em que tudo sai de uma única peça girada de jeitos diferentes. Na abertura, escolher o tipo de site remonta o padrão e prepara a mensagem do WhatsApp.

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
- `src/components`: navegação, abertura e o sistema de azulejos (`tiles/`)
- `src/content/site.ts`: todos os textos, serviços, projetos e contatos
- `public/images`: imagens dos projetos e retrato
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/`: contexto de produto e design

Para mudar um texto ou adicionar um projeto, edite `src/content/site.ts`.

## Deploy

Pensado para a Vercel: importe o repositório, sem configuração extra. Para fixar a URL usada no SEO, defina `NEXT_PUBLIC_SITE_URL` (sem isso, usa a URL de produção da Vercel).

Stack: Next.js, React, TypeScript, CSS Modules. Fonte Archivo (OFL).
