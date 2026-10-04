import { createContext, useContext, useState, type ReactNode } from "react";

export type ThemeId = 1 | 2 | 3;

// Tailwind class strings for each theme (written out in full so Tailwind can find them)
export const themes = {
  1: {
    page: "bg-[hsl(222,26%,31%)] text-white",
    pad: "bg-[hsl(223,31%,20%)]",
    screen: "bg-[hsl(224,36%,15%)]",
    key: "bg-[hsl(30,25%,89%)] text-[hsl(221,14%,31%)] shadow-[0_4px_0_hsl(28,16%,65%)] hover:bg-white",
    action: "bg-[hsl(225,21%,49%)] text-white shadow-[0_4px_0_hsl(224,28%,35%)] hover:bg-[hsl(223,50%,77%)]",
    equals: "bg-[hsl(6,63%,50%)] text-white shadow-[0_4px_0_hsl(6,70%,34%)] hover:bg-[hsl(6,93%,67%)]",
    thumb: "bg-[hsl(6,63%,50%)]",
  },
  2: {
    page: "bg-[hsl(0,0%,90%)] text-[hsl(60,10%,19%)]",
    pad: "bg-[hsl(0,5%,81%)]",
    screen: "bg-[hsl(0,0%,93%)]",
    key: "bg-[hsl(45,7%,89%)] text-[hsl(60,10%,19%)] shadow-[0_4px_0_hsl(35,11%,61%)] hover:bg-white",
    action: "bg-[hsl(185,42%,37%)] text-white shadow-[0_4px_0_hsl(185,58%,25%)] hover:bg-[hsl(185,41%,55%)]",
    equals: "bg-[hsl(25,98%,40%)] text-white shadow-[0_4px_0_hsl(25,99%,27%)] hover:bg-[hsl(25,100%,61%)]",
    thumb: "bg-[hsl(25,98%,40%)]",
  },
  3: {
    page: "bg-[hsl(268,75%,9%)] text-[hsl(52,100%,62%)]",
    pad: "bg-[hsl(268,71%,12%)]",
    screen: "bg-[hsl(268,71%,12%)]",
    key: "bg-[hsl(268,47%,21%)] text-[hsl(52,100%,62%)] shadow-[0_4px_0_hsl(290,70%,36%)] hover:bg-[hsl(268,51%,44%)]",
    action: "bg-[hsl(281,89%,26%)] text-white shadow-[0_4px_0_hsl(285,91%,52%)] hover:bg-[hsl(281,57%,44%)]",
    equals: "bg-[hsl(176,100%,44%)] text-[hsl(198,20%,13%)] shadow-[0_4px_0_hsl(177,92%,70%)] hover:bg-[hsl(177,100%,79%)]",
    thumb: "bg-[hsl(176,100%,44%)]",
  },
};

type ThemeContextType = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  styles: (typeof themes)[ThemeId];
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 1,
  setTheme: () => {},
  styles: themes[1],
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(1);

  return <ThemeContext.Provider value={{ theme, setTheme, styles: themes[theme] }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
