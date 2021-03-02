import Link from 'next/link'
import styles from './style.module.css'
import cn from 'classnames'

const LinkComponent = ({ children, href, title, className, type, target, rel, color, align, heading, display, fontW }) => {
    return <Link href={href}>
        <a target={target} rel={rel} className={cn(styles.link, className, {
            [styles[`link--${type}`]]: type,
            [styles[`link--${color}`]]: color,
            [styles[`link--${align}`]]: align,
            [styles[`link--${heading}`]]: heading,
            [styles[`link--${display}`]]: display,
            [styles[`link--${fontW}`]]: fontW
        }
        )}>{title} {children}</a>
    </Link>
}

export default LinkComponent