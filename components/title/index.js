import styles from './style.module.css'

const Title = (title ) => {
  return <h2 className={styles.sectionTitle}>
    {title}
    </h2>
};

export default Title;
