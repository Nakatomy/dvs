import styles from "./style.module.css";
const FormData = ({ children }) => {
  return (
    <>
      <div className={styles.form__data}>{children}</div>
    </>
  );
};

export default FormData;
