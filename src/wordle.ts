export const CORRECT = "C";
export const ALMOST = "A";
export const INCORRECT = "I";
export const EMPTY = "";

export type LetterScore = typeof CORRECT | typeof ALMOST | typeof INCORRECT;
export type GuessScore = LetterScore[];
export type Game = {
  answer: string;
  hardMode: boolean;
  guesses: string[];
  scores: GuessScore[];
  guessesRemaining: number;
  dictionary: string[];
  maxWordLength: number;
}

export const createGame = (dictionary: string[], answer: string, hardMode: false): Game => {
  return {
    answer,
    hardMode,
    guesses: [],
    scores: [],
    guessesRemaining: 6,
    dictionary,
    maxWordLength: 4,
  }
}

export const scoreGuess = (guess: string, answer: string): GuessScore => {
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");
  const score: GuessScore = [];

  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      score[i] = CORRECT;
      answerLetters[i] = EMPTY;
      guessLetters[i] = EMPTY;
    } 
  }

  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === EMPTY) continue;

    const answerIdx = answerLetters.findIndex(char => char === guessLetters[i]);
    if (answerIdx > -1) {
      score[i] = ALMOST;
      
      answerLetters[answerIdx] = EMPTY;
    } else {
      score[i] = INCORRECT;
    }
  }
  return score;
};

export const validateGuess = (guess: string, game: Game) => {
  if (!game.dictionary.includes(guess)) return false;
  // reject already guessed words
  if (game.guesses.includes(guess)) return false;
  // for hard mode, ensure known correct letters are in the guess
  if (game.guesses.length && game.hardMode) {
    const lastGuess = game.guesses[game.guesses.length - 1];
    const lastScore = game.scores[game.scores.length - 1];

    for (let i = 0; i < guess.length; i++) {
      if (lastScore[i] === CORRECT && lastGuess[i] !== guess[i]) return false;
      if (lastScore[i] === ALMOST && !guess.includes(lastGuess[i])) return false;
    }
  }
  
  return true;
};

export const makeGuess = (guess: string, game: Game) => {
  return {
    ...game,
    guesses: game.guesses.concat([guess]),
    scores: game.scores.concat([scoreGuess(guess, game.answer)]),
    guessesRemaining: guess  === game.answer ? 0 : game.guessesRemaining === 0 ? 0 : game.guessesRemaining - 1,
  };
};

export const keyboardFirst: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]; 
export const keyboardSecond: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
export const keyboardThird: string[] = ["💬", "z", "x", "c", "v", "b", "n", "m", "🗑️"];