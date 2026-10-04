#  calc

A chunky calculator with three themes, built with React, TypeScript and Tailwind CSS.

---

## Features

- **Three themes**: deep navy, soft light, and neon purple. Switch with the 1 / 2 / 3 slider.
- **Basic math**: add, subtract, multiply and divide.
- **Chained math**: `2 + 3 + 4 =` just works.
- **Comma formatting**: `1234567` shows as `1,234,567`.
- **DEL and RESET**: delete the last digit or clear everything.
- **Responsive**: built from the 375px mobile and 1440px desktop designs.

## Themes

| Theme | Vibe | Main colors |
|:-----:|------|-------------|
| **1** | Dark navy | Navy, red equals key |
| **2** | Light & warm | Gray, teal and orange |
| **3** | Neon night | Deep purple, yellow text, cyan equals key |

Each theme is a set of Tailwind classes stored in `src/context/ThemeContext.tsx`. The context shares the active theme with the whole app, so the components just read `styles` and never need to know which theme is on.

## 🛠️ Tech stack

- [React](https://react.dev) with `useState` for the calculator and the Context API for themes
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vite](https://vite.dev) for the dev server and build
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
├── index.html              # League Spartan font
├── vite.config.ts          # React + Tailwind plugins
└── src/
    ├── main.tsx            # App entry, wraps the app in ThemeProvider
    ├── index.css           # Tailwind import + font
    ├── App.tsx             # Calculator logic + UI
    └── context/
        └── ThemeContext.tsx  # Theme classes + theme context
```

##  How it works

`App.tsx` keeps four pieces of state:

| State | Meaning |
|-------|---------|
| `display` | What's on the screen |
| `firstNumber` | The first number, stored while you type the second |
| `operator` | The operator you picked |
| `newNumber` | Whether the next digit starts a new number (after an operator or `=`) |

Each button calls a small handler (`handleNumber`, `handleOperator`, `handleEquals`, `handleDelete`, `handleReset`) that updates this state.

##  Notes

- Decimal input isn't supported, though division can still produce decimal results.
- Dividing by zero shows `∞`.
- The display shows up to 3 decimal places.
- The theme resets to theme 1 when you refresh the page.

## Credits

Design and style guide from the [Frontend Mentor](https://www.frontendmentor.io) calculator app challenge.
