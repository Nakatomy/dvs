import Link from 'next/link'
import styles from './style.module.css'
import cn from 'classnames'

const LinkComponent = ({children, href, title, className}) => {
    return <Link href={href}>
        <a className={cn(styles.link, className)}>{title} {children}</a>
        </Link>
}

export default LinkComponent