import styles from "./style.module.css";
import navigation from "configs/navigation/navigation";
import { LinkComponent, Button, LanguageSwitcher } from "components";
import cn from "classnames";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";


import React from 'react';
import { useTranslation } from 'react-i18next';


{/* <Trans i18nKey="list_map">
  My dogs are named:
  <ul i18nIsDynamicList>
    {['rupert', 'max'].map(dog => (<li>{dog}</li>))}
  </ul>
</Trans>
 */}


const Menu = ({ className, children }) => {

  const { i18n } = useTranslation();
  return (
    <ul className={className}>
      {navigation.map(({ id, title, items: subItems, index }) => {
        return (
          <li key={`${id}:${index}`} className={styles.nav__dropdown}>
            <button className={styles.nav__dropbtn}>{title}</button>
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
      <LanguageSwitcher className={styles['nav__list-item']} />



      {/* 

      <Button onClick={() => i18n.changeLanguage(
        {
          lang = getCurrentLng()
          return (
            <div

          className={cn(styles["icon--size-m"], { lang === 'en' ? styles["icon--gb-flag"] : styles["icon--de-flag"] })}
          ></div>
          )
        }
      )}>
        
        </Button>

      </button >
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

      </Button> */}






    </ul>

  );
};

export default Menu

// Menu.getInitialProps = async () => ({
//   namespacesRequired: ["common"],
// });

// Menu.propTypes = {
//   t: PropTypes.func.isRequired,
// };

// export default withTranslation("common")(Menu);
