import { calculateReadTime } from "../src/utils/readTime.js"

let failures = 0;

function test(description: string, fn: () => void): void {
  try {
    fn();
    console.log(`✅ ${description}`);
  } catch (err) {
    console.error(`❌ ${description}: ${(err as Error).message}`);
    failures++;
  }
}

function expect(actual: unknown) {
  return {
    toBe(expected: unknown) {
      if (actual !== expected) {
        throw new Error(
          `Se esperaba ${String(expected)}, se obtuvo ${String(actual)}`,
        );
      }
    },
  };
}


// "devuelve 0 para un string vacío"
test("devuelve 0 para un string vacío", () => {
  expect(calculateReadTime("")).toBe(0);
});

// "devuelve 1 para un texto de 200 palabras"
test("devuelve 1 para un texto de 200 palabras", () => {
  expect(calculateReadTime("palabra ".repeat(200).trim())).toBe(1);
});

// "redondea hacia arriba los minutos parciales"
test("redondea hacia arriba los minutos parciales", () => {
  expect(calculateReadTime("palabra ".repeat(300).trim())).toBe(2);
});

process.exit(failures > 0 ? 1 : 0);