import styles from "./style.module.css";
import cn from "classnames";
const UlList = ({ children, listStyle, padding }) => {
  return (
    <>
      <ul
        className={cn(styles["ul"], {
          [styles[`ul--${listStyle}`]]: listStyle,
          [styles[`ul--${padding}`]]: padding,
          
          
        })}
      >
        {children}
      </ul>
    </>
  );
};

export default UlList;
