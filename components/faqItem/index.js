import styles from './style.module.css';
import Collapsible from 'react-collapsible';
import cn from 'classnames'

const FaqItem = ({ title, children }) => {
    return (
        <>
            <Collapsible
                className={styles.faq}
                openedClassName={cn(styles.faq, styles.active)}
                triggerClassName={styles.faqTitle}
                triggerOpenedClassName={cn(styles.faqTitle, styles.active)}
                triggerTagName="button"
                contentInnerClassName={cn(styles.faqContent, styles.active)}
                trigger={title}
                transitionTime={300}
                easing="ease-out"
            >
                {children}
            </Collapsible>
        </>
    )
}

export default FaqItem