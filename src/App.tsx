import { useState, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";

function App() {
  const [word, setWord] = useState("");
  // const [guesses, setGuesses] = useState<string[]>(Array(5).fill(""));
  // const [currentRowIndex, setCurrentRowIndex] = useState<number>(0);

  // const handleGuessChange = (rowIndex: number, guess: string) => {
  //   const newGuesses = [...guesses];
  //   newGuesses[rowIndex] = guess;
  //   setGuesses(newGuesses);

  //   if (guess.length === 5) {
  //     checkWord(guess);
  //   }
  // };

  const checkWord = async (guess: string) => {
    const response = await fetch("http://localhost:3000/api/check-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess }),
    });
  };

  const getWord = async () => {
    const response = await fetch(`http://localhost:3000/api/wordle`);
    const data = await response.json();
    console.log(data.word);
    setWord(data.word);
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-20 bg-neutral-100 dark:bg-neutral-900">
      <Header />
      <Grid />
      <Keyboard />
    </main>
  );
}

export default App;
