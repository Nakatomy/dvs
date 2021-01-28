import PropTypes from "prop-types";
import { i18n, withTranslation } from "i18n";
import {
  Header,
  Section,
  Container,
  Member,
  Title,
  Button,
  Partners,
  LinkComponent,
  Testimonial,
  Paragraph,
  Testimonials
} from "components";
import styles from "./style.module.css";
import euroviaLogo from "images/partners/partner-eurovia.jpg";
import partners from "configs/partners/partners";
import Image from "next/image";
import abstractWaves from 'images/abstract-waves.png';
import servicesImg from 'images/services-life-cycle.svg';
import restApiImg from 'images/solution-rest-api.svg';
import legalImg from 'images/legal-feather.jpg';
import lindnerLogo from 'images/partners/partner-lindner.svg'
import eurlerHermesLogo from 'images/partners/partner-eulerhermes.svg'
import bayernLbLogo from 'images/partners/partner-bayernlb.svg'
import porrLogo from 'images/partners/partner-porr.jpg'
import atradiusLogo from 'images/partners/partner-atradius.svg'
import globalTradeLogo from 'images/partners/partner-gtc.png'
const PartnersPage = ({ t }) => {
  return (
    <>
      <Header />
      <Section style="gradient">
        <Container width="full-width" margin="marginTop">
          <Title>Our Partners</Title>
          <div className={styles.partners__grid}>
            {partners.map((item) => {
              return (
                <LinkComponent href={item.href} className={styles.link}>
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

PartnersPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

//   Partners.propTypes = {
//     t: PropTypes.func.isRequired,
//   }

export default withTranslation("common")(PartnersPage);
