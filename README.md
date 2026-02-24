# Site Fabiana

Guia para rodar e publicar o projeto como site estatico (Vite + React).

## Requisitos

- Node.js 20+
- npm 10+

## Configuracao

1. Instale dependencias:

```bash
npm install
```

2. Crie o arquivo `.env.local` na raiz:

```env
VITE_BASE44_APP_ID=seu_app_id
VITE_BASE44_APP_BASE_URL=https://seu-backend.base44.app
# Opcional:
VITE_BASE44_FUNCTIONS_VERSION=latest
```

## Desenvolvimento local

```bash
npm run dev
```

## Build estatico

Gere os arquivos estaticos:

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

Para validar o build localmente:

```bash
npm run preview
```

## Publicacao (ponto principal para funcionar em producao)

Este projeto usa `BrowserRouter` (SPA). Entao, no servidor estatico, qualquer rota deve retornar `index.html`.

- Nao abra `dist/index.html` direto no navegador via `file://`.
- Suba o conteudo de `dist/` para um host estatico (Netlify, Vercel, Cloudflare Pages, Nginx, Apache etc.).
- Configure fallback de rotas para `index.html`.

Exemplo Netlify (`public/_redirects` ou `dist/_redirects` no deploy):

```txt
/* /index.html 200
```

Exemplo Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
