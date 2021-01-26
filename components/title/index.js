import styles from './style.module.css'

const Title = ({ children }) => {
  return (
    <h2 className={styles.sectionTitle}>
      {children}
    </h2>
  );
}

export default Title;
