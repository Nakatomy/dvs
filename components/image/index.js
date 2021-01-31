import styles from "./style.module.css";
import cn from "classnames";

const ImageComponent = ({
  className,
  src,
  alt,
  width,
  height,
  imgType,
  margin,
  onClick,
}) => {
	
  return (
    <img
      onClick={onClick}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(styles.image, className, {
        [styles[`image--${imgType}`]]: imgType,
        [styles[`image--${margin}`]]: margin,
      })}
    />
  );
};

export default ImageComponent;
