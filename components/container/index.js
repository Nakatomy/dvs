import styles from "./style.module.css";
import cn from "classnames";
const Container = ({ children, display, width, height, margin, align, gap, grid }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container--${display}`]]: display,
        [styles[`container--${width}`]]: width,
        [styles[`container--${height}`]]: height,
        [styles[`container--${margin}`]]: margin,
        [styles[`container--${align}`]]: align,
        [styles[`container--${gap}`]]: gap,
        [styles[`container--${grid}`]]: grid
      })}
    >
      {children}
    </div>


  );
};

export default Container
