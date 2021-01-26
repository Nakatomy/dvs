import styles from "./style.module.css";
import cn from "classnames";
import React from "react";

const Button  = React.forwardRef(({ children, title, href, background, textColor, size, border }, ref) => {
return (<a href={href} ref={ref}
      className={cn(styles.btn, {
        [styles[`btn--${background}`]]: background,
        [styles[`btn--${textColor}`]]: textColor,
        [styles[`btn--${size}`]]: size,
        [styles[`btn--${border}`]]: border,
      })}
    >
      {children}
      {title}
    </a>
  );
});

export default Button
