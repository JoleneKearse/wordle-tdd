type ButtonProps = {
  letter: string;
  className: string;
};

const Button = ({ letter, className }: ButtonProps): JSX.Element => {
  return <button className={`${className}`}>{letter}</button>;
};

export default Button;
