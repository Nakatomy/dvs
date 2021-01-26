import Image from 'next/image'
// import styles from './style.module.css'
// import cn from 'classnames'

const ImageComponent = ({ src, alt, width, height}) => {
    return <Image src={src} alt={alt} width={width} height={height}>
        </Image>
}

export default ImageComponent