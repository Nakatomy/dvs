import Link from 'next/link'
import styles from './style.module.css'
import cn from 'classnames'

const LinkComponent = ({href, title, className}) => {
    return <Link href={href}>
        <a  className={cn(styles.link, className)}>{title} </a>
        </Link>
}

export default LinkComponent