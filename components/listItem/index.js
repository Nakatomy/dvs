import styles from './style.module.css'
import cn from "classnames";
const ListItem = ({children, paragraph, marker, display}) => {
  return (
    <>
      <li className={cn(styles["list-item"], {
      [styles[`list-item--${paragraph}`]]: paragraph,
      [styles[`list-item--${marker}`]]: marker,
      [styles[`list-item--${display}`]]: display
      })}>{children}</li>
    </>
  );
};

export default ListItem;
