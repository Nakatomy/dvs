import styles from "./style.module.css";
import { Container, ImageComponent } from "components";
import partners from "configs/partners/partners";

const Partners = () => {
  return (
    <section className={styles.partners}>
      <p className={styles.partners__text}>Our partners</p>
      <Container>
        <ul className={styles.partners__items}>
          {partners.map((item) => {
            return (
              <li key={item.id} className={styles["partners__item"]}>
                <ImageComponent className={styles.logo}
                  alt={item.alt}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Partners;
