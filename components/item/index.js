import styles from "./style.module.css";

const Item = ({children}) => {
    return (
        <>
        <div className={styles.item}>{children}</div>
        </>
    )
}

export default Item