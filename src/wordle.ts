export const scoreGuess = (guess: string, answer: string): string[] => {
  const score = [];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      score[i] = "✅";
    } else if (answer.includes(guess[i])) {
      score[i] = "😜";
    } else {
      score[i] = "❌";
    }
  }
  return score;
}