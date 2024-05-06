const Letter = ({ id }) => {
  return (
    <input
      type="text"
      name=""
      id={id}
      key={id}
      className="w-12 h-16 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 focus-visible:ring-[#4a1837] uppercase text-center"
    />
  );
};

export default Letter;
