import styles from "./style.module.css";
const Figure = ({ children, caption }) => {
  return (
    <figure className={styles.image}>
      {children}
      <figcaption className={styles.image__caption}>{caption}</figcaption>
    </figure>
  );
};

export default Figure;
