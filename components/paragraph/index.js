import styles from './style.module.css'
const Paragraph = ({ children, isTestimonial }) => {
    return (
        <p className={isTestimonial ? styles['testimonials__paragraph'] : styles.paragraph}>{children}</p>
    );
}

export default Paragraph