import { Button } from "components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { withStyles } from "@material-ui/core/styles";
const ButtonLink = ({ href, linkText }) => {
  const GlobalCss = withStyles({
    "@global": {
      ".MuiSvgIcon-root": {
        margin: "0 0 0 8px",
      },
    },
  })(() => null);
  return (
    <>
      <GlobalCss />
      <Button display="text--only" type="link" href={href}>
        {linkText}
        <ArrowForwardIosIcon fontSize="small" />
      </Button>
    </>
  );
};

export default ButtonLink;
