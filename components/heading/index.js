import styles from "./style.module.css";
import cn from "classnames";

const Heading = ({ children, background }) => {
  return <h3 className={cn(styles.heading, {
    [styles[`heading--${background}`]]: background})}>{children}</h3>;
};

export default Heading
