import styles from "./style.module.css";
import cn from "classnames";
const Spacer = ({size}) => {
    return (
        <>
        <div    className={cn(styles.spacer, {
      [styles[`spacer--${size}`]]: size
    })}></div>
        </>
    )
}

export default Spacer