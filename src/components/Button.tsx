type ButtonProps = {
  letter: string;
  className: string;
};

const Button = ({ letter, className }: ButtonProps): JSX.Element => {

  return (
    <button className={`py-4 font-bold rounded-sm w-px-3 bg-neutral-400 text-neutral-100 font-xl ${className}`}>
      {letter.toUpperCase()}
    </button>
  );
};

export default Button;
