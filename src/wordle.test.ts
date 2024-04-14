import { describe, expect, it } from "vitest";
import * as Wordle from "./wordle"

describe("scoreGuess", () => {
  it("identifies correct letters", () => {
    expect(Wordle.scoreGuess("a", "a")).toEqual(["C"]);
  });
  it("identifies incorrect letters", () => {
    expect(Wordle.scoreGuess("b", "a")).toEqual(["I"]);
  });
  it("identifies almost letters", () => {
    expect(Wordle.scoreGuess("bx", "ab")).toEqual(["A", "I"]);
  });
  // no duplicate in answer, but in guess
  it("matches letters only once", () => {
    expect(Wordle.scoreGuess("cczy", "abcd")).toEqual(["A", "I", "I", "I"]);
  });

  it("matches correct letters first", () => {
    expect(Wordle.scoreGuess("zdyd", "abcd")).toEqual(["I", "I", "I", "C"]);
  });

  it.each([
    // no duplicate in answer, but in guess
    ["zyxx", "abcd", "IIII"],
    ["cczy", "abcd", "AIII"],
    ["aazy", "abcd", "CIII"],
    ["zdyd", "abcd", "IIIC"],
    // duplicate in guess and answer
    ["zzyx", "abcb", "IIII"],
    ["bzby", "abcb", "AIAI"],
    ["zbby", "abcb", "ICAI"],
    ["zybb", "abcb", "IIAC"],
    ["zbyb", "abcb", "ICIC"],
    // no duplicate in guess, but in answer
    ["zbxy", "abcb", "ICII"],
    ["bzyx", "abcb", "AIII"],
  ])("guess: %s, answer: %s, result: %s", (guess, answer, result) => {
    expect(Wordle.scoreGuess(guess, answer)).toEqual(result.split(""));
  })
})