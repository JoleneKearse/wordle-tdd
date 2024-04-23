const Grid = () => {
  return (
    <form>
      <div className="flex gap-4 py-4">
        <input
          type="text"
          name=""
          id="firstGuessLetter1"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 focus-visible:ring-[#4a1837]"
        />
        <input
          type="text"
          name=""
          id="firstGuessLetter2"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="firstGuessLetter3"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="firstGuessLetter4"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="firstGuessLetter5"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          name=""
          id="secondGuessLetter1"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="secondGuessLetter2"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="secondGuessLetter3"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="secondGuessLetter4"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
        <input
          type="text"
          name=""
          id="secondGuessLetter5"
          className="flex items-center justify-center w-12 py-3 pl-4 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300"
        />
      </div>
    </form>
  );
};

export default Grid;
