import { beforeEach, describe, expect, it } from "vitest";
import * as Wordle from "./wordle"

// scoring function
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
  // duplicates in both, but check for correct letters before almost letters
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

// guess validation
describe("validateGuess", () => {
  let game: Wordle.Game;

  beforeEach(() => {
    const dictionary = [
      "aaaa", "aabb", "bbaa", "bbbb", "bbba", "aaab"
    ];
    const answer = "aaab";
    game = Wordle.createGame(dictionary, answer, false);
  });

  it("accepts words that are in the dictionary", () => {
    expect(Wordle.validateGuess("aaaa", game)).toEqual(true);
  });
  it("rejects words that are not in the dictionary", () => {
    expect(Wordle.validateGuess("cccc", game)).toEqual(false);
  });
})