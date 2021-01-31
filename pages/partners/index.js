import {
  Header,
  Section,
  Container,
  Title,
  LinkComponent,
  Testimonials,
  Testimonial,
  Button,
  Spacer,
  Paragraph,
  Meta,
} from "components";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";

import bayernLbLogo from "images/partners/partner-bayernlb.svg";
import porrLogo from "images/partners/partner-porr.jpg";
import atradiusLogo from "images/partners/partner-atradius.svg";
import globalTradeLogo from "images/partners/partner-gtc.png";

import partners from "configs/partners/partners";

const PartnersPage = ({ t }) => {
  return (
    <>
      <Meta
        title={t("pageTitle") + " | Digital Vault Services"}
      />
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
        <Testimonial

          logoSrc={bayernLbLogo}
          logoAlt="BayernLB logo"
          logoWidth="184"
          author="Brigitte Schmidt"
          authorTitle="Head of Guarantees"
        >
          <Paragraph isTestimonial="true">
            {t("testimonialBayernLbParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialBayernLbParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialBayernLbParagraph3")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialBayernLbParagraph4")}
          </Paragraph>
        </Testimonial>

        <Testimonial

          logoSrc={porrLogo}
          logoAlt="Porr logo"
          logoWidth="100"
          author="Nicole Kerndler"
          authorTitle="Deputy Head of Bank Guarantee Management"
        >
          <Paragraph isTestimonial="true">
            {t("testimonialPorrParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialPorrParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialPorrParagraph3")}
          </Paragraph>
        </Testimonial>

        <Testimonial

          logoSrc={atradiusLogo}
          logoAlt="Atradius logo"
          logoWidth="184"
          author="Susanne Offermann-Tesch"
          authorTitle="Country Manager Bonding Germany"
        >
          <Paragraph isTestimonial="true">
            {t("testimonialAtradiusParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialAtradiusParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialAtradiusParagraph3")}
          </Paragraph>
        </Testimonial>

        <Testimonial

          logoSrc={globalTradeLogo}
          logoAlt="Global Trade Corporation logo"
          logoWidth="200"
          author="Nick Pachnev"
          authorTitle="Chief Executive Officer"
        >
          <Paragraph isTestimonial="true">
            {t("testimonialGlobalTradeCorpParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialGlobalTradeCorpParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialGlobalTradeCorpParagraph3")}
          </Paragraph>
        </Testimonial>
      </Testimonials>



      <Container width="full-width">
        <Button
          href="/"
          title={t("ButtonBackToHomePage")}
          size="size-l"
          textColor="text-white"
          background="blue"
          border="border-white"
        />
        <Spacer size="m" />
      </Container>
    </>
  );
};

PartnersPage.getInitialProps = async () => ({
  namespacesRequired: ["partners", "common"]
});

PartnersPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("partners")(PartnersPage);




