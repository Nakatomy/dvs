import styles from './style.module.css'
import cn from 'classnames'
const ParagraphComponent = ({ children, align, coverParagraph }, props) => {
    return (
        <p className={cn(styles.paragraph, {
            [styles[`testimonials__paragraph`]]: props.isTestimonial,
            [styles[`paragraph--${align}`]]: align,
            [styles.coverParagraphBackground]: coverParagraph
        })}>
            {children}</p>
    );
}

export default ParagraphComponent