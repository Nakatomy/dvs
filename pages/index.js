import {
  Meta,
  Container,
  Lead,
  Partners,
  Section,
  GridItem,
  ImageComponent,
  Title,
  Paragraph,
  Button,
  ButtonWrapper,
  LinkComponent,
  Testimonial,
  Header,
  Nav,
  Heading,
  YoutubeVideo
} from 'components';
import Link from "next/link"
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
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'
import { useState, useEffect } from "react";
import cn from "classnames";

function HomePage({ t }) {

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let nav;
  if (scrolled) {
    nav = (
      <Header className="nav">
        <Nav className="nav__container--sticky" />
      </Header>
    );
  }
  return (
    <div>
      <Meta
        title={t('leadTitle') + ' | Digital Vault Services'}
        desc={t('solutionParagraph1')}
      />
      {nav}
      <Lead
        title={t('leadTitle')}
        subtitle={t('leadSubtitle')}
        statement={t('leadStatement')}
        primaryButtonName={t('leadPrimaryButtonName')}
        secondaryButtonName={t('leadSecondaryButtonName')}
      />
      <Partners title={t('partnersTitle')} />
      <Section id="solution" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <ImageComponent src={abstractWaves} alt="Asbtract waves" width="921" height="647" />
          </GridItem>
          <GridItem>
            <Title>{t('solutionTitle')}</Title>
            <Paragraph>{t('solutionParagraph1')}</Paragraph>
            <Paragraph>{t('solutionParagraph2')}</Paragraph>
            <Paragraph>{t('solutionParagraph3')}</Paragraph>
            <ButtonWrapper>
              <Button
                href="./solution"
                title={t('ButtonNameMore')}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
        </Container>
      </Section>
      <Section id="testimonials">
        <Container display="grid" width="full-width" >
          <Testimonial logoSrc={lindnerLogo} logoAlt="Lindner logo" logoWidth="200" author="Marisa Schätz" authorTitle="Treasury Manager">
            <Paragraph isTestimonial="true"> {t('testimonialLindnerParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialLindnerParagraph2')}</Paragraph>
          </Testimonial>

          <Testimonial logoSrc={eurlerHermesLogo} logoAlt="Euler Hermes logo" logoWidth="200" author="Oliver Jacobs" authorTitle="Head of Bond Production">
            <Paragraph isTestimonial="true">{t('testimonialEulerHermesParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialEulerHermesParagraph2')}</Paragraph>
          </Testimonial>

          <Testimonial logoSrc={bayernLbLogo} logoAlt="BayernLB logo" logoWidth="184" author="Brigitte Schmidt" authorTitle="Head of Guarantees">
            <Paragraph isTestimonial="true">{t('testimonialBayernLbParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialBayernLbParagraph2')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialBayernLbParagraph3')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialBayernLbParagraph4')}</Paragraph>
          </Testimonial>

          <Testimonial logoSrc={porrLogo} logoAlt="Porr logo" logoWidth="100" author="Nicole Kerndler" authorTitle="Deputy Head of Bank Guarantee Management">
            <Paragraph isTestimonial="true">{t('testimonialPorrParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialPorrParagraph2')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialPorrParagraph3')}</Paragraph>
          </Testimonial>

          <Testimonial logoSrc={atradiusLogo} logoAlt="Atradius logo" logoWidth="184" author="Susanne Offermann-Tesch" authorTitle="Country Manager Bonding Germany">
            <Paragraph isTestimonial="true">{t('testimonialAtradiusParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialAtradiusParagraph2')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialAtradiusParagraph3')}</Paragraph>
          </Testimonial>

          <Testimonial logoSrc={globalTradeLogo} logoAlt="Global Trade Corporation logo" logoWidth="200" author="Nick Pachnev" authorTitle="Chief Executive Officer">
            <Paragraph isTestimonial="true">{t('testimonialGlobalTradeCorpParagraph1')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialGlobalTradeCorpParagraph2')}</Paragraph>
            <Paragraph isTestimonial="true">{t('testimonialGlobalTradeCorpParagraph')}</Paragraph>
          </Testimonial>

        </Container>

      </Section>
      <Section id="services" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>{t('servicesTitle')}</Title>
            <ImageComponent
              src={servicesImg}
              alt="Asbtract waves"
              imgType="mobile"
            />
            <Paragraph>
              {t('servicesParagraph')}
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="./services"
                title={t('ButtonNameMore')}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={servicesImg}
              alt="Asbtract waves"
              width="921"
              height="647"
              imgType="desktop"
            />
          </GridItem>
        </Container>
      </Section>
      <Section id="rest-api">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="desktop"
            />
          </GridItem>
          <GridItem>
            <Title>{t('restApiTitle')}</Title>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="mobile"
            />
            <Paragraph>{t('restApiParagraph1')}</Paragraph>
            <Paragraph>{t('restApiParagraph2')}</Paragraph>
            <Paragraph>{t('restApiParagraph3')}</Paragraph>
            <Paragraph>{t('restApiParagraph4')}</Paragraph>
            <ButtonWrapper>
              <Button
                href="/rest-api"
                title={t('ButtonNameMore')}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>

        </Container>
      </Section>
      <Section id="legal" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>{t('legalTitle')}</Title>
            <ImageComponent
              src={legalImg}
              alt="feather illustration"
              imgType="mobile"
            />
            <Paragraph>{t('legalParagraph1')}</Paragraph>
            <Paragraph>{t('legalParagraph2')}</Paragraph>
            <Paragraph>{t('legalParagraph3')}</Paragraph>
            <Paragraph>{t('legalParagraph4')}</Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.cliffordchance.com/people_and_places/places/europe/germany.html" type="paragraph" target="_blank" rel="noopener">CLIFFORD CHANCE</LinkComponent>
              <Paragraph>
                Partnerschaft mit beschränkter Berufshaftung von Rechtsanwälten, Steuerberatern und Solicitors
              </Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.wolftheiss.com/countries/offices/austria/" type="paragraph" target="_blank" rel="noopener">WOLF THEISS</LinkComponent>
              <Paragraph>Rechtsanwälte GmbH & Co KG</Paragraph>
            </Paragraph>
            <Paragraph>
              <LinkComponent href="https://www.clydeco.com/en" type="paragraph" target="_blank" rel="noopener">CLYDE & CO LLP</LinkComponent>
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="./legal"
                title={t('ButtonNameMore')}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={legalImg}
              alt="Feather illustration"
              imgType="desktop"
            />
          </GridItem>
        </Container>
      </Section>
      <Section id="news">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <YoutubeVideo src="https://www.youtube.com/embed/_X0rziclDpI" />
          </GridItem>
          <GridItem>
            <Title>{t('newsTitle')}</Title>
            <Heading>{t('newsSubtitle')}</Heading>
            <Paragraph>{t('newsParagraph1')}</Paragraph>
            <Paragraph>{t('newsParagraph2')}</Paragraph>
          </GridItem>

        </Container>
      </Section>
    </div>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(HomePage)
