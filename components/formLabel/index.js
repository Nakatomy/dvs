// import cn from "classnames";
import styles from "./style.module.css";
const FormLabel = ({ children }) => {
  return (
    <>
      <label className={styles.form__label}>{children}</label>
    </>
  );
};

export default FormLabel;
