import styles from './style.module.css';
import cn from 'classnames';
import { Nav } from 'components';
import PropTypes from 'prop-types'

const Header = ({ children }) => {

    return (<header className={cn(styles.nav, styles['nav--sticky'], styles['nav--display-none'])}>

        {children}
        <Nav />
    </header>
    )
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
//   }

export default Header
