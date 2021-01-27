import styles from './style.module.css';
import cn from 'classnames';

const ImageComponent = ({ className, src, alt, width, height, imgType }) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={cn(styles.image, className, { [styles[`image--${imgType}`]]: imgType })}
		/>
	);
};

export default ImageComponent;
