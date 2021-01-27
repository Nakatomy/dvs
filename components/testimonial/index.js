import styles from './style.module.css';
import cn from 'classnames';

const Testimonial = ({ children, logoSrc, logoAlt, logoWidth, author, authorTitle }) => {
    return (
        <div className={styles['testimonials-item']}>
            <div className={styles['testimonials__logo']}>
                <img src={logoSrc} width={logoWidth} className={styles.logo} alt={logoAlt} />
            </div>

            {children}

            {/* <p className="testimonials__paragraph">
                    “Running a paper based manual guarantee process has always been a challenge, even more so
                    in
                    this Covid-19 environment. We believe that digital guarantees are the solution, they
                    increase
                    transparency, create efficiencies and minimize risk.
                    </p>
                <p className="testimonials__paragraph">
                    The innovation that Guarantee Vault brings will benefit all parties including applicants,
                    guarantors and beneficiaries”
                    </p> */}
            <p className={styles['testimonials__author']}>{author}</p>
            <p className={styles['testimonials__authorTitle']}>{authorTitle}</p>
        </div>

    );
}

export default Testimonial