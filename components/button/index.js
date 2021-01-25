import styles from "./style.module.css";
import cn from "classnames";

const Button = ({ children, title, background, textColor, size, border }) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles[`btn--${background}`]]: background,
        [styles[`btn--${textColor}`]]: textColor,
        [styles[`btn--${size}`]]: size,
        [styles[`btn--${border}`]]: border,
      })}
    >
      {children}
      {title}
    </button>
  );
};

export default Button;
