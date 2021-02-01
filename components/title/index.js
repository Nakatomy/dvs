import styles from "./style.module.css";
import cn from "classnames";

const Title = ({ children, align }) => {
  return (
    <h2
      className={cn(styles.sectionTitle, {
        [styles[`sectionTitle--${align}`]]: align,
      })}
    >
      {children}
    </h2>
  );
};

export default Title;
