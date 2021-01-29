import {
  Header,
  Section,
  Container,
  Title,
  LinkComponent,
  Testimonials
} from "components";
import styles from "./style.module.css";

import partners from "configs/partners/partners";

const PartnersPage = () => {
  return (
    <>
      <Header />
      <Section style="gradient">
        <Container width="full-width" margin="marginTop96">
          <Title>Our Partners</Title>
          <div className={styles.partners__grid}>
            {partners.map((item) => {
              return (
                <LinkComponent href={item.href} className={styles.link} target="_blank"
                rel="noopener">
                  <img
                    className={styles.logo}
                    alt={item.alt}
                    src={item.src}
                    width={item.widthLarge}
                    height={item.heightLarge}
                  />
                </LinkComponent>
              );
            })}
          </div>
        </Container>
        </Section>
       <Testimonials />
    </>
  );
};

export default PartnersPage
