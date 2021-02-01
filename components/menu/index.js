import styles from "./style.module.css";
import navigation from "configs/navigation/navigation";
import { LinkComponent, Button, LanguageSwitcher, Logo } from "components";
import cn from "classnames";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

import React from "react";
import { useTranslation } from "react-i18next";

const Menu = ({ className, children }) => {
  const { i18n } = useTranslation();
  return ( <>
    <ul className={className}>
      {navigation.map(({ id, title, en, de, items: subItems, index }) => {
        return (
          <li key={`${id}:${index}`} className={styles.nav__dropdown}>
            <button className={styles.nav__dropbtn}>
              {i18n.language === "en" ? en : de}
            </button>
            <ul className={styles["nav__dropdown-content"]}>
              {subItems.map((subItem) => {
                return (
                  <li key={`${subItem.id}:${subItem.index}`}>
                    <LinkComponent
                      title={subItem[i18n.language]}
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
      <LanguageSwitcher className={styles["nav__list-item"]} />
      
    </ul>
  
    </>
  );
};

export default Menu;

// Menu.getInitialProps = async () => ({
//   namespacesRequired: ["common"],
// });

// Menu.propTypes = {
//   t: PropTypes.func.isRequired,
// };

// export default withTranslation("common")(Menu);
