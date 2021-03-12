import styles from './style.module.css'
import cn from 'classnames'
const ParagraphComponent = ({ children, align, coverParagraph, fontStyle, fontWeight, margin }, props) => {
    return (
        <p className={cn(styles.paragraph, {
            [styles[`testimonials__paragraph`]]: props.isTestimonial,
            [styles[`paragraph--${align}`]]: align,
            [styles[`paragraph--${fontStyle}`]]: fontStyle,
            [styles[`paragraph--${fontWeight}`]]: fontWeight,
            [styles[`paragraph--${margin}`]]: margin,
            [styles.coverParagraphBackground]: coverParagraph
        })}>
            {children}</p>
    );
}

export default ParagraphComponent