import styles from './style.module.css'
const Paragraph = ({children}) => {
    return <p className={styles.paragraph}>{children}</p>
}

export default Paragraph