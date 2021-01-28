import Link from 'next/link'
import styles from './style.module.css'
import cn from 'classnames'

const LinkComponent = ({ children, href, title, className, type, target, rel }) => {
    return <Link href={href}>
        <a target={target} rel={rel} className={cn(styles.link, className, {
            [styles[`link--${type}`]]: type
        }
        )}>{title} {children}</a>
    </Link>
}

export default LinkComponent