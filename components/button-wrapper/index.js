import styles from "./style.module.css";

const ButtonWrapper = ({children}) => {
    return (
        <div className={styles.buttonWrapper}>
            <span>{children}</span>
        </div>
    );
}

export default ButtonWrapper