import styles from './style.module.css';
import cn from 'classnames';

const Testimonial = ({ children, logoSrc, logoAlt, logoWidth, author, authorTitle }) => {

    return (
        <div className={styles['testimonials-item']}>
            <div className={styles['testimonials__logo']}>
                <img src={logoSrc} width={logoWidth} className={styles.logo} alt={logoAlt} />
            </div>

            {children}

            <p className={styles['testimonials__author']}>{author}</p>
            <p className={styles['testimonials__authorTitle']}>{authorTitle}</p>
        </div>

    );
}

export default Testimonial