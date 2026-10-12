# Portfólio · Eros Amancio

Site pessoal de [Eros Amancio](https://github.com/erosamancio): vitrine para quem quer contratar a criação de um site e portfólio para entrevistas.

O site imita um editor de código: explorador de arquivos, abas e barra de status. Na abertura, escolher o tipo de site reescreve a mensagem do WhatsApp, e a seção "Este site é a amostra" mostra o código que faz isso.

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
- `src/components`: a moldura do editor (`Shell`), a abertura com o seletor de serviço e os estilos de painel de código
- `src/content/site.ts`: todos os textos, serviços, projetos e contatos
- `public/images`: imagens dos projetos e retrato
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/`: contexto de produto e design

Para mudar um texto ou adicionar um projeto, edite `src/content/site.ts`.

## Deploy

Pensado para a Vercel: importe o repositório, sem configuração extra. Para fixar a URL usada no SEO, defina `NEXT_PUBLIC_SITE_URL` (sem isso, usa a URL de produção da Vercel).

Stack: Next.js, React, TypeScript, CSS Modules. Fontes Archivo e JetBrains Mono (OFL).

## Claude Code

`.claude/settings.json` ativa o plugin oficial da Vercel para quem trabalhar no projeto com o Claude Code.
