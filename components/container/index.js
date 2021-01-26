import styles from "./style.module.css";
import cn from "classnames";
const Container = ({ children, display, width }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container--${display}`]] : display,
        [styles[`container--${width}`]]: width
      })}
    >
      {children}
    </div>


  );
};

export default Container
