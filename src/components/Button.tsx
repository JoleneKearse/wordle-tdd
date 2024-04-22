type ButtonProps = {
  letter: string;
  className: string;
};

const Button = ({ letter, className }: ButtonProps): JSX.Element => {

  return (
    <button className={`w-6 py-3 text-base font-bold rounded-sm w-content bg-neutral-400 text-neutral-100 dark:text-neutral-900 ${className}`}>
      {letter.toUpperCase()}
    </button>
  );
};

export default Button;
