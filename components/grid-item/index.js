import styles from "./style.module.css";
import cn from "classnames";

const GridItem = ({children, margin}) => { 
    return (
        <div className={cn(styles.gridItem, {
            [styles[`gridItem--${margin}`]]: margin
          })}>
            {children}
        </div>
    );
}

export default GridItem