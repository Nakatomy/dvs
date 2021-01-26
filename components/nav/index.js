import styles from "./style.module.css";
import cn from "classnames";
import { LinkComponent, Menu } from "components";
import Logo from "../logo";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [status, setStatus] = useState(styles.close);
  let menu;

  function showMenuItems() {
    setShowMenu(!showMenu);
    animate();
  }

  function animate() {
    setStatus(status === styles.open ? styles.close : styles.open);
  }

  if (showMenu) {
    menu = <Menu className={styles["nav__items--active"]} />;
  }
  return (
    <nav
      className={cn(styles.nav__container, styles["nav__container--sticky"])}
    >
      <div className={styles["nav__group-items"]}>
        <LinkComponent
          className={cn(styles.nav__logo, styles["nav__logo--sticky"])}
          href="/"
        >
          <Logo />
        </LinkComponent>
        <div className={styles["nav__menu-icon"]} onClick={showMenuItems}>
          <div className={cn(status, styles.line)}></div>
          <div className={cn(status, styles.line)}></div>
          <div className={cn(status, styles.line)}></div>
        </div>
      </div>
      {menu}
      <Menu className={styles.nav__items} />
    </nav>
  );
};

export default Nav;
