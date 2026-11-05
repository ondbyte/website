# yadhunandan.me

Source for www.yadhunandan.me.

- `/` (`index.html`): chooser page with links to the pre-AI and post-AI sites
- `/pre-ai/` (`public/pre-ai/`): the original hand-written site, copied as-is
- `/post-ai/` (`post-ai/index.html` + `src/`): React + Vite + Tailwind v4 timeline site. Content lives in `src/data.ts`.

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # outputs dist/
```

Deploys to Firebase Hosting (`ondbyte-website`) when you push to the `deploy` branch.
