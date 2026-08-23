# MemoriaMatch3D

A classic memory/concentration card-matching game with a 3D touch, built with Next.js.

Flip cards to find matching pairs, pick from four card themes, adjust the board size, and try to clear the board in as few steps as possible — with sound effects and an interactive guided tour.

**Live demo:** [concentration-puce.vercel.app](https://concentration-puce.vercel.app/)

## Features

- Four card themes: World, Delicious, Fresh, and Wild ([src/pages/components/cardsSet](src/pages/components/cardsSet))
- Adjustable board size (4×4 up to 4×7)
- Step counter and a win modal with "play again" / "change theme" actions
- Sound effects for flip, match, mismatch, and shuffle (toggleable)
- Built-in guided tour (via antd's `Tour`) walking new players through theme selection and starting a game
- 3D toolbar icons powered by Spline scenes, desktop/mobile responsive layouts

## Stack

- [Next.js](https://nextjs.org) (Pages Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling, [antd](https://ant.design/) for UI components (tooltip, tour, modal)
- [Spline](https://spline.design/) (`@splinetool/react-spline`) for the 3D toolbar icons
- [react-card-flip](https://github.com/AKASHAJ541/react-card-flip) for the card flip animation, [framer-motion](https://www.framer.com/motion/) for other transitions
- [Zustand](https://github.com/pmndrs/zustand) for game-in-progress state
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

```bash
yarn install
yarn dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env` and fill in values as needed (schema validated in [src/env.mjs](src/env.mjs)).

```bash
cp .env.example .env
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Build for production |
| `yarn start` | Run the production build |
| `yarn lint` | Lint with ESLint |

## Project structure

```
src/
  pages/
    index.page.tsx           # page shell: title, toolbar, game, footer, theme menu
    components/
      game.tsx                # game logic: board state, flip/match/win handling
      card.tsx                # single flippable card
      cardsSet/                # per-theme card content (world/delicious/fresh/wild)
      toolbar.tsx              # guide, sound toggle, theme picker (Spline icons)
      menu.tsx                 # theme selection menu
      successModal.tsx         # win screen
  context/soundContext.ts     # global sound on/off context
  store/useToggleProcess.tsx  # tracks whether a game is in progress
  hooks/useIsDesktop.ts       # responsive layout switch
  utils/                      # shuffle/double helpers for building the board
```

## Deployment

Deployed via [Vercel](https://vercel.com): [concentration-puce.vercel.app](https://concentration-puce.vercel.app/)
