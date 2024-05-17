import React, { useRef, useEffect } from "react";

type LetterProps = {
  id: string;
  autoFocus?: boolean;
};

const Letter = ({ id, autoFocus }: LetterProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.match(/^[a-zA-Z]$/)) {
      event.target.value = value.toUpperCase();
      const nextLetter = inputRef.current
        ?.nextElementSibling as HTMLInputElement;
      if (nextLetter && nextLetter.tagName === "INPUT") {
        nextLetter.focus();
      }
    } else {
      event.target.value = "";
    }
  };

  return (
    <input
      ref={inputRef}
      maxLength={1}
      onChange={handleChange}
      autoComplete="off"
      type="text"
      name=""
      id={id}
      key={id}
      className="w-12 h-16 text-3xl font-bold border border-2 rounded-md border-neutral-600 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 focus-visible:ring-[#4a1837] uppercase text-center"
    />
  );
};

export default Letter;
