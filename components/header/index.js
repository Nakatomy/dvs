import styles from './style.module.css';
import cn from 'classnames';
import { LinkComponent } from 'components';
import Link from 'next/link';
import Logo from '../logo';
import navProduct from 'configs/navigation/productOverview';
import navAbout from 'configs/Navigation/about-us';
import navHelp from 'configs/Navigation/help';
import navLegalCorner from 'configs/navigation/legal-corner';
import { Button } from 'components'


const Header = () => {
    return  <header className={cn(styles.nav, styles['nav--sticky'], styles['nav--display-none'])}>
        <nav className={cn(styles.nav__container, styles['nav__container--sticky'])}>
            <div className={styles['nav__group-items']}>
                <Link href="./index.html">
                    <Logo className={cn(styles.nav__logo, styles['nav__logo--sticky'])}></Logo>
                </Link>
                <div className={styles['nav__menu-icon']}>
                    <div className={ styles.line }></div>
                </div>
            </div>
            <ul className={styles.nav__items}>
                <li className={styles.nav__dropdown}>
                    <button className={styles.nav__dropbtn}>Product Overview</button>
                    <ul className={styles['nav__dropdown-content']}>
                        {navProduct.map((item) => {
                            return (
                            <li>
                                <LinkComponent
                                title={item.title}
                                href={item.href}
                                className={styles.nav__droplink}
                                />
                            </li>
                            );
                        })}
                    </ul>
                </li>
                <li className={styles.nav__dropdown}>
                    <button className={styles.nav__dropbtn}>Legal Corner</button>
                    <ul className={styles['nav__dropdown-content']}>
                        {navLegalCorner.map((item) => {
                            return (
                            <li>
                                <LinkComponent
                                title={item.title}
                                href={item.href}
                                className={styles.nav__droplink}
                                />
                            </li>
                            );
                        })}
                    </ul>
                </li>
                <li className={styles.nav__dropdown}>
                    <button className={styles.nav__dropbtn}>About us</button>
                     <ul className={styles['nav__dropdown-content']}>
                         {navAbout.map((item) => {
                            return (
                            <li>
                                <LinkComponent
                                title={item.title}
                                href={item.href}
                                className={styles.nav__droplink}
                                />
                            </li>
                            );
                        })}
                    </ul>
                </li>
                 <li className={styles.nav__dropdown}>
                    <button className={styles.nav__dropbtn}>Help</button>
                    <ul className={styles['nav__dropdown-content']}>
                        {navHelp.map((item) => {
                            return (
                            <li>
                                <LinkComponent
                                title={item.title}
                                href={item.href}
                                className={styles.nav__droplink}
                                />
                            </li>
                            );
                        })}
                    </ul>
                </li>
                {/* <!-- <li className="nav__list-item">
                    <a href="./contacts.html" className="nav__link">Contacts</a>
                </li> -->
                <!-- <li className="nav__list-item">
                    <a href="#" className="btn btn--text-white btn--size-m btn--border-white">Login
                        <span className="icon material-icons">
                            login
                        </span>
                    </a>
                </li> --> */}
                <li className="nav__list-item">
                    <a href="./contacts.html" className="btn btn--text-white btn--size-m btn--blue">Contact us</a>
                </li>
                {/* <!-- <li className="nav__list-item">
                    <a href="#" className="nav__lang-link nav__lang-link--active">
                        <div className="icon--size-m icon--de-flag"></div>
                    </a>
                </li>
                <li className="nav__list-item">
                    <a href="#" className="nav__lang-link">
                        <div className="icon--size-m icon--gb-flag"></div>
                    </a>
                </li> --> */}
            </ul>
        </nav>
    </header>
}

export default Header