# Q Arena — Landing Page

Purpose: Single-page React + Vite landing site to present the Q Arena education platform for cloud/startup credit applications.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

How to edit content

- Main composition: `src/App.jsx`
- Sections/components: `src/components/*.jsx`
- Reusable content: `src/data/platformData.js`
- Styles: `src/index.css` and `tailwind.config.js`

Deploy notes

- Vercel: connect repository, set root to project folder. Vercel will run `npm install` and `npm run build`.
- Netlify: create a new site, set build command `npm run build` and publish directory `dist`.

Next improvements

- Add real content and team bios
- Hook CTAs to a contact form or scheduling tool
- Integrate analytics and error monitoring
- Add images/screenshots and testimonials
