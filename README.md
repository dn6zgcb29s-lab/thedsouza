# thedsouza

Personal and business site for Glen D'Souza at <https://www.thedsouza.com>.

Built with Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS 4, ESLint 9 and Prettier 3. See `package.json` for exact versions. The project uses npm.

> `AGENTS.md` warns that this Next.js version differs from older ones. Read it before using a Next.js API that is new to this repo.

## Commands

```bash
npm run dev    # start the development server
npm run build  # production build
npm run start  # serve the production build
```

## Checks

Run these in order before submitting a change:

```bash
npm run lint
npm run build
npx tsc --noEmit
npx prettier --check <changed files>
```

## Layout

- `app/` holds the routes: the homepage (`app/page.tsx`), case studies under `app/projects/<slug>`, and `app/jg`.
- `components/SubpageLayout.tsx` provides the shared nav and footer for every page except the homepage.
- `data/contact.ts` is the single source for contact details.
- `data/routes.ts` declares every public route once. `app/sitemap.ts` builds the sitemap from that list, in the same order. Add a new page, such as a case study, to `data/routes.ts`, not to the sitemap. Homepage project-card links (`components/Projects.tsx`) must be routes from that list; the type check enforces this.
