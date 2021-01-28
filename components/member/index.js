import styles from "./style.module.css";
const Member = ({ src, name, job }) => {
  return (
    <div className={styles.team__member}>
      <img
        className={styles["team__member-image"]}
        src={src}
        alt="Team member"
      />
      <div className={styles["team__member-information"]}>
        <h3 className={styles["team__member-name"]}>{name}</h3>
        <p className={styles["team__member-job"]}>{job}</p>
      </div>
    </div>
  );
};

export default Member;
