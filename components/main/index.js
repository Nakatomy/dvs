
import styles from './style.module.css'
import cn from 'classnames'



const Main = ({ children }) => {
    return <main className= {styles.content}>
            {children}
        </main> 
}

export default Main

