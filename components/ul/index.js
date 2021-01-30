import styles from "./style.module.css";
import cn from "classnames";
const UlList = ({ children, listStyle }) => {
  return (
    <>
      <ul
        className={cn(styles["ul"], {
          [styles[`ul--${listStyle}`]]: listStyle,
        })}
      >
        {children}
      </ul>
    </>
  );
};

export default UlList;
