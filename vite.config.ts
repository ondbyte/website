import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Multi-page build:
//   /            -> index.html          (chooser: pre-AI or post-AI)
//   /post-ai/    -> post-ai/index.html  (new React timeline site)
//   /pre-ai/     -> public/pre-ai/      (original site, copied verbatim)
// The dev server doesn't map directory URLs in public/ to their index.html, so
// /pre-ai/ would fall back to the root page. Firebase Hosting and `vite preview` do.
function directoryIndex(): Plugin {
  return {
    name: 'directory-index',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname, query] = (req.url ?? '').split('?')
        if (pathname === '/pre-ai' || pathname === '/post-ai') {
          res.statusCode = 301
          res.setHeader('Location', `${pathname}/${query ? `?${query}` : ''}`)
          return res.end()
        }
        if (pathname === '/pre-ai/') req.url = `/pre-ai/index.html${query ? `?${query}` : ''}`
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [directoryIndex(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        postAi: path.resolve(__dirname, 'post-ai/index.html'),
      },
    },
  },
  server: {
    port: parseInt(process.env.PORT || '5173'),
  },
})
