import styles from "./style.module.css";

const Heading = ({ children }) => {
  return <h3 className={styles.heading}>{children}</h3>;
};

export default Heading
