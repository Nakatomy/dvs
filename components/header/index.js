import styles from './style.module.css';
import cn from 'classnames';
import { Nav } from 'components';

const Header = () => {
 
    return ( <header className={cn(styles.nav, styles['nav--sticky'], styles['nav--display-none'])}>
        <Nav/>
    </header>
    )
}

export default Header
