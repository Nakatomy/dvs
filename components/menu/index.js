import styles from "./style.module.css";
import navigation from "configs/navigation/navigation";
import { LinkComponent, Button } from "components";
import cn from "classnames";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "i18n";

const Menu = ({ className, t, children, language }) => {
  return (
    <ul className={className}>
      {navigation.map(({ id, title, items: subItems }) => {
        return (
          <li key={id} className={styles.nav__dropdown}>
            <button className={styles.nav__dropbtn}>{title}</button>
            <ul className={styles["nav__dropdown-content"]}>
              {subItems.map((subItem) => {
                return (
                  <li key={subItem.id}>
                    <LinkComponent
                      title={subItem.title}
                      href={subItem.href}
                      className={styles.nav__droplink}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
      {children}

      <li className={styles.nav__dropdown}>
        <button className={styles.nav__dropbtn}>
          <Button onClick={() => i18n.changeLanguage("en")}>
            <div
              className={cn(styles["icon--size-m"], styles["icon--gb-flag"])}
            ></div>
            <span>En</span>
          </Button>
        </button>
        <ul
          className={cn(
            styles["nav__dropdown-content"],
            styles["nav__dropdown-content--coming-soon"]
          )}
        >
          <li className={styles["nav__comming-soon-list"]}>
            <Button onClick={() => i18n.changeLanguage("de")}>
              <div
                className={cn(styles["icon--size-m"], styles["icon--de-flag"])}
              ></div>
              <span>De</span>
            </Button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

Menu.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Menu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Menu);
