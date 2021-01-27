import styles from "./style.module.css";
import navigation from "configs/navigation/navigation";
import { LinkComponent, Button } from "components";
import cn from "classnames";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "i18n";

const Menu = ({ className, t }) => {
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
      <li className={styles["nav__list-item"]}>
        <Button
          href="/contacts"
          title="Contact us"
          size="size-m"
          textColor="text-white"
          background="blue"
          border="border-white"
        />
      </li>
    
        <Button
          className={styles.nav__dropbtn}
          type="button"
          onClick={() =>
            i18n.changeLanguage('en')
          }
        >
          <div
            className={cn(styles["icon--size-m"], styles["icon--gb-flag"])}
          ></div>
        </Button>
        <Button
          className={styles.nav__dropbtn}
          type="button"
          onClick={() =>
            i18n.changeLanguage('de')
          }
        >
          <div
            className={cn(styles["icon--size-m"], styles["icon--de-flag"])}
          ></div>
        </Button>
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
