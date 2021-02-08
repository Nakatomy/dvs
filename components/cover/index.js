import styles from "./style.module.css";
import cn from "classnames";

const Cover = ({ children, style }) => {
  return (
    <>
      <div style={style} className={styles.cover}>
        {children}
      </div>
    </>
  );
};

export default Cover;
