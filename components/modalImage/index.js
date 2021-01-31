import styles from './style.module.css'
import cn from "classnames";
import ImageComponent from 'components/image';

const ModalImage = ({ isOpen, title, onClose, image }) => {
  return (
    <>
      <div className={cn(styles.modal,  isOpen ? styles["modal--opened"] : "")}>
        <div className={styles.modal__content}>
          <img
            className={styles.modal_image}
            src={image && image.src}
           
          />
          <p className={styles.modal__caption} title={title}></p>
          <button
            className={styles["modal__close-button"]}
            type="button"
            aria-label="Close"
            onClick={onClose}
           
          ></button>
          </div>
      </div>
    </>
  );
};

export default ModalImage
