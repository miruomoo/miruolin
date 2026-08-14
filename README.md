# miruolin

Personal portfolio site for Miruo Lin — [miruolin.com](https://miruolin.com).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for card interactions
- [OGL](https://github.com/oframe/ogl) for the WebGL gradient background
- [next-themes](https://github.com/pacocoursey/next-themes) for light / dark / system theming
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Project structure

```
src/
  app/           # Next.js App Router entry (layout, page, globals)
  components/    # Page sections (Header, Banner, About, Experience, Projects, Footer)
  data/          # Content for experience and projects
  lib/           # ThemeProvider
  ui/            # Reusable UI primitives (BorderGlow, Grainient, SpecularButton, Stack)
public/images/   # Static images
```

Content lives in [src/data/experience.ts](src/data/experience.ts) and [src/data/projects.ts](src/data/projects.ts) — edit those to update the site.

## License

Source is provided for reference. Content and imagery © Miruo Lin.
