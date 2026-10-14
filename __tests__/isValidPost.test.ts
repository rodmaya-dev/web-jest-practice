import { isValidPost } from "../src/utils/validate.js";
import { test, expect } from "@jest/globals";

test("devuelve true cuando se proporcionan tanto el título como el contenido", () => {
  expect(isValidPost({ title: "Mi Nota", content: "Contenido de la nota" })).toBe(true);
});

test("devuelve false cuando el título está vacío", () => {
  expect(isValidPost({ title: "", content: "Contenido de la nota" })).toBe(false);
});

test("devuelve false cuando el contenido está vacío", () => {
  expect(isValidPost({ title: "Mi Nota", content: "" })).toBe(false);
});