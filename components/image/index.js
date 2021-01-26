import Image from 'next/image'
// import styles from './style.module.css'
// import cn from 'classnames'

const ImageComponent = ({ className, src, alt, width, height}) => {
    return <Image src={src} alt={alt} width={width} height={height} className={className}>
        </Image>
}

export default ImageComponent