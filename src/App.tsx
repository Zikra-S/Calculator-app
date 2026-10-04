import { useState } from "react";
import { useTheme, type ThemeId } from "./context/themeContext";

const keyBase = "h-16 rounded-md cursor-pointer";
const numSize = "text-[32px] md:text-[40px]";
const actionSize = "text-xl md:text-[28px]";
const equalsSize = "text-2xl md:text-[32px]";

const themeIds: ThemeId[] = [1, 2, 3];
const keys = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", "0", "/", "x"];

function calculate(a: number, b: number, operator: string) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "x") return a * b;
  return a / b;
}

export default function App() {
  const { theme, setTheme, styles } = useTheme();

  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(false);

  function handleNumber(num: string) {
    if (newNumber || display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
    setNewNumber(false);
  }

  function handleOperator(op: string) {
    // if there's already a pending operation, finish it first (2 + 3 + => 5 +)
    if (firstNumber !== null && operator && !newNumber) {
      const result = calculate(firstNumber, Number(display), operator);
      setDisplay(String(result));
      setFirstNumber(result);
    } else {
      setFirstNumber(Number(display));
    }
    setOperator(op);
    setNewNumber(true);
  }

  function handleEquals() {
    if (firstNumber === null || !operator) return;
    const result = calculate(firstNumber, Number(display), operator);
    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setNewNumber(true);
  }

  function handleDelete() {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  }

  function handleReset() {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setNewNumber(false);
  }

  function handleKey(key: string) {
    if (key === "DEL") handleDelete();
    else if (["+", "-", "/", "x"].includes(key)) handleOperator(key);
    else handleNumber(key);
  }

  return (
    <div className={`min-h-screen ${styles.page}`}>
      <main className="mx-auto flex min-h-screen max-w-135 flex-col justify-center px-6 py-8">
        {/* header */}
        <header className="mb-6 flex items-end justify-between md:mb-8">
          <h1 className="text-[32px] leading-none">calc</h1>

          <div className="flex items-end gap-6">
            <span className="pb-0.5 text-xs tracking-widest">THEME</span>
            <div>
              <div className="flex justify-between px-1.5 pb-1 text-xs">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className={`relative h-6 w-18 rounded-full ${styles.pad}`}>
                {themeIds.map((id) => (
                  <button
                    key={id}
                    onClick={() => setTheme(id)}
                    className="absolute top-0 h-full w-6 cursor-pointer"
                    style={{ left: (id - 1) * 24 }}
                  />
                ))}
                <span
                  className={`pointer-events-none absolute top-1 size-4 rounded-full ${styles.thumb}`}
                  style={{ left: (theme - 1) * 24 + 4 }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* screen */}
        <div
          className={`mb-6 flex h-22 items-center justify-end overflow-x-auto rounded-lg px-6 text-[32px] md:h-32 md:px-8 md:text-[56px] ${styles.screen}`}
        >
          {Number(display).toLocaleString("en-US")}
        </div>

        {/* keypad */}
        <div className={`grid grid-cols-4 gap-4 rounded-lg p-6 md:gap-6 md:p-8 ${styles.pad}`}>
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => handleKey(key)}
              className={`${keyBase} ${key === "DEL" ? `${styles.action} ${actionSize}` : `${styles.key} ${numSize}`} ${key === "0" ? "col-span-2" : ""}`}
            >
              {key}
            </button>
          ))}

          <button
            onClick={handleReset}
            className={`${keyBase} ${styles.action} ${actionSize} col-span-2`}
          >
            RESET
          </button>
          <button
            onClick={handleEquals}
            className={`${keyBase} ${styles.equals} ${equalsSize} col-span-2`}
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
}