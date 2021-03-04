import styles from "./style.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const PositionClosed = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <LockOutlinedIcon />
        <h5 className={styles.title}>Stelle bereits besetzt</h5>
      </div>
    </>
  );
};

export default PositionClosed;
