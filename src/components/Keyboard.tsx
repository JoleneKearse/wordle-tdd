import Button from "./Button";
import { keyboardFirst, keyboardSecond, keyboardThird } from "../wordle";

const Keyboard = () => {
  const getSpecialKeys = (letter: string) => {
    const letterKeys = "💬🗑️";
    const result = letterKeys.includes(letter)
      ? "w-11 bg-messages-base py-3 text-base font-bold rounded-sm w-content text-neutral-100 dark:text-neutral-900"
      : "w-6 py-3 text-base font-bold rounded-sm w-content bg-neutral-400 text-neutral-100 dark:text-neutral-900";
    return result;
  };

  return (
    <>
      <article className="grid w-full grid-rows-3 gap-3">
        <section className="flex justify-center gap-3">
          {keyboardFirst.map((letter) => {
            return (
              <Button
                letter={letter}
                key={letter}
                className={`key ${getSpecialKeys(letter)}`}
              ></Button>
            );
          })}
        </section>
        <section className="flex justify-center gap-3">
          {keyboardSecond.map((letter) => {
            return (
              <Button
                letter={letter}
                key={letter}
                className={`key ${getSpecialKeys(letter)}`}
              ></Button>
            );
          })}
        </section>
        <section className="flex justify-center gap-3">
          {keyboardThird.map((letter) => {
            return (
              <Button
                letter={letter}
                key={letter}
                className={`key ${getSpecialKeys(letter)}`}
              ></Button>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default Keyboard;
