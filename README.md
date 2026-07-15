# Truck Parts - Automotive E-commerce Platform

A modern automotive parts e-commerce platform built with Vue 3, Vite, and Tailwind CSS.

## Features

- **Vehicle-specific parts catalog** - Browse parts by vehicle make, model, and year
- **Smart categorization** - Intuitive parts categorization for easy navigation
- **Responsive design** - Fully responsive across all device sizes
- **Heroicons Vue 24** - Modern icon library
- **Swiper.js integration** - Product carousels with smooth animations
- **GSAP animations** - Scroll-triggered animations and effects
- **Confetti button effects** - Interactive button animations
- **Dark/Light mode** - Theme support

## Project Structure

```
src/
├── assets/           # Images, CSS, fonts
├── components/       # Reusable Vue components
│   ├── about/        # About page section components
│   └── ui/           # UI components (Button, Card, etc.)
├── views/            # Page-level components
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── ProductListView.vue
├── router/           # Vue Router configuration
└── App.vue           # Main application entry
```

## Design System

### Colors
- Primary: `#171717` (dark gray)
- Secondary: `#f5a623` (yellow/amber)
- Background: `#f3f3f3`
- Text: `#000000` (black), `#575757` (gray)

### Typography
- Heading sizes: `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`
- Body: `text-base`, `text-sm`
- Font weights: `font-bold`, `font-semibold`, `font-medium`

### Spacing Scale
- Padding: `p-4`, `p-6`, `px-4`, `px-6`
- Gap: `gap-x-4`, `gap-y-4`, `gap-y-6`
- Vertical spacing: `my-10`, `py-16`

### Border Radius
- Cards: `rounded-2xl`, `rounded-4xl`
- Buttons: `rounded-full` (pill shape)

## Component Architecture

### Reusable Components
- `Header.vue` - Navigation header with mobile menu
- `Footer.vue` - Site footer with newsletter
- `Button.vue` - Animated confetti button
- `ProductCard.vue` - Product display card
- `ProductSwiper.vue` - Product carousel
- `Banner.vue` - Hero banner section

### Section Components (About Page)
- `AboutHero.vue` - Hero section with CTA
- `AboutStory.vue` - Company story with image
- `WhyChooseUs.vue` - Feature cards
- `AboutStats.vue` - Animated statistics
- `AboutValues.vue` - Company values
- `TeamSection.vue` - Team member cards
- `TimelineSection.vue` - Company timeline
- `AboutCTA.vue` - Call-to-action section

## Development

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Technologies Used

- **Vue 3** - Progressive JavaScript Framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons Vue 24** - Icon library
- **Swiper.js** - Mobile-friendly sliders
- **GSAP** - JavaScript animation library
- **Vue Router** - Client-side routing

## Customization

The project follows a modular component-based architecture. New pages should:
1. Create section components in `src/components/about/`
2. Import and compose in the view file
3. Reuse existing components and patterns
4. Follow Tailwind utility classes for styling