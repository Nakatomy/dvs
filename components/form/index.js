import styles from "./style.module.css";
import cn from "classnames";
const Form = ({ children, onSubmit, width }) => {
  return (
    <>
      <form className={cn(styles.form, {
      [styles[`form--${width}`]]: width
    })} onSubmit={onSubmit} noValidate autoComplete="off">{children}</form>
    </>
  );
};

export default Form
