import styles from "./style.module.css";
import navigation from "configs/navigation/navigation";
import { LinkComponent, Button } from "components";


const Menu = ({ className }) => {
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
    </ul>
  );
};

export default Menu;
