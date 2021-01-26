import styles from "./style.module.css";

const Heading = ({ title }) => {
  return <h3 className={styles.heading}>{title}</h3>;
};

export default Heading
