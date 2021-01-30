import {
  Header,
  Section,
  Container,
  Title,
  LinkComponent,
  Testimonials,
  Button,
  Spacer
} from "components";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";

import partners from "configs/partners/partners";

const PartnersPage = ({t}) => {
  return (
    <>
      <Header />
      <Section style="gradient">
        <Container width="full-width" margin="marginTop96">
          <Title>{t("pageTitle")}</Title>
          <div className={styles.partners__grid}>
            {partners.map((item) => {
              return (
                <LinkComponent key={item.id} href={item.href} className={styles.link} target="_blank"
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
       <Testimonials>
       <Container width="full-width">
        <Spacer size="s"/>
        <Button
            href="/"
            title={t("ButtonBackToHomePage")}
            size="size-l"
            textColor="text-white"
            background="blue"
            border="border-white"
          />
        </Container>
       </Testimonials>
    </>
  );
};

PartnersPage.getInitialProps = async () => ({
  namespacesRequired: [ "partners"]
});

PartnersPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("partners")(PartnersPage);
