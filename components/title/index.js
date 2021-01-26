import styles from './style.module.css'

const Title = (title, ) => {
    return <h1 href={href} ref={ref}
      className={cn(styles.btn, {
        [styles[`btn--${background}`]]: background,
        [styles[`btn--${textColor}`]]: textColor,
        [styles[`btn--${size}`]]: size,
        [styles[`btn--${border}`]]: border,
      })}
    >
      {children}
      {title}
    </h1>
  
};

export default Title;
