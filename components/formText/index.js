import styles from "./style.module.css";
const FormTextArea = ({ children }) => {
  return (
    <>
      <textarea className={styles.input}>{children}</textarea>
    </>
  );
};

export default FormTextArea;