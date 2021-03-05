import styles from "./style.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
const PositionClosed = () => {
  const GlobalCss = withStyles({
    "@global": {
      ".MuiSvgIcon-root": {
        color: "#001540",
      },
    },
  })(() => null);
  return (
    <>
      <div className={styles.wrapper}>
        <GlobalCss />
        <LockOutlinedIcon />
        <h5 className={styles.title}>Stelle bereits besetzt</h5>
      </div>
    </>
  );
};

export default PositionClosed;
