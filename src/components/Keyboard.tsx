import Button from "./Button";
import { keyboardFirst, keyboardSecond, keyboardThird } from "../wordle";

const Keyboard = () => {
  const getSpecialKeys = (letter: string) => {
    const letterKeys = "💬🗑️";
    return letterKeys.includes(letter) ? "w-11 bg-messages-base" : "";
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
