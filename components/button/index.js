import styles from "./style.module.css";
import cn from "classnames";
import React from "react";

const Button = React.forwardRef(({ children, title, href, background, textColor, size, border, space, onClick }, ref) => {
  return (<a href={href} ref={ref} onClick={onClick}
    className={cn(styles.btn, {
      [styles[`btn--${background}`]]: background,
      [styles[`btn--${textColor}`]]: textColor,
      [styles[`btn--${size}`]]: size,
      [styles[`btn--${border}`]]: border,
      [styles[`btn--${space}`]]: space,
    })}
  >
    {children}
    {title}

  </a>
  );
});

export default Button;
