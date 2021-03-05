import styles from "./style.module.css";
import cn from "classnames";

const Heading = ({ children, background, marginB }) => {
  return <h3 className={cn(styles.heading, {
    [styles[`heading--${background}`]]: background,
    [styles[`heading--${marginB}`]]: marginB,
  })}>{children}</h3>;
};

export default Heading
