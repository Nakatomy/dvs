import styles from "./style.module.css";
import cn from "classnames";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LinkComponent from "components/link";
import { Heading, Button, ImageComponent } from "components";
import { withStyles } from "@material-ui/core/styles";
import YoutubeVideo from "components/youtubeVideo";
const Card = ({
  heading,
  date,
  linkText,
  href,
  children,
  src
}) => {
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
        <ImageComponent src={src} margin="marginNone"></ImageComponent>
        <Heading marginB="marginB12">{heading}</Heading>
        <div className={styles.card__date}>{date}</div>
        <GlobalCss />
        {children}
        <Button display="text--only" type="link" href={href}>
          {linkText}
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </div>
    </>
  );
};
export default Card;
