import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import { Section, Container, Testimonial, Paragraph, Spacer, Button } from "components";
import lindnerLogo from "images/partners/partner-lindner.svg";
import eurlerHermesLogo from "images/partners/partner-eulerhermes.svg";
import bayernLbLogo from "images/partners/partner-bayernlb.svg";
import porrLogo from "images/partners/partner-porr.jpg";
import atradiusLogo from "images/partners/partner-atradius.svg";
import globalTradeLogo from "images/partners/partner-gtc.png";
import React, { Children, useEffect, useState } from "react";



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

        {children}
      </Container>

      {/* 
      <Spacer size="s" />

      <Container display="flex" width="full-width">

      </Container> */}
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
