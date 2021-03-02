import styles from "./style.module.css";
import cn from "classnames";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LinkComponent from "components/link";
import Heading from "components/heading";
import { withStyles } from "@material-ui/core/styles";
const Card = ({ heading, date, href }) => {
  const GlobalCss = withStyles({
    "@global": {
      ".MuiSvgIcon-root": {
        margin: "0 0 0 8px",
      },
    },
  })(() => null);
  return (
    <>
      <div className={styles.card}>
        <Heading marginB="marginB12">{heading}</Heading>
        <span className={styles.card__date}>{date}</span>
        <div className={styles["card__link--wrapper"]}>
          <GlobalCss />
          <LinkComponent
            display="flex"
            color="blue"
            fontW="fontW600"
            href={href}
          >
            View Details
            <ArrowForwardIosIcon fontSize="small" />
          </LinkComponent>
        </div>
      </div>
    </>
  );
};
export default Card;
