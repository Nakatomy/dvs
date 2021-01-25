import styles from "./style.module.css";
import cn from "classnames";
import LinkComponent from "../link";
import Link from 'next/link'
import Logo from "../logo";
import navProduct from "configs/navigation/productOverview";
import navAbout from "configs/navigation/aboutUs";
import navHelp from "configs/navigation/help";
import navLegalCorner from 'configs/navigation/legalCorner';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__grid}>
        <div className={cn(styles.footer__item, styles.footer__line)}>
          <div className={styles.footer__item}>
            <div className={styles.footer__contact}>
            <LinkComponent href="/">
              <Logo className={styles.footer__logo}>
              </Logo>
              </LinkComponent>
            </div>
          </div>
          <div className={styles.footer__contact}>
            <p className={styles.footer__heading}>
              Digital Vault Services GmbH Handelsregister - HRB 249553
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
              title=" Stahlgruberring 43, 81829 Munich"
              href="https://goo.gl/maps/7shPSvq8q65kGU5W9"
              className={styles.footer__link}
            ></LinkComponent>
          </div>
        </div>
        <div className={styles.footer__container}>
          <div className={styles.footer__item}>
            <p className={styles.footer__heading}>Product Overview</p>
            <ul className={styles.footer__ul}>
              {navProduct.map((item) => {
                return (
                  <li key={item.id} className={styles['footer__list-item']}>
                    <LinkComponent
                      title={item.title}
                      href={item.href}
                      className={styles.footer__link}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.footer__item}>
            <p className={styles.footer__heading}>Legal Corner</p>
            <ul className={styles.footer__ul}>
            {navLegalCorner.map((item) => {
                return (
                  <li key={item.id} className={styles['footer__list-item']}>
                    <LinkComponent
                      title={item.title}
                      href={item.href}
                      className={styles.footer__link}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.footer__item}>
            <p className={styles.footer__heading}>Product Overview</p>
            <ul className={styles.footer__ul}>
              {navAbout.map((item) => {
                return (
                  <li key={item.id} className={styles['footer__list-item']}>
                    <LinkComponent
                      title={item.title}
                      href={item.href}
                      className={styles.footer__link}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.footer__item}>
            <p className={styles.footer__heading}>Product Overview</p>
            <ul className={styles.footer__ul}>
              {navHelp.map((item) => {
                return (
                  <li key={item.id} className={styles['footer__list-item']}>
                    <LinkComponent
                      title={item.title}
                      href={item.href}
                      className={styles.footer__link}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <p className={styles.footer__copyright}>
          &copy; 2021. Digital Vault Services GmbH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
