import styles from './style.module.css';
import cn from 'classnames';

const Section = ({ children, style }) => {
    return <section className={cn(styles.section, { [styles[`section--bg-${style}`]]: style })}>{children}</section>;
};

export default Section;
