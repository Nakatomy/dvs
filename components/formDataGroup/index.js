import styles from "./style.module.css";
const FormDataGroup = ({ children }) => {
  return (
    <>
      <div className={styles["form__data-group"]}>{children}</div>
    </>
  );
};

export default FormDataGroup;
