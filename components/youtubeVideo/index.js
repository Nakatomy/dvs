import styles from './style.module.css'
import cn from 'classnames'

const YoutubeVideo = ({ src, videoType }) => {
    return (
        <div
            className={cn(
                { [styles[`video--${videoType}`]]: videoType })}
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
        >
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src={src}
                frameBorder="0"
            />
        </div>
    );
};


export default YoutubeVideo