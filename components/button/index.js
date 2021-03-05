import styles from "./style.module.css";
import cn from "classnames";
import React from "react";

const Button = React.forwardRef(({ children, title, type, href, background, textColor, size, border, space, onClick, margin, display, alignSelf }, ref) => {
  return (<a href={href} ref={ref}  onClick={onClick}
    className={cn(styles.btn, {
      [styles[`btn--${background}`]]: background,
      [styles[`btn--${display}`]]: display,
      [styles[`btn--${textColor}`]]: textColor,
      [styles[`btn--${size}`]]: size,
      [styles[`btn--${border}`]]: border,
      [styles[`btn--${space}`]]: space,
      [styles[`btn--${margin}`]]: margin,
      [styles[`btn--${alignSelf}`]]: alignSelf,
      [styles[`btn--${type}`]]: type,
    })}
  >
    {title}
    {children}

  </a>
  );
});

export default Button;
