import { describe, expect, it, test } from "vitest";

describe("scoreGuess", () => {
  it("identifies correct letters", () => {
    expect(Wordle.scoreGuess("a", "a")).toEqual(["C"]);
  })
})