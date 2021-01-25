import styles from "./style.module.css";
import cn from "classnames";
const Container = ({ children, modifier }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container--${modifier}`]]: modifier,
      })}
    >
      {children}
    </div>
  );
};

export default Container
