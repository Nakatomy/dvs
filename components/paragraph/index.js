import styles from './style.module.css'
import cn from 'classnames'
const ParagraphComponent = ({ children, align }, props) => {
    return (
        <p className={cn(styles.paragraph, {
            [styles[`testimonials__paragraph`]]: props.isTestimonial,
            [styles[`paragraph--${align}`]]: align,
        })}>
            {children}</p>
    );
}

export default ParagraphComponent