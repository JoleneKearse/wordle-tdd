import Letter from "./Letter";

// type GridProps = {
//   guesses: string[];
//   onGuessChange: (rowIndex: number, guess: string) => void;
// }

const Grid = (): JSX.Element => {
  const rows = 5;
  const columns = 5;
  
  return (
    <form>
    <div className="grid grid-cols-5 grid-rows-5 gap-2">
      {Array.from({ length: rows }, (_, rowIndex) => {
        return Array.from({ length: columns }, (_, columnIndex) => {
          const id = `guess${rowIndex + 1}Letter${columnIndex + 1}`;
          return <Letter id={id} key={id} />
        });
      }).flat()}
    </div>
  </form>
  );
};

export default Grid;
