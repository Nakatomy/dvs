import styles from "./style.module.css";
import cn from "classnames";
import { Nav, Button } from "components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className={cn(styles.nav, styles["nav--sticky"])}>
      <Nav className={styles["nav__container--sticky"]}>
        <Button
          href="/contacts"
          title="Contact us"
          size="size-m"
          textColor="text-white"
          background="blue"
          border="border-white"
        />
      </Nav>
    </header>
  );
};

export default Header;
