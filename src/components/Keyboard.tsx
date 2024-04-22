import Button from "./Button";
import { keyboard } from "../wordle";

const Keyboard = () => {
  const getColSpan = (letter: string) => {
    const colSpanLetters = "a💬";
    return colSpanLetters.includes(letter) ? "col-start-2" : "";
  };
  
  return (
    <>
      <article className="grid w-4/5 grid-cols-11 grid-rows-3 gap-3 max-w-prose">
        {keyboard.map((letter) => (
          <Button key={letter} letter={letter} className={`key ${getColSpan(letter)}`}></Button>
        ))}
      </article>
    </>
  );
};

export default Keyboard;
