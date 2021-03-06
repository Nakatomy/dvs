import styles from "./style.module.css";
import cn from "classnames";
import LinkComponent from "../link";
import Logo from "../logo";
import navigation from 'configs/navigation/navigation';
import { Container } from "components";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container width="full-width">
        <nav className={styles.footer__grid}>
          <div className={cn(styles.footer__item, styles.footer__line)}>
            <div className={styles.footer__item}>
              <div className={styles.footer__contact}>
                <LinkComponent href="/">
                  <Logo className={styles.footer__logo}></Logo>
                </LinkComponent>
              </div>
            </div>
            <div className={styles.footer__contact}>
              <p className={styles.footer__heading}>
                Digital Vault Services GmbH <br />
                Handelsregister- HRB 249553
              </p>
              <LinkComponent
                title="+49 175 8868021"
                href="tel:+491758868021"
                className={styles.footer__link}
              ></LinkComponent>
            </div>

            <div className={styles.footer__contact}>
              <LinkComponent
                title="contact@digitalvaultservices.com"
                href="mailto:contact@digitalvaultservices.com"
                className={styles.footer__link}
              ></LinkComponent>
            </div>
            <div className={styles.footer__contact}>
              <LinkComponent
                title=" Stahlgruberring 43, 81829 München"
                href="https://goo.gl/maps/7shPSvq8q65kGU5W9"
                className={styles.footer__link}
              ></LinkComponent>
            </div>
          </div>
          <div className={styles.footer__container}>

            {navigation.map(({ id, en, de, items: subItems }) => {
              return (<div key={id} className={styles.footer__item}>
                <p className={styles.footer__heading}>{(i18n.language === 'en') ? en : de}</p>
                <ul className={styles.footer__ul}>
                  {subItems.map((subItem) => {
                    return (
                      <li key={`${subItem.id}:${subItem.index}`} className={styles["footer__list-item"]}>
                        <LinkComponent
                          title={subItem[i18n.language]}
                          href={subItem.href}
                          className={styles.footer__link}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              );
            })}

          </div>
        </nav>
      </Container>

      <Container display="full-width">
        <p className={styles.footer__copyright}>
          &copy; 2021. Digital Vault Services GmbH
        </p>
      </Container>
    </footer>
  );
};

export default Footer