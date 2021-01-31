import styles from './style.module.css'
import cn from 'classnames'
const ParagraphComponent = ({ children }, props) => {
    return (
        <p className={cn(styles.paragraph, {
            [styles[`testimonials__paragraph`]]: props.isTestimonial
        })}>
            {children}</p>
    );
}

export default ParagraphComponent