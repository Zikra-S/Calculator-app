
## calc

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)



---

##  Features

- **Three themes** — deep navy, soft light, and neon purple. Switch with the 1 / 2 / 3 slider.
- **Remembers you** — your theme is saved, and on the first visit it matches your OS (dark or light).
- **Chained math** — `2 + 3 + 4 =` just works.
- **Live comma formatting** — `1234567` shows as `1,234,567` while you type.
- **Keyboard friendly** — type on your real keyboard (see below).
- **Responsive** — designed at 375px and 1440px, tested down to 320px.
- **Accessible** — radio-based theme switcher, focus rings, screen reader announcements, and `prefers-reduced-motion` respected.

##  Themes

| Theme | Vibe | Main colors |
|:-----:|------|-------------|
| **1** | Dark navy | Navy, red equals key |
| **2** | Light & warm | Gray, teal and orange |
| **3** | Neon night | Deep purple, yellow text, cyan equals key |

All colors live as CSS variables in `src/index.css`. Switching themes just changes `data-theme` on `<html>`, so there are no per-theme class names in the components.

## ⌨️ Keyboard shortcuts

| Key | Action |
|-----|--------|
| `0`–`9` | Enter digits |
| `+` `-` `/` | Operators |
| `*` or `x` | Multiply |
| `Enter` or `=` | Equals |
| `Backspace` | Delete last digit |
| `Esc` | Reset |

## 🛠️ Tech stack

- [React](https://react.dev) with `useReducer` for all calculator state
- [TypeScript](https://www.typescriptlang.org) for typed actions, state and operators
- [Tailwind CSS v4](https://tailwindcss.com) using CSS-variable theming
- [Vite](https://vite.dev) for dev server and build
- [League Spartan](https://fonts.google.com/specimen/League+Spartan) (700) for the type

## 🚀 Getting started

```bash
# install
pnpm install

# run the dev server
pnpm dev

# production build
pnpm build

# preview the build
pnpm preview
```

## 📁 Project structure

```
calculator-app/
├── index.html          # League Spartan font + data-theme default
├── vite.config.ts      # React + Tailwind plugins
└── src/
    ├── main.tsx        # App entry
    ├── index.css       # Tailwind import + the 3 theme palettes
    └── App.tsx         # Calculator logic (reducer) + UI
```

## 🧠 How it works

The calculator is a small state machine. `App.tsx` keeps four values:

| State | Meaning |
|-------|---------|
| `current` | What's on the screen |
| `previous` | The first number, stored while you type the second |
| `op` | The operator you picked |
| `overwrite` | Whether the next digit replaces the screen (after an operator or `=`) |

Every button dispatches an action (`digit`, `op`, `equals`, `del`, `reset`) and the reducer returns the next state.

## 📝 Notes

- Decimal input isn't supported, though division can still produce decimal results.
- Dividing by zero shows `Infinity`.
- Numbers have no length cap and scroll sideways inside the display when long.
