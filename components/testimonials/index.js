import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import { Section, Container, Testimonial, Paragraph, Spacer, Button } from "components";
import lindnerLogo from "images/partners/partner-lindner.svg";
import eurlerHermesLogo from "images/partners/partner-eulerhermes.svg";
import bayernLbLogo from "images/partners/partner-bayernlb.svg";
import porrLogo from "images/partners/partner-porr.jpg";
import atradiusLogo from "images/partners/partner-atradius.svg";
import globalTradeLogo from "images/partners/partner-gtc.png";

const Testimonials = ({ t, children }) => {
  return (
    <Section>
      <Container display="grid" width="full-width">
        <Testimonial
          logoSrc={lindnerLogo}
          logoAlt="Lindner logo"
          logoWidth="200"
          author="Marisa Schätz"
          authorTitle="Treasury Manager"
        >
          <Paragraph isTestimonial="true">
            {" "}
            {t("testimonialLindnerParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialLindnerParagraph2")}
          </Paragraph>
        </Testimonial>

        <Testimonial
          logoSrc={eurlerHermesLogo}
          logoAlt="Euler Hermes logo"
          logoWidth="200"
          author="Oliver Jacobs"
          authorTitle="Head of Bond Production"
        >
          <Paragraph isTestimonial="true">
            {t("testimonialEulerHermesParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial="true">
            {t("testimonialEulerHermesParagraph2")}
          </Paragraph>
        </Testimonial>
      </Container>
      <Container display="grid" width="full-width">
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
            {t("testimonialGlobalTradeCorpParagraph")}
          </Paragraph>
        </Testimonial>
      </Container>
      {children}
    </Section>
    
  );
};

Testimonials.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Testimonials.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Testimonials);
