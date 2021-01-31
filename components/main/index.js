
import styles from './style.module.css'
import cn from 'classnames'


const Main = ({ children,onClick }) => {
    return <main className={styles.content} onClick={onClick}>
        {children}
    </main>
}

export default Main

