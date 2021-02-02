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
  Header,
  Nav,
  Heading,
  YoutubeVideo,
  Testimonials,
  Testimonial,
  Spacer
} from "components";
// import Link from "next/link";
import bayernLbLogo from "images/partners/partner-bayernlb.svg";
import porrLogo from "images/partners/partner-porr.jpg";
import atradiusLogo from "images/partners/partner-atradius.svg";
import globalTradeLogo from "images/partners/partner-gtc.png";
import abstractWaves from "images/abstract-waves.png";
import servicesEn from "images/services-life-cycle.svg";
import servicesDe from "images/services-life-cycle-de.svg";
import restApiImg from "images/solution-rest-api.svg";
import legalImg from "images/legal-feather.jpg";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function HomePage({ t }) {
  let LinkToSolution = Scroll.Link;
  let Element = Scroll.Element;


  // const [collapseOpen, setCollapseOpen] = useState(false);

  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
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

  const { i18n } = useTranslation();

  return (
    <div>
      <Meta
        title={t("leadTitle") + " | Digital Vault Services"}
        desc={t("solutionParagraph1")}
      />
      {nav}
      <Lead
        title={t("leadTitle")}
        subtitle={t("leadSubtitle")}
        statement={t("leadStatement")}
        primaryButtonName={t("leadPrimaryButtonName")}>

        <LinkToSolution to="solution"
          style={{
            borderRadius: "32px",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            lineHeight: "24px",
            width: "max-content",
            textDecoration: "none",
            color: "#ffffff",
            border: "none",
            opacity: ".5",
            transition: "opacity ease-in 0.3s",
            marginRight: "24px",
            marginBottom: "24px",
            padding: "20px 40px"
          }}
          spy={true} smooth={true} duration={500}>
          {t("leadSecondaryButtonName")}
        </LinkToSolution>
      </Lead>
      <Partners title={t("partnersTitle")} />
      <Element name="solution">
        <Section style="gradient">

          <Container display="grid" width="full-width" height="minHeight">
            <GridItem>
              <ImageComponent
                src={abstractWaves}
                alt="Asbtract waves"
                width="921"
                height="647"
              />
            </GridItem>
            <GridItem>
              <Title>{t("solutionTitle")}</Title>
              <Paragraph>{t("solutionParagraph1")}</Paragraph>
              <Paragraph>{t("solutionParagraph2")}</Paragraph>
              <Paragraph>{t("solutionParagraph3")}</Paragraph>
              <ButtonWrapper>
                <Button
                  href="/solution"
                  title={t("ButtonNameMore")}
                  size="size-l"
                  textColor="text-blue"
                  border="border-blue"
                />
              </ButtonWrapper>
            </GridItem>
          </Container>

        </Section>
      </Element>
      <Testimonials>


        <Testimonial
          display={showMe ? "grid" : "none"}
          logoSrc={bayernLbLogo}
          logoAlt="BayernLB logo"
          logoWidth="184"
          author="Brigitte Schmidt"
          authorTitle="Head of Guarantees"
        >
          <Paragraph isTestimonial={true}>
            {t("testimonialBayernLbParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialBayernLbParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialBayernLbParagraph3")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialBayernLbParagraph4")}
          </Paragraph>
        </Testimonial>

        <Testimonial
          display={showMe ? "grid" : "none"}
          logoSrc={porrLogo}
          logoAlt="Porr logo"
          logoWidth="100"
          author="Nicole Kerndler"
          authorTitle="Deputy Head of Bank Guarantee Management"
        >
          <Paragraph isTestimonial={true}>
            {t("testimonialPorrParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialPorrParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialPorrParagraph3")}
          </Paragraph>
        </Testimonial>

        <Testimonial
          display={showMe ? "grid" : "none"}
          logoSrc={atradiusLogo}
          logoAlt="Atradius logo"
          logoWidth="184"
          author="Susanne Offermann-Tesch"
          authorTitle="Country Manager Bonding Germany"
        >
          <Paragraph isTestimonial={true}>
            {t("testimonialAtradiusParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialAtradiusParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialAtradiusParagraph3")}
          </Paragraph>
        </Testimonial>

        <Testimonial
          display={showMe ? "grid" : "none"}
          logoSrc={globalTradeLogo}
          logoAlt="Global Trade Corporation logo"
          logoWidth="200"
          author="Nick Pachnev"
          authorTitle="Chief Executive Officer"
        >
          <Paragraph isTestimonial={true}>
            {t("testimonialGlobalTradeCorpParagraph1")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialGlobalTradeCorpParagraph2")}
          </Paragraph>
          <Paragraph isTestimonial={true}>
            {t("testimonialGlobalTradeCorpParagraph3")}
          </Paragraph>
        </Testimonial>

      </Testimonials>
      <Container display="flex" width="full-width">
        <Button
          title="Show More"
          size="size-l"
          textColor="text-blue"
          background="text-only"
          alignSelf="center"
          onClick={toggle}
          display={!showMe ? "flex" : "none"}
        >
          <ExpandMoreIcon />
        </Button>
        <Spacer size="m"></Spacer>
      </Container>

      <Section id="services" style="gradient">
        <Container display="grid" width="full-width" height="minHeight">
          <GridItem>
            <Title>{t("servicesTitle")}</Title>
            <ImageComponent
              src={i18n.language === "de" ? servicesDe : servicesEn}
              alt="Asbtract waves"
              imgType="mobile"
            />
            <Paragraph>{t("servicesParagraph")}</Paragraph>
            <ButtonWrapper>
              <Button
                href="/services"
                title={t("ButtonNameMore")}
                size="size-l"
                textColor="text-blue"
                border="border-blue"
              />
            </ButtonWrapper>
          </GridItem>
          <GridItem>
            <ImageComponent
              src={i18n.language === "de" ? servicesDe : servicesEn}
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
            <Title>{t("restApiTitle")}</Title>
            <ImageComponent
              src={restApiImg}
              alt="Guarantee life-cycles diagram"
              imgType="mobile"
            />
            <Paragraph>{t("restApiParagraph1")}</Paragraph>
            <Paragraph>{t("restApiParagraph2")}</Paragraph>
            <Paragraph>{t("restApiParagraph3")}</Paragraph>
            <Paragraph>
              {t("restApiParagraph4-1")}
              <span className="accent"> {t("restApiParagraph4-2")}</span>{" "}
              {t("restApiParagraph4-3")}
              <span className="accent"> {t("restApiParagraph4-4")}</span>
            </Paragraph>
            <ButtonWrapper>
              <Button
                href="/rest-api"
                title={t("ButtonNameMore")}
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
            <Title>{t("legalTitle")}</Title>
            <ImageComponent
              src={legalImg}
              alt="feather illustration"
              imgType="mobile"
            />
            <Paragraph>{t("legalParagraph1")}</Paragraph>
            <Paragraph><span className="accent">{t("legalParagraph2")}</span></Paragraph>
            <Paragraph>{t("legalParagraph3")}</Paragraph>
            <Paragraph>{t("legalParagraph4")}</Paragraph>
            <div>
              <LinkComponent
                href="https://www.cliffordchance.com/people_and_places/places/europe/germany.html"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                CLIFFORD CHANCE
              </LinkComponent>
              <Paragraph>
                Partnerschaft mit beschränkter Berufshaftung von Rechtsanwälten,
                Steuerberatern und Solicitors
              </Paragraph>
            </div>
            <div>
              <LinkComponent
                href="https://www.wolftheiss.com/countries/offices/austria/"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                WOLF THEISS
              </LinkComponent>
              <Paragraph>Rechtsanwälte GmbH & Co KG</Paragraph>
            </div>
            <div>
              <LinkComponent
                href="https://www.clydeco.com/en"
                type="paragraph"
                target="_blank"
                rel="noopener"
              >
                CLYDE & CO LLP
              </LinkComponent>
            </div>
            <ButtonWrapper>
              <Button
                href="/legal"
                title={t("ButtonNameMore")}
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
            <Title>{t("newsTitle")}</Title>
            <Heading>{t("newsSubtitle")}</Heading>
            <Paragraph>{t("newsParagraph1")}</Paragraph>
            <Paragraph>{t("newsParagraph2-1")}<LinkComponent href="/contacts" color="blue">{t("newsParagraph2-2")}</LinkComponent></Paragraph>
          </GridItem>
        </Container>
      </Section>


      <form action="https://formspree.io/f/xvovyzvl" method="POST" redirect="/solution">
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>

    </div>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomePage);
