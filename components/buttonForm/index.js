import styles from "./style.module.css";
import cn from "classnames";


const ButtonForm = ({ children, title, background,type, textColor, size, border, space, onClick, margin, display, alignSelf }) => {
  return (<button  onClick={onClick} type={type}
    className={cn(styles.btn, {
      [styles[`btn--${background}`]]: background,
      [styles[`btn--${display}`]]: display,
      [styles[`btn--${textColor}`]]: textColor,
      [styles[`btn--${size}`]]: size,
      [styles[`btn--${border}`]]: border,
      [styles[`btn--${space}`]]: space,
      [styles[`btn--${margin}`]]: margin,
      [styles[`btn--${alignSelf}`]]: alignSelf,
    })}
  >
    {title}
    {children}

  </button>
  );
};

export default ButtonForm;