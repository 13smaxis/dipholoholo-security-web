# Dipholoholo Security Website

A simple, production-ready React + TypeScript + Tailwind CSS site with routing.

## Requirements
- Node.js 18+ and npm

## Install & Run
```bash
# From the project root
npm install
npm run dev
```
- Build: `npm run build`
- Preview production build: `npm run preview`

## Project Structure
- App entry: [index.html](index.html), [src/main.tsx](src/main.tsx), [src/App.tsx](src/App.tsx)
- Pages: [src/pages/home.tsx](src/pages/home.tsx), [src/pages/contact.tsx](src/pages/contact.tsx)
- Components: [src/components/HeroSection.tsx](src/components/HeroSection.tsx), [src/components/ServiceSection.tsx](src/components/ServiceSection.tsx), [src/components/WhyChooseUs.tsx](src/components/WhyChooseUs.tsx)
- Styles: [src/styles.css](src/styles.css), Tailwind config: [tailwind.config.js](tailwind.config.js)

## Notes
- Router paths: `/` (Home), `/contact` (Contact)
- Production output in `dist/` after `npm run build`

## Customize
- Update brand colors in [tailwind.config.js](tailwind.config.js)
- Replace placeholder text/visuals inside components in `src/components`