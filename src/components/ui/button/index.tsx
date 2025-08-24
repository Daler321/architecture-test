import styles from "./button.module.css";

const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
