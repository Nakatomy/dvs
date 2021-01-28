import styles from "./style.module.css";
import cn from "classnames";
const Container = ({ children, display, width, height, marginTop }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container--${display}`]] : display,
        [styles[`container--${width}`]]: width,
        [styles[`container--${height}`]]: height,
        [styles[`container--${marginTop}`]]: marginTop
      })}
    >
      {children}
    </div>


  );
};

export default Container
