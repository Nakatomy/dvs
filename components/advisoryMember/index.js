import styles from './style.module.css';
const AdvisoryMember = ({name, title, company, location}) => {
    return (
        <div className={styles["advisory-board__member"]}>
        <h2 className={styles["advisory-board__name"]}>{name}</h2>
        <p className={styles["advisory-board__title"]}>{title}</p>
        <p className={styles["advisory-board__company"]}>{company}</p>
        <p className={styles["advisory-board__location"]}>{location}</p>
    </div>
    )
}

export default AdvisoryMember