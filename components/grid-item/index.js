import styles from "./style.module.css";

const GridItem = ({children}) => { 
    return (
        <div className={styles.gridItem}>
            {children}
        </div>
    );
}

export default GridItem