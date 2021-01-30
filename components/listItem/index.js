import styles from './style.module.css'
const ListItem = ({children}) => {
  return (
    <>
      <li className={styles["list-item"]}>{children}</li>
    </>
  );
};

export default ListItem;
