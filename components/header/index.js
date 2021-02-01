import styles from "./style.module.css";
import cn from "classnames";
import { Nav, Button, LinkComponent, Logo } from "components";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const Header = ({t}) => {
  return (
    <header className={cn(styles.nav, styles["nav--sticky"])}>
      
      <Nav className={styles["nav__container--sticky"]}>
      <li className={styles["nav__list-item"]}>
        <Button
          href="/contacts"
          title={t("buttonContactUs")}
          size="size-m"
          textColor="text-white"
          background="blue"
        />
        </li>
      </Nav>
    </header>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Header);
