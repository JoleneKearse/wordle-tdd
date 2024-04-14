import { describe, expect, it } from "vitest";
import * as Wordle from "./wordle"

describe("scoreGuess", () => {
  it("identifies correct letters", () => {
    expect(Wordle.scoreGuess("a", "a")).toEqual(["✅"]);
  });
  it("identifies incorrect letters", () => {
    expect(Wordle.scoreGuess("b", "a")).toEqual(["❌"]);
  });
  it("identifies almost letters", () => {
    expect(Wordle.scoreGuess("bx", "ab")).toEqual(["😜", "❌"]);
  });
})